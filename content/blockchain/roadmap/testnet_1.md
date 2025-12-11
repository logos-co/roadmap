# Logos Blockchain Testnet 1

**Estimated Delivery Date** Feb 27 2026

## Resources Required

- blockchain:bedrock:engineering 100%
- blockchain:zones 100%
- servers for blockchain testnet
- server for LSSA sequencer

## Risks



## Deliverables

We intend to deliver a first testnet that is external to the team. All necessary documenatation and tooling should be ready for external contributors to interact with Logos Blockchain

### Bedrock

**Owner**: David Rusu

**Feature**: [Bedrock](/blockchain/furps/bedrock.md)

**FURPS**:

- F1. Nodes can permisionlessly participate in consensus
- F2. Nodes can join bedrock services and earn rewards
- F3. Users can transfer funds
- F4. Leaders can propose blocks privately
- F5. Leaders can claim block rewards without revealing their block proposal
- F6. Sovereign Rollups can post their data to blockchain

- U1. Blockchain node will be accessible through Logos-Core 
- U2. Blockchain configuration will be done through Logos-Core


**Checklist**:
- [ ] Faucet is available for external contributors to receive funds in Logos Blockchain
- [ ] Wallet providing CLI interface to Logos Blockchain
- [ ] Documentation on how to run a node and participate in bedrock services

### LSSA


**Owner**: David Rusu

**Feature**: [LSSA](/blockchain/furps/lssa.md)

**FURPS**:

- F1. LSSA supports Programmable Privacy by allowing LSSA Programs to be agnostic as to whether they are interacting with private or public accounts.
- F2. LSSA Sequencer accepts transactions from users, orders them and posts them to Logos Blockchain
- F3. Developers can interact with LSSA Sequencer through an API
- F4. Developers can deploy programs to LSSA
- F5. Users can interact with LSSA through a wallet

**Checklist**:
- [ ] Documentation ready for external contributors
- [ ] Wallet
- [ ] Developer tooling to support LLSA program development
