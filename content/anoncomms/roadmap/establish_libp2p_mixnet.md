# [Establish libp2p mixnet for Logos Core](https://github.com/logos-co/anoncomms-pm/milestone/2)

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- `1` developers for `16` weeks

Anonymous routing is a basic requirement to provide network-level anonymity for Logos modules.
The first step is to provide sender anonymity via a [libp2p mix protocol](https://rfc.vac.dev/vac/raw/mix/) that was previously delivered.
However, this protocol lacks a mechanism to protect the mix network from DoS attacks.
It's also not been generalised to more Logos use cases outside of its [integration for Waku Lightpush](https://github.com/waku-org/specs/blob/master/standards/core/mix.md).

By the end of this milestone, we'll have basic mix capability available in nim-libp2p
for use by Logos Core services.
This includes basic protection against DoS and 50% + 1 Sybil attacks.
The DoS and Sybil protection mechanism(s) will be published separately
as pluggable extensions to the libp2p mix specification.
This will allow us to roughly prioritise features that will be useful for other Logos use cases,
which will be published in a roadmap.

Next steps not yet included in this milestone (see [Roadmap deliverable](#publish-mix-roadmap-for-other-logos-use-cases)) include:
1. Introducing longer-lived mix circuits
2. Introducing multiple mix layers for multiple packet sizes
3. Generating cover traffic
4. Achieving service provider/receiver anonymity
5. Incentivising mix participation

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
|  |  |

## Deliverables 

### Create demo chat app in Logos Core for messaging over libp2p mix

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- U5. A Logos Core demo chat app showcases message publishing over libp2p mix
- U6. The Logos Core demo chat app discovers mix nodes using libp2p kad-dht discovery with filtering

**Notes**:

This deliverable is aimed for inclusion in the Logos testnet in Feb 2026.
It showcases basic publishing over mix for Logos Core,
and building mix paths using libp2p kad-dht as underlying discovery mechanism.
Sybil and DoS protection is out of scope for this deployment.

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Specify DoS and Sybil protection protocol for libp2p mix](https://github.com/logos-co/anoncomms-pm/issues/9)

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- U1. The libp2p mix protocol and pluggable DoS and Sybil protection is published in specifications

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Implement DoS and Sybil protection protocol for libp2p mix

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- F3. The libp2p mixnet is protected against trivial DoS attacks
- F4. The libp2p mixnet is protected against a 50% + 1 Sybil attack
- U2. The libp2p mix protocol with DoS and Sybil protection is integrated in nim-libp2p
- U3. The libp2p mix protocol with DoS and Sybil protection is integrated into Waku Lightpush protocol as reference integration

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Integrate mix with Sybil and DoS protection into libp2p module

**Owner**: AnonComms Mix

**Feature**: [Mix](../furps/mix.md)

**FURPS**:

- F1. Nodes can mixify individual libp2p protocol messages for anonymous routing over a libp2p mixnet
- F2. Nodes can mixify libp2p request-response interactions for anonymous routing over a libp2p mixnet
- F5. Nodes can discover other nodes that support mix using available peer discovery mechanisms
- U4. A libp2p module with mix capability is integrated into Logos Core

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
4. Achieving service/receiver anonymity, e.g. via Tor-like "rendezvous" points
5. Incentivised mix participation
etc.

**Checklist**:
- [ ] Docs: Forum Post or Github issue
