---
title: Messaging API — General Availability
tags:
  - messaging-milestone
date: 2026-10-15
github:
---

**Targets**: Testnet v0.4

**Resources Required**:
- 1 Delivery engineer
- DST

[Feature Completeness](2026-messaging-api-general-availability) delivered everything required for the Messaging API in Testnet v0.3. General Availability makes it production-ready: its reliability and scale are validated by DST, and the issues DST finds are fixed.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): R1, R2

## Risks

| Risk                          | (Accept, Own, Mitigation)                                                                                                    |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DST expectations defined late | DST expectations for the messaging layer were written at the end of v0.3. Agree on them at the start of the cycle.            |
| DST findings late in the cycle | Run the first DST pass in the first half of the cycle, so there is time to fix what it finds.                               |

## Deliverables

### [Messaging API reliability and scale validation with DST](https://github.com/logos-messaging/pm/issues/429)

**Owner**: Delivery Team + DST

DST validates the Messaging API reliability and performance at scale against the agreed expectations.

**Done when**: A DST test report covering the agreed expectations is available and signed off.

### Validate RLN on Logos Blockchain at scale

**Owner**: Delivery Team, AnonComms Team + DST

DST validates RLN on LEZ with X members at Y messages per epoch.

**Dependency**: AnonComms, for the RLN membership program on LEZ.

**Done when**: A DST test report covering the agreed membership size and message rate is available and signed off.

### Address Messaging API issues found by DST

**Owner**: Delivery Team

Messaging API issues found by DST are triaged and fixed.

**Done when**: No P0 or P1 issues found by DST remain open.

### Address RLN issues found by DST

**Owner**: Delivery Team, AnonComms Team + DST

RLN issues found by DST are triaged and fixed.

**Done when**: No P0 or P1 issues found by DST remain open.

### [Do not backfill history for newly subscribed content topics](https://github.com/logos-messaging/logos-delivery/issues/4278)

**Owner**: Delivery Team

**Done when**: Subscribing to a new content topic does not trigger a Store backfill; backfill only applies to topics the node was subscribed to before going offline.

### Add message priorities

**Owner**: Delivery Team

Applications set a priority on each message they send, and the send queue is ordered by it. Needed for the [Status integration](2026-status-logos-delivery-integration) ([#488](https://github.com/logos-messaging/pm/issues/488)) and later for Logos Chat. `logos-delivery-go` implementation MAY be used for reference.

**Done when**: `send` accepts a priority, and under rate limiting higher-priority messages leave the queue first.
