---
title: "Testnet version 0.2.1: Node Operator Guide"
tags: testnet
---

## Release set v0.2.1

The following package versions are pinned for release set `v0.2.1`.

> **Note:** The release-set version identifies the testnet version.
> Individual package versions are pinned independently and do not need to match the release-set version.

### Node operator guide

| Package | Version |
|---------|---------|
| `logos-blockchain-module` | `0.2.3` |
| `logos-storage-module` | `2.1.2` |
| `logos-delivery-module` | `0.2.1` |
| `logosctl` | `0.2.3-rc.1` |

### Other release packages

| Package | Version |
|---------|---------|
| `lez-explorer-ui` | `1.1.1` |
| `lez-indexer-module` | `1.1.1` |
| `logos-execution-zone-module` | `1.1.0` |
| `logos-execution-zone-wallet-ui` | `1.1.0` |
| `logos-blockchain-ui` | `0.2.1` |
| `logos-chat-module` | `0.2.1` |
| `logos-chat-ui` | `0.2.1` |
| `logos-storage-ui` | `2.1.0` |
| `logos-basecamp` | `0.2.3` |

## Overview

Run one Logos node through one `logosctl` session.
`logosctl` starts and controls the node and manages its modules within that session.

This guide starts these modules:

| Module | Package | Public ports |
|--------|---------|--------------|
| Blockchain | `blockchain_module` | `3000/udp`, configured Blend UDP port |
| Storage | `storage_module` | `8090/udp`, `8091/tcp` |
| Delivery | `delivery_module` | `9000/udp`, `30303/tcp` |


Commands assume a Linux host and these default paths:

```text
/usr/local/bin/logosctl
/var/lib/logos-node/.logosctl
/var/lib/logos-node
```

Replace `<public-ip>` with the public IPv4 address of the node.
Run the module commands as the same OS user that owns `/var/lib/logos-node`.

## Install logosctl

Install `curl`, `jq`, `tar`, and FUSE support for AppImage binaries.

```sh
apt-get update
apt-get install -y curl jq tar fuse3
```

Download the published x86_64 Linux release archive:

```sh
curl -fL \
  -o logosctl-x86_64-linux.tar.gz \
  https://github.com/logos-co/logos-logoscore-cli/releases/download/0.2.3-rc.1/logosctl-x86_64-linux.tar.gz
```

Verify and extract the archive:

```sh
sha256sum --check <<'EOF'
baa6e24522833c6b6e33146a9d44f7428660e465158be2d723575f62409ad851  logosctl-x86_64-linux.tar.gz
EOF
tar -xzf logosctl-x86_64-linux.tar.gz
```

Verify the extracted AppImage:

```sh
sha256sum --check <<'EOF'
3ee96869d6a873cddd19c05eaa86d258e156a69635b10811b77cda149899dd1e  logosctl-x86_64.AppImage
EOF
```

Install it as `logosctl`:

```sh
install -m755 logosctl-x86_64.AppImage /usr/local/bin/logosctl
```

Verify:

```sh
logosctl --version
```

## Prepare The Host

Create the Logos node user, `logosctl` session directory, and module data directories:

```sh
useradd --system --home /var/lib/logos-node --create-home --shell /usr/sbin/nologin logos
mkdir -p /var/lib/logos-node/.logosctl
mkdir -p /var/lib/logos-node/blockchain-module-testnet
mkdir -p /var/lib/logos-node/storage-module
mkdir -p /var/lib/logos-node/delivery-module
chown -R logos:logos /var/lib/logos-node
chmod 700 /var/lib/logos-node/.logosctl
```

Open these ports on the host firewall:

```text
3000/udp
<YOUR_BLEND_PORT>/udp
8090/udp
8091/tcp
9000/udp
30303/tcp
```

`<YOUR_BLEND_PORT>/udp` is required when joining Blend.
Obtain it from `blend.core.backend.listening_address` in the generated blockchain configuration.

## Install Modules

As root, open a shell as the `logos` user.
Setting `HOME` selects the default `/var/lib/logos-node/.logosctl` session:

```sh
runuser -u logos -- env HOME=/var/lib/logos-node bash
```

Initialize the session with the default daemon configuration:

```sh
printf '{}\n' | logosctl daemon config set -
```

Temporarily start the Logos node in detached mode so its bundled package-management modules are available:

```sh
logosctl daemon start --detach
logosctl daemon status
```

Refresh the official module catalog:

```sh
logosctl catalog refresh
```

Install the pinned module packages.
Each root hash selects the exact published package identity for its pinned version:

```sh
logosctl package install blockchain_module \
  --version 0.2.3 \
  --root-hash d7342b2d8a7e59fa312d4fa321340e7893b1b92bb16d4e298d4b2fc493edb618 \
  --yes
logosctl package install storage_module \
  --version 2.1.2 \
  --root-hash 19b11b153748c30665608c5527776ba2be74f7764481a11d33f687098764b740 \
  --yes
logosctl package install delivery_module \
  --version 0.2.1 \
  --root-hash 0bccd85b4702c01a2c227df8aa55b3f5159a9fe009d57ae8bb8b3a7c20dfcbbe \
  --yes
```

Installing a package does not load it into the running Logos node.
Check the installed core packages:

```sh
logosctl package ls --type core
```

The output must list:

```text
blockchain_module 0.2.3
delivery_module 0.2.1
storage_module 2.1.2
```

Stop the Logos node after installation.
The next section starts it for normal operation:

```sh
logosctl daemon stop
```

## Start The Logos Node

Continue in the `logos` user shell from the previous section.
If it was closed, reopen it:

```sh
runuser -u logos -- env HOME=/var/lib/logos-node bash
```

Set the Logos node working directory:

```sh
cd /var/lib/logos-node
```

Run the node controls, module configuration, module calls, and health checks from this shell.
This keeps the Logos node and `logosctl` client on the same `/var/lib/logos-node/.logosctl` session and ensures generated files belong to `logos`.

For a manual foreground run, start the Logos node with:

```sh
logosctl daemon start
```

Keep that terminal open.
Use another `logos` user shell for module commands.

For a temporary detached run, use:

```sh
logosctl daemon start --detach
```

The detached command returns after the Logos node is ready to accept commands.
For unattended operation,
prefer a systemd service over a manually started daemon.

Check:

```sh
logosctl daemon status
```

## Blockchain

Create the blockchain peer file:

```sh
cd /var/lib/logos-node/blockchain-module-testnet
cat > peers.json <<EOF
{
  "initial_peers": [
    "/ip4/65.109.51.37/udp/3000/quic-v1/p2p/12D3KooWFrouXfmrR4nsLMtE7wu15DoMJ6VtoUtHinREZCvbWHar",
    "/ip4/65.109.51.37/udp/3001/quic-v1/p2p/12D3KooWJRGau8M1rjT7R5e4YYsgdFhsMX35nRDtMwCDjxQkXAHz",
    "/ip4/65.109.51.37/udp/3002/quic-v1/p2p/12D3KooWQXJavMDTRscjauFSgVAB1VLB6Rzpy2uY5SU9Tk7927tb",
    "/ip4/65.109.51.37/udp/50001/quic-v1/p2p/12D3KooWSQc7CcGtvWDPF1yCbBthFnQjprfCVHmfmNDUrSmqQsU1"
  ]
}
EOF
```

The `blockchain-module-testnet` directory is a setup workspace for the peer file
and related blockchain commands.
If an existing node was created with the older `blockchain-module-devnet`
directory name, do not rename a running node just to match this guide.
Keep the existing path or update all local scripts and services consistently
during a planned reprovision.

Load the module and generate `user_config.yaml`:

```sh
logosctl module load blockchain_module
cd /var/lib/logos-node/blockchain-module-testnet
logosctl call blockchain_module generate_user_config @peers.json
chmod 600 /var/lib/logos-node/user_config.yaml /var/lib/logos-node/keystore.yaml
```

`generate_user_config` writes `user_config.yaml` in the Logos node working directory.
With the service layout in this guide, that path is `/var/lib/logos-node/user_config.yaml`.

The generated `user_config.yaml` contains node-local wallet and key-management configuration.
Keep it private, restrict file permissions, and do not publish it.
Generate a fresh file for each node.

Start the module.
The second argument is intentionally an empty string; the blockchain module no longer requires a downloaded `deployment.yaml` file:

```sh
logosctl call blockchain_module start /var/lib/logos-node/user_config.yaml ""
```

Check:

```sh
logosctl call blockchain_module get_cryptarchia_info | jq -r .result.value | jq .
```

### Blockchain Config

Operator-facing fields in `user_config.yaml`:

| Field | Purpose | Guidance |
|-------|---------|----------|
| `network.initial_peers` | Bootstrap peers | Use the current network document |
| `network.port` | Public UDP P2P port | Keep aligned with firewall/NAT, normally `3000` |
| `api.listen_address` | Local API bind | Keep private, normally `127.0.0.1:8080` |
| `state.base_folder` | State directory | Use a persistent local path |
| logger filters | Log verbosity | Use `INFO` for unattended operation |


### Joining Blend Network

Request funds to both the BlendZk and SdpFunding keys from your `keystore.yaml` from the [faucet](https://testnet.blockchain.logos.co/web/faucet/)

The public keys and note IDs below are examples.
Use the corresponding values from your own `keystore.yaml` and wallet responses when running these commands.

```bash
# keystore.yaml
public_keys:
  ...
  BlendZk: 13cccf99f90fd78c2134891ce3c1afce0605753a7694b9d56678d63a8d471820
  ...
  SdpFunding: 91d381a87e05d46fc9bc95246273b6930290506f0589ad039444decd3c24940e
  ...
secret_keys:
  ...
```

Wait until you receive funds to both addresses, you can check the balance of your accounts with the following commands, you may need to repeat the faucet requests since only one drip is allowed per block.

```bash
# check BlendZk key has received funds
logosctl call blockchain_module wallet_get_notes 13cccf99f90fd78c2134891ce3c1afce0605753a7694b9d56678d63a8d471820 "" \
  | jq -r .result.value | jq .notes
# > [
# >   {
# >     "id": "de5f5b6d2baac23bf562d89676ebd304e8d6e6f67afc22f378b5dabf164d142d",
# >     "value": "1000"
# >   }
# > ]


# check SdpFunding key has received funds
logosctl call blockchain_module wallet_get_notes 91d381a87e05d46fc9bc95246273b6930290506f0589ad039444decd3c24940e "" \
  | jq -r .result.value | jq .notes
# > [
# >   {
# >     "id": "47831c89a3609a7bd38755b2d2da7e2dfb63bef8515a8b8ad82c8a61b7b9a006",
# >     "value": "1000"
# >   }
# > ]
```

Join the blend network by locking one of the notes held by your `BlendZk` key.

- `<YOUR_IP>`: must be your external ip address
- `<YOUR_BLEND_PORT>`: Retrieve your configured blend port from the user_config.yaml (`blend.core.backend.listening_address`), note that if you do port-mapping, the external mapped port must be used.
- `<BLEND_ZK_NOTE_ID>`: the note id of one of the notes held by your BlendZk key, as queried above.

Before joining:

- open `<YOUR_BLEND_PORT>/udp` on the public host firewall;
- if the node is behind NAT, forward that external UDP port to the port in `blend.core.backend.listening_address`;

The submitted locator must use the external address and port that other nodes can dial.
The Blend core listener starts only after the node's declaration becomes active.
Configure the firewall and NAT forwarding before joining.
Verify the local listener and public reachability after activation.

```sh
logosctl call blockchain_module blend_join_as_core_node \
  "/ip4/<YOUR_IP>/udp/<YOUR_BLEND_PORT>/quic-v1" \
  "<BLEND_ZK_NOTE_ID>"

# successful call will return the declaration id:
# > {"method":"blend_join_as_core_node","module":"blockchain_module","result":{"error":null,"success":true,"value":"2691821bd61394cc18939626de4e9231c699e8ddefd1ebf9e6c35b32229bdc65"},"status":"ok"}
```

Verify the declaration was accepted on chain by polling `/mantle/sdp/declarations`, looking for your declaration

```
curl http://127.0.0.1:8080/mantle/sdp/declarations | jq . 
# > [
# >   {
# >     "service_type": "BN",
# >     "provider_id": "35d60d973560b8344f83dc266a3fe89e35a3dcf9959c492d0a7a0b7a85c5d2ce",
# >     "locked_note_id": "<BLEND_ZK_NOTE_ID>",
# >     "locators": [
# >       "/ip4/<YOUR_IP>/udp/<YOUR_BLEND_PORT>/quic-v1"
# >     ],
# >     "zk_id": "13cccf99f90fd78c2134891ce3c1afce0605753a7694b9d56678d63a8d471820",
# >     "created": 1,
# >     "active": 3,
# >     "withdraw_at": null,
# >     "nonce": 0
# >   }
# > ]
```

`service_type: BN` identifies it as a Blend node declaration, `zk_id` is your BlendZk public key, and `provider_id` is your BlendSigning key.

When in a block, the active epoch should be two epochs in the future (`active == created + 2`), as that's when it will become active


## Storage

Create the storage config:

```sh
cd /var/lib/logos-node/storage-module
mkdir -p storage-data
cat > config.json <<EOF
{
  "data-dir": "./storage-data",
  "log-level": "INFO",
  "listen-ip": "0.0.0.0",
  "listen-port": 8091,
  "disc-port": 8090,
  "network": "logos.test"
}
EOF
```

Fields:

| Field | Purpose |
|-------|---------|
| `data-dir` | Storage repository path |
| `log-level` | Log verbosity |
| `listen-ip` | Local TCP bind address |
| `listen-port` | Public TCP libp2p port |
| `disc-port` | Public UDP discovery port |
| `network` | Storage network preset |

The `logos.test` network preset provides the storage bootstrap settings.

Use fixed `listen-port` and `disc-port`.
Do not leave public nodes on random ports.

Start storage without mix:

```sh
cd /var/lib/logos-node/storage-module
logosctl module load storage_module
logosctl call storage_module init @config.json
logosctl call storage_module start
```

Check:

```sh
logosctl call storage_module space
```

### Optional: Mix Support And Private Queries

To run storage with mix support,
generate the storage config from the current published mix bootstrap data.
This replaces the basic `config.json` above.
The script accepts an optional storage data directory as its first argument.
Without one, it uses `logos-storage-data` under the current directory.

```sh
cd /var/lib/logos-node/storage-module
cat > make-mix-storage-config.sh <<'EOF'
#!/usr/bin/env bash
set -e

data_dir=${1:-"${PWD}/logos-storage-data"}
udp_spr_json=$(curl -s https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/udp-sprs.json)
tcp_spr_json=$(curl -s https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/tcp-sprs.json)
mp_json=$(curl -s https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/mix-pool.json | jq -c 'tostring')

cat <<JSON | jq .
{
  "log-level": "INFO;trace:libp2p,mix",
  "mix-enabled": true,
  "listen-port": 8091,
  "disc-port": 8090,
  "bootstrap-node": $udp_spr_json,
  "dht-mix-proxy": $tcp_spr_json,
  "data-dir": "${data_dir}",
  "mix-pool-json": ${mp_json}
}
JSON

EOF

chmod 755 make-mix-storage-config.sh
./make-mix-storage-config.sh > config.json
```

Start storage with that config:

```sh
cd /var/lib/logos-node/storage-module
logosctl module load storage_module
logosctl call storage_module init @config.json
logosctl call storage_module start
logosctl call storage_module togglePrivateQueries true
```

After startup, allow the node time to populate routing state.
If the first private query fails with a manifest lookup error,
retry once after a short warm-up period.

Privately query a known test object:

```sh
logosctl call storage_module downloadToUrl zDvZRwzkzrrYB6sS1rRpRLt4gBhc1pWoyTSjkfszfmj1seaYYLCZ /var/lib/logos-node/storage-module/farewell-to-westphalia.pdf false 65536
```

## Delivery

Create the kernel-only delivery config for a node operator:

Replace `<public-ip>` before running this command.

```sh
cd /var/lib/logos-node/delivery-module
cat > config.json <<EOF
{
  "entryLayer": "kernel",
  "kernelConf": {
    "preset": "logos.test",
    "relay": true,
    "logLevel": "INFO",
    "tcpPort": 30303,
    "discv5UdpPort": 9000,
    "discv5Discovery": true,
    "nat": "extip:<public-ip>"
  }
}
EOF
```

Fields:

| Field | Purpose |
|-------|---------|
| `entryLayer` | Delivery stack layer; use `kernel` for a node-operator service |
| `kernelConf` | Kernel node configuration |
| `kernelConf.preset` | Network preset |
| `kernelConf.relay` | Enable the Relay protocol |
| `kernelConf.logLevel` | Log verbosity |
| `kernelConf.tcpPort` | Public TCP P2P port |
| `kernelConf.discv5UdpPort` | Public UDP discovery port |
| `kernelConf.discv5Discovery` | Enable discv5 discovery |
| `kernelConf.nat` | Public IP advertisement mode |

The kernel-only entry layer intentionally omits the messaging client and reliable channel manager.
Calls to `send`, `subscribe`, and `channel*` are unavailable, while `getNodeInfo`, `storeQuery`, and metrics remain available.

The `logos.test` preset provides the delivery network bootstrap settings.
`extMultiaddrs` is usually not needed when `nat` advertises the public address.

Use fixed `tcpPort` and `discv5UdpPort`.
Do not leave public nodes on random ports.

Start:

```sh
cd /var/lib/logos-node/delivery-module
logosctl module load delivery_module
logosctl call delivery_module createNode @config.json
logosctl call delivery_module start
```

Check:

```sh
logosctl call delivery_module getAvailableNodeInfoIDs
logosctl call delivery_module getNodeInfo Version
logosctl call delivery_module getNodeInfo MyMultiaddresses
```

## Health Checks

Check the Logos node and loaded modules:

```sh
logosctl daemon status --json | jq .
logosctl module ls --loaded
```

Expected modules:

```text
blockchain_module
capability_module
delivery_module
package_downloader
package_manager
storage_module
```

Check listeners:

```sh
ss -lntup | egrep '(:3000|:8090|:8091|:9000|:30303|:8080)'
```

Expected:

```text
0.0.0.0:3000/udp
0.0.0.0:8090/udp
0.0.0.0:8091/tcp
0.0.0.0:9000/udp
0.0.0.0:30303/tcp
127.0.0.1:8080/tcp
```

Check blockchain:

```sh
logosctl call blockchain_module get_cryptarchia_info | jq -r .result.value | jq .
```

Check storage:

```sh
logosctl call storage_module space
```

Check delivery:

```sh
logosctl call delivery_module getNodeInfo MyMultiaddresses
```

Check the configured Blend UDP listener:

```sh
ss -lun
```

Confirm that the local UDP port from `blend.core.backend.listening_address` is present.
If the public Blend port differs, also confirm that NAT forwards `<YOUR_BLEND_PORT>/udp` to this local port.

## Optional: Systemd

For unattended operation, use systemd.

Recommended pattern:

- one service for the Logos node process started and controlled by `logosctl`;
- one separate bootstrap service or script for module startup;
- journald output with retention limits.

Do not start modules from `ExecStartPost` in `logos-node.service`.
If module startup is slow or returns an error, systemd may kill the daemon.

Create `/etc/systemd/system/logos-node.service`:

```ini
[Unit]
Description=Logos node managed by logosctl
After=network-online.target
Wants=network-online.target

[Service]
User=logos
Group=logos
WorkingDirectory=/var/lib/logos-node
Environment=HOME=/var/lib/logos-node
Environment=LOGOSCTL_CONFIG_DIR=/var/lib/logos-node/.logosctl
ExecStart=/usr/local/bin/logosctl daemon start
ExecStop=/usr/local/bin/logosctl daemon stop
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

The separate bootstrap script should:

1. wait for `logosctl daemon status`;
2. load and start blockchain;
3. load and start storage;
4. load and start delivery;
5. tolerate already-loaded modules and slow module starts.

Cap journal usage:

```ini
[Journal]
SystemMaxUse=200M
SystemKeepFree=1G
MaxRetentionSec=7day
MaxFileSec=1day
```

Prefer `INFO` logs for unattended operation.
Use `DEBUG` only for short troubleshooting windows.
