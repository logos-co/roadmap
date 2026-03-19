# LEZ Running as a Sovereign Zone

**Estimated Delivery Date** March 2026

## Resources Required

- 2.5 Engineers
- Server for LEZ sequencer

## Risks

- New configuration that hasn't been tested previously
- Without dedicated support from infrastructure, we may run into problems with networking and server deployments.

## Deliverables

### Sequencer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The LEZ Sequencer follows and publishes to Blockchain, managing the full lifecycle of sovereign zone operations.

**FURPS**:

- F23. LEZ Sequencer accepts transactions from users, orders them and posts them to Logos Blockchain
- F24. Sequencer manages pending vs. safe vs. confirmed transactions
- F25. Sequencer maintains funds to pay for blockchain transactions

**Checklist**:
- [x] Sequencer publishes blocks to Blockchain
- [x] Transaction lifecycle management (pending/safe/confirmed)
- [x] Automatic funding management for blockchain transactions (we used 0 fees for this implementation)

### Indexer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

The Indexer follows the LEZ channel in Blockchain and maintains local state.

**FURPS**:

- F26. Indexer follows LEZ channel in blockchain
- F27. Indexer validates messages in the channel, skips invalid messages
- F28. Indexer parses messages as blocks and applies blocks to local state
- F29. Indexer maintains state history
- F30. Indexer provides RPC endpoints for querying LEZ state

**Checklist**:
- [x] Channel following operational
- [x] Message validation
- [x] Block parsing and state application
- [x] RPC endpoints available

### Block Explorer

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Block Explorer connecting to Indexer for visibility into LEZ operations.

**FURPS**:

- U11. Block Explorer displays LEZ blocks and transactions

**Checklist**:
- [x] Block Explorer connected to Indexer
- [x] Transaction and block visibility
