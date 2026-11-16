---
title: "Testnet version 0.4: release notes"
tags: testnet
---

## Blockchain

### Logos Execution Zone

- **Transactional actor model**: Programs compose atomically and exchange messages asynchronously across public and private execution.
  - This is the stable LEZ programming model intended for mainnet; no further model changes are planned except essential fixes, such as security patches.
- **Private transaction fees**: Fees are handled within private transaction proofs. Wallets estimate fees through dry runs.
- **Atomic deposits**: Deposits from the base layer into LEZ no longer require the previous finality wait.
- LEZ sequencer: Runs as a Logos Core module.

### Base Layer

- **Eras**: Chain behaviour and consensus parameters can change through a hard fork at an era boundary.

## Storage

- **Faster downloads over mix**: Improved download performance.
- **Naming service**: A stable identifier can point to updated content as its CID changes.
- Automatic discovery of Mix and DHT proxies, replacing manual pool configuration.

## Messaging

### Delivery

- **Messaging API — General Availability**
- Maintenance: At least half of the baseline technical-debt issues closed; target modular architecture agreed.
- Store Sync: Implementation hardening, with DST sign-off planned for v0.5.

### Chat

- **Self-healing groups**: Recovery from missed messages and group forks, using SDS and the Ordering Policy component.
- Group reliability: Tools to diagnose forks and measure reliability.

## AnonComms

- **RLN membership allocation service**: End-to-end allocation of testnet memberships, with pluggable authentication.
  - Separate registry and allocation service for Mix memberships.
- **Combined Mix and Delivery module**: Deployable as an entry, exit, or intermediate node.
  - Basic key rotation for forward secrecy.
  - Poisson-rate cover traffic generation.
- Service Discovery: Delivery plugin integration and a simplified module API.
- De-MLS: `libchat` integration hardened against malformed messages and repeated membership operations.
- Oracle: Price fetching from multiple independent sources and basic dispute detection.
- Zerokit: Poseidon2 support, runtime checks for resource/hash-function mismatches, and static analysis of Poseidon and Poseidon2 circuits.

## Basecamp and Apps

- **Bitcoin Wallet and Bitcoin Node** (`bitcoind`), with supporting modules.
- **Zcash Wallet and Zcash Node** (`zebrad`), with supporting modules.
- Revamped Signer: Shared by the Ethereum and Bitcoin wallets, with a unified Keystore and Keycard support.
- Basecamp: Standalone app launching, a new UI backend path, download-source selection, package signature checks, trusted-key management, and in-app updates.

## Logos Core

- C3A: Proof of concept for the new Core architecture (CDDL Contract Commitment Architecture), available alongside the current Core.

