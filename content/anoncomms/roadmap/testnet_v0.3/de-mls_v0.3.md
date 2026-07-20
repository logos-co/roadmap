# [De-MLS Track: Testnet v0.3](https://github.com/logos-co/anoncomms-pm/milestone/19)

**Track:** [De-MLS Track](/anoncomms/roadmap/de-mls.md)

**FURPS:** [De-MLS FURPS](/anoncomms/furps/de-mls.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- 2 developers for 12 weeks

## Deliverables

### [Implementing a WallClock service for de-MLS timing](https://github.com/logos-co/anoncomms-pm/issues/61)

**Owner**: AnonComms de-MLS

**FURPS**:

- F8. De-MLS obtains the current time through a caller-provided WallClock service instead of hardcoded debug timer values
- S2. The WallClock service provides test implementations that simulate time progression without real-time waits

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implementing recovery mode](https://github.com/logos-co/anoncomms-pm/issues/62)

**Owner**: AnonComms de-MLS

**FURPS**:

- F9. A messaging group can recover from steward liveness failures by triggering a new steward list election

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Integrating de-MLS into libchat](https://github.com/logos-co/anoncomms-pm/issues/63)

**Owner**: AnonComms de-MLS

**FURPS**:

- U10. De-MLS is integrated into libchat using caller-provided services
- R1. De-MLS operates correctly within libchat

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs