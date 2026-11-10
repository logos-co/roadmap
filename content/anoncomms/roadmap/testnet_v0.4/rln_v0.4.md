# [RLN Track: Testnet v0.4](https://github.com/logos-co/anoncomms-pm/milestone/30)

**Track:** [RLN Track](/anoncomms/roadmap/rln.md)

**FURPS:** [RLN FURPS](/anoncomms/furps/rln.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- `2` AnonComms Zerokit-RLN developers

With RLN registration and membership management now running on LEZ,
the cost of on-chain registrations and of the RLN program itself on LEZ may be too high for routine use.
This milestone specifies a revised on-chain design for memberships and accounting that stays compatible with Logos zones and LEZ;
implementation of that design is scheduled for Testnet v0.5.
Candidate designs include using LEZ only for staking with a dedicated membership zone on Logos Blockchain,
but the design is not fixed at this stage.
In parallel, a second membership registry with its own global epoch size is deployed on the existing LEZ-based setup
to serve mix memberships separately from Logos Delivery memberships.

## Deliverables

### [Standalone RLN membership allocation service module with end-to-end membership allocation](https://github.com/logos-co/anoncomms-pm/issues/95)

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

### [Specify RLN on-chain memberships and accounting compatible with Logos zones and LEZ](https://github.com/logos-co/anoncomms-pm/issues/96)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- U7. The RLN on-chain membership and accounting design for Logos Blockchain is published in a specification

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Deploy a second RLN membership registry and allocation service for mix memberships (TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit-RLN (primary), AnonComms Mix (support)

**FURPS**:

- F14. Multiple independent RLN membership registries with distinct rate-limit parameters, such as epoch size, can be deployed on the same chain and used by different services
- F15. An RLN membership allocation service instance can be bound to a specific membership registry

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
