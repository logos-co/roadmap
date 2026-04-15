---
title: RLN on Logos Blockchain
tags:
  - messaging-milestone
date: 2026-02-01
github: 'https://github.com/logos-messaging/pm/issues/401'
---

**Resources Required**:
- 1 Delivery engineer
- Collaboration with Logos Blockchain team (LEE/LEZ)

Logos Delivery currently supports RLN with a hardcoded Ethereum-based membership backend. This milestone introduces a pluggable RLN membership interface and adds Logos Blockchain (LEE) as a membership backend.

**Pluggable RLN membership interface**: Logos Delivery should support different implementations of RLN membership management through a common interface. This enables:
- **EVM-based** (Ethereum L1/L2, including gasless Status Network)
- **Logos Blockchain** (LEE program)
- **Centralized server** (temporary, for development/testing)
- Any future backend

This is important because Status will use RLN on Status Network (EVM-based, gasless), while Logos Testnet will use RLN on Logos Blockchain. Both must be supported simultaneously.

**Context**:
- LEE (Logos Execution Environment) is the smart contract runtime.
- LEZ (Logos Execution Zone) is the zone implementation running on Logos Blockchain using LEE.
- Currently, RLN contracts are deployed on Ethereum Linea Sepolia.
- AnonComms is developing the RLN membership allocation LEE program
- AnonComms is also researching an RLN on gasless L2 transactions on Status Network.

## FURPS

- [RLN Membership Management](/messaging/furps/application/rln_membership_management.md): adapted for pluggable backends

## Dependencies

- **AnonComms**: RLN membership allocation LEE program deployed and functional
- **AnonComms**: Zerokit 2.0 API stable and public
- **Logos Blockchain**: LEE program model and tooling ready

## Risks

| Risk                  | (Accept, Own, Mitigation)                                                                                                               |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| LEE maturity          | LEE is under active development. The program model and tooling may not be stable enough for RLN deployment.                             |
| Cross-team dependency | Requires coordination between Messaging, AnonComms, and Logos Blockchain teams. Align timelines early.                                  |

## Deliverables

### Implement pluggable RLN membership interface

**Owner**: Delivery Team

Design and implement an interface in Logos Delivery that abstracts RLN membership management. Concrete implementations:
- EVM-based (existing Ethereum contract interaction, including gasless Status Network via RLN Prover)
- Logos Blockchain (LEE program, once AnonComms delivers it)
- Centralized server (for development/testing)

The interface covers:
- Credential generation
- Membership registration, extension, withdrawal
- Proof generation and validation
- Credential persistence and export/import

### Integrate Logos Delivery with RLN on Logos Blockchain

**Owner**: Delivery Team

- Implement the Logos Blockchain backend for the pluggable interface
- Logos Delivery nodes can generate and validate RLN proofs against the LEE-deployed membership
- Transition Logos testnet fleets from Ethereum Sepolia to Logos Blockchain

### Update RLN membership management library

**Owner**: Delivery Team

**Feature**: [RLN Membership Management](/messaging/furps/application/rln_membership_management.md)

**FURPS**:
- F1. Can generate RLN credentials.
- F2. Can insert RLN membership via pluggable backend.
- F3. Can extend RLN membership via pluggable backend.
- F4. Can withdraw deposit via pluggable backend.
- F5. Membership credentials are encrypted by default on local disk.
- U1. RLN membership details can be exported and imported.
- U2. Deployment details (backend type, address/endpoint) are persisted by library and in exports.
