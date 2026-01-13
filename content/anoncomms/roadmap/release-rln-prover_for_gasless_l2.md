# [Release RLN Prover for gasless L2 transactions](https://github.com/logos-co/anoncomms-pm/milestone/4)

**Estimated date of completion**: 31 January 2026

**Resources Required**:
- 2 developers for 10 weeks

We've previously merged the rln-prover to the
[Status L2 monorepo](https://github.com/status-im/status-network-monorepo/pull/54) to support gasless L2 operations,
based on Karma balance.

Within this milestone,
the AnonComms team defined work as a service unit in aid of Status Network's requirements.
However, the work here will have wider value for the Logos ecosystem,
not least in making RLN more flexible to allow burning multiple message IDs in a single proof,
deploying a separate RLN prover module,
and proving the application of RLN for fair-use gasless transactions.

By the end of this milestone,
we will have extended the RLN proving stack to support the burning of multiple message IDs in a single proof.
We'll also enable multiple provers to operate on a shared database.
All of this will be specified,
culminating in a whitepaper describing the RLN prover approach to gasless L2 transactions.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the Status L2 team for adaptation-related improvements | Collaboration with the Status L2 team through codebase and document reviews |

## Deliverables

### [Allow multiple RLN provers to share a database](https://github.com/logos-co/anoncomms-pm/issues/11)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F1. The RLN prover module supports gasless L2 operations
- F2. Multiple RLN prover instances can operate on a shared database
- U4. The RLN prover module has an associated specification
- R1. Multiple RLN prover instances operate consistently without database conflicts

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Support burning multiple IDs in a single RLN proof](https://github.com/logos-co/anoncomms-pm/issues/15)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F3. An RLN prover can burn multiple message-ids in a single proof

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Write whitepaper on gasless L2 transactions](https://github.com/logos-co/anoncomms-pm/issues/12)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- S1. A gasless L2 whitepaper is written to document the design and trade-offs

**Checklist**:
- [ ] Docs: link to whitepaper

### [Authenticated connections between prover and slashers](https://github.com/logos-co/anoncomms-pm/issues/16)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- R2. Decentralized slashers establish authenticated connections to the RLN prover to observe proofs and detect spam

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
