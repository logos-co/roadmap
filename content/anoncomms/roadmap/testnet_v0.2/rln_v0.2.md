# [RLN Track: Testnet v0.2](https://github.com/logos-co/anoncomms-pm/milestone/14)

**Track:** [RLN Track](/anoncomms/roadmap/rln.md)

**FURPS:** [RLN FURPS](/anoncomms/furps/rln.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- `1` developers for `12` weeks

## Deliverables

### [Specify RLN membership allocation service](https://github.com/logos-co/anoncomms-pm/issues/17)

**Owner**: AnonComms Zerokit-RLN

**Feature**: [RLN](/anoncomms/furps/rln.md)

**FURPS**:

- F1. An RLN membership allocation service can register ID commitments on behalf of third parties
- F2. The RLN membership allocation service has a pluggable authentication mechanism to determine eligibility for membership
- F4. The RLN membership allocation service can run as a standalone module or mounted on existing modules
- U1. The RLN membership allocation protocol is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Demo integration of RLN membership allocation in Logos Delivery for Mix DoS protection](https://github.com/logos-co/anoncomms-pm/issues/46)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F3. Logos modules can use the service as client to obtain adequate registered RLN identities without interacting with the contract
- U2. Logos Delivery and Chat can use the service to obtain RLN memberships

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement RLN contract for Logos Execution Zone](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F5. Logos modules can read the on-chain Merkle root and proofs
- U3. The RLN contract is implemented for Logos Execution Zone

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
