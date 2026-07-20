# RLN Track

RLN is becoming an integral component for many Logos core modules and applications.
Amongst others, it is used to rate limit Logos Messaging, including the in-progress Chat module,
and is earmarked as the probable DoS-protection method for the libp2p mixnet.
Although RLN proof generation and verification is reaching some maturity,
the primary obstacle to RLN adoption is the necessity for each participant to obtain an on-chain membership
for each RLN-protected service.
Furthermore, the RLN implementation and contracts have been developed for a public EVM-based environment
and is not yet ready for the Logos and LEZ ecosystem.

Within this track,
we focus on general RLN-related work,
including its usability, reducing barriers of entry,
and maintaining consistent specifications.

## Roadmap

**FURPS**: [RLN FURPS](/anoncomms/furps/rln.md)

**Scheduled milestones**:
- [Testnet v0.1](/anoncomms/roadmap/testnet_v0.1/rln_v0.1.md)
- [Testnet v0.2](/anoncomms/roadmap/testnet_v0.2/rln_v0.2.md)
- [Testnet v0.3](/anoncomms/roadmap/testnet_v0.3/rln_v0.3.md)

Future work in this track, include:
1. Refactoring the RLN specification(s) to a modular stack of RLN features, rather than a confusing array of RLN "versions"
2. Reintroducing RLN slashing for Logos Delivery and RLN-Relay

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on LEE for privacy-preserving execution environment | Interact with LEE, Smart Contracts and Service Incentivisation teams to build LEZ expertise |
