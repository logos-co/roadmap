# Delivering_multi_steward_support

**Estimated date of completion**: 31 March 2026

**Resources Required**:
- 2 developers for 9 weeks

de-MLS is a decentralized, scalable, end-to-end encrypted (E2EE) group messaging application.
The goal of the project is to specify and implement the RFC that outlines
decentralized, secure, and scalable group key generation,
designed to accommodate large numbers of users within a single group.

Previously, we released the multi-steward de-MLS RFC, including consensus implementation.
The implementation plan is to release multi-steward with a single consensus version by operating across the Waku network.

By the end of this milestone, we'll have core de-MLS and API with multi-steward support RFC and implementation for decentralized group messaging.

Next steps not yet included in this milestone, include:
1. Longer term benchmarking and testing to improve the efficiency and scalability of the consensus and messagaging protocol.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the chatSDK team for adaptation-related improvements | Collaboration with the chatSDK team through codebase reviews |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |

## Deliverables

### Specify Multi-steward protocol

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- F1. A group can have multiple stewards (spec + impl)
- F2. A member can leave a group. (spec + impl) 
- F3. Group state can be updated within a reasonable amount of time
- R1. Groups can be re-synched after state partition. (spec + impl)

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### Specify and Implement de-MLS API

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- F4. An API spec is published that exposes de-MLS functionality and abstracts consensus 
- F5. An API is implemented in Rust and C

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Implement de-MLS Multi-steward

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- F1. A group can have multiple stewards (spec + impl)
- F2. A member can leave a group. (spec + impl) 
- F3. Group state can be updated within a reasonable amount of time

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Separated out Hashgraph-like consensus crate

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- S1. Hashgraph-like consensus is separated out into its own library for modularity
- F4. An API spec is published that exposes de-MLS functionality and abstracts consensus

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs