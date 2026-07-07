---
title: Logos Core Integration — Phase 2
tags:
  - messaging-milestone
date: 2026-01-19
---


**Resources Required for 2026H1**:
- 1 dev for 4 weeks from Chat Team
- 1 dev for 2 weeks from Delivery Team

In v0.1, the Chat module embeds Logos Delivery directly via Nimble. This milestone transitions to an architecture where the Chat module uses the locally available Delivery module through Logos Core's inter-module communication.

As new capabilities land in Logos Chat and Logos Delivery (group chats, Reliable Channel API), they are exposed through the corresponding Logos Core modules.

A unified Logos Core demo application is built in QML, supporting 1:1 chats, group chats, and identity. This replaces the v0.1 demo app (which used Qt widgets).

Integration tests are defined by the Messaging team and implemented by IFT-TS.

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): S3 (library can be used via C-Bindings)
- [Group Chat](/messaging/furps/application/group_chat.md): S1 (group conversations from C-bindings in Logos Core)

## Risks

| Risk                                           | (Accept, Own, Mitigation)                                                                                                                                                                                      |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inter-module communication                     | Logos Core inter-module communication mechanism may not be mature enough. Module should be implemented in the simplest way to serve testing and demo purposes, but be able to change integration later.        |
| Multiple async runtimes                        | If de-MLS (Rust/Tokio) runs alongside Logos Delivery (Nim/Chronos) in the same process, runtime conflicts may arise. Needs investigation.                                                                      |
| External access to Logos Core is not available | Integration tests require a way to access Logos Core modules from outside. Current agreement is to enable Logos Core exposing modules API to REST (and WebSockets for events). |

## Deliverables

### Integrate Chat and Delivery Logos Core modules

**Owner**: Chat Team

The Chat module communicates with the Delivery module through Logos Core rather than embedding Logos Delivery directly. This enables:
- Remove direct integration of Logos Delivery into Logos Chat, lightening the Chat implementation.
- Shared Delivery instance across all modules in Logos Core
- Proper separation of concerns

Chat should be prepared to use Messaging API first, and switch to Reliable Channel API when it's ready.

### [Add Group Chats API to Logos Core Chat module](https://github.com/logos-messaging/pm/issues/375)

**Owner**: Chat Team

**Feature**: [Group Chat](/messaging/furps/application/group_chat.md)

**FURPS**:
- S1. Developers can create group conversations from C-bindings, in Logos Core framework.

The Chat module API is extended to expose group chat functionality (create group, send group message, manage members) and identity (manage installations).

### Add Reliable Channel API to Logos Core Delivery module

**Owner**: Delivery Team

When the [Reliable Channel API — Developer Preview](2026-reliable-channel-api-developer-preview.md) is ready, the Delivery Logos Core module is updated to expose it alongside the Messaging API. Chat module switches to using Reliable Channel API for message delivery.

### Build Logos Core demo app in QML

**Owner**: Chat Team

A single Logos Core application implemented in QML (replacing the v0.1 Qt widgets demo):
- Supports 1:1 chats and group chats
- Supports identity (user with multiple installations, add/remove devices)
- Uses the Chat and Delivery Logos Core modules through their APIs

### Implement integration tests for Messaging modules

**Owner**: Messaging Team (definition) + IFT-TS (implementation)

The Messaging team defines test scenarios and expected behavior. IFT-TS implements and maintains the test suite.

End-to-end tests that verify:
- Chat module can send/receive messages through Delivery module via Logos Core
- Group chat creation, messaging, and membership management
- Module lifecycle (start, stop, restart) works correctly
- Error propagation between modules
