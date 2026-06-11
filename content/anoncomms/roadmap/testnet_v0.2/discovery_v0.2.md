# [Service Discovery Track: Testnet v0.2](https://github.com/logos-co/anoncomms-pm/milestone/10)

**Track:** [Service Discovery Track](/anoncomms/roadmap/discovery.md)

**FURPS:** [Service Discovery FURPS](/anoncomms/furps/discovery.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- 3 developers for 16 weeks
- P2P team ownership of relevant deliverables (see below)
- DST team ownership of relevant deliverables (see below)

## Deliverables

### [Integrate and dogfood service discovery in Logos Delivery](https://github.com/logos-co/anoncomms-pm/issues/31)

**Owner**: AnonComms Discovery

**FURPS**:

- U9. Service discovery is integrated in Logos Delivery to discover libp2p mix nodes
- U13. Service discovery is integrated into `chat2mix` application for dogfooding

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify standalone service discovery API](https://github.com/logos-co/anoncomms-pm/issues/32)

**Owner**: AnonComms Discovery

**FURPS**:

- U11. The service discovery API is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Allow client mode for discovery without Kad-DHT participation](https://github.com/logos-co/anoncomms-pm/issues/33)

**Owner**: AnonComms Discovery

**FURPS**:

- F6. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement extensible peer record library for discoverable records](https://github.com/logos-co/anoncomms-pm/issues/34)

**Owner**: AnonComms Discovery

**FURPS**:

- U12. An extensible peer record library allows application modules to create and maintain discoverable records

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement standalone Logos service discovery module](https://github.com/logos-co/anoncomms-pm/issues/35)

**Owner**: P2P Team (primary), AnonComms Discovery (support)

**FURPS**:

- U10. The service discovery module is available as a Logos Core module

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Validate service discovery protocol correctness in large-scale simulations](https://github.com/logos-co/anoncomms-pm/issues/36)

**Owner**: DST Team (primary), AnonComms Discovery (support)

**FURPS**:

- F7. Service discovery correctly discovers all advertised peers in a topology of several thousand nodes
- F8. Service discovery correctly discovers peers advertising a sparse service in a topology of several thousand nodes
- S1. Service discovery can be functionally validated in large-scale standalone DST simulations

**Checklist**:
- [ ] Docs: links to README.md or other docs
