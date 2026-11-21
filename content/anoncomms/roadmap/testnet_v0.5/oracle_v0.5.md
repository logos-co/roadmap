# Oracle Track: Testnet v0.5 (TBD: anoncomms-pm milestone)

**Track:** [Oracle Track](/anoncomms/roadmap/oracle.md)

**FURPS:** [Oracle FURPS](/anoncomms/furps/oracle.md)

**Estimated date of completion**: Testnet v0.5 launch

**Resources Required**:
- `2` developers for `8` weeks

## Deliverables

### Bump the Oracle Zone to LEZ v0.2 (TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**FURPS**:

- F3. The LEZ contract exposes basic functions to update and read the latest price
- F5. Oracle nodes interact with LEZ through LEZ TXs signed with their LEZ key, for registration, attestation and disputes
- S3. Oracle Zone components and LEZ contracts are compatible with LEZ v0.2

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact

### Update the LON specification and research signatureless observations (TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**FURPS**:

- U1. The system design is documented in a LIP

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### Implement end-to-end tests for the Oracle Zone (TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**FURPS**:

- R1. Basic protection against faulty or inconsistent data via multi-source aggregation
- F9. Upon the proposer attestation, the LEZ contract initiates a dispute window
- S4. An end-to-end test suite covers the full oracle flow, from price fetching to the price update on LEZ, including the dispute window

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs