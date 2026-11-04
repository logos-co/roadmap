# Blockchain Private UTXO

Move the blockchain ledger to private UTXOs, with programs governing channel notes. Supersedes the earlier dual-key notes and hierarchical key management designs.

## Resources Required

- TBD

## Risks

- TBD

## Deliverables

### Private UTXO Specification

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Specify the private UTXO ledger and the programs that govern channel notes.

**Checklist**:
- [ ] Private UTXO ledger RFC ([logos-lips#480](https://github.com/logos-co/logos-lips/pull/480))
- [ ] Programs governing channel notes RFC ([logos-lips#481](https://github.com/logos-co/logos-lips/pull/481))
- [ ] Optional post-quantum note encryption RFC ([logos-lips#486](https://github.com/logos-co/logos-lips/pull/486))

### Private UTXO Implementation

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Implement the private UTXO ledger and its circuits in the node.

**Checklist**:
- [ ] Private ledger circuits for transfer, program spend, Proof of Leadership and Proof of Quota ([logos-blockchain-circuits#59](https://github.com/logos-blockchain/logos-blockchain-circuits/pull/59))
- [ ] Private UTXO ledger and channel programs in the node ([#3865](https://github.com/logos-blockchain/logos-blockchain/pull/3865))
