---
title: Messaging API — Developer Preview
tags:
  - messaging-milestone
date: 2025-07-03
github-milestone: 'https://github.com/logos-messaging/pm/milestone/46'
---

> [!NOTE] This file will be renamed to `2026-messaging-api-developer-preview`

# Messaging API — Developer Preview

https://github.com/logos-messaging/pm/milestone/46

**Estimated date of completion**: March 2026 (Testnet v0.1)

**Resources Required for 2026H1**:
- 3 Nim engineers

The Messaging API provides a higher-level abstraction over Logos Delivery protocols, enabling easier integration in Status, Logos Chat, and for developer experience in Logos Core.

The Developer Preview delivers the Send and Health APIs, with core mode only (relay is used to send and receive messages). The Subscribe/Receive API is in progress but may extend into v0.2.

RLN and RLNaaS are out of scope for this milestone. No function for store or message retrieval is exposed on the API — previous message retrieval is to be done as part of the `subscribe` function, applying P2P reliability protocol.

This includes removing potential foot guns (store as CDN) and reducing learning curve (no need to know about protocols).

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): F1, F3, F4, F5, F6, U1, U2, U3, U4, U5, R1, S1

## Risks

| Risk                     | (Accept, Own, Mitigation)                                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| P2P Reliability maturity | P2P reliability implementation was not properly dogfooded and some re-write might be needed as we expose the protocol on the API. |

## Deliverables

### [Introduce Messaging API in Logos Delivery](https://github.com/logos-messaging/pm/issues/305)

**Owner**: Delivery Team

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- F1. Setup, start and stop a Messaging node.
- F3. Support core node operation mode.
- F4. Does automatic peer discovery based on the node platform and operation mode.
- F5. Returns health and connectivity information using proven heuristics.
- F6. Previously discovered peers are persisted across restarts, and potentially used for future connections.
- U1. When setting up a Messaging node, no need to specify what protocols to mount, only an operational mode (edge or core).
- U2. Disconnection detection and recovery, and other peer management matters are automatically handled.
- U3. Developers do not need to specify the protocols used to send and receive messages; it is deduced from the mode of operation.
- U4. By default, auto-sharding is applied, meaning developers do not need to be concerned by sharding; pubsub topics are never exposed.
- U5. Developers only need to handle errors in cases of irretrievable failure requiring end-user action. Internal errors are not bubbled up if they can be recovered internally.
- R1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

For:
- S1. Nim library with Nimble.
