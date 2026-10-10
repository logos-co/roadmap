---
title: Chat — Group Reliability Measured
tags:
  - messaging-milestone
date: 2026-09-16
github: https://github.com/logos-messaging/pm/issues/482
---

**Targets**: Testnet v0.4

**Type**: Research

**Resources Required**:
- Chat Team
- DST or QA
- AnonComms (de-MLS)

Follows [Chat — Beta](2026-chat-beta). Group chats based on de-MLS are not reliable beyond a few members. This is the main risk for Logos Chat, so it is addressed before further user-facing features on group chats.

Group reliability has two separate parts:
- **Message delivery** — every member eventually receives every message. Addressed by integrating SDS, with forward secrecy (SDS-FS).
- **Group state consensus** — every member agrees on the group state (membership, epochs). Addressed by the new de-MLS architecture and fork resolution.

This milestone is reached when we know where group chats stand, what "reliable" means for them, and how SDS is integrated. Reaching the target is the next milestone, **Chat — Groups of N Members Reliable**: new de-MLS architecture, SDS with SDS-FS, fork resolution and reliable invitations.

## Exit criteria

- [ ] Reliability targets are set: group size N, and delivery rate under the test scenarios (churn, offline members, restarts).
- [ ] A baseline report of the current implementation against those scenarios is available ([#442](https://github.com/logos-messaging/pm/issues/442)).
- [ ] The SDS implementation used by Logos Chat is decided.

## Decisions

| Question                                                                    | Owner                  | Decide by  |
| --------------------------------------------------------------------------- | ---------------------- | ---------- |
| Reliability targets: group size N and delivery rate                         | Chat Team              | 2026-10-16 |
| Which SDS implementation does Logos Chat use: `nim-sds` or a Rust one?      | Chat Team              | 2026-10-16 |
| When is the new de-MLS architecture available for integration?             | AnonComms              | 2026-11-16 |

## Dependencies

- **DST**: capacity for the baseline run. Shared with [Messaging API — General Availability](2026-messaging-api-general-availability), which has priority. If DST is not available, the baseline is run by the Chat Team with QA.
- **AnonComms**: timeline of the new de-MLS architecture (engine, group, router).

## Risks

| Risk                             | (Accept, Own, Mitigation)                                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Baseline shows a deeper problem  | Accept. Finding it is the purpose of the milestone. The [Chat — General Availability](2026-chat-general-availability) target is re-baselined.        |

## Scope

### [Baseline reliability testing](https://github.com/logos-messaging/pm/issues/442)

**Owner**: Chat Team + DST

- Message delivery rates in group chats of growing size
- Recovery scenarios (node restart, network partition, member offline)
- Multi-device sync correctness

### Start SDS with SDS-FS integration

**Owner**: Chat Team

Implements the [forward secrecy compatible encryption scheme for SDS](https://github.com/logos-co/logos-lips/pull/455) designed in [Chat — Beta](2026-chat-beta#design-sds-and-de-mls-integration). Completed in the next milestone.
