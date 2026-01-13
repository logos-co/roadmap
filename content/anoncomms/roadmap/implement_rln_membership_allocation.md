# [Implement RLN membership allocation service for Logos Core](https://github.com/logos-co/anoncomms-pm/milestone/7)

**Estimated date of completion**: 31 May 2026

**Resources Required**:
- 1 developers for 20 weeks

RLN is becoming an integral component for many Logos core modules and applications.
Amongst others, it is used to rate limit Logos Messaging, including the in-progress Chat SDK,
and is earmarked as the probable DoS-protection method for the libp2p mixnet.
Although RLN proof generation and verification is reaching some maturity,
the primary obstacle to RLN adoption is the necessity for each participant to obtain an on-chain membership
for each RLN-protected service.
Furthermore, the RLN implementation and contracts have been developed for a public EVM-based environment
and is not yet ready for the Logos and LSSA ecosystem.

By the end of this milestone, we will have specified and implemented a modular RLN membership allocation protocol
that allows service modules to register and distribute memberships to eligible third parties in a privacy-preserving manner.
Furthermore, the existing RLN contract(s) will be ported to an LSSA-based execution environment.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on LSSA for privacy-preserving execution environment | Interact with LSSA, Smart Contracts and Service Incentivisation teams to build LSSA expertise |

## Deliverables

### [Specify and implement RLN membership allocation service](https://github.com/logos-co/anoncomms-pm/issues/17)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [RLN](../furps/rln.md)

**FURPS**:

- F1. An RLN membership allocation service can register ID commitments on behalf of third parties
- F2. The RLN membership allocation service has a pluggable authentication mechanism to determine eligibility for membership
- F3. Logos modules can use the service to obtain adequate registered RLN identities without interacting with the contract
- F4. The Logos module IP is not linkable to any of its on-chain RLN identities
- U1. The RLN membership allocation protocol is published in a specification
- U2. Logos Messaging and Chat SDK can use the service to obtain RLN memberships

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement RLN contract in LSSA](https://github.com/logos-co/anoncomms-pm/issues/18)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [RLN](../furps/rln.md)

**FURPS**:

- U3. The RLN contract is implemented in LSSA

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
