---
title: Blockchain FURPS
tags:
  - blockchain
  - furps
---

These are the functional and non-functional requirements for roadmapped efforts,
according to the FURPS model.

FURPS are elsewhere divided into Milestones and Deliverables, to form a roadmap.

# Functionality

## `bedrock`

### `bedrock:blockchain`
1. Nodes can permissionlessly participate in consensus
2. Nodes can join bedrock services and earn rewards
3. Users can transfer funds

### `bedrock:ppos` (Private Proof of Stake)
4. Leaders can propose blocks privately
5. Leaders can claim block rewards without revealing their block proposal
6. Blend spam protection
7. Block proposal redundancy
8. Censorship resistance against malicious broadcasters
9. Blend edge node privacy

### `bedrock:sdp` (Service Declaration Protocol)
10. SDP enables membership in service networks
11. SDP enables rewarding of service participants
12. SDP enables sybil resistance in service Network

### `bedrock:sovereign-rollups`
13. Sovereign Rollups can post their data to Bedrock channels
14. Decentralized sequencing for Sovereign Rollups through blockchain enforced sequencer coordination
15. Cross-Sovereign rollups messaging facilitated by Bedrock

### `bedrock:wallet`
16. Transfer operations
17. Inscription operations
18. SDP operations

### `bedrock:areon`
19. Probabilistic finality model analyzed
20. Network latency tolerance analyzed
21. Total stake inference on Areon model
22. Areon with Private Proof of Stake (Cryptareon)

### `bedrock:block-building`
23. **Distributed block building** Enabling tagging attack resistance and removing the leader as SPOF

## `lssa`

### `lssa:programmable-privacy`
24. LSSA supports Programmable Privacy by allowing LSSA Programs to be agnostic as to whether they are interacting with private or public accounts

### `lssa:sequencer`
25. LSSA Sequencer accepts transactions from users, orders them and posts them to Logos Blockchain
26. Sequencer manages pending vs. safe vs. confirmed transactions
27. Sequencer maintains funds to pay for bedrock transactions

### `lssa:indexer`
28. Indexer follows LSSA channel in bedrock
29. Indexer validates messages in the channel, skips invalid messages
30. Indexer parses messages as blocks and applies blocks to local state
31. Indexer maintains state history
32. Indexer provides RPC endpoints for querying LSSA state

### `lssa:program-interface`
33. Programs have defined interface exposing input/output accounts and contextual information (block number, random oracle, etc.)

### `lssa:cross-program-calls`
34. Programs can call other programs deployed on LSSA

### `lssa:bridging`
35. Channel Balance management
36. Sequencer signing on withdrawal
37. User deposits from L1 to LSSA

# Usability

## `bedrock`
1. Blockchain node will be accessible through Logos-Core
2. Blockchain configuration will be done through Logos-Core
3. Blockchain will finalize transactions within 18hrs
4. Logos Core Blockchain Wallet integration
5. Ability to select which bedrock services is configured in a bedrock node

## `lssa`
6. LSSA Programs are RISCV binaries, allowing developers to program in high level languages like Rust that compile down to RISCV
7. The same LSSA Programs can be used in both private and public execution contexts
8. Logos Core integration for LSSA Wallet
9. Ability to run a sequencer through Logos Core
10. Users can interact with LSSA through a wallet
11. Block Explorer displays LSSA blocks and transactions
12. Logos Core Module for LSSA operations

# Reliability

## `bedrock`
1. Blockchain prioritizes liveness over safety ensuring we are resilient to large network failures
2. Blockchain provides 18hrs for failures to resolve before the chain may split requiring manual intervention
3. Data posted to DA will be available for at least 2 sessions (session length to be determined)

## `lssa`
4. LSSA Sequencer supports decentralized sequencing through Blockchain enforced sequencer coordination, ensuring crash tolerance
5. Crash tolerance through persisting state to disk
6. Sequencer passes stress testing

# Performance

## `bedrock`
1. Blockchain finalizes transactions in 18hrs
2. Practical finality can be achieved much sooner
3. Blocks are produced on average every 30s

## `lssa`
4. Transaction throughput targets (TBD)
5. Proof generation time targets (TBD)

# Supportability

## `lssa`
1. Developer tooling to support LSSA program development
2. Documentation ready for external contributors
