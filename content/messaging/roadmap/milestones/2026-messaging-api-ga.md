---
title: Messaging API — General Availability
tags:
  - messaging-milestone
date: 2026-10-15
github: https://github.com/logos-messaging/pm/issues/490
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

### [Address Messaging API issues found by DST](https://github.com/logos-messaging/pm/issues/498)

**Owner**: Delivery Team

Messaging API issues found by DST are triaged and fixed.

**Done when**: No P0 or P1 issues found by DST remain open.

### [Finalize Messaging API send and subscribe behaviour](https://github.com/logos-messaging/pm/issues/526)

**Owner**: Delivery Team

Behaviour changes to the Messaging API before General Availability: `send` returns the message hash and fails fast on rate limits, and newly subscribed content topics are not backfilled from Store ([logos-delivery#4278](https://github.com/logos-messaging/logos-delivery/issues/4278)).

**Done when**: the behaviour changes are done and the Messaging API spec matches the new behaviour.
