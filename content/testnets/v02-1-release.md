---
title: "Testnet version 0.2.1: release notes"
tags: testnet
---

## Blockchain

### Logos Execution Zone

- **Account initialization**: Accounts must be initialized before use. The wallet now makes this requirement clear and provides an initialization button.
- **Private account grouping**: Private accounts are now grouped under their associated shareable keypairs, making them easier to manage in the wallet.

### Blockchain

- **L1 fee markets are live**: Inscriptions now require transaction fees, enabling token economics. (LEZ transactions remain free for now.)
- **Scalable bootstrapping**: Initial Block Download (IBD) has been redesigned to use a BitTorrent-like distribution model. Trusted peers pin the target chain tip, while the rest of the network seeds the chain history.
- **PoS participation for bridged funds**: Channel balances are now backed by UTXOs, allowing bridged funds to continue participating in PPoS.
    - *note*: Withdrawals from LEZ will be temporarily disabled until LEZ is updated to support the new UTXO based channel ledger. This will happen soon after the testet release; stay tuned.

## Storage

- **NAT traversal**: Using the new Logos Improved NAT Traversal significantly improves node connectivity.

## Messaging

### Delivery

- **Node API**: Improvements make running a node more convenient.
- **Store query API**: A new API enables queries against the message store.

### Chat

- **de-MLS integration**: Direct chats now use de-MLS, as group chats already do.
- **App UI improvements**
