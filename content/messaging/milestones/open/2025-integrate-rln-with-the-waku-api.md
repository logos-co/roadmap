---
title: Integrate RLN With the Waku API
tags:
    - messaging-milestone
date: 2025-09-30
---

# [Implement RLN Membership Management](https://github.com/waku-org/pm/milestone/52)

**Estimated date of completion**: 30 Sep 2025

**Resources Required for 2025H2**:
- 2 nwaku engineer for 2 months 
- 1 js-waku engineer for 2 months
- 1 core research for 1 month
- Support from Vac/ACZ to get zerokit working in the browser.

Deliver a native RLN library with a deliberate API to manage RLN memberships, as well as proof verification and generation.
This includes extracting RLN Relay as a relay plugin validation strategy, that can then be passed internally to nwaku node
as any other strategy.

Once delivered, usage of Chat SDK of RLN becomes possible, with clear API to instantiate nwaku library with RLN, as well
as API to manage RLN membership.

Introduce RLN proof generation and validation in the Browser. RLN API should be similar across all implementations.

Finally, migrate to Status network L2 testnet and improve UX issues discovered via dogfooding such as rate of RPC Calls.

## FURPS

See deliverables.

## Risks

| Risk                                                  | (Accept, Own, Mitigation)                                                                                                                                                                                                                               |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Not all required improvements are yet identified      | Dogfooding of the H1 delivery will enable identification of needed improvements, meaning this milestone may change in term of scope and schedule.                                                                                                       |
| Dependencies on Nim Web3 library                      | Previous upgrade of nim web3 libraries have lead to various issues. The dependencies of said library is increasing, meaning potential delay in development.                                                                                             |
| Uncertainty regarding zerokit and wasm in the browser | UX-related property are yet to be explored with the new RLN smart contract. WASM loading and execution may have considerable impact on UX. Collaboration with Vac/ACZ will be required to adapt zerokit for the browser.                                |
| Smart Contract Changes & Expertise                    | We expect functional extension of RLN smart contract to potentialy store multiple roots, and maybe other improvement depending on dogfooding. The Solidity knowledge in the team is limited/non-existent so we would need to rely on Vac-SC or upskill. |
| API Refactoring                                       | Extracting RLN as a validation plugin may ensue some API refactoring that may take longer than initially estimated. A conservative estimate will be done.                                                                                               |
| FFI to FFI interaction                                | The intent will be to have RLN and Waku SDK as 2 separate libraries that can be initialized in any language (e.g Golang). The nim to nim via FFI may raise unforeseen issues .                                                                          | 

## Deliverables 

### [Implement RLN membership management in nwaku library](https://github.com/waku-org/pm/issues/353)

**Owner**: nim

**Feature**: [RLN Membership Management](/messaging/furps/application/rln_membership_management.md)

**FURPS**:
- F1. Can generate RLN credentials.
- F2. Can insert RLN membership in smart contract, with accompanying deposit.
- F3. Can extend RLN membership on smart contract.
- F4. Can withdraw deposit from smart contract.
- F5. Membership credentials are encrypted by default on local disk.

- U1. RLN membership details can be exported and imported.
- U2. Deployment details (address, chain id) are persisted by library and in exports.

- R1. Import and exports are interoperable across all implementations.

- S2. library available via C-Bindings.

- +2. Available for Linea Sepolia Testnet contracts.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Deploy RLN Contracts to Status L2 testnet](https://github.com/waku-org/pm/issues/356)

**Owner**: nim

**Feature**: [RLN Smart Contract](/messaging/furps/core/rln_smart_contract.md)

**FURPS**:
- +1. Smart Contracts are deployed on Status L2 Sepolia.
- +2. TWN uses smart contracts deployed on Status L2 Sepolia.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Improve RLN UX by reducing contract interactions](https://github.com/waku-org/pm/issues/344)

**Owner**: nim

**Feature**: [RLN Smart Contract](/messaging/furps/core/rln_smart_contract.md)

**FURPS**:
- U3. Application does not need to do a Web3 RPC call for every tree change to generate or validate messages.
- U4. Application can transfer tokens and register membership with a single transaction.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)