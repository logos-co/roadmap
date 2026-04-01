# [De-MLS Track: Testnet v0.2](https://github.com/logos-co/anoncomms-pm/milestone/9)

**Track:** [De-MLS Track](/anoncomms/roadmap/de-mls.md)

**FURPS:** [De-MLS FURPS](/anoncomms/furps/de-mls.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- 2 developers for 16 weeks
- Messaging Chat team ownership of relevant deliverables (see below)

## Deliverables

### [Specify multi-steward and advanced group management protocol](https://github.com/logos-co/anoncomms-pm/issues/6)

**Owner**: AnonComms de-MLS

**FURPS**:

- U1. De-MLS protocol with multi-steward support is published in a specification
- U2. The specification describes peer scoring
- U3. The specification describes steward lists and election process
- U4. The specification describes different conflict resolution and recovery mechanisms

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### [Implement de-MLS peer scoring](https://github.com/logos-co/anoncomms-pm/issues/25)

**Owner**: AnonComms de-MLS

**FURPS**:

- F1.A messaging group can use peer scoring to track bad behaviour and remove misbehaving members

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement de-MLS multi-stewards](https://github.com/logos-co/anoncomms-pm/issues/26)

**Owner**: AnonComms de-MLS

**FURPS**:

- F2. A messaging group can use steward list to elect and function with multiple stewards
- F3. Messaging groups with multiple stewards can deterministically handle multiple commits
- F4. Messaging groups with multiple stewards can trigger and recover from a partial freeze to resolve basic conflicts

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement de-MLS recovery mode](https://github.com/logos-co/anoncomms-pm/issues/27)

**Owner**: AnonComms de-MLS

**FURPS**:

- F5. Messaging groups have a recovery mode to deal with more serious unexpected group states

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Allow de-MLS new joiners to sync group state](https://github.com/logos-co/anoncomms-pm/issues/28)

**Owner**: AnonComms de-MLS

**FURPS**:

- F6. New joiners can properly setup the group state after being accepted into the group

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implement a de-MLS commit validation service](https://github.com/logos-co/anoncomms-pm/issues/29)

**Owner**: AnonComms de-MLS

**FURPS**:

- F7. Commits can be validated and violations appropriately handled

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Integrate de-MLS into Logos Chat](https://github.com/logos-co/anoncomms-pm/issues/30)

**Owner**: Messaging Chat (primary), AnonComms de-MLS (support)

**FURPS**:

- U6. De-MLS is implemented in Rust
- U8. De-MLS is included in the Logos Chat protocol stack specification
- U9. De-MLS is integrated into a working Logos Chat module deployed to Logos Core
- P1. The consensus mechanism is scalable to groups of 10000 members
- P2. The integrated de-MLS protocol is scalable to groups of 10000 members
- P3. Group state can be updated within a reasonable amount of time

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs