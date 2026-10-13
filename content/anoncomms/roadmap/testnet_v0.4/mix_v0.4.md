# Mix Track: Testnet v0.4 (TBD: anoncomms-pm milestone)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- `2` AnonComms Mix developers
- Storage Team ownership of relevant deliverables (see below)
- P2P Team ownership of Logos Mix module deliverable
- Messaging Delivery Team support for Logos Mix module integration

## Deliverables

### [Specify hidden services and research provider anonymity techniques](https://github.com/logos-co/anoncomms-pm/issues/43)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- U10. The protocol allowing hidden service provisioning, discovery and access is published in a specification
- U17. The anonymity limitations of the mix hidden services approach and alternative provider anonymity techniques are evaluated and published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### Specify and implement basic key rotation for forward secrecy (TBD: anoncomms-pm issue)

**Owner**: AnonComms Mix

**FURPS**:

- F20. Mix nodes rotate their keys so that compromise of a current key does not reveal previously routed traffic
- U24. Basic mix key rotation for forward secrecy is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify and implement Poisson-rate cover traffic generation (TBD: anoncomms-pm issue)

**Owner**: AnonComms Mix

**FURPS**:

- F17. Nodes generate cover traffic at a Poisson rate rather than a constant rate so that cover and real traffic are indistinguishable in timing
- U20. Poisson-rate cover traffic generation is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Simplify the Logos Mix module architecture and use it as entry and exit node for Logos Delivery (TBD: anoncomms-pm issue)

**Owner**: P2P Team (primary), AnonComms Mix (support), Messaging Delivery (support)

**FURPS**:

- F21. A single Logos Mix module can operate as an intermediate mix node, an entry node, or an exit node
- F22. Logos Delivery routes Lightpush over Mix through the Logos Mix module acting as entry and exit node
- S1. Mix, mix RLN DoS protection and mix node discovery are provided to Logos Delivery by the Logos Mix module rather than by implementations integrated into Logos Delivery

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
