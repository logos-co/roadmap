# [RLN Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [RLN Track](/anoncomms/roadmap/rln.md)

**FURPS:** [RLN FURPS](/anoncomms/furps/rln.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- `2` AnonComms Zerokit-RLN developers

## Deliverables

### [Specify basic RLN membership management module API](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- U4. The basic RLN membership management module API is published as a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Implement basic RLN membership management module](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F6. The basic RLN membership management module can register RLN memberships on-chain on behalf of a Logos module
- F7. The basic RLN membership management module stores and manages RLN keys for a Logos module
- F8. The basic RLN membership management module can operate as a client in the libp2p RLN membership allocation protocol

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Migrate Logos Delivery to LEZ-based RLN using the RLN membership management module](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN (primary), Logos Delivery (support)

**FURPS**:

- U2. Logos Delivery and Chat can use the service to obtain RLN memberships
- U5. Logos Delivery uses the basic RLN membership management module and LEZ-based RLN for all membership acquisition and management

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Standalone RLN membership allocation service module](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F1. An RLN membership allocation service can register ID commitments on behalf of third parties
- F2. The RLN membership allocation service has a pluggable authentication mechanism to determine eligibility for membership
- F4. The RLN membership allocation service can run as a standalone module or mounted on existing modules

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Research advanced authentication techniques for RLN membership allocation](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- U6. Advanced authentication mechanisms for RLN membership allocation, including device keys, are evaluated and published

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### [Full RLN module](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F9. The full RLN module encapsulates Zerokit proof generation and verification, expanding the basic RLN membership management module

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
