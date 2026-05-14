# [Identity Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Identity Track](/anoncomms/roadmap/identity.md)

**FURPS:** [Identity FURPS](/anoncomms/furps/identity.md)

**Estimated date of completion**: in line with v0.3 freeze

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
- F2. An identity has a stable, long-lived address that does not change when keys rotate or are revoked.
- F3. An identity carries an append-only operation log of credential changes.
- F4. An identity can be created without permission from any third party.
- F5. An identity can hold one or more installation keys.
- F6. A new installation can be added to an identity by an authorised current installation.
- F7. An installation can be revoked by an authorised current installation.
- F8. An identity is consumable by de-MLS to retrieve the key package for an active installation.
- F10. An identity can be discovered by contacts via address share and registry lookup.
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
