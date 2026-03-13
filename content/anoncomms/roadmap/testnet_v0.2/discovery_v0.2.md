# Capability Discovery Track: Testnet v0.2

**Track:** [Capability Discovery Track](../discovery.md)

**FURPS:** [Capability Discovery FURPS](../furps/discovery.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- 3 developers for 16 weeks
- P2P team ownership of relevant deliverables (see below)
- DST team ownership of relevant deliverables (see below)

## Deliverables

### Integrate and dogfood capability discovery in Logos Delivery

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U9. Capability discovery is integrated in Logos Delivery to replace discv5 discovery
- U13. Capability discovery is integrated into `chat2mix` application for dogfooding

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify standalone capability discovery API

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U11. The capability discovery API is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Allow client mode for discovery without Kad-DHT participation

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- F6. Client nodes can discover addresses of peers with specific capabilities without participating in the Kad-DHT

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Implement extensible peer record library for discoverable records

**Owner**: AnonComms Discovery

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U12. An extensible peer record library allows application modules to create and maintain discoverable records

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Implement standalone Logos capability discovery module

**Owner**: P2P Team (primary), AnonComms Discovery (support)

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- U10. The capability discovery module is available as a Logos Core module

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Large scale benchmarking of the capability discovery module

**Owner**: DST Team (primary), AnonComms Discovery (support)

**Feature**: [Capability Discovery](../furps/discovery.md)

**FURPS**:

- P1. Capability discovery provides comparable performance to discv5 when all nodes support the same service
- P2. Capability discovery performs better than discv5 to find a sparse service
- S1. Capability discovery can be benchmarked in large scale Delivery module simulations
- S2. Capability discovery can be benchmarked in a standalone p2p capability discovery module

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
