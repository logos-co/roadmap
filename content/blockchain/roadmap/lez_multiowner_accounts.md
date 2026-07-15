# LEZ Multi-owner Accounts

## Resources Required

- 1 Researcher
- 1 Engineer

## Risks

- Supporting multiple owners must not leak the membership or size of the owner set
- Authorization scheme must keep circuit changes minimal to avoid proving-time regressions

## Deliverables

### Multi-owner Private Accounts

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Allow a single private account to be owned by multiple users, enabling shared accounts where spends require authorization from the owner set. Authorization is expressed through multi-signatures so that group ownership is supported with minimal changes to the existing account circuits.

**Checklist**:
- [x] Multi-owner ownership approaches documented
- [x] Multi-signature authorization spec
- [x] Multi-owner account implementation
