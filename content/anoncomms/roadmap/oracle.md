# Oracle track

An oracle plays a critical role in extending the capabilities of LEZ (Logos Execution Zone) by enabling access to external data.

Within this track, we focus on building a native oracle system for LEZ using Rust across both off-chain nodes and the on-chain program.
The work includes (i) a pre-study to define stablecoin requirements and evaluate efficient signature schemes,
(ii) an RFC specifying the architecture, including off-chain consensus, node responsibilities, data sourcing, and on-chain interfaces, and
(iii) a PoC implementing a minimal system with simple price feeds, a small validator set, and on-chain price update/read functionality.

## Roadmap

**FURPS**: [Oracle FURPS](../furps/oracle.md)

**Scheduled milestones**:
- [Testnet v0.2](./testnet_v0.2/rln_v0.2.md)

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the LEZ for possible bugs | Collaboration with the LEZ and smart contract team through codebase and document reviews |

## Deliverables

### [Specifying oracle mechanism](https://github.com/logos-co/anoncomms-pm/issues/)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](../furps/oracle.md)

**FURPS**:

- U1. The system design is documented in an RFC


**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs

### [Implementing Oracle poc node](https://github.com/logos-co/anoncomms-pm/issues/)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](../furps/oracle.md)

**FURPS**:

- F1. Oracle nodes fetch price data from predefined sources
- F2. Each oracle node signs its observation and participates in a simple off-chain consensus with a threshold
- F3. The agreed value is written to the LEZ contract
- U2. The oracle nodes is implemented in Rust

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implementing Oracle LEZ part](https://github.com/logos-co/anoncomms-pm/issues/)

**Owner**: AnonComms Oracle

**Feature**: [Oracle FURPS](../furps/oracle.md)

**FURPS**:

- F4. The LEZ contract exposes basic functions to update and read the latest price
- P1. Price updates are completed within a reasonable time bound 
- R1. Consensus requires agreement from multiple (majority) nodes
- R2. Basic protection against faulty or inconsistent data via multi-source aggregation.

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs