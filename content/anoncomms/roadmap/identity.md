# Identity Track

Identity is a foundational protocol primitive
that AnonComms tracks and develops in collaboration with a cross-section of Logos teams.
The initial development focuses on the needs of Logos Chat,
but will grow to address requirements by Blockchain (LEZ-account binding), Storage,
and any service that needs Sybil-resistant or stable references to a holder.

The aim of this track is to deliver a minimal but extensible identity primitive (λAccount)
based on a Very Long-lived Address (VLAD) and an append-only operation log of keys,
with the operation log stored in a registry backed by the Logos Execution Zone (LEZ).

The mainnet target is deliberately minimal:
future-proofed VLADs as the index into an LEZ-backed registry
where each entry is a log of keys for the corresponding VLAD.
This is enough to support multi-installation and key revocation
while leaving room for richer features to be layered in post-mainnet
without breaking existing addresses or registries.

The Messaging Chat team owns the libchat-side implementation and has work in flight.
The AnonComms Identity track formally tracks the cross-cutting design
and consolidates the deliverables for mainnet and post-mainnet milestones.

## Roadmap

**FURPS**: [Identity FURPS](/anoncomms/furps/identity.md)

**Scheduled milestones**:
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/identity_v0.2.md)
- [Testnet v0.3](/anoncomms/roadmap/testnet_v0.3/identity_v0.3.md)
- [Mainnet](/anoncomms/roadmap/mainnet/identity_mainnet.md)

**Post-mainnet** features layered on top of the basic identity protocol, without changing existing addresses:
1. External Identifier Associations (EoIs) and consent-based disclosure
2. CAIP-122 sign-in flow
3. Advanced λAccount: full provenance log (plog) with WACC verification scripts and λStorage backend
4. Programmable validation policies including social recovery
5. Post-quantum signatures (ML-DSA-65)
6. Privacy upgrade: encrypted log content and Mix-routed lookups by default

## Risks

| Risk | (Accept, Own, Mitigation) |
|------|----------------------------|
| LEZ-as-Registry feasibility may surface blockers (storage cost, write throughput, indexing) that push mainnet features later than planned | Spike in v0.2; if blockers found, fall back to a DHT-backed registry (built on AnonComms Discovery) and re-baseline timeline |