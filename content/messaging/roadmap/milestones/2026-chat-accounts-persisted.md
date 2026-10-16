---
title: Chat — Accounts Persisted
tags:
  - messaging-milestone
date: 2026-10-16
github:
---

**Targets**: Testnet v0.4

**Resources Required**:
- 1 Chat engineer

Conversations and messages already survive a restart ([logos-chat-module#82](https://github.com/logos-co/logos-chat-module/pull/82), [logos-chat#278](https://github.com/logos-messaging/logos-chat/pull/278)). Accounts and installations do not fully, so a restart can force a user to register again. After this milestone, identity is persisted by Logos Chat and new conversations can start with the same account. ConversationType persistence is out of scope of this milestone; continuing previous conversations is not yet possible.

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): F7

## Deliverables

### Persist accounts and installations

**Owner**: Chat Team
