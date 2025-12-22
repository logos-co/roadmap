# LSSA Running as a Sovereign Rollup

**Estimated Delivery Date** March 2026

## Resources Required

- 2.5 Engineers
- Server for LSSA sequencer

## Risks

- New configuration that hasn't been tested previously
- Without dedicated support from infrastructure, we may run into problems with networking and server deployments.

## Deliverables

### Sequencer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The LSSA Sequencer follows and publishes to Bedrock, managing the full lifecycle of sovereign rollup operations.

**FURPS**:

- F25. LSSA Sequencer accepts transactions from users, orders them and posts them to Logos Blockchain
- F26. Sequencer manages pending vs. safe vs. confirmed transactions
- F27. Sequencer maintains funds to pay for bedrock transactions

**Checklist**:
- [ ] Sequencer publishes blocks to Bedrock
- [ ] Transaction lifecycle management (pending/safe/confirmed)
- [ ] Automatic funding management for bedrock transactions

### Indexer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The Indexer follows the LSSA channel in Bedrock and maintains local state.

**FURPS**:

- F28. Indexer follows LSSA channel in bedrock
- F29. Indexer validates messages in the channel, skips invalid messages
- F30. Indexer parses messages as blocks and applies blocks to local state
- F31. Indexer maintains state history
- F32. Indexer provides RPC endpoints for querying LSSA state

**Checklist**:
- [ ] Channel following operational
- [ ] Message validation
- [ ] Block parsing and state application
- [ ] RPC endpoints available

### Block Explorer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Block Explorer connecting to Indexer for visibility into LSSA operations.

**FURPS**:

- U11. Block Explorer displays LSSA blocks and transactions

**Checklist**:
- [ ] Block Explorer connected to Indexer
- [ ] Transaction and block visibility
