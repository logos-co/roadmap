# LEZ Decentralized Sequencing

## Resources Required
- zones: 2 CC's

## Risks

- Decentralized Sequencing may increase latency and reduce throughput

## Deliverables

### LEZ Decentralized Sequencing

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

LEZ will be the first user of decentralized sequencing, it will need to understand the decentralized sequencing model and ensure that the sequencer proposes blocks only when it is its turn, and downloads and processes the published blocks of fellow sequencers.

**FURPS**:

- R4. LEZ Sequencer supports decentralized sequencing through Blockchain enforced sequencer coordination, ensuring crash tolerance

**Checklist**:
- [x] LEZ integration with Blockchain Decentralized Sequencing model
- [x] Sequencers download channel messages from blockchain that were produced by fellow sequencers
- [x] Reject invalid blocks from fellow sequencers
- [x] Apply valid blocks from fellow sequencers

### LEZ Sequencer in Logos Core

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

**Target**: Testnet v0.4

Run the LEZ sequencer, with decentralized sequencing, as a Logos Core module.

**FURPS**:

- U9. Ability to run a sequencer through Logos Core

**Checklist**:
- [ ] LEZ sequencer runs through Logos Core
