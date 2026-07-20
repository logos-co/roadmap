# [Service Discovery Track: Testnet v0.1](https://github.com/logos-co/anoncomms-pm/milestone/1)

**Track:** [Service Discovery Track](/anoncomms/roadmap/discovery.md)

**FURPS:** [Service Discovery FURPS](/anoncomms/furps/discovery.md)

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- 3 developers for 16 weeks

## Deliverables

### [Specify basic service discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/1)

**Owner**: AnonComms Discovery

**FURPS**:

- U1. The service discovery protocol is published in a specification
- U4. A forum post introduces the new protocol, explains privacy tradeoffs, and links to spec and PoC implementation

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Build PoC implementation of service discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/2)

**Owner**: AnonComms Discovery

**FURPS**:

- U2. A PoC implementation accompanies the published protocol
- U3. The PoC implementation contains instructions to allow open dogfooding

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify and implement Kad-DHT discovery protocol and API](https://github.com/logos-co/anoncomms-pm/issues/3)

**Owner**: AnonComms Discovery

**FURPS**:

- F1. Libp2p Kad-DHT nodes can advertise their own addresses and capabilities in a signed record
- F2. Libp2p Kad-DHT nodes can discover and validate the signed records of random, advertised peers
- F3. Libp2p Kad-DHT nodes can filter discovered records for specific capabilities
- F4. Libp2p nodes can use a general service discovery API to discover peers with specific capabilities
- U5. A Kad-DHT discovery protocol is published in a specification
- U6. The Kad-DHT discovery API is available in Nim
- U7. The reference Kad-DHT discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement service discovery protocol](https://github.com/logos-co/anoncomms-pm/issues/13)

**Owner**: AnonComms Discovery

**FURPS**:

- F5. The service discovery protocol adapts DISC-NG for Kad-DHT to ensure efficient service discovery
- U8. The reference service discovery implementation is completed in Nim over the nim-libp2p Kad-DHT implementation

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
