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
    - **ZoneSDK**: developer toolkit exposing channels, bridging, and sequencing primitives for building Sovereign Zones
    - **Channels**: unopinionated decentralized replicated logs that any transaction model can be built on
    - [λSQL](./logos_sql.md): turns any Channel into a decentralized SQL database by writing SQL transactions into the channel
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

- [x] [LEZ Bridging](./lez_bridging.md)
- [x] [LEZ Block Context](./lez_block_context.md)
- [x] [LEZ Tokenomics](./lez_tokenomics.md)
- [x] [LEZ Explorer App](./lez_explorer.md)
- [x] [LEZ Indexer Module](./lez_indexer_module.md)
- [x] [LEZ Private Transfers](./lez_private_transfers.md)
- [x] [LEZ Cross Program Calls](./lez_cross_program_calls.md)
- [x] [LEZ Multi-owner accounts](./lez_multiowner_accounts.md)
- [x] [LEZ Core Module](./lez_core_module.md)
- [x] [Blockchain Blend Network](./blockchain_blend.md)
- [x] [Blockchain Bridging Support](./blockchain_bridging.md)
- [x] [Blockchain Decentralized Sequencing](./blockchain_decentralized_sequencing.md)
- [x] [Blockchain Tokenomics](./blockchain_tokenomics.md)
- [x] [Blockchain LogosDA Resilient Sampling](./logosda_resilient_sampling.md)
- [x] [Blockchain LogosDA Bandwidth Efficient DA Sampling](./logosda_bandwidth_efficient.md)
- [x] [Blockchain Logos Core Migration](./blockchain-logos-core-migration.md)

### Testnet v0.3 Milestones

- [x] [LEZ Decentralized Sequencing](./lez_decentralized_sequencing.md)
- [x] [LEZ TKE Implementation](./lez_tke_implementation.md)
- [x] [Cross-LEZ Messaging](./cross_lez_messaging.md)
- [x] [LEZ publishes events](./lez_events.md)
- [x] [Blockchain Explorer App](./blockchain_explorer.md)
- [x] [Blockchain Blend Message Compression](./blend_message_compression.md)
- [x] [Blockchain EmPoWering](./blockchain_empowering.md)
- [x] [Blockchain TKE Implementation](./blockchain_tke_implementation.md)
- [x] [Blockchain PoS Participation for Bridged Funds](./blockchain_pos_bridged_funds.md)
- [x] [Blockchain Cryptarchia Accurate Total Stake Inference](./cryptarchia_stake_inference.md)
- [x] [λSQL](./logos_sql.md)
- [x] [ZoneSDK Logos Protocol Backend](./zone_sdk_logoscore.md)

### Testnet v0.4 Milestones

- [ ] [LEZ Sequencer in Logos Core](./lez_decentralized_sequencing.md#lez-sequencer-in-logos-core)
- [ ] [LEZ Private Transaction Fees](./lez_tke_implementation.md#transaction-fees)
- [ ] [EmPoWering Economic Analysis](./blockchain_empowering.md#economic-analysis)
- [ ] [EmPoWering ASIC-Resistant Puzzle](./blockchain_empowering.md#asic-resistant-puzzle)
- [ ] [LEZ Transactional Actor Model](./lez_transactional_actors.md)
- [ ] [LEZ Atomic Deposits](./lez_atomic_deposits.md)

### Testnet v0.5 Milestones

- [ ] [Blockchain Private UTXO](./blockchain_private_utxo.md)
- [ ] [Blockchain Faster Finality](./blockchain_faster_finality.md)
- [ ] [Sequencer Collusion Resistance](./sequencer_collusion_resistance.md)

### Testnet v0.6 Milestones

- [ ] [Blockchain Resilient Blend](./blockchain_resilient_blend.md)
- [ ] [Blockchain Off-chain Inscriptions on Logos Storage](./offchain_inscriptions_storage.md)

### Parallel Milestones
- [ ] [LEZ Stress Testing](./lez_stress_testing.md)
- [ ] [LEZ Resolve State Contention](./lez_state_contention.md)
- [ ] [Blockchain Crypto Audit](./blockchain_crypto_audit.md)
- [ ] [LEZ Crypto Audit](./lez_crypto_audit.md)

### Post-mainnet
- [ ] [Blockchain Blend Broadcaster Censorship Resistance](./blend_broadcaster_censorship.md)
- [ ] [Blockchain Areon Finality Model](./areon_finality.md)
- [ ] [Blockchain Blend Edge Node Privacy](./blend_edge_node_privacy.md)
- [ ] [Blockchain Cryptareon](./cryptareon.md)
- [ ] [Blockchain LogosDA Private DA](./logosda_private_da.md)
- [ ] [Blockchain Decentralized Block Building](./decentralized_block_building.md)
- [ ] [Native Zone](./native_zone.md)
