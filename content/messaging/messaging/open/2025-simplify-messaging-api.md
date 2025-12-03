---
title: Simplify Messaging API
tags:
    - messaging-milestone
date: 2025-07-03
---

# [Simplify Messaging API](https://github.com/logos-messaging/pm/milestone/46)

(prev. *Improve DevEx: API, TWN, Metrics, Docs*)

**Estimated date of completion**: 31 Aug

**Resources Required for 2025H2**:
- 3 nim engineer

Define a simplified version of the Messaging API, to enable easier integration in Status and Chat, and for developer experience in Logos Core.

This includes removing potential foot guns (store as CDN), and reducing learning curve (no need to know about protocols).

Finally, RLNaaS is introduced in nim-messaging, to enable Chat dogfooding on TWN.

## Risks

| Risk                                             | (Accept, Own, Mitigation)                                                                     |
|--------------------------------------------------|-----------------------------------------------------------------------------------------------|
| RLNaaS is not a secure and reliable strategy     | P2P reliability to mitigate potential RLNaaS by using multiple service nodes to push messages |


## Deliverables

### [Introduce Messaging API in nim-messaging](https://github.com/logos-messaging/pm/issues/305)

**Owner**: nim

**Feature**: [Messaging SDK](/furps/messaging/core/messaging_sdk.md)

**FURPS**:
- F1. Setup, start and stop a Messaging node.
- F3. Support relay node operation mode.
- F4. Does automatic peer discovery based on the node platform and operation mode.
- F5. Returns health and connectivity information using proven heuristics.
- F6. Previously discovered peers are persisted across restarted, and potentially used for future connections.
- U1. When setting up a Messaging node, no need to specify what protocols to mount, only an operational mode (edge or relay).
- U2. Disconnection detection and recovery, and other peer management matters are automatically handled.
- U3. Developers do not need to specify the protocols used to send and receive messages; it is deduced from the mode of operation.
- U4. Developers pass and receive data to the API in types native to the wrapping language.
- U5. By default, auto-sharding is applied, meaning developers do not need to be concerned by sharding; pubsub topics are never exposed.
- U6. Developers only need to handle errors in cases of irretrievable failure requiring end-user action. Internal errors are not bubbled up if they can be recovered internally.
- R1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

For:
- S1. Nim library; import via git path.
- S2. Can be used via C-Bindings.
