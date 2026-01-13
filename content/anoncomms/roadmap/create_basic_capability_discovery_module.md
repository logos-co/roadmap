# [Create basic capability discovery module for Logos Core](https://github.com/logos-co/anoncomms-pm/milestone/1)

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- 3 developers for 16 weeks

A major cornerstone of the Logos Launch Strategy
is the efficient discovery of core services in a fully decentralised manner.
The current approach to decentralised discovery, random walks over libp2p's Kad-DHT
is not scalable and efficient enough for a diverse ecosystem consisting of multiple services,
facing the [needle-in-a-haystack problem](https://vac.dev/rlog/wakuv2-apd#random-walk-performance-estimation).

By the end of this milestone, we'll have a fully functional, efficient capability discovery module available in Logos Core,
already used by at least nwaku-based modules as primary ambient discovery method.
The new capability discovery protocol will be published as a specification adapting [DISC-NG](https://ieeexplore.ieee.org/document/10629017) for libp2p Kad-DHT.

Next steps not yet included in this milestone, include:
1. Anonymising the discovery protocol, including privacy-preserving discovery requests, anonymous DHT participation, etc.
2. Assisting other Logos teams in integrating the protocol in their own core modules (outside of nwaku integration, which will be the reference integration)
3. Longer term benchmarking and testing to improve the efficiency and scalability of the protocol

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on nim-libp2p for Kad-DHT implementation | Close collaboration with p2p team; specify API before implementation ready to harden interfaces quickly |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |

## Deliverables

### [Specify basic capability discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/1)

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U1. The capability discovery protocol is published in a specification
- U4. A forum post introduces the new protocol, explains privacy tradeoffs, and links to spec and PoC implementation

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Build PoC implementation of capability discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/2)

**Owner**: AnonComms Discovery

**Feature**: [Link to FURPS](/FURPS/link/to/furps.md)

**FURPS**:

U2. A PoC implementation accompanies the published protocol
U3. The PoC implementation contains instructions to allow open dogfooding

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify and implement Kad-DHT discovery protocol and API](https://github.com/logos-co/anoncomms-pm/issues/3)

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- F1. Libp2p Kad-DHT nodes can advertise their own addresses and capabilities in a signed record
- F2. Libp2p Kad-DHT nodes can discover and validate the signed records of random, advertised peers
- F3. Libp2p Kad-DHT nodes can filter discovered records for specific capabilities
- F4. Libp2p nodes can use a general capability discovery API to discover peers with specific capabilities
- U5. A Kad-DHT discovery protocol and API is published in a specification
- U6. The general capability discovery API is available in Nim and C
- U7. The reference Kad-DHT discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Integrate Logos Discovery module within Logos Core

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U10. The reference discovery module is integrated into Logos Core

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement capability discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/13)

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- F5. The capability discovery protocol adapts DISC-NG for Kad-DHT to ensure efficient capability discovery 
- F6. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT
- U8. The reference capability discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Replace discv5 in nwaku with new capability discovery protocol

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U9. The reference implementation is integrated in nwaku to replace discv5 discovery

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
