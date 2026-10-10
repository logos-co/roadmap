---
title: Chat — Ready for App Developers
tags:
  - messaging-milestone
date: 2026-10-02
github:
---

**Targets**: Testnet v0.4

**Resources Required**:
- Chat Team

Makes Logos Chat behave like a normal messenger across restarts, gives applications the message lifecycle information they need, and makes it simple for contributors and users to understand what Logos Chat is.

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): F6, F7

## Exit criteria

- [ ] After an application restart, accounts, installations, conversations, messages and group memberships are restored, and pending outbound messages are sent. Covered by an automated test.
- [ ] Sending a message returns a `message_id`, and the Delivery `message_queued` event is forwarded to the application with that `message_id` ([logos-chat#270](https://github.com/logos-messaging/logos-chat/issues/270)).
- [ ] An overview of Logos Chat is published: what it is, its architecture, and how it relates to de-MLS.

## Scope

### Persist all account and conversation state

**Owner**: Chat Team

### [Expose `message_id` and forward `message_queued` events](https://github.com/logos-messaging/logos-chat/issues/270)

**Owner**: Chat Team

### Write the Logos Chat overview

**Owner**: Chat Team

- What Logos Chat is
- Architecture of Logos Chat
- Logos Chat vs. de-MLS

### Specify interoperable content types

**Owner**: Chat Team

The specification is in progress. The `Text` and `Reply` content types delivered in [Chat — Beta](2026-chat-beta) are a stopgap until it is done.

**Done when**: The specification is merged in [logos-lips](https://github.com/logos-co/logos-lips).

## Not in scope

Delivered in the library in v0.3, deliberately not exposed in the `chat-module` and Logos Chat UI yet:
- **Remove member** — potentially buggy, exposed once group chats are reliable (see [Chat — Group Reliability Measured](2026-chat-group-reliability.md)).
- **Content types** (`Text`, `Reply`) — exposed once the interoperable content types specification is implemented.
