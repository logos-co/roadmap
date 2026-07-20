# [Oracle Track: Testnet v0.2](https://github.com/logos-co/anoncomms-pm/milestone/13)

**Track:** [Oracle Track](/anoncomms/roadmap/oracle.md)

**FURPS:** [Oracle FURPS](/anoncomms/furps/oracle.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- `1` developers for `12` weeks

## Deliverables

### [Specifying oracle mechanism](https://github.com/logos-co/anoncomms-pm/issues/22)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- U1. The system design is documented in an RFC


**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### [Implementing Oracle poc node](https://github.com/logos-co/anoncomms-pm/issues/23)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- F1. Oracle nodes fetch price data from predefined sources
- F2. Each oracle node signs its observation and participates in a simple off-chain consensus with a threshold
- F3. The agreed value is written to the LEZ contract
- U2. The oracle nodes is implemented in Rust

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implementing Oracle LEZ part](https://github.com/logos-co/anoncomms-pm/issues/24)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- F4. The LEZ contract exposes basic functions to update and read the latest price
- P1. Price updates are completed within a reasonable time bound 
- R1. Consensus requires agreement from multiple (majority) nodes
- R2. Basic protection against faulty or inconsistent data via multi-source aggregation.

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
