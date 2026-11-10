# LEZ Transactional Actor Model

LEZ programs run as transactional actors: calls compose atomically, and programs exchange messages asynchronously, across both public and private execution. This is the execution model LEZ 0.4 is built on, and the base that privacy-preserving fees and atomic deposits build on.

## Resources Required

- TBD

## Risks

- Moving every LEZ program, the wallet, the indexer and the explorer to the new execution model in one release

## Deliverables

### Transactional Actors

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Transactional actors with side-effects: atomic composition and asynchronous message delivery across public and private execution ([#935](https://github.com/logos-blockchain/logos-execution-zone/pull/935)).

**FURPS**:

- F22. LEZ supports Programmable Privacy by allowing LEZ Programs to be agnostic as to whether they are interacting with private or public accounts

**Checklist**:
- [x] Transactional actor model implemented
- [ ] Indexer, explorer and wallet updated to the transactional actor model
- [ ] Released in Testnet v0.4
