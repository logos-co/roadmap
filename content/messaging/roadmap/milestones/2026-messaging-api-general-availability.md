---
title: Messaging API — General Availability
tags:
  - messaging-milestone
date: 2026-07-07
---

**Resources Required**:
- 2 Delivery engineers
- DST involvement for reliability and scale validation

The [Beta](2026-messaging-api-beta.md) delivered the full API surface (Send, Health, Subscribe/Receive in core and edge mode) plus Store access for existing applications. General Availability makes the Messaging API production-ready: anonymity via mix integration, automatic recovery of messages missed while offline, built-in rate limit management, and DST-validated reliability at scale.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): R1, R2
- [Mixnet](/messaging/furps/core/mix.md)
- [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)

## Risks

| Risk                        | (Accept, Own, Mitigation)                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------|
| Mix module readiness        | Mix is owned by AnonComms. If the mix interface is not ready in time, sender anonymity properties of the API are delayed, not the API itself.       |
| Rate limit UX impact        | Rate limiting causes messages to be queued or dropped. UX implications must be communicated clearly in the API and documentation.                   |

## Deliverables

### Integrate Mix into Messaging API

**Owner**: Delivery Team

Outbound messages sent through the Messaging API are routed through the mix network (libp2p mixnet, owned by AnonComms) to provide sender anonymity by default.

**Feature**: [Mixnet](/messaging/furps/core/mix.md)

**FURPS**:
- F3. Client nodes can send light push requests over the mixnet before delivery to a service node.
- F4. Client nodes can receive a response to a light push request over the mixnet.

**Dependency**: mix interface from AnonComms team must be available.

**Done when**: Messages sent through the Messaging API are routed over the mix network by default, with no application changes required.

### Offline periods backfill

**Owner**: Delivery Team

Messages missed while a node was offline are retrieved automatically on reconnect and delivered through the regular Subscribe/Receive path. Applications get a complete message stream without implementing their own Store-based recovery.

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping).

**Done when**: After an offline period, a subscribed application receives all missed messages through its existing subscription, with no additional API calls.

### Integrate Rate Limit manager

**Owner**: Delivery Team

Integrate the Rate Limit Manager (created in [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)) into the Messaging API, so applications sending via the plain Messaging API get quota tracking and prioritized queueing without implementing it themselves.

**Feature**: [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)

**Done when**: The Messaging API send path enforces the rate limit with message priorities, sharing a single per-node quota with the Reliable Channel API.

### Reliability and scale validation with DST

**Owner**: Delivery Team + DST

The Messaging API is QA-approved for production use. DST validates reliability and performance at scale against FURPS targets.

**Done when**: A DST test report covering reliability and scale targets is available, and QA sign-off is obtained.

### Provide documentation on the API

**Owner**: Delivery Team

Documentation is a hard requirement for General Availability. It does not have to be published as a website — comprehensive documentation in the repository (e.g. a README) is sufficient.
