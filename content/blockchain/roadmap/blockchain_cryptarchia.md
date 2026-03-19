# Blockchain Cryptarchia Implementation

**Estimated Delivery Date** March 2026

## Resources Required

- 2 Engineers

## Risks

- Cryptarchia is a complex distributed consensus system
- Edge cases in block timing and reorg handling may be low-frequency and not detected in testing

## Deliverables

### Consensus Implementation

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Full Cryptarchia consensus implementation for Logos Blockchain.

**FURPS**:

- F1. Nodes can permissionlessly participate in consensus

**Checklist**:
- [ ] Chain leader selection (sk + slot secret + PoL)
- [ ] Merkle tree over UTXOs
- [ ] Consensus participation operational
- [ ] Block timing validation
- [ ] Reorg transaction handling
