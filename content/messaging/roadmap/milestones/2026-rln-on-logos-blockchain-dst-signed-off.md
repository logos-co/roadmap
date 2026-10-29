---
title: RLN on Logos Blockchain — DST Signed Off
tags:
  - messaging-milestone
date: 2026-10-29
github: https://github.com/logos-messaging/pm/issues/521
---

**Targets**: Testnet v0.5

**Resources Required**:
- Delivery Team
- AnonComms
- DST

[RLN on Logos Blockchain](2026-add-support-for-rln-on-lee) was delivered in Testnet v0.3, but not tested at scale. RLN is moving to its own zone on Logos Blockchain, so DST validation waits until it runs there.

## Dependencies

- **AnonComms**: RLN running on its own zone.

## Deliverables

### [Validate RLN on Logos Blockchain at scale](https://github.com/logos-messaging/pm/issues/497)

**Owner**: Delivery Team, AnonComms Team + DST

DST validates RLN on LEZ with X members at Y messages per epoch.

**Dependency**: AnonComms, for the RLN membership program on LEZ.

**Done when**: A DST test report covering the agreed membership size and message rate is available and signed off.

### [Address RLN issues found by DST](https://github.com/logos-messaging/pm/issues/499)

**Owner**: Delivery Team, AnonComms Team + DST

RLN issues found by DST are triaged and fixed.

**Done when**: No P0 or P1 issues found by DST remain open.
