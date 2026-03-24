# Service Incentivisation Track: Testnet v0.2

**Track:** [Service Incentivisation Track](../incentivisation.md)

**FURPS:** [Service Incentivisation FURPS](../../furps/incentivisation.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- 1 developers for 12 weeks

## Deliverables

### Specify on-chain component for payment protocol

**Owner**: AnonComms Incentivisation

**FURPS**:

- U2. The on-chain component of the protocol is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Implement MVP payment protocol

**Owner**: AnonComms Incentivisation

**FURPS**:

- F1. Client nodes can pay service nodes for decentralised services
- F2. The payment protocol is mostly off-chain (no on-chain transaction necessary per service request)
- F3. The payment protocol protects the privacy of the client by unlinking the payment from the service provision
- U3. The off-chain protocol is implemented in Nim
- U4. The on-chain component of the protocol is implemented for Logos Execution Zone

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Create demo payment module for Logos Core

**Owner**: AnonComms Incentivisation

**FURPS**:

- U5. A demo Logos core module demonstrates the payment protocol functioning end-to-end for a service protocol

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
