---
title: Extend Chat SDK with Group Conversations
tags:
    - messaging-milestone
date: 2025-12-18
---

# [Extend Chat SDK with Group Conversations](https://github.com/logos-messaging/pm/milestone/50)

**Estimated date of completion**: TODO

**Resources Required for 2026H1**:
- 2 Chat Engineers
- 1 Messaging Logos Core engineer for 1 month (C-Bindings) 

Once done, apps like Status can build a chat experience which includes support for multiple device, and multiple
participants in a given group chat.

The features to said group chat will be limited, and extended with further milestones.

Support to plug Status Communities on top of this SDK is **not** expected.
Further group size scaling and extension of membership management API would be needed.

## FURPS

[Group Chat](/messaging/furps/application/group_chat.md)

## Risks

| Type/Level       | Risk                                                                                                                                                                                               | (Accept, Own, Mitigation)                                                                                                                                                                                                                                                                                                                           |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Schedule/Medium  | Milestone Dependency                                                                                                                                                                               | This milestone is dependent on [ChatSDK - Developer Preview](/messaging/milestones/open/2025-create-chat-sdk-mvp.md).   Delays there will translate into delays to this milestone.                                                                                                                                                                  |
| Technical/Medium | Lack of NimLibraries                                                                                                                                                                               | There currently does not exist the required libraries in Nim to build group chat. This will involve evaluating the potential of calling an existing library via FFI or implementing it from scratch. This can be mitigated by vetting existing library potential should occur early or finding security reviewers for nim implemented cryptography. |
| Technical/Low    | Group chat is prone to bugs, even when using existing encryption protocols. Extra time has been allocated to testing and debugging in an effort to mitigate this, however it still remains a risk. | 
| Technical/High   | SDS and de-MLS/Sender key integration need to be well thoughts due to conflicting message ordering (forward to construct keys, backward to recover messages with SDS)                              | Specific deliverable schedule to design and define integration                                                                                                                                                                                                                                                                                      |                                      
| Migration/High   | RLN-less fleet lead to breaking change                                                                                                                                                             | If the staging, and then prod fleets, for Chat SDK are setup without RLN, then breaking changes will be needed to migrate to an RLN-protected network.                                                                                                                                                                                              |

## Deliverables

### [Add Group Chat](https://github.com/waku-org/pm/issues/346)

**Owner**: Chat Team

**Feature**: [Group Chat](/messaging/furps/application/group_chat.md)

**FURPS**:

- F1. Accounts can receive a message in multiple locations (e.g. devices) by registering new installations.
- F2. Accounts can view and remove installations as needed.
- F3. Accounts can create GroupChats between multiple accounts.
- F4. Participants can set a group name and description for all participants in the group. 
- F5. Account can view all provisioned installations.
- F6. Account can revoke other installations in case of a lost device.

- R1. Group Participants in a conversation can tell if a message is missing, and who sent it.

- P1. The number of network messages for a single outbound group message does not scale with the number of group members.

- +PRIV1. Non-participants cannot correlate a group conversation to any of its participants.
- +PRIV2. No identifying information is visible when registering an installation.

### [Group Chat Bindings](https://github.com/waku-org/pm/issues/348)

**Owner**: Chat Team

**Feature**: [Bindings](/messaging/furps/application/group_chat.md)

**FURPS**:

- S1. Developers can create group conversations from C-bindings.

### DROPPED [Enable usage with RLN SDK](https://github.com/waku-org/pm/issues/347)

**Owner**: Chat Team

#### **Feature**: [Rate Limit Manager](/messaging/furps/application/rate_limit_manager.md)

**FURPS**:
- F7. Can consume RLN API to access rate limit and current quota.

#### **Feature**: [Group Chat](/messaging/furps/application/group_chat.md)

**FURPS**:
- S2. SDK can be instantiated with a RLN-enabled Waku node.

### Setup production fleet for Chat SDK

**Owner**: Nim Messaging Team

Ensure a production fleet is available and pre-configurable for the Chat SDK Developer preview.