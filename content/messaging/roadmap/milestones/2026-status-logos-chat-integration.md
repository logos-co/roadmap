---
title: "Status: Logos Chat Integration"
tags:
  - messaging-milestone
date: 2026-02-01
github: https://github.com/logos-messaging/pm/issues/396
---


**Resources Required**:
- 1 Chat engineer
- Status Core team (`status-go` changes)
- QA support from both teams

Status switches from its current chat protocol implementation to Logos Chat, consumed through Logos Core. This is the largest integration milestone and replaces Status's chat backend for 1:1 chats, group chats, and eventually communities.

**Prerequisites**:
- [Chat — Beta](2026-chat-beta) (v0.3) must be delivered
- [Logos Core Integration — Phase 2](2026-logos-core-integration-phase-2) (v0.2) — Chat and Delivery modules working through Logos Core

**Migration approach**:
- Both parties (old Status Protocol and new Logos Chat) need to be supported in parallel during migration
- Migration order: 1:1 chats → group chats → communities
- Backend must support running old and new protocols simultaneously
- Communities are "groups of group chats" — Status keeps its own token-gated access layer on top

**Key constraints** (from CTO alignment):
- Communities are not the Messaging team's responsibility
- Integration maintenance transfers to Status after initial delivery
- Messaging team involvement should remain minimal post-handoff

## Related milestones

- [Chat — Foundations](2026-chat-foundations.md) (v0.1) — 1:1 chats
- [Chat — Developer Preview](2026-chat-developer-preview) (v0.2) — group chats via de-MLS
- [Chat — Beta](2026-chat-beta) (v0.3) — first external release
- [Logos Core Integration — Phase 2](2026-logos-core-integration-phase-2) — Chat ↔ Delivery through Logos Core

## Risks

| Risk                          | (Accept, Own, Mitigation)                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Migration complexity          | Running two chat protocols in parallel is complex. Clear migration path and rollback strategy needed.                             |
| Status team capacity          | Status Core team needs to allocate developers for `status-go` integration. Coordination needed early.                             |
| Communities scope creep       | Communities architecture ("groups of group chats") may require Messaging team involvement beyond initial expectations.             |
| de-MLS group size limits      | de-MLS targets up to 10,000 members, but Status communities may need more. Scaling assessment needed.                             |
| Breaking changes              | Logos Chat is still evolving. Breaking changes between Developer Preview and GA may impact Status integration timeline.            |

## Deliverables

### [Integrate Logos Chat 1:1 chats in Status](https://github.com/logos-messaging/pm/issues/460)

**Owner**: Chat Team + Status Core

- Status uses Logos Chat for 1:1 conversations
- Consumed through Logos Core
- Migration path from existing Status 1:1 chat protocol
- Go bindings via C-bindings from Logos Core

### [Integrate Logos Chat group chats in Status](https://github.com/logos-messaging/pm/issues/461)

**Owner**: Chat Team + Status Core

- Status uses Logos Chat group chats (de-MLS) for group conversations
- Migration path from existing Status group chat protocol
- Multi-device support through de-MLS installations

### [Define communities architecture on Logos Chat](https://github.com/logos-messaging/pm/issues/462)

**Owner**: Status Core (with Messaging team advisory)

- Communities as "groups of group chats" using Logos Chat
- Token-gated access layer remains Status-owned
- No separate community protocol from Messaging team
- Logos Chat provides the group chat substrate; Status builds community features on top

### [Deploy RLN Contracts to Status L2 testnet](https://github.com/logos-messaging/pm/issues/356)

**Owner:** Delivery Team

- RLN contracts are deployed on Status Network
- Logos Delivery in Status uses RLN on Status Network
