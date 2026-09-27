---
title: Reliable Channel API — General Availability
tags:
  - messaging-milestone
date: 2026-09-21
github: https://github.com/logos-messaging/pm/issues/483
---

The [Beta](2026-reliable-channel-api-beta.md) completed the feature set of the [Reliable Channel API](/messaging/furps/application/reliable_channel.md). This milestone graduates the API to General Availability.

Deprecates store hash queries as they enable linkability of participants in the same channel from a store node PoV.

## FURPS

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): F13, ~~F4~~

## Deliverables

### [Deprecate store hash queries for missing messages](https://github.com/logos-messaging/pm/issues/436)

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- ~~F4. Missing messages are automatically retrieved via store hash queries.~~

### [Support ephemeral messages in the Reliable Channel API](https://github.com/logos-messaging/logos-delivery/issues/4305)

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F13. Ephemeral outbound messages passed on the API are dropped when the rate limit is approached or exceeded.

Ephemeral messages are currently wrapped as regular SDS messages and land in the causal history, so a dropped one blocks every later message from the same sender. Covers SDS ephemeral messages in `nim-sds`, the Reliable Channel spec, and `logos-delivery`.
