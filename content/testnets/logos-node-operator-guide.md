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
mkdir -p /var/lib/logos-node/blockchain-module-devnet
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
cd /var/lib/logos-node/blockchain-module-devnet
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

Load the module and generate `user_config.yaml`:

```sh
logoscore load-module blockchain_module
cd /var/lib/logos-node/blockchain-module-devnet
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

### Optional: Mix Support And Private Queries

To run storage with mix support,
generate the storage config from the current published mix bootstrap data.
This replaces the basic `config.json` above.

```sh
cd /var/lib/logos-node/storage-module
cat > make-mix-storage-config.sh <<'EOF'
#!/usr/bin/env bash
set -e

data_dir=${1:-"./logos-storage-data"}
udp_spr_json=$(curl -s https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/udp-sprs.json)
tcp_spr_json=$(curl -s https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/tcp-sprs.json)

wget https://logos-storage-network.fra1.digitaloceanspaces.com/v0.2/mix-pool.json
mp_path=$(realpath "./mix-pool.json")

cat <<JSON
{
  "nat": "any",
  "log-level": "DEBUG",
  "mix-enabled": true,
  "listen-port": 8080,
  "disc-port": 8090,
  "bootstrap-node": $udp_spr_json,
  "dht-mix-proxy": $tcp_spr_json,
  "data-dir": "${data_dir}",
  "mix-pool": "${mp_path}"
}
JSON
EOF

chmod 755 make-mix-storage-config.sh
./make-mix-storage-config.sh > config.json
```

Start storage with that config:

```sh
logoscore load-module storage_module
logoscore call storage_module init @config.json
logoscore call storage_module start
logoscore call storage_module togglePrivateQueries true
```

Privately query a known test object:

```sh
logoscore call storage_module downloadToUrl zDvZRwzkzrrYB6sS1rRpRLt4gBhc1pWoyTSjkfszfmj1seaYYLCZ ./farewell-to-westphalia.pdf false 65536
```

Start:

```sh
cd /var/lib/logos-node/storage-module
logoscore load-module storage_module
logoscore call storage_module init @config.json
logoscore call storage_module start
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
