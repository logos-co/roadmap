---
title: Blockchain Roadmap
tags:
  - blockchain
  - roadmap
---

## Roadmap Overview

Logos Blockchain is working towards the following milestones

### Required for Mainnet

Logos Blockchain is working towards the following capabilities, required for Mainnet:

- **Blockchain**: The settlement layer for Zones
  - **PPoS (Private Proof of Stake)**: privacy-preserving consensus
    - [Cryptarchia](./blockchain_cryptarchia.md): proof-of-stake consensus protocol with private leader selection
    - [Blend Network](./blockchain_blend.md): anonymizing network that protects block leader privacy by breaking the link between proposer and proposal
  - **Sovereign Zones**: primitives that let app-specific zones run on top of the blockchain
    - **Zone SDK**: developer toolkit exposing channels, bridging, and sequencing primitives for building Sovereign Zones
    - **Channels**: unopinionated decentralized replicated logs that any transaction model can be built on
    - [Bridging Support](./blockchain_bridging.md): protocol for moving tokens between the blockchain and Sovereign Zones
    - [Decentralized Sequencing](./blockchain_decentralized_sequencing.md): blockchain-enforced sequencer coordination so Sovereign Zones can run with multiple sequencers without standing up their own consensus
- **LEZ**: the Logos Execution Zone, a Sovereign Zone offering programmable privacy; the same program runs over private and public state
  - **Programmable Privacy**: developers can compose programs over private and public state, with access to block context, enabling use cases like private donations, private voting, and atomic swaps
  - [Bridging](./lez_bridging.md): deposit and withdraw tokens between the blockchain and LEZ
  - [Decentralized Sequencing](./lez_decentralized_sequencing.md): LEZ as the first user of the decentralized sequencing model

### Testnet v0.1 Milestones

- [x] [LEZ Running as a Sovereign Zone](./lez_sovereign_zone.md)
- [x] [LEZ Resilience](./lez_resilience.md)
- [x] [LEZ Program Interface](./lez_program_interface.md)
- [x] [LEZ Logos Core Integration](./lez_logos_core.md)
- [x] [Blockchain Logos Core Integration](./blockchain_logos_core.md)
- [x] [Blockchain SDP Implementation](./blockchain_sdp.md)
- [x] [Blockchain Cryptarchia Implementation](./blockchain_cryptarchia.md)
- [x] [Blockchain Wallet Implementation](./blockchain_wallet.md)
- [x] [Blockchain Testing Framework](./testing_framework.md)

### Testnet v0.2 Milestones

- [ ] [Blockchain Blend Network](./blockchain_blend.md)
- [ ] [Blockchain Bridging Support](./blockchain_bridging.md)
- [ ] [LEZ Bridging](./lez_bridging.md)
- [ ] [Blockchain Decentralized Sequencing](./blockchain_decentralized_sequencing.md)
- [ ] [LEZ Block Context](./lez_block_context.md)
- [ ] [Blockchain Tokenomics](./blockchain_tokenomics.md)
- [ ] [LEZ Tokenomics](./lez_tokenomics.md)
- [ ] [Blockchain Explorer App](./blockchain_explorer.md)
- [ ] [LEZ Explorer App](./lez_explorer.md)
- [ ] [LEZ Indexer Module](./lez_indexer_module.md)
- [ ] [LEZ Private Transfers](./lez_private_transfers.md)
- [ ] [LEZ Cross Program Calls](./lez_cross_program_calls.md)
- [ ] [Blockchain LogosDA Resilient Sampling](./logosda_resilient_sampling.md)
- [ ] [Blockchain LogosDA Bandwidth Efficient DA Sampling](./logosda_bandwidth_efficient.md)

### Testnet v0.3 Milestones

- [ ] [LEZ Decentralized Sequencing](./lez_decentralized_sequencing.md)
- [ ] [Cross Sovereign Zone Messaging](./cross_sovereign_zone_messaging.md)
- [ ] [Blockchain Blend Message Compression](./blend_message_compression.md)
- [ ] [Blockchain Areon Finality Model](./areon_finality.md)
- [ ] [Blockchain EmPoWering](./blockchain_empowering.md)

### Parallel Milestones

- [ ] [LEZ Stress Testing](./lez_stress_testing.md)
- [ ] [LEZ Resolve State Contention](./lez_state_contention.md)
- [ ] [Blockchain Blend Broadcaster Censorship Resistance](./blend_broadcaster_censorship.md)
- [ ] [Blockchain Blend Edge Node Privacy](./blend_edge_node_privacy.md)
- [ ] [Blockchain Cryptarchia Accurate Total Stake Inference](./cryptarchia_stake_inference.md)
- [ ] [Blockchain Cryptareon](./cryptareon.md)
- [ ] [Blockchain Decentralized Block Building](./decentralized_block_building.md)
- [ ] [Blockchain LogosDA Private DA](./logosda_private_da.md)
- [ ] [Blockchain Crypto Audit](./blockchain_crypto_audit.md)
- [ ] [LEZ Crypto Audit](./lez_crypto_audit.md)
- [ ] [Native Zone](./native_zone.md)
