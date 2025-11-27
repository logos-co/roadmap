# Releasing_zerokit-v1-and-rln-prover

**Estimated date of completion**: 31 January 2026

**Resources Required**:
- 3 developers for 10 weeks

[Zerokit](https://github.com/vacp2p/zerokit) is a collection of Zero Knowledge modules
that focus on RLN, developed in Rust, is intended for integration with various system programming environments.

Previously, we released Zerokit v0.9.0, which supports improved CI, optimized,
partially BE support and research on FFI improvements also release and merge rln-prover to the
[Status L2 monorepo](https://github.com/status-im/status-network-monorepo/pull/54).

By the end of this milestone, we will deliver Zerokit v1 and begin advancing the next version.
This includes big-endian support, research on faster proving methods, an improved FFI interface, and multi-burn message-id support.

We will also release the shared-database module that enables multiple provers to operate together,
along with its specification and whitepaper.


## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Dependency on the Status L2 team for adaptation-related improvements | Collaboration with the Status L2 team through codebase and document reviews |

## Deliverables

### Wasm FFI Rework

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- U2. A developer can use BE for FFI, including WASM targets

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Public API Rework

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F1. The public API is defined in a specification
- F6. A public API implementation is available
- U1. The public API specification provides an easy-to-use interface for developers

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Shared database for multi-prover

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F2. The RLN prover module specification describes gasless L2 operation
- F3. The specification describes how multiple RLN prover instances can operate on a shared database
- F5. Multiple RLN prover instances can operate on a shared database
- R1. The specification describes consistency requirements for shared-database operation
- R2. Multiple RLN prover instances operate consistently without database conflicts

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Releasing multi-id burnt feature

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F4. An RLN prover can burn multiple message-ids in a single proof

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Delivering gasless L2 Whitepaper

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- S1. A gasless L2 whitepaper is written to document the design and trade-offs 

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Docs: links to README.md or other docs
