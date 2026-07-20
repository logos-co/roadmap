---
title: RLN for Edge Nodes
tags:
  - messaging-milestone
date: 2026-04-06T00:00:00.000Z
github: https://github.com/logos-messaging/pm/issues/411
---
**Resources Required**:
- 1 Delivery engineer
- AnonComms support

Resolve the architectural gap where LightPush service nodes share a single RLN quota with relay traffic, making LightPush non-functional under high-volume relay conditions.

Once done, Logos Messaging fleets should be able to become fully RLN-protected; edge nodes are required to get an RLN membership and send lightpush requests with RLN-proof attached; RLNaaS is discontinued.

It's an open question, how edge nodes will get RLN memberships. The initial implementation should have the same approach as Relay, later versions might introduce sponsored memberships.
## Risks

| Risk                                            | (Accept, Own, Mitigation)                     |
| ----------------------------------------------- | --------------------------------------------- |
| RLN membership sponsorship model is not defined | Focus on no-sponsorship implementation first. |
## Deliverables

### [Add support for RLN proofs in LightPush](https://github.com/logos-messaging/pm/issues/423)

**Owner**: Delivery Team

Enable light clients with their own RLN membership to generate proofs client-side and submit messages with proofs via lightpush. The service node verifies the proof and relays without consuming its own quota.

This decouples lightpush from service node quota entirely for clients that have their own membership, and is the long-term path to sustainable edge mode.

**Done when**: A light client with its own RLN membership can send a pre-proven message via lighpush, and the service node relays it without consuming its own nonce.

Note that this might already be possible in `logos-delivery`, in that case it needs verification.

### [Improve RLN UX by reducing contract interactions](https://github.com/logos-messaging/pm/issues/344)

**Owner**: Delivery Team

**Feature**: [RLN Smart Contract](/messaging/furps/core/rln_smart_contract.md)

**FURPS**:
- U3. Application does not need to do a Web3 RPC call for every tree change to generate or validate messages.
- U4. Application can transfer tokens and register membership with a single transaction.

