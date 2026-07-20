# [Identity Track: Mainnet](TBD: anoncomms-pm milestone)

**Track:** [Identity Track](/anoncomms/roadmap/identity.md)

**FURPS:** [Identity FURPS](/anoncomms/furps/identity.md)

**Estimated date of completion**: mainnet launch

**Resources Required**:
- 1 AnonComms engineer for protocol hardening
- Messaging Chat team

This milestone hardens the v0.3 implementation with a Logos Blockchain-backed registry,
focuses on production quality and ships the deliberately minimal basic identity scheme:
future-proofed VLAD as the index,
Logos Blockchain-backed registry,
per-VLAD log of keys,
multi-installation support,
and key revocation.

## Deliverables

### [Mainnet deployment with Logos Blockchain-backed registry](TBD: anoncomms-pm issue)

**Owner**: Messaging Chat (primary), AnonComms Identity (review)

**FURPS**:
- U6. The registry is implemented on the Logos Blockchain (as an LEZ program or as a dedicated Identity Zone).
- R1. Account operation logs are durably stored forever in a registry.
- P1. A registry lookup of an account's current state completes within a bounded time under typical network conditions.
- P2. Account creation completes within a few seconds on a typical client.

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
