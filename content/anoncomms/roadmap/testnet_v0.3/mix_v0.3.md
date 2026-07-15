# [Mix Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- `2` AnonComms Mix developers
- Storage Team ownership of relevant deliverables (see below)
- P2P Team ownership of Logos Mix Module deliverable

## Deliverables

### [Implement LIONESS payload encryption for Sphinx](https://github.com/logos-co/anoncomms-pm/issues/50)

**Owner**: AnonComms Mix (primary), Storage Team (support)

**FURPS**:

- F13. The libp2p mix protocol's payload encryption preserves payload integrity

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Research more advanced cover traffic generation techniques](https://github.com/logos-co/anoncomms-pm/issues/51)

**Owner**: AnonComms Mix (primary)

**FURPS**:

- F17. Nodes can use advanced cover traffic patterns to improve anonymity
- U20. Advanced cover traffic patterns are researched and published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement local reputation mechanism and research advanced DoS protection](https://github.com/logos-co/anoncomms-pm/issues/52)

**Owner**: AnonComms Mix

**FURPS**:

- F16. Mix nodes maintain a local reputation record for peers
- U18. Differentiated RLN rate-limiting based on peer reputation metrics is researched and published
- U19. Non-RLN DoS and Sybil protection approaches are researched and published

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

### [Specify and implement hidden services and research provider anonymity techniques](https://github.com/logos-co/anoncomms-pm/issues/43)

**Owner**: Storage Team (primary), AnonComms Mix (support)

**FURPS**:

- F11. Providers can anonymously register as a hidden service
- F12. Clients can discover and anonymously access hidden services
- U10. The protocol allowing hidden service provisioning, discovery and access is published in a specification
- U17. The anonymity limitations of the mix hidden services approach and alternative provider anonymity techniques are evaluated and published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Integrate mix into the Logos Delivery module](https://github.com/logos-co/anoncomms-pm/issues/53)

**Owner**: Messaging Delivery (primary), AnonComms Mix (support)

**FURPS**:

- U14. The libp2p mix protocol is integrated into the Logos Delivery module with exposure on the Messaging API
- U15. The Logos Chat module provides a user interface to select mix when publishing messages

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Create a standalone Logos Mix Module](https://github.com/logos-co/anoncomms-pm/issues/54)

**Owner**: P2P Team (primary), AnonComms Mix (support)

**FURPS**:

- F14. A standalone Logos Mix module encapsulates the Logos libp2p module with nim-libp2p-mix, RLN-based DoS protection, and cover traffic for Logos Core services
- F15. Applications can route libp2p request-response messages over mix via the Logos Mix module API
- U16. The Logos Mix module API for routing messages over mix is published as a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify a Logos Mix Network opinionated configuration](https://github.com/logos-co/anoncomms-pm/issues/55)

**Owner**: AnonComms Mix

**FURPS**:

- U21. The opinionated protocol stack composition and configuration for a Logos Mix Network is specified

**Checklist**:
- [ ] Specs: link to specs and/or API definition
