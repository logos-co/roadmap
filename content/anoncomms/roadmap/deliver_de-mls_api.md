# Deliver de-MLS API supporting multi-stewards and advanced group management

**Estimated date of completion**: 31 January 2026

**Resources Required**:
- 2 developers for 10 weeks

de-MLS is a decentralized, scalable, end-to-end encrypted (E2EE) group messaging application.
The goal of the project is to specify and implement the RFC that outlines
decentralized, secure, and scalable group key generation,
designed to accommodate large numbers of users within a single group.

Previously, we released the multi-steward de-MLS RFC, including consensus implementation.
The implementation plan is to release support for multiple stewards with a single consensus version
by operating across the Logos messaging network.

By the end of this milestone, we'll have specified and implemented
core de-MLS functionality with multi-steward support.
This includes a public API wrapping the functionality.

Next steps not yet included in this milestone, include:
1. Longer term benchmarking and testing to improve the efficiency and scalability of the consensus and messaging protocol.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the chatSDK team for adaptation-related improvements | Collaboration with the chatSDK team through codebase reviews |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |

## Deliverables

### Specify multi-steward and advanced group management protocol

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- U1. De-MLS protocol with multi-steward support is published in a specification
- U2. The specification describes how members can leave the group
- U3. The specification describes how groups can resync after a state partition
- U4. The specification contains implementation suggestions to guide developers

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Implement de-MLS multi-steward and advanced group management protocol

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- F1. A messaging group can have multiple stewards
- F2. A member can leave a messaging group
- F3. Groups can resync after state partition
- U6. De-MLS is implemented in Rust
- P1. The consensus mechanism is scalable to groups of 10000 members
- P2. The integrated de-MLS protocol is scalable to groups of 10000 members
- P3. Group state can be updated within a reasonable amount of time

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify and implement de-MLS API

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- U5. An API spec is published that exposes de-MLS functionality and abstracts consensus
- U7. The De-MLS API is available in Rust and C

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Separate Hashgraph-like consensus crate

**Owner**: AnonComms de-MLS

**Feature**: [de-MLS FURPS](../furps/de-mls.md)

**FURPS**:

- S1. Hashgraph-like consensus is separated out into its own library for modularity

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs