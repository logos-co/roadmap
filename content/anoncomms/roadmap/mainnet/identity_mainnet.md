# [Identity Track: Mainnet](TBD: anoncomms-pm milestone)

**Track:** [Identity Track](/anoncomms/roadmap/identity.md)

**FURPS:** [Identity FURPS](/anoncomms/furps/identity.md)

**Estimated date of completion**: mainnet launch

**Resources Required**:
- 1 AnonComms engineer for protocol hardening
- Messaging Chat team

This milestone hardens the v0.3 implementation with LEZ-backing for the registry,
focuses on production quality and ships the deliberately minimal basic identity scheme:
future-proofed VLAD as the index,
LEZ-backed registry,
per-VLAD log of keys,
multi-installation support,
and key revocation.

## Deliverables

### [Mainnet deployment with LEZ-backed registry](TBD)

**Owner**: Messaging Chat (primary), AnonComms Identity (review)

- F9. Identity creation is resistant to trivial Sybil attacks.
- U6. The registry is implemented as an LEZ program.
- P1. A registry lookup of an identity's current state completes within a bounded time under typical network conditions.
- P2. Identity creation completes within a few seconds on a typical client.
