{
  description = "Flake file for website build";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-24.05";
  };

  outputs =
    { self, nixpkgs }:
    let
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forEachSystem = nixpkgs.lib.genAttrs supportedSystems;
      pkgsFor = forEachSystem (system: import nixpkgs { inherit system; });
    in
    rec {
      formatter = forEachSystem (system: pkgsFor.${system}.nixpkgs-fmt);

      devShells = forEachSystem (system: {
        default = pkgsFor.${system}.mkShellNoCC {
          packages = with pkgsFor.${system}.buildPackages; [
            yarn       # 1.22.22
            nodejs_20  # 20.15.1
            git        # 2.44.1
            openssh    # 9.7p1
            ghp-import # 2.1.0
          ];
        };
      });
    };
}
