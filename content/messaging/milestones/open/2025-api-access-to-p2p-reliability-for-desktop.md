---
title: API access to P2P Reliability for Desktop
tags:
    - messaging-milestone
date: 2025-07-03
---

# [API access to P2P Reliability for Desktop](https://github.com/logos-messaging/pm/milestone/46)

(prev. *Simplify Messaging API*)

**Estimated date of completion**: 31 Aug

**Resources Required for 2025H2**:
- 3 nim engineer

The previously implemented [p2p reliability](https://github.com/logos-messaging/specs/blob/master/standards/application/p2p-reliability.md) strategies were not properly delivered on an API. With this milestones, we
complete the _Messaging API_ work necessary to enable access to the p2p reliability protocol, meaning:

1. Verifying that outbound messages are propagated, and re-sent if necessary
2. Proceed with queries to ensure that no incoming message are missed

We narrow the scope of the work to [_core_ mode](https://github.com/logos-messaging/specs/blob/master/standards/application/waku-api.md#extended-definitions) only  (aka relay is used to send and receive messages).
RLN and RLNaaS are also out of scope.

No function for store or message is exposed on the API, previous message retrieval is to be done as part of the `subscribe` function, applying p2p reliability protocol.

The resulting API will be a higher abstraction than the current API, enabling easier integration in Status and Chat, and for developer experience in Logos Core.

This includes removing potential foot guns (store as CDN), and reducing learning curve (no need to know about protocols).

## Risks

| Risk                     | (Accept, Own, Mitigation)                                                                                                      |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| P2P Reliability maturity | P2P reliability implementation was not properly dogfed and some re-write might be needed as we expose the protocol on the API. |


## Deliverables

### [Introduce Messaging API in nim-messaging](https://github.com/logos-messaging/pm/issues/305)

**Owner**: Nim Messaging Team

**Feature**: [Messaging SDK](/messaging/furps/core/messaging_sdk.md)

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
- U7. Message retrieval (store protocol) is done automatically via the `subscribe` verb; store protocol and other message retrieval operations are not exposed.
- R1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

For:
- S1. Nim library with nimble.
- S2. Can be used via C-Bindings.



