# RLN Track: Testnet v0.4 (TBD: anoncomms-pm milestone)

**Track:** [RLN Track](/anoncomms/roadmap/rln.md)

**FURPS:** [RLN FURPS](/anoncomms/furps/rln.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- `2` AnonComms Zerokit-RLN developers

With RLN registration and membership management now running on LEZ,
the cost of on-chain registrations and of the RLN program itself on LEZ may be too high for routine use.
This milestone revisits the on-chain design for memberships and accounting so that it stays compatible with Logos zones and LEZ.
Candidate designs include using LEZ only for staking with a dedicated membership zone on Logos Blockchain,
but the design is not fixed at this stage.

## Deliverables

### [Standalone RLN membership allocation service module with end-to-end membership allocation](https://github.com/logos-co/anoncomms-pm/issues/81)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F1. An RLN membership allocation service can register ID commitments on behalf of third parties
- F2. The RLN membership allocation service has a pluggable authentication mechanism to determine eligibility for membership
- F4. The RLN membership allocation service can run as a standalone module or mounted on existing modules
- F10. An RLN membership can be allocated end-to-end, from a client request through the allocation service to a registered membership usable by the RLN module

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Specify and implement RLN on-chain memberships and accounting compatible with Logos zones and LEZ (TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F11. RLN memberships are registered and accounted for on Logos Blockchain in a way that is compatible with Logos zones and LEZ
- U7. The RLN on-chain membership and accounting design for Logos Blockchain is published in a specification
- P1. The cost of registering and maintaining an RLN membership is low enough for routine use by Logos modules and their users

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
