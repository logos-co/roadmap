# Mix Track: Testnet v0.2

**Track:** [Mix Track](../mix.md)

**FURPS:** [Mix FURPS](../../furps/mix.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- `2` developers for `16` weeks
- Storage Team researchers ownership of relevant deliverables (see below)

## Deliverables

### Specify and implement extended DoS and exit node abuse protection for libp2p mix

**Owner**: AnonComms Mix

**FURPS**:

- F6. Exit nodes are protected against trivial abuse/overuse from a single user
- F7. The libp2p mixnet is protected against more sophisticated DoS attacks, e.g. coordinated DoS against intermediate nodes
- U7. Extended DoS and exit node abuse prevention mechanisms are published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Add app-layer support for large messages (including large responses)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- F8. An application-level mechanism exists to segment large messages and mixify over multiple paths
- F9. An application-level mechanism exists to segment large responses and coordinating multiple-SURB response paths
- U8. The application-level mechanism to support large messages (requests & responses) is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify and implement cover traffic generation

**Owner**: AnonComms Mix

**FURPS**:

- F10. Nodes can generate cover traffic to increase K-anonymity in the mixnet
- U9. Cover traffic generation is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify and implement hidden services

**Owner**: AnonComms Mix (primary), Storage Team (support)

**FURPS**:

- F11. Providers can anonymously register as a hidden service
- F12. Clients can anonymously discover and access hidden services
- U10. The protocol allowing hidden service provisioning, discovery and access is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Integrate mix into the Logos Chat module

**Owner**: AnonComms Mix

**FURPS**:

- U12. The libp2p mix protocol is integrated into the Logos Chat module

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Experiment with mixifying basic DHT interactions

**Owner**: AnonComms Mix

**FURPS**:

- U11. Basic DHT interactions can be mixified

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
