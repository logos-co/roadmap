# [Zerokit Track: Testnet v0.3](https://github.com/logos-co/anoncomms-pm/milestone/18)

**Track:** [Zerokit Track](/anoncomms/roadmap/zerokit.md)

**FURPS:** [Zerokit FURPS](/anoncomms/furps/zerokit.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- 3 developers for 12 weeks

## Deliverables

### [Integrate and benchmark Poseidon2 hash function](https://github.com/logos-co/anoncomms-pm/issues/84)

**Owner**: AnonComms Zerokit

**FURPS**:

- F2. Zerokit supports Poseidon2 as an alternative hash function alongside Poseidon
- F3. Zerokit supports the automatic generation of round parameters for both Poseidon and Poseidon2
- U7. The implementation of the new Poseidon2 circuit has been completed and documented in the circom-rln repo
- P1. Poseidon2 proof generation is benchmarked against Poseidon and demonstrates measurable improvement
- S3. New Poseidon2-related functionality and APIs are fully exposed through the FFI and WASM interfaces

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Release Zerokit (v3.0.0) with enum-based runtime configuration](https://github.com/logos-co/anoncomms-pm/issues/60)

**Owner**: AnonComms Zerokit

**FURPS**:

- U5. The Zerokit architecture is changed from compile-time feature flags to runtime configuration based on enums

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
