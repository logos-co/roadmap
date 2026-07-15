# [Service Discovery Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Service Discovery Track](/anoncomms/roadmap/discovery.md)

**FURPS:** [Service Discovery FURPS](/anoncomms/furps/discovery.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- 2 developers for 16 weeks
- DST team ownership of relevant deliverables (see below)

## Deliverables

### [Integrate the standalone service discovery module into Logos Delivery](TBD: anoncomms-pm issue)

**Owner**: AnonComms Discovery

**FURPS**:

- U14. Service discovery is built into Logos Delivery as a separate Logos core module
- U15. Service discovery can be configured in Logos Delivery as alternative ambient peer discovery to discv5

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Benchmark the service discovery module against discv5](TBD: anoncomms-pm issue)

**Owner**: DST Team (primary), AnonComms Discovery (support)

**FURPS**:

- P1. The service discovery module provides comparable performance to discv5 when all nodes support the same service
- P2. The service discovery module performs better than discv5 to find a sparse service
- S2. The service discovery module can be benchmarked in large-scale standalone DST simulations

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Benchmark service discovery performance in Logos Delivery](TBD: anoncomms-pm issue)

**Owner**: DST Team (primary), AnonComms Discovery (support)

**FURPS**:

- P3. Service discovery integrated in Logos Delivery provides comparable performance to discv5 when all nodes support the same service
- P4. Service discovery integrated in Logos Delivery performs better than discv5 to find a sparse service
- S3. Logos Delivery with integrated service discovery can be validated and benchmarked in large-scale DST simulations

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Publish a research post on service discovery for the Logos research blog](TBD: anoncomms-pm issue)

**Owner**: AnonComms Discovery

**FURPS**:

- U16. A research post introducing the service discovery protocol and its implementation, including DST performance results, is published on the Logos research blog

**Checklist**:
- [ ] Docs: links to README.md or other docs

### [Research and publish an anonymity roadmap for service discovery](TBD: anoncomms-pm issue)

**Owner**: AnonComms Discovery

**FURPS**:

- U17. An analysis enumerating privacy-leaking actions in the service discovery protocol is published
- U18. A survey of anonymisation techniques applicable to DHT-based service discovery, including the Octopus protocol and mix-based approaches, is published
- U19. A roadmap for introducing anonymity properties into service discovery, including dependencies on the libp2p mix protocol, is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs
