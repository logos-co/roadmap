# [Mix Track: Testnet v0.4](https://github.com/logos-co/anoncomms-pm/milestone/26)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- `2` AnonComms Mix developers
- Storage Team ownership of relevant deliverables (see below)
- Messaging Delivery Team support for the combined Mix and Delivery module

## Deliverables

### [Specify hidden services and research provider anonymity techniques](https://github.com/logos-co/anoncomms-pm/issues/43)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- U10. The protocol allowing hidden service provisioning, discovery and access is published in a specification
- U17. The anonymity limitations of the mix hidden services approach and alternative provider anonymity techniques are evaluated and published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### [Specify and implement basic key rotation for forward secrecy](https://github.com/logos-co/anoncomms-pm/issues/90)

**Owner**: AnonComms Mix

**FURPS**:

- F20. Mix nodes rotate their keys so that compromise of a current key does not reveal previously routed traffic
- U24. Basic mix key rotation for forward secrecy is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify and implement Poisson-rate cover traffic generation](https://github.com/logos-co/anoncomms-pm/issues/87)

**Owner**: AnonComms Mix

**FURPS**:

- F17. Nodes generate cover traffic at a Poisson rate rather than a constant rate so that cover and real traffic are indistinguishable in timing
- U20. Poisson-rate cover traffic generation is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Package Mix and Logos Delivery as a single module deployable as entry, exit or intermediate node](https://github.com/logos-co/anoncomms-pm/issues/91)

**Owner**: AnonComms Mix (primary), Messaging Delivery (support)

**FURPS**:

- F21. A single module packaging Mix together with Logos Delivery can operate as an intermediate mix node, an entry node, or an exit node
- F22. Logos Delivery routes Lightpush over Mix within the combined Mix and Delivery module acting as entry and exit node

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Publish a connection management strategy for the Mix and Delivery module (TBD: anoncomms-pm issue)

**Owner**: AnonComms Mix (primary), Messaging Delivery (support)

**FURPS**:

- U25. A connection management strategy for libp2p-based Logos modules, covering Mix and Logos Delivery, is published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
