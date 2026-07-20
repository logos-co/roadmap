---
title: Chat — Beta
tags:
  - messaging-milestone
date: 2026-01-15
github: https://github.com/logos-messaging/pm/issues/425
---


**Resources Required**:
- 2 Chat engineers
- 1 Delivery engineer (testing support)
- DST involvement for reliability testing

The Beta focuses on polishing the Logos Chat implementation into a state suitable for real application integration. It builds on the foundations (v0.1, 1:1 chats) and the [Developer Preview](2026-chat-developer-preview) (v0.2, group conversations) by hardening the API, completing the identity model, enabling on-chain contact discovery, and validating the integration in Status.

The focus is:
- Stabilize and polish the API based on feedback from v0.2 Status test integration
- Complete the full identity model
- Test and fix integration issues at scale with DST
- Deliver user-facing features needed for a real chat experience

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): all
- [Group Chat](/messaging/furps/application/group_chat.md): all
- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): via integration

## Risks

| Risk                          | (Accept, Own, Mitigation)                                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| On-chain contact discovery    | Storing intro bundles on Logos Blockchain requires research. Uncertain if the blockchain is ready for this by v0.3. Needs early validation. |
| Integration stability         | Combining 1:1, group chats, identity, and reliability into a cohesive release may surface emergent bugs.                                   |
| Status feedback volume        | Real integration testing may surface a large number of issues. Need capacity to triage and address.                                        |

## Deliverables

### [Implement full identity model](https://github.com/logos-messaging/pm/issues/439)

**Owner**: Chat Team

Building on the simple identity model from v0.2:
- Full user identity spanning multiple installations/devices
- Key rotation without losing conversation history
- Device recovery mechanisms
- Optional binding to external identity systems
- Specification and implementation, in collaboration with AnonComms team

Installation (device) lifecycle is covered separately by [Installation management](#installation-management).

### [Installation management](https://github.com/logos-messaging/pm/issues/464)

**Owner**: Chat Team

Extracted from [Add Group Chat](https://github.com/logos-messaging/pm/issues/346): the installation (device) lifecycle for accounts. The current implementation registers installation keys and key packages, but installations cannot yet be listed, removed, or revoked, and known gaps prevent true multi-device usage: one-time key packages limit a member to a single conversation ([libchat#169](https://github.com/logos-messaging/libchat/issues/169)), installation keys are not persisted across sessions ([libchat#28](https://github.com/logos-messaging/libchat/issues/28)), and multiple installations cannot resolve to a single account ([libchat#109](https://github.com/logos-messaging/libchat/issues/109)).

**Feature**: [Group Chat](/messaging/furps/application/group_chat.md)

**FURPS**:
- F1. Accounts can receive a message in multiple locations (e.g. devices) by registering new installations.
- F2. Accounts can view and remove installations as needed.
- F5. Account can view all provisioned installations.
- F6. Account can revoke other installations in case of a lost device.
- +PRIV2. No identifying information is visible when registering an installation — to be addressed by design in the key package registry replacement ([libchat#110](https://github.com/logos-messaging/libchat/issues/110) is an interim testnet service).

### [Stabilize and polish API](https://github.com/logos-messaging/pm/issues/440)

**Owner**: Chat Team

- Address feedback from v0.2 Status test integration
- Fix API inconsistencies and footguns discovered during integration
- Stabilize error handling and edge cases

### [Deliver user-facing chat features](https://github.com/logos-messaging/pm/issues/441)

**Owner**: Chat Team

Features needed for a real chat experience beyond the protocol layer:
- Message history persistence and retrieval across sessions
- Contact management (add, remove, block contacts)
- Conversation list management
- Typing indicators and read receipts

### [Reliability testing with DST](https://github.com/logos-messaging/pm/issues/442)

**Owner**: Chat Team + DST

- Message delivery rates across scenarios (1:1, groups, multi-device)
- Recovery scenarios (node restart, network partition, device offline)
- Multi-device sync correctness
- Performance testing against FURPS targets (10K users, 10Mbps bandwidth)
- Scale testing with up to 201 users in a group chat

### [Add support for Logos Delivery RLN](https://github.com/logos-messaging/pm/issues/347)

**Owner**: Chat Team

Logos Chat works against RLN-enforcing networks: chat traffic sent through Logos Delivery carries valid RLN proofs, and the application can set up and manage the required RLN membership through the delivery layer. Rate limiting implications (queued or dropped messages) are surfaced to the application.

**Dependency**: [RLN for Edge Nodes](2026-rln-for-edge-nodes.md) must be delivered.

### [Perform test integration of Logos Chat into Status App](https://github.com/logos-messaging/pm/issues/444)

**Owner**: Chat Team + Status Team

Initial validation that Logos Chat (1:1 + group chats) can be consumed by Status. This is an exploratory integration, not a production milestone. The goal is to get feedback on the API from a production app.

### [Design SDS and de-MLS integration](https://github.com/logos-messaging/pm/issues/445)

**Owner**: Chat Team

Define how SDS reliability (backward dependency resolution) integrates with de-MLS encryption (forward checkpoint construction). This is a design deliverable that feeds into the [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md) milestone.

**Dependency**: de-MLS API from AnonComms team must be available.
