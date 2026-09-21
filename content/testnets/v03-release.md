---
title: "Testnet version 0.3: release notes"
tags: testnet
---

## Blockchain

### Logos Execution Zone

- **Decentralized Sequencing**
- Transaction fees for public transactions.
- Cross-zone messaging: Asynchronous messaging between zones.
- Events: LEZ programs support events.
- Program upgradeability: Support for upgrading deployed programs.
- Program deployment sharding
* Bridging Withdraw (from L1)

### Blockchain

- **EmPoWering**: Proof-of-work onboarding to the blockchain.
- **Channel Notes**: Zone sequencers can stake bridged funds on L1.
- Total stake inference: Uncle references improve stake estimation.
- Blend message compression: Version 1.
- **Logos SQL**: A SQL zone.
- Blend failure detection.
- Mempool specification.

## Storage

- **downloads over mix**
- **storage as backend for the logos package manager**

## Messaging

### Delivery

- **RLN in delivery** via the RLN module.
- History backfill: Retrieve missed messages from store nodes for subscribed topics after reconnecting.
- Mix integration: Mix is exposed through the Messaging API.
- Reliable Channel API: Segmentation supports splitting and reassembling large messages.

### Chat

- Message history: Messages are persisted and can be retrieved across sessions.
- Delivery integration: Chat uses RLN and mix through Delivery.

## AnonComms

- RLN module: Provides RLN support for Delivery.
- Mix module: Enables running mix middle nodes.
- Service Discovery module (used by Delivery).

## Basecamp and Apps

- Stabilization and UI improvements.
- Intents and deep links: Support for calls between apps.
- Blockchain Dashboard: Refreshed UI and explorer.
- Monero wallet: App and supporting modules.
- EVM wallets: Apps and supporting modules, including Ethereum Wallet, JSON-RPC Client, Ethereum Verified Proxy, Keystore, Signer, and Token Lists Manager.

## Logos Core

- `logosctl`: Unified CLI replacing `logoscore`, `lgpm`, and `lgpd`.
- Windows support.

## Notes

- RLN proof validation: Activation is planned approximately two weeks after release to allow a smooth transition.
- Improvements to download-over-mix performance are planned for v0.4.
