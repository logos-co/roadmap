---
title: FURPS
tags:
  - blockchain
  - furps
---

These are the functional and non-functional requirements for roadmapped efforts,
according to the FURPS model.

FURPS are elsewhere divided into Milestones and Deliverables, to form a roadmap.

# Functionality

## `blockchain`

### `blockchain:ppos` (Private Proof of Stake)
1. Nodes can permissionlessly participate in consensus
2. Leaders can propose blocks privately
3. Leaders can claim block rewards without revealing their block proposal
4. Blend spam protection
5. Block proposal redundancy
6. Censorship resistance against malicious broadcasters
7. Blend edge node privacy

### `blockchain:sdp` (Service Declaration Protocol)
8. Nodes can join blockchain services
9. Nodes can earn rewards by participating in blockchain services
10. SDP enables sybil resistance in service networks

### `blockchain:sovereign-zones`
11. Sovereign Zones can post their data to Blockchain channels
12. Decentralized sequencing for Sovereign Zones through blockchain enforced sequencer coordination
13. Cross-Sovereign Zones messaging facilitated by Blockchain

### `blockchain:wallet`
14. Transfer operations
15. Inscription operations
16. SDP operations

### `blockchain:areon`
17. Probabilistic finality model analyzed
18. Network latency tolerance analyzed
19. Total stake inference on Areon model
20. Areon with Private Proof of Stake (Cryptareon)

### `blockchain:block-building`
21. **Distributed block building** Enabling tagging attack resistance and removing the leader as SPOF

### `blockchain:empowering` (Proof-of-Work Onboarding)
36. Permissionless user onboarding: mining transactions — newcomers earn tokens through proof of work and pay for transactions with them
37. Permissionless network privacy: any participant can earn Blend Network access through proof of work
38. Permissionless transaction privacy: Blend Network carries transactions in addition to block proposals
39. Permissionless bootstrapping of Proof of Stake: fair and private initial stake distribution through proof of work while token markets are thin

## `lez`

### `lez:programmable-privacy`
22. LEZ supports Programmable Privacy by allowing LEZ Programs to be agnostic as to whether they are interacting with private or public accounts

### `lez:sequencer`
23. LEZ Sequencer accepts transactions from users, orders them and posts them to Logos Blockchain
24. Sequencer manages pending vs. safe vs. confirmed transactions
25. Sequencer maintains funds to pay for blockchain transactions

### `lez:indexer`
26. Indexer follows LEZ channel in blockchain
27. Indexer validates messages in the channel, skips invalid messages
28. Indexer parses messages as blocks and applies blocks to local state
29. Indexer maintains state history
30. Indexer provides RPC endpoints for querying LEZ state

### `lez:program-interface`
31. Programs have defined interface exposing input/output accounts and contextual information (block number, etc.)

### `lez:cross-program-calls`
32. Programs can call other programs deployed on LEZ

### `lez:bridging`
33. Channel Balance management
34. Sequencer signing on withdrawal
35. User deposits from Blockchain to LEZ

# Usability

## `blockchain`
1. Blockchain node will be accessible through Logos-Core
2. Blockchain configuration will be done through Logos-Core
3. Blockchain will finalize transactions within 18hrs
4. Logos Core Blockchain Wallet integration
5. Ability to select which blockchain services are configured in a blockchain node

## `lez`
6. LEZ Programs are RISCV binaries, allowing developers to program in high level languages like Rust that compile down to RISCV
7. The same LEZ Programs can be used in both private and public execution contexts
8. Logos Core integration for LEZ Wallet
9. Ability to run a sequencer through Logos Core
10. Users can interact with LEZ through a wallet
11. Block Explorer displays LEZ blocks and transactions
12. Logos Core Module for LEZ operations

# Reliability

## `blockchain`
1. Blockchain prioritizes liveness over safety ensuring we are resilient to large network failures
2. Blockchain provides 18hrs for failures to resolve before the chain may split requiring manual intervention
3. Data posted to DA will be available for at least 2 sessions (session length to be determined)

## `lez`
4. LEZ Sequencer supports decentralized sequencing through Blockchain enforced sequencer coordination, ensuring crash tolerance
5. Crash tolerance through persisting state to disk
6. Sequencer passes stress testing

# Performance

## `blockchain`
1. Blockchain finalizes transactions in 18hrs
2. Practical finality can be achieved much sooner
3. Blocks are produced on average every 30s
4. Blend Network manageable on low bandwidth network links

## `lez`
5. Transaction throughput targets (TBD)
6. Proof generation time targets (TBD)

# Supportability

## `lez`
1. Developer tooling to support LEZ program development
2. Documentation ready for external contributors
