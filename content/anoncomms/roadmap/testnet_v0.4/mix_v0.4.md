# Mix Track: Testnet v0.4 (TBD: anoncomms-pm milestone)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- `2` AnonComms Mix developers
- Storage Team ownership of relevant deliverables (see below)

## Deliverables

### Specify and implement path selection with pool health monitoring (TBD: anoncomms-pm issue)

**Owner**: AnonComms Mix

**FURPS**:

- F18. Nodes select mix paths according to the anonymity and communication requirements of each message or session
- F19. Nodes monitor the health of their mix node pool using loop cover traffic and exclude nodes that appear not to forward traffic from path selection
- U23. Path selection with pool health monitoring is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
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

### Implement local reputation mechanism (TBD: anoncomms-pm issue)

**Owner**: AnonComms Mix

**FURPS**:

- F16. Mix nodes maintain a local reputation record for peers

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Implement hidden services (TBD: anoncomms-pm issue)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- F11. Providers can anonymously register as a hidden service
- F12. Clients can discover and anonymously access hidden services

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
