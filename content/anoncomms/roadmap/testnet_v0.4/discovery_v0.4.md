# Service Discovery Track: Testnet v0.4 (TBD: anoncomms-pm milestone)

**Track:** [Service Discovery Track](/anoncomms/roadmap/discovery.md)

**FURPS:** [Service Discovery FURPS](/anoncomms/furps/discovery.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- 2 developers for 8 weeks
- DST team ownership of relevant deliverables (see below)

## Deliverables

### Simplify the service discovery module API (TBD: anoncomms-pm issue)

**Owner**: AnonComms Discovery (primary), P2P team (support)

**FURPS**:

- F9. The service discovery module advertises only signed extensible peer records provided by consuming modules and never publishes a record of its own
- F10. A consuming module can refresh its advertised record in place when its addresses or services change
- U20. The service discovery module exposes a minimal synchronous API for advertising, discovering and looking up services

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Benchmark the service discovery module against discv5](https://github.com/logos-co/anoncomms-pm/issues/65)

**Owner**: DST Team (primary), AnonComms Discovery (support)

**FURPS**:

- P1. The service discovery module provides comparable performance to discv5 when all nodes support the same service
- P2. The service discovery module performs better than discv5 to find a sparse service
- S2. The service discovery module can be benchmarked in large-scale standalone DST simulations

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Benchmark service discovery performance in Logos Delivery](https://github.com/logos-co/anoncomms-pm/issues/66)

**Owner**: DST Team (primary), AnonComms Discovery (support)

**FURPS**:

- P3. Service discovery integrated in Logos Delivery provides comparable performance to discv5 when all nodes support the same service
- P4. Service discovery integrated in Logos Delivery performs better than discv5 to find a sparse service
- S3. Logos Delivery with integrated service discovery can be validated and benchmarked in large-scale DST simulations

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs
