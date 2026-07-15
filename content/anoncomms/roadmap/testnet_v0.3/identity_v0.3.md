# [Identity Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Identity Track](/anoncomms/roadmap/identity.md)

**FURPS:** [Identity FURPS](/anoncomms/furps/identity.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- 1 AnonComms researcher for review
- Messaging Chat team ownership of libchat-side deliverables

This milestone delivers the first λAccount V1 implementation:
VLAD-compatible addresses,
the append-only operation log of keys,
and a working contact-discovery flow.

## Deliverables

### [Implement basic λAccount library](TBD: logos-messaging/pm issue)

**Owner**: Messaging Chat

**FURPS**:
- F2. An account has a stable, long-lived address that does not change when keys rotate or are revoked.
- F3. An account carries an append-only operation log of credential changes.
- F4. An account can be created without permission from any third party.
- F5. An account can hold one or more keys.
- F6. A new key can be added to an account.
- F7. A key can be revoked from the account.
- F8. Given an account address, anyone can query for the associated keys.
- F9. Single-key compromise must not permit irreversible account takeover.
- U3. The identity library is implemented in Rust.
- U4. The identity library is available via C-bindings.
- U5. The identity library is integrated into a working Logos Chat module deployed to Logos Core.

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Investigate dedicated Identity Zone for registry](TBD: anoncomms-pm issue)

**Owner**: Messaging Chat

**FURPS**:
- U7. The registry backend choice on the Logos Blockchain (LEZ program vs dedicated Identity Zone) is evaluated and documented.

**Checklist**:
- [ ] Docs: links to README.md or other docs
- [ ] Specs: link to specs and/or API definition

### [Specify registry interface](TBD: anoncomms-pm issue)

**Owner**: Messaging Chat

**FURPS**:
- U2. The registry interface (lookup, write authorisation) is published in a specification.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
