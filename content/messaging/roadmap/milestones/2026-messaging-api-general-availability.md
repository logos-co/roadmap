---
title: Messaging API — General Availability
tags:
  - messaging-milestone
date: 2026-07-07
github: https://github.com/logos-messaging/pm/issues/424
---

The [Beta](2026-messaging-api-beta.md) delivered the full API surface (Send, Health, Subscribe/Receive in core and edge mode), while allowing to use Kernel API for Store access for existing applications. General Availability makes the Messaging API production-ready: DST-validated reliability at scale, automatic recovery of messages missed while offline, built-in rate limit management and anonymity via mix integration.

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

### [Reliability and scale validation with DST](https://github.com/logos-messaging/pm/issues/429)

**Owner**: Delivery Team + DST

The Messaging API is QA-approved for production use. DST validates reliability and performance at scale against FURPS targets.

**Done when**: A DST test report covering reliability and scale targets is available, and QA sign-off is obtained.

### [Offline periods backfill](https://github.com/logos-messaging/pm/issues/430)

**Owner**: Delivery Team

Messages missed while a node was offline are retrieved automatically on reconnect and delivered through the regular Subscribe/Receive path. Applications get a complete message stream without implementing their own Store-based recovery.

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping).

**Done when**: After an offline period, a subscribed application receives all missed messages through its existing subscription, with no additional API calls.

### [Create Rate Limit Manager](https://github.com/logos-messaging/pm/issues/431)

**Owner**: Delivery Team

Note: a basic implementation already exists in `logos_delivery/channels/rate_limit_manager/` (queue + epoch reset). This deliverable completes it per the FURPS below (priorities, batching, persistence).

**Feature**: [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)

**FURPS**:
- F1. Rate limit the number of messages passed to the delivery service.
- F2. The rate limit is set in the form of number of messages per epoch; same format as RLN Relay.
- F3. Tracks current quota and usage.
- F4. Messages can be flagged with three priority levels: critical, normal, optional.
- F5. When remaining message quota is low, critical messages are sent, normal messages are queued and optional messages are dropped.
- F6. When message quota is exhausted, critical messages are queued on top, normal messages are queued, optional messages are dropped.

- U1. Developer can mark messages with relevant priority.
- U2. Developer can pass messages by batch; with an all-or-none sending strategy.
- U3. Developer can access total quota and remaining quota values.
- U4. Message status is available to the developer (queued, dropped, passed to delivery service).

- R1. Errors and status from the underlying delivery service are available to the developer.
- R2. Queued messages are persisted across restart.
- R3. Quota status is persisted across restart.

- S1. Nim library.
- +1. Nimble package manager is used to build.

### [Integrate Rate Limit Manager](https://github.com/logos-messaging/pm/issues/432)

**Owner**: Delivery Team

Integrate the Rate Limit Manager (created in [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)) into the Messaging API, so applications sending via the plain Messaging API get quota tracking and prioritized queueing without implementing it themselves.

**Feature**: [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)

**Done when**: The Messaging API send path enforces the rate limit with message priorities, using a single per-node quota.

### [Integrate Mix into Messaging API](https://github.com/logos-messaging/pm/issues/433)

**Owner**: Delivery Team

Messaging API gains an additional configuration parameter that allows clients to specify the anonymity requirements:
- `Required`  // when Mix is not available, messages are not published 
- `Preferred` // when Mix is not available, fallback to regular relay/lightpush
- `None`      // don't use Mix

Behind the MessagingAPI, Mix discovery should be started when needed and Mix protocol should be used for publishing accordingly.

**Feature**: [Mixnet](/messaging/furps/core/mix.md)

**FURPS**:
- F3. Client nodes can send light push requests over the mixnet before delivery to a service node.
- F4. Client nodes can receive a response to a light push request over the mixnet.

**Dependency**: mix interface from AnonComms team must be available.

**Done when**: Messages sent through the Messaging API are routed over the mix network by default, with no application changes required.

### [Provide documentation on the Messaging API](https://github.com/logos-messaging/pm/issues/434)

**Owner**: Delivery Team

Documentation is a hard requirement for General Availability. It does not have to be published as a website — comprehensive documentation in the repository (e.g. a README) is sufficient.
