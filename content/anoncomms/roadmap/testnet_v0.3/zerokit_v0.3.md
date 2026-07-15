# [Zerokit Track: Testnet v0.3](TBD: anoncomms-pm milestone)

**Track:** [Zerokit Track](/anoncomms/roadmap/zerokit.md)

**FURPS:** [Zerokit FURPS](/anoncomms/furps/zerokit.md)

**Estimated date of completion**: Testnet v0.3 launch

**Resources Required**:
- 3 developers for 12 weeks

## Deliverables

### [Integrate and benchmark Poseidon2 hash function](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- F2. Zerokit supports Poseidon2 as an alternative hash function alongside Poseidon
- F3. Zerokit supports the automatic generation of round parameters for both Poseidon and Poseidon2
- U6. The hash function selection (Poseidon vs Poseidon2) is exposed via the runtime configuration enum
- U7. The implementation of the new Poseidon2 circuit has been completed and documented in the circom-rln repo
- R1. Poseidon2 proofs verify correctly and Poseidon behavior remains unchanged when Poseidon2 is enabled
- P1. Poseidon2 proof generation is benchmarked against Poseidon and demonstrates measurable improvement
- S3. New Poseidon2-related functionality and APIs are fully exposed through the FFI and WASM interfaces

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Static analysis of Poseidon and Poseidon2 circuits](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- S2. Static analysis of the circuits for both Poseidon and Poseidon2 is performed and documented

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Zerokit maintenance](TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- S1. Outstanding issues and dependency updates are addressed to keep the codebase maintainable

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
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
