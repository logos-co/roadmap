---
title: "Testnet version 0.2: Node Operator Guide"
tags: testnet
---

## Overview

Run one Logos node with one `logoscore` daemon and one shared modules directory.

This guide starts these modules:

| Module | Package | Public ports |
|--------|---------|--------------|
| Blockchain | `blockchain_module` | `3000/udp` |
| Storage | `storage_module` | `8090/udp`, `8091/tcp` |
| Delivery | `delivery_module` | `9000/udp`, `30303/tcp` |


Commands assume a Linux host and these default paths:

```text
/usr/local/bin/logoscore
/usr/local/bin/lgpd
/usr/local/bin/lgpm
/opt/logos-node/modules
/opt/logos-node/packages
/var/lib/logos-node
```

Replace `<public-ip>` with the public IPv4 address of the node.
Run the module commands as the same OS user that owns `/var/lib/logos-node`.

## Install Runtime Tools

Install `curl`, `jq`, and FUSE support for AppImage binaries.

```sh
apt-get update
apt-get install -y curl jq wget fuse3
```

Download the Linux release assets from each repository's Releases page:

| Tool | Repository |
|------|------------|
| `logoscore` | `https://github.com/logos-co/logos-logoscore-cli` |
| `lgpd` | `https://github.com/logos-co/logos-package-downloader` |
| `lgpm` | `https://github.com/logos-co/logos-package-manager` |

For x86_64 Linux, these were the current download URLs on 2026-06-25:

```sh
wget https://github.com/logos-co/logos-logoscore-cli/releases/download/v3/logoscore-x86_64-linux.AppImage
wget https://github.com/logos-co/logos-package-downloader/releases/download/pre-release-99d70db-7/lgpd-x86_64-linux.tar.gz
wget https://github.com/logos-co/logos-package-manager/releases/download/pre-release-05b2cf8-7/lgpm-x86_64-linux.tar.gz
```

Install the tools under `/usr/local/bin` with the expected command names:

```sh
install -m755 logoscore-x86_64-linux.AppImage /usr/local/bin/logoscore
tar -xzf lgpd-x86_64-linux.tar.gz
install -m755 lgpd-x86_64.AppImage /usr/local/bin/lgpd
tar -xzf lgpm-x86_64-linux.tar.gz
install -m755 lgpm-x86_64.AppImage /usr/local/bin/lgpm
```

Verify:

```sh
logoscore --help
lgpd --help
lgpm --help
```

## Prepare The Host

Create the runtime user and directories:

```sh
useradd --system --home /var/lib/logos-node --create-home --shell /usr/sbin/nologin logos
mkdir -p /opt/logos-node/modules /opt/logos-node/packages
mkdir -p /var/lib/logos-node/blockchain-module-testnet
mkdir -p /var/lib/logos-node/storage-module
mkdir -p /var/lib/logos-node/delivery-module
chown -R logos:logos /var/lib/logos-node
```

Open these ports on the host firewall:

```text
3000/udp
8090/udp
8091/tcp
9000/udp
30303/tcp
```

## Install Modules

`lgpd download` downloads the version published in the configured module catalog.
It does not automatically build or fetch the newest commit from the module repositories.
For a testnet, publish the intended module versions in the catalog before operators run these commands.

Download the module packages from the configured module catalog:

```sh
lgpd download blockchain_module --output /opt/logos-node/packages
lgpd download storage_module --output /opt/logos-node/packages
lgpd download delivery_module --output /opt/logos-node/packages
```

Install all three packages into the shared modules directory:

```sh
lgpm --modules-dir /opt/logos-node/modules install --file /opt/logos-node/packages/blockchain_module-0.2.0.lgx
lgpm --modules-dir /opt/logos-node/modules install --file /opt/logos-node/packages/storage_module-*.lgx
lgpm --modules-dir /opt/logos-node/modules install --file /opt/logos-node/packages/delivery_module-*.lgx
```

Check installed versions:

```sh
jq -r '.name + " " + .version' /opt/logos-node/modules/*/manifest.json
```

## Start Logos Core

For a first manual run,
start `logoscore` in the foreground with the shared modules directory:

```sh
cd /var/lib/logos-node
logoscore -m /opt/logos-node/modules
```

Keep that terminal open.
Use another terminal for module commands.

For a detached manual run,
start `logoscore` in daemon mode with `-D`:

```sh
cd /var/lib/logos-node
logoscore -m /opt/logos-node/modules -D
```

For unattended operation,
prefer a systemd service over a manually started daemon.

Check:

```sh
logoscore status
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
logoscore load-module blockchain_module
cd /var/lib/logos-node/blockchain-module-testnet
logoscore call blockchain_module generate_user_config "$(cat peers.json)"
chmod 600 /var/lib/logos-node/user_config.yaml
```

`generate_user_config` writes `user_config.yaml` in the `logoscore` daemon working directory.
With the service layout in this guide, that path is `/var/lib/logos-node/user_config.yaml`.

The generated `user_config.yaml` contains node-local wallet and key-management configuration.
Keep it private, restrict file permissions, and do not publish it.
Generate a fresh file for each node.

Start the module.
The second argument is intentionally an empty string; the blockchain module no longer requires a downloaded `deployment.yaml` file:

```sh
logoscore call blockchain_module start /var/lib/logos-node/user_config.yaml ""
```

Check:

```sh
logoscore call blockchain_module get_cryptarchia_info | jq -r .result.value | jq .
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
logoscore call blockchain_module wallet_get_notes 13cccf99f90fd78c2134891ce3c1afce0605753a7694b9d56678d63a8d471820 "" \
  | jq -r .result.value | jq .notes
# > [
# >   {
# >     "id": "de5f5b6d2baac23bf562d89676ebd304e8d6e6f67afc22f378b5dabf164d142d",
# >     "value": "1000"
# >   }
# > ]


# check SdpFunding key has received funds
logoscore call blockchain_module wallet_get_notes 91d381a87e05d46fc9bc95246273b6930290506f0589ad039444decd3c24940e "" \
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

Before joining, make sure the UDP port in the locator is reachable from the public Internet.
The submitted locator should use the external address and port that other nodes can dial.

```
curl -X POST http://127.0.0.1:8080/blend/join \
  -H 'Content-Type: application/json' \
  -d '{"locator":"/ip4/<YOUR_IP>/udp/<YOUR_BLEND_PORT>/quic-v1","locked_note_id": "<BLEND_ZK_NOTE_ID>"}'

# successful call will return the declaration id:
# > 2691821bd61394cc18939626de4e9231c699e8ddefd1ebf9e6c35b32229bdc65
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

Replace `<public-ip>` before running this command.

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
  "nat": "extip:<public-ip>",
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
| `nat` | Public IP advertisement mode |
| `network` | Storage network preset |

The `logos.test` network preset provides the storage bootstrap settings.

Use fixed `listen-port` and `disc-port`.
Do not leave public nodes on random ports.

Start storage without mix:

```sh
cd /var/lib/logos-node/storage-module
logoscore load-module storage_module
logoscore call storage_module init @config.json
logoscore call storage_module start
```

### Optional: Mix Support And Private Queries

To run storage with mix support,
generate the storage config from the current published mix bootstrap data.
This replaces the basic `config.json` above.
Replace `<public-ip>` before running this command.

```sh
cd /var/lib/logos-node/storage-module
cat > make-mix-storage-config.sh <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

public_ip=${1:-}
data_dir=${2:-"./logos-storage-data"}

if [ -z "${public_ip}" ]; then
  echo "Need to supply a public IP"
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "jq is not installed"
  exit 1
fi

curl -fsSL "https://fleets.logos.co/logos-test/storage-network.json" > ./raw-data.json

tcp_spr_json=$(jq '[.[].tcpSpr]' ./raw-data.json)
mix_pool_json=$(jq -c '{
  "version": 1,
  "relays": map({
    "peerId": .peerId,
    "mixPubKey": .mixPubKey,
    "libp2pPubKey": .libp2pPubKey,
    "multiAddr": "/ip4/\(.address)/tcp/\(.port)"
  })
} | tostring' ./raw-data.json)

cat <<JSON
{
  "nat": "extip:${public_ip}",
  "log-level": "INFO",
  "mix-enabled": true,
  "listen-port": 8091,
  "disc-port": 8090,
  "network": "logos.test",
  "dht-mix-proxy": $tcp_spr_json,
  "data-dir": "${data_dir}",
  "mix-pool-json": ${mix_pool_json}
}
JSON

rm ./raw-data.json
EOF

chmod 755 make-mix-storage-config.sh
./make-mix-storage-config.sh <public-ip> > config.json
```

Start storage with that config:

```sh
cd /var/lib/logos-node/storage-module
logoscore load-module storage_module
logoscore call storage_module init @config.json
logoscore call storage_module start
logoscore call storage_module togglePrivateQueries true
```

After startup, allow the node time to populate routing state.
If the first private query fails with a manifest lookup error,
retry once after a short warm-up period.

Privately query a known test object:

```sh
logoscore call storage_module downloadToUrl zDvZRwzkzrrYB6sS1rRpRLt4gBhc1pWoyTSjkfszfmj1seaYYLCZ /var/lib/logos-node/storage-module/farewell-to-westphalia.pdf false 65536
```

## Delivery

Create the delivery config:

Replace `<public-ip>` before running this command.

```sh
cd /var/lib/logos-node/delivery-module
cat > config.json <<EOF
{
  "preset": "logos.test",
  "mode": "Core",
  "logLevel": "INFO",
  "tcpPort": 30303,
  "discv5UdpPort": 9000,
  "discv5Discovery": true,
  "nat": "extip:<public-ip>"
}
EOF
```

Fields:

| Field | Purpose |
|-------|---------|
| `preset` | Network preset |
| `mode` | Delivery node mode |
| `logLevel` | Log verbosity |
| `tcpPort` | Public TCP P2P port |
| `discv5UdpPort` | Public UDP discovery port |
| `discv5Discovery` | Enable discv5 discovery |
| `nat` | Public IP advertisement mode |

The `logos.test` preset provides the delivery network bootstrap settings.
`extMultiaddrs` is usually not needed when `nat` advertises the public address.

Use fixed `tcpPort` and `discv5UdpPort`.
Do not leave public nodes on random ports.

Start:

```sh
cd /var/lib/logos-node/delivery-module
logoscore load-module delivery_module
logoscore call delivery_module createNode @config.json
logoscore call delivery_module start
```

Check:

```sh
logoscore call delivery_module getNodeInfo Version
logoscore call delivery_module getNodeInfo MyBoundPorts
```

## Health Checks

Check daemon and modules:

```sh
logoscore status --json
```

Expected modules:

```text
storage_module
blockchain_module
delivery_module
capability_module
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
logoscore call blockchain_module get_cryptarchia_info | jq -r .result.value | jq .
```

Check delivery:

```sh
logoscore call delivery_module getNodeInfo MyBoundPorts
```

## Optional: Systemd

For unattended operation, use systemd.

Recommended pattern:

- one service for `logoscore`;
- one separate bootstrap service or script for module startup;
- journald output with retention limits.

Do not start modules from `ExecStartPost` in the `logoscore` service.
If module startup is slow or returns an error, systemd may kill the daemon.

The daemon service should do only this:

```ini
[Unit]
Description=Logos Node
After=network-online.target
Wants=network-online.target

[Service]
User=logos
Group=logos
WorkingDirectory=/var/lib/logos-node
Environment=HOME=/var/lib/logos-node
ExecStart=/usr/local/bin/logoscore -m /opt/logos-node/modules -D
Restart=always
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

The bootstrap script should:

1. wait for `logoscore status`;
2. load and start storage;
3. load and start blockchain;
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
