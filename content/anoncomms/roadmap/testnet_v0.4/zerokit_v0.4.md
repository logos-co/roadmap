# Zerokit Track: Testnet v0.4 (TBD: anoncomms-pm milestone)

**Track:** [Zerokit Track](/anoncomms/roadmap/zerokit.md)

**FURPS:** [Zerokit FURPS](/anoncomms/furps/zerokit.md)

**Estimated date of completion**: Testnet v0.4 launch

**Resources Required**:
- 2 developers for 8 weeks

## Deliverables

### Release Zerokit with Poseidon2 support (TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- U8. A Zerokit release is published introducing Poseidon2 support

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### Zerokit-API RFC for the 3.1.0 release (TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- U9. The Zerokit API specification is updated for v3.1.0 covering Poseidon2

**Checklist**:
- [ ] Specs: link to specs and/or API definition

### Runtime checks for resource/hash function combinations (TBD: anoncomms-pm issue)

**Owner**: AnonComms Zerokit

**FURPS**:

- U6. The hash function selection (Poseidon vs Poseidon2) is exposed via the runtime configuration enum
- R1. Poseidon2 proofs verify correctly and Poseidon behavior remains unchanged when Poseidon2 is enabled
- R2. A mismatch between the configured resources and hash function is reported with a specific error at validation time rather than as a generic invalid proof

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Static analysis of Poseidon and Poseidon2 circuits](https://github.com/logos-co/anoncomms-pm/issues/85)

**Owner**: AnonComms Zerokit

**FURPS**:

- S2. Static analysis of the circuits for both Poseidon and Poseidon2 is performed and documented

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs

### [Zerokit maintenance](https://github.com/logos-co/anoncomms-pm/issues/86)

**Owner**: AnonComms Zerokit

**FURPS**:

- S1. Outstanding issues and dependency updates are addressed to keep the codebase maintainable

**Checklist**:
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Docs: links to README.md or other docs
