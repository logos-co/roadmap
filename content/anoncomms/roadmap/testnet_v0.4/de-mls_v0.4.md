# [De-MLS Track: Testnet v0.4](https://github.com/logos-co/anoncomms-pm/milestone/28)

**Track:** [De-MLS Track](/anoncomms/roadmap/de-mls.md)

**FURPS:** [De-MLS FURPS](/anoncomms/furps/de-mls.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- 2 developers for 8 weeks

## Deliverables

### [Harden the de-MLS integration in libchat](https://github.com/logos-co/anoncomms-pm/issues/88)

**Owner**: AnonComms de-MLS

**FURPS**:

- R2. De-MLS handles malformed or unexpected protocol messages without aborting the host application
- R3. De-MLS groups remain consistent across repeated join, invite and leave operations

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Build de-MLS commit ordering on SDS (TBD: anoncomms-pm issue)

**Owner**: AnonComms de-MLS (primary), Messaging Chat (support)

**FURPS**:

- F10. De-MLS orders MLS commits over SDS, assuming group members are honest but possibly faulty
- U11. The SDS configuration required for de-MLS commit ordering, and any gaps in SDS for this use, are investigated and published
- R4. A de-MLS group of 50 members remains consistent and operational over one week of continuous use

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
