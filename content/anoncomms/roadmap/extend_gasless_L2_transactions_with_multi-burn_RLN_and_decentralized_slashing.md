# [Extend gasless L2 transactions with multi-burn RLN and decentralized slashing](https://github.com/logos-co/anoncomms-pm/milestone/8)

**Estimated date of completion**: 28 February 2026

**Resources Required**:
- 2 developers for 4 weeks

Within this milestone, the AnonComms team focuses on extending the RLN enforcement layer
to support multi-burn proofs and a dedicated slasher module,
building on prior integration work carried out for Status Network requirements.
While motivated by gasless Status L2 use cases,
the outcomes of this milestone are designed to be reusable across the wider Logos ecosystem.

By the end of this milestone,
the RLN proving stack will support burning multiple message IDs within a single proof,
and an external RLN slasher module will be implemented with authenticated connections to the prover.
This enables decentralized slashers to reliably observe proofs and detect spam in gasless environments.
All components will be fully specified.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the Status L2 team for adaptation-related improvements | Collaboration with the Status L2 team through codebase and document reviews |

## Deliverables

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

### [Authenticated connections between prover and slashers](https://github.com/logos-co/anoncomms-pm/issues/16)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F5. The RLN prover module supports a statically configured authentication mechanism for slasher connections
- R2. Decentralized slashers establish authenticated connections to the RLN prover to observe proofs and detect spam
- R3. Decentralized slashers extract the secret from double-signaled (spammed) proofs to enable slashing

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs