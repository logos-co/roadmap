---
title: Chat — Self-Healing Groups
tags:
  - messaging-milestone
date: 2026-10-16
github: https://github.com/logos-messaging/pm/issues/482
---

**Targets**: Testnet v0.4

**Resources Required**:

- Chat Team
- DST or QA, for measurements

Group chats break in two ways: members miss messages, and the group state forks so that members no longer agree on who is in the group. Today neither is repaired. This milestone makes groups recover from both without user action, integrates the Ordering Policy component from AnonComms, and gives the team tools to diagnose forks during development and testing.

It is one step towards reliable group chats, see [group reliability](/messaging/roadmap/index.md#group-reliability).

## Dependencies

- **AnonComms**: the Ordering Policy component is available for integration.

## Risks

| Risk                      | (Accept, Own, Mitigation)                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------- |
| Ordering Policy timeline  | If the Ordering Policy component is not available by early November, its integration slips. Track it in the DeMLS weekly. |

## Deliverables

### [Add tools to detect and diagnose group forks](https://github.com/logos-messaging/pm/issues/511)

**Owner**: Chat Team

### [Implement fork recovery](https://github.com/logos-messaging/pm/issues/512)

**Owner**: Chat Team

### [Integrate SDS](https://github.com/logos-messaging/pm/issues/513)

**Owner**: Chat Team

With forward secrecy, following the [SDS-FS scheme](https://github.com/logos-co/logos-lips/pull/455) designed previously.

### [Integrate the Ordering Policy component from AnonComms](https://github.com/logos-messaging/pm/issues/514)

**Owner**: Chat Team

Replaces the planned move to de-MLS v5.
