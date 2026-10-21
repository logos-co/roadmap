---
title: Reliable Channel API — Future Decided
tags:
  - messaging-milestone
date: 2026-10-16
github: https://github.com/logos-messaging/pm/issues/493
---

**Targets**: Testnet v0.4

**Type**: Decision

The [Beta](2026-reliable-channel-api-beta.md) completed the feature set of the [Reliable Channel API](/messaging/furps/application/reliable_channel.md). Before investing in [General Availability](2026-reliable-channel-api-general-availability.md), we decide whether the API has enough use cases to continue:
- Exposing encryption through Logos Core modules is painful and slow, and the use case is narrow.
- Logos Chat is integrating SDS more deeply on its own.
- Logos Chat could use the Reliable Channel API for Inbox (invitations).

## Exit criteria

- [ ] The decision is made and recorded in this milestone.

## Decisions

| Question                                                                  | Owner         |
| ------------------------------------------------------------------------- | --------------|
| Do we continue the Reliable Channel API, and for which use cases?         | Delivery Team |
| How is pluggable encryption exposed through Logos Core, if continued?     | Delivery Team |

## Deliverables

### [Record the decision](https://github.com/logos-messaging/pm/issues/510)

**Owner**: Delivery Team

**Done when**: The decision and its reasoning are recorded in this milestone.
