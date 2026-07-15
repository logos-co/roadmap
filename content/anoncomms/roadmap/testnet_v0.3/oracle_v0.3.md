# [Oracle Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Oracle Track](/anoncomms/roadmap/oracle.md)

**FURPS:** [Oracle FURPS](/anoncomms/furps/oracle.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- `2` developers for `12` weeks

## Deliverables

### [Specifying oracle mechanism](TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- U1. The system design is documented in a LIP
- U3. The fetch mechanism is specified and documented


**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### [Implementing Oracle Zone](TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- F1. Oracle nodes fetch price data from predefined sources
- F2. Indexer performs onchain aggregation of signed node data
- F4. Oracle nodes fetch price data from predefined sources according to a defined fetch specification
- U2. The oracle nodes and indexer are implemented in Rust
- R1. Basic protection against faulty or inconsistent data via multi-source aggregation
- S1. Oracle node and indexer operations are logged to enable debugging of fetch and aggregation failures
- S2. PACT cross-zone transaction failures are logged with sufficient detail for diagnosis

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Bringing Data from Oracle zone to LEZ](TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- F3. The LEZ contract exposes basic functions to update and read the latest price
- F5. Cross zone TX enables provable atomic cross-zone transactions between oracle zone and LEZ
- U4. Atomic cross zone TX is deployed for cross-zone interactions involving the oracle zone


**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Oracle Zone Documentation and Benchmarking](TBD: anoncomms-pm issue)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](/anoncomms/furps/oracle.md)

**FURPS**:

- U5. Developer documentation for the Oracle Zone is published in a document
- U6. Benchmark results for the Oracle Zone are published in a research blog
- P1. Price updates are completed within a reasonable time bound
- P2. Cross-zone transaction latency is benchmarked


**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs