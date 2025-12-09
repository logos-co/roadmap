# [Implement MVP payment protocol](https://github.com/logos-co/anoncomms-pm/milestone/5)

**Estimated date of completion**: 31 Mar 2026

**Resources Required**:
- 2 developers for 16 weeks

For many core Logos applications, incentivising the provision of services is necessary to establish a sustainable infrastructure.
In Waku protocols, for example, services like Store and Lightpush depends on our own infrastructure nodes or a few altruistic providers.
This results in single points of failure and a vulnerability to censorship attacks.
The first step to incentivisation is to define a privacy-preserving payment protocol by which clients can pay specific service providers in a decentralised setting.

By the end of this milestone, we will have specified and implemented a privacy-preserving payment protocol for service incentivisation.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on Nescience/Nomos for privacy-preserving execution environment | Produce functional specification for smart contract quickly to discuss with Nescience team and establish joint roadmap |

## Deliverables

### [Specify MVP payment protocol](https://github.com/logos-co/anoncomms-pm/issues/10)

**Owner**: AnonComms Incentivisation

**Feature**: [Incentivisation](../furps/incentivisation.md)

**FURPS**:

- U1. The payment protocol is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Implement MVP payment protocol

**Owner**: AnonComms Incentivisation

**Feature**: [Incentivisation](../furps/incentivisation.md)

**FURPS**:

- F1. Client nodes can pay service nodes for decentralised services
- F2. The payment protocol is mostly off-chain (no on-chain transaction necessary per service request)
- F3. The payment protocol protects the privacy of the client by unlinking the payment from the service provision

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
