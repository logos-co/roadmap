---
title: Chat — Beta 2
tags:
  - messaging-milestone
date: 2026-09-16
github: https://github.com/logos-messaging/pm/issues/482
---

**Resources Required**:
- Chat engineers
- Status Team support
- DST involvement for reliability testing

Follows [Chat — Beta](2026-chat-beta). Validates Logos Chat at scale with DST and in a real application through a test integration into Status App.

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): all
- [Group Chat](/messaging/furps/application/group_chat.md): all

## Deliverables

### [Perform test integration of Logos Chat into Status App](https://github.com/logos-messaging/pm/issues/444)

**Owner**: Chat Team + Status Team

Initial validation that Logos Chat (1:1 + group chats) can be consumed by Status. This is an exploratory integration, not a production milestone. The goal is to get feedback on the API from a production app.

### [Reliability testing with DST](https://github.com/logos-messaging/pm/issues/442)

**Owner**: Chat Team + DST

- Message delivery rates across scenarios (1:1, groups, multi-device)
- Recovery scenarios (node restart, network partition, device offline)
- Multi-device sync correctness
- Performance testing against FURPS targets (10K users, 10Mbps bandwidth)
- Scale testing with up to 201 users in a group chat
