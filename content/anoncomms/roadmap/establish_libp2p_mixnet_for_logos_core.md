# Establish libp2p mixnet for Logos Core

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- `1` developers for `16` weeks

Anonymous routing is a basic requirement to provide network-level anonymity for Logos modules.
The first step is to provide sender anonymity via a [libp2p mix protocol](https://rfc.vac.dev/vac/raw/mix/) that was previously delivered.
However, this protocol lacks a mechanism to protect the mix network from DoS attacks.
It's also not been generalised to more Logos use cases outside of its [integration for Waku Lightpush](https://github.com/waku-org/specs/blob/master/standards/core/mix.md).

By the end of this milestone, we'll have a basic libp2p mix module available in Logos Core that includes basic DoS protection.
The DoS protection mechanism will be published as an extension to the existing libp2p mix specification.
This will allow us to roughly prioritise features that will be useful for other Logos use cases,
which will be published in a roadmap.

Next steps not yet included in this milestone (see [Roadmap deliverable](#publish-mix-roadmap-for-other-logos-use-cases)) include:
1. Introducing longer-lived mix circuits
2. Introducing multiple mix layers for multiple packet sizes
3. Generating cover traffic
4. Creating "rendezvous" points for service/receiver anonymity
5. Incentivising mix participation

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency or risk 1 | Strategy to mitigate or avoid risk 1 |
| Dependency or risk 2 | Strategy to mitigate or avoid risk 2 |

## Deliverables 

### Specify DoS protection protocol for libp2p mix

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- U1. The libp2p mix protocol with DoS protection is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Implement and integrate DoS protection protocol for libp2p mix

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- F3. The libp2p mixnet is protected against trivial DoS attacks
- U4. Libp2p mix is integrated into Waku Lightpush protocol as reference integration

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Create simple mix module for Logos Core

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- F1. Nodes can mixify individual libp2p protocol messages for anonymous routing over a libp2p mixnet
- F2. Nodex can mixify libp2p request-response interactions for anonymous routing over a libp2p mixnet
- F4. Nodes can discover other nodes that support mix using available peer discovery mechanisms
- U2. A generalised mix API is published in a specification
- U3. The general mix API is available in Nim and C
- U5. A mix API module is integrated into Logos Core

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Publish Mix roadmap for other Logos use cases

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

This should consider e.g. Logos Storage, Blend, and other use cases to establish the priority of, amongst others:
1. Introducing circuits for higher throughput, interactive protocols
2. Introducing multiple mix layers for multiple packet sizes
3. Generating cover traffic
4. Creating "rendezvous" points for service/receiver anonymity
5. Incentivised mix participation
etc.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
