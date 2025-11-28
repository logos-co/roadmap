# Deliver public Zerokit 1.0 API with big-endian support

**Estimated date of completion**: 31 January 2026

**Resources Required**:
- 2 developers for 10 weeks

[Zerokit](https://github.com/vacp2p/zerokit) is a collection of Zero Knowledge modules
that focus on RLN, developed in Rust, is intended for integration with various system programming environments.

Previously, we released Zerokit v0.9.0, which supports improved CI, optimized,
partially BE support and research on FFI improvements.
By the end of this milestone, we will deliver Zerokit v1 and begin advancing the next version.
This includes big-endian support, an improved FFI interface and multi-id burnt support.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
|  |  |

## Deliverables

### Rework Zerokit WASM FFI

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- F4. The Zerokit module supports big-endian operations
- U3. The Zerokit FFI, including WASM targets, supports big-endian arguments

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Rework Zerokit Public API

**Owner**: AnonComms Zerokit-RLN

**Feature**: [Zerokit-RLN FURPS](../furps/zerokit-rln.md)

**FURPS**:

- U1. The Zerokit public API is defined in a specification
- U2. The Zerokit public API provides an easy-to-use interface for developers in Rust and C

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
