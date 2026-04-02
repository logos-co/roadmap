# [Mix Track: Testnet v0.1](https://github.com/logos-co/anoncomms-pm/milestone/2)

**Track:** [Mix Track](/anoncomms/roadmap/mix.md)

**FURPS:** [Mix FURPS](/anoncomms/furps/mix.md)

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- `1` developers for `16` weeks

## Deliverables

### [Create demo chat app in Logos Core for messaging over libp2p mix](https://github.com/logos-co/anoncomms-pm/issues/14)

**Owner**: AnonComms Mix

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

**FURPS**:

- U1. The libp2p mix protocol and pluggable DoS and Sybil protection is published in specifications

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Implement DoS and Sybil protection protocol for libp2p mix](https://github.com/logos-co/anoncomms-pm/issues/19)

**Owner**: AnonComms Mix

**FURPS**:

- F3. The libp2p mixnet is protected against trivial DoS attacks
- F4. The libp2p mixnet is protected against a 50% + 1 Sybil attack
- U2. The libp2p mix protocol with DoS and Sybil protection is integrated in nim-libp2p
- U3. The libp2p mix protocol with DoS and Sybil protection is integrated into Waku Lightpush protocol as reference integration

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Publish Mix roadmap for other Logos use cases

**Owner**: AnonComms Mix

This should consider e.g. Logos Storage, Blend, and other use cases to establish the priority of, amongst others:
1. Introducing circuits for higher throughput, interactive protocols
2. Introducing multiple mix layers for multiple packet sizes
3. Generating cover traffic
4. Achieving service/receiver anonymity, e.g. via Tor-like "rendezvous" points
5. Incentivised mix participation
etc.

**Checklist**:
- [ ] Docs: Forum Post or Github issue
