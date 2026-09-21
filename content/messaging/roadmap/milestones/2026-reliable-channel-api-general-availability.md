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

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): ~~F4~~

## Deliverables

### [Deprecate store hash queries for missing messages](https://github.com/logos-messaging/pm/issues/436)

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- ~~F4. Missing messages are automatically retrieved via store hash queries.~~
