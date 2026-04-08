# [Mix Track: Testnet v0.2](https://github.com/logos-co/anoncomms-pm/milestone/12)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- `2` developers for `16` weeks
- Storage Team researchers ownership of relevant deliverables (see below)

## Deliverables

### [Specify and implement extended DoS and exit node abuse protection for libp2p mix](https://github.com/logos-co/anoncomms-pm/issues/40)

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

### [Add app-layer support for large messages (including large responses)](https://github.com/logos-co/anoncomms-pm/issues/41)

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

### [Modify Sphinx payload encryption to preserve payload integrity](https://github.com/logos-co/anoncomms-pm/issues/49)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- F13. The libp2p mix protocol's payload encryption preserves payload integrity

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic

### [Specify and implement cover traffic generation](https://github.com/logos-co/anoncomms-pm/issues/42)

**Owner**: AnonComms Mix

**FURPS**:

- F10. Nodes can generate cover traffic to increase K-anonymity in the mixnet
- U9. Cover traffic generation is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify and implement hidden services](https://github.com/logos-co/anoncomms-pm/issues/43)

**Owner**: AnonComms Mix (primary), Storage Team (support)

**FURPS**:

- F11. Providers can anonymously register as a hidden service
- F12. Clients can discover and anonymously access hidden services
- U10. The protocol allowing hidden service provisioning, discovery and access is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Integrate mix into the Logos Chat module](https://github.com/logos-co/anoncomms-pm/issues/44)

**Owner**: AnonComms Mix

**FURPS**:

- U12. The libp2p mix protocol is integrated into the Logos Chat module

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Experiment with mixifying basic DHT interactions](https://github.com/logos-co/anoncomms-pm/issues/45)

**Owner**: AnonComms Mix

**FURPS**:

- U11. Basic DHT interactions can be mixified

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
