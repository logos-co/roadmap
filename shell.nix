let
  lock = builtins.fromJSON (builtins.readFile ./flake.lock);
  nixpkgs = lock.nodes.nixpkgs.locked;
  pkgs = import
    (builtins.fetchTarball {
      inherit (nixpkgs) url;
      sha256 = nixpkgs.narHash;
    })
    { };
in
pkgs.mkShellNoCC {
  packages = with pkgs.buildPackages; [ nodejs_22 ];
}
