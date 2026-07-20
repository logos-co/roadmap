# LEZ publishes events

## Resources Required

- 1 Engineer

## Risks

- Event schema must be stable enough for apps and indexers to build against

## Deliverables

### LEZ Event Publishing

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

LEZ publishes events resulting from block and program execution so that apps, wallets, and the indexer can react to state changes without polling. Builds on the blockchain block event model, exposing LEZ-level events (transfers, deposits, withdrawals) through the indexer.

**Checklist**:
- [ ] LEZ event model spec
- [ ] LEZ emits events from block execution
- [ ] Events exposed through the LEZ indexer
