# Gasless L2 track

We've previously merged the rln-prover to the
[Status L2 monorepo](https://github.com/status-im/status-network-monorepo/pull/54) to support gasless L2 operations,
based on Karma balance.

Within this track,
the AnonComms team performs work as a service unit in aid of Status Network's requirements.
However, the work here will have wider value for the Logos ecosystem,
not least in making RLN more flexible to allow burning multiple message IDs in a single proof,
deploying a separate RLN prover module,
and proving the application of RLN for fair-use gasless transactions.

Within this track,
we'll also enable multiple provers to operate on a shared database,
extend RLN (and Zerokit) to support burning multiple IDs in a single proof,
and implement a multi-slasher topology.
All of this is published in a specification,
culminating in a whitepaper and academic paper describing the RLN prover approach to gasless L2 transactions.

## Roadmap

**FURPS**: [Zerokit FURPS](/anoncomms/furps/zerokit.md)

**Scheduled milestones**:
- [Testnet v0.1](/anoncomms/roadmap/testnet_v0.1/gasless-l2_v0.1.md)

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the Status L2 team for adaptation-related improvements | Collaboration with the Status L2 team through codebase and document reviews |
