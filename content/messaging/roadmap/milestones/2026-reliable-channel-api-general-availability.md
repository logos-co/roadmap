---
title: Reliable Channel API — Future Decided
tags:
  - messaging-milestone
date: 2026-09-21
github: https://github.com/logos-messaging/pm/issues/483
---

**Targets**: Testnet v0.4

**Type**: Decision

The [Beta](2026-reliable-channel-api-beta.md) completed the feature set of the [Reliable Channel API](/messaging/furps/application/reliable_channel.md). Before investing in General Availability, we decide whether the API has enough use cases to continue:
- Exposing encryption through Logos Core modules is painful and slow, and the use case is narrow.
- Logos Chat is integrating SDS more deeply on its own, and will probably not use the Reliable Channel API for conversations.
- Logos Chat could use the Reliable Channel API for invitations.

General Availability work is on hold until the decision is made.

## Exit criteria

- [ ] The decision is made and recorded in this milestone.
- [ ] If continued: General Availability milestone and its exit criteria are defined for the next release.
- [ ] If discontinued: deprecation path for the API and the `delivery-module` is defined.

## Decisions

| Question                                                                                         | Owner                       | Decide by  |
| ------------------------------------------------------------------------------------------------ | --------------------------- | ---------- |
| Do we continue the Reliable Channel API, and for which use cases?                                | Delivery Team + Chat Team   | 2026-10-30 |
| Is Reliable Channel API the way to make Logos Chat invitations reliable?                          | Chat Team                   | 2026-10-30 |
| How is pluggable encryption exposed through Logos Core, if continued?                             | Delivery Team               | 2026-10-30 |

## Scope

Planned work, on hold until the decision is made:

### [Deprecate store hash queries for missing messages](https://github.com/logos-messaging/pm/issues/436)

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- ~~F4. Missing messages are automatically retrieved via store hash queries.~~

### [Support ephemeral messages in the Reliable Channel API](https://github.com/logos-messaging/logos-delivery/issues/4305)

**Owner**: Delivery Team

### [Add Reliable Channel encryption to `delivery-module` API](https://github.com/logos-messaging/pm/issues/472)

**Owner**: Delivery Team

Expose Reliable Channel encryption through the `delivery-module` API, so Logos Core applications can use it.
