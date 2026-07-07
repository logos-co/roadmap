# De-MLS Track

de-MLS is a decentralized, scalable, end-to-end encrypted (E2EE) group messaging application.
The goal of this track is to specify and implement the LIP that outlines
decentralized, secure, and scalable group key generation,
designed to accommodate large numbers of users within a single group.

Previously, we released the multi-steward de-MLS LIP, including consensus implementation.
The implementation plan is to release support for multiple stewards with a single consensus version
by operating across the Logos Messaging network.

Within this track, we aim to specify and implement
core de-MLS functionality with multi-steward support.
This includes a public API wrapping the functionality.

## Roadmap

**FURPS**: [De-MLS FURPS](/anoncomms/furps/de-mls.md)

**Scheduled milestones**:
- [Testnet v0.1](/anoncomms/roadmap/testnet_v0.1/de-mls_v0.1.md)
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/de-mls_v0.2.md)
- [Testnet v0.3](/anoncomms/roadmap/testnet_v0.3/de-mls_v0.3.md)

Future work in this track, include:
1. Longer term benchmarking and testing to improve the efficiency and scalability of the consensus and messaging protocol.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the Logos Chat team for adaptation-related improvements | Collaboration with the Logos Chat team through codebase reviews |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |