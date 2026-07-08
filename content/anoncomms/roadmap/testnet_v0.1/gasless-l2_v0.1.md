# [Gasless L2 Track: Testnet v0.1](https://github.com/logos-co/anoncomms-pm/milestone/8)

**Track:** [Gasless L2 Track](/anoncomms/roadmap/gasless-l2.md)

**FURPS:** [Zerokit FURPS](/anoncomms/furps/zerokit.md)

**Estimated date of completion**: 30 Jun 2026

**Resources Required**:
- 2 developers for 16 weeks

## Deliverables

### [Allow multiple RLN provers to share a database](https://github.com/logos-co/anoncomms-pm/issues/11)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F1. The RLN prover module supports gasless L2 operations
- F2. Multiple RLN prover instances can operate on a shared database
- U4. The RLN prover module has an associated specification
- R1. Multiple RLN prover instances operate consistently without database conflicts

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Write whitepaper on gasless L2 transactions](https://github.com/logos-co/anoncomms-pm/issues/12)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- S1. A gasless L2 whitepaper is written to document the design and trade-offs

**Checklist**:
- [ ] Docs: link to whitepaper

### [Support burning multiple IDs in a single RLN proof](https://github.com/logos-co/anoncomms-pm/issues/15)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F3. An RLN prover can burn multiple message-ids in a single proof

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs

### [Implementation of aggregator-slasher architecture](https://github.com/logos-co/anoncomms-pm/issues/16)

**Owner**: AnonComms Zerokit-RLN

**FURPS**:

- F5. The RLN prover module supports proof output streaming to an aggregator node
- R2. The aggregator relays RLN proof metadata to decentralized slashers
- R3. Decentralized slashers extract the secret from double-signaled (spammed) proofs to enable slashing

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or other docs
