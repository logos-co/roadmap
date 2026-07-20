---
title: Chat — Beta
tags:
  - messaging-milestone
date: 2026-01-15
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

### Implement full identity model

**Owner**: Chat Team

Building on the simple identity model from v0.2:
- Full user identity spanning multiple installations/devices
- Key rotation without losing conversation history
- Device recovery mechanisms
- Optional binding to external identity systems
- Specification and implementation, in collaboration with AnonComms team

### Stabilize and polish API

**Owner**: Chat Team

- Address feedback from v0.2 Status test integration
- Fix API inconsistencies and footguns discovered during integration
- Stabilize error handling and edge cases

### Deliver user-facing chat features

**Owner**: Chat Team

Features needed for a real chat experience beyond the protocol layer:
- Message history persistence and retrieval across sessions
- Contact management (add, remove, block contacts)
- Conversation list management
- Typing indicators and read receipts

### Reliability testing with DST

**Owner**: Chat Team + DST

- Message delivery rates across scenarios (1:1, groups, multi-device)
- Recovery scenarios (node restart, network partition, device offline)
- Multi-device sync correctness
- Performance testing against FURPS targets (10K users, 10Mbps bandwidth)
- Scale testing with up to 201 users in a group chat

### Add support for Logos Delivery RLN

**Owner**: Chat Team

Logos Chat works against RLN-enforcing networks: chat traffic sent through Logos Delivery carries valid RLN proofs, and the application can set up and manage the required RLN membership through the delivery layer. Rate limiting implications (queued or dropped messages) are surfaced to the application.

**Dependency**: [RLN for Edge Nodes](2026-rln-for-edge-nodes.md) must be delivered.

### Perform test integration of Logos Chat into Status App

**Owner**: Chat Team + Status Team

Initial validation that Logos Chat (1:1 + group chats) can be consumed by Status. This is an exploratory integration, not a production milestone. The goal is to get feedback on the API from a production app.

### Design SDS and de-MLS integration

**Owner**: Chat Team

Define how SDS reliability (backward dependency resolution) integrates with de-MLS encryption (forward checkpoint construction). This is a design deliverable that feeds into the [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md) milestone.

**Dependency**: de-MLS API from AnonComms team must be available.
