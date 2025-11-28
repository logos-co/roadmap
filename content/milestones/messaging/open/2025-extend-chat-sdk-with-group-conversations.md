---
title: Extend Chat SDK with Group Conversations
tags:
    - waku-milestone
date: 2025-12-18
---
# Extend Chat SDK with Group Conversations

**Estimated date of completion**: 19 Dec 2025

**Resources Required for 2025H2**:
- 1 App/Chat Research 
- 1 App/Chat Engineer

Once done, apps like Status can build a chat experience which includes support for multiple device, and multiple
participants in a given group chat.

The features to said group chat will be limited, and extended with further milestones.

Support to plug Status Communities on top of this SDK is **not** expected.
Further group size scaling and extension of membership management API would be needed. 

## Strategic Objective

Logos Movement Module Build Out

## FURPS

[Group Chat](/FURPS/application/group_chat.md)

## Risks

| Type/Level       | Risk                                                                                                                                                                                               | (Accept, Own, Mitigation)                                                                                                                                                                                                                                                                                                                           |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Schedule/Medium  | Milestone Dependency                                                                                                                                                                               | This milestone is dependent on [ChatSDK - Developer Preview](create_chat_sdk_mvp.md).   Delays there will translate into delays to this milestone.                                                                                                                                                                                                  |
| Technical/Medium | Lack of NimLibraries                                                                                                                                                                               | There currently does not exist the required libraries in Nim to build group chat. This will involve evaluating the potential of calling an existing library via FFI or implementing it from scratch. This can be mitigated by vetting existing library potential should occur early or finding security reviewers for nim implemented cryptography. |
| Technical/Low    | Group chat is prone to bugs, even when using existing encryption protocols. Extra time has been allocated to testing and debugging in an effort to mitigate this, however it still remains a risk. | 

## Deliverables

### [Add Group Chat](https://github.com/waku-org/pm/issues/346)

**Owner**: App/Chat Research

**Feature**: [Group Chat](/FURPS/application/group_chat.md)

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

**Checklist**:

- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Group Chat Bindings](https://github.com/waku-org/pm/issues/348)

**Owner**: App/Chat Dev

**Feature**: [Bindings](/FURPS/application/group_chat.md)

**FURPS**:

- S1. Developers can create group conversations from Go Applications; available on pkg.go.dev.
- S2. Developers can create group conversations from Rust Applications; available on crates.io.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Enable usage with RLN SDK](https://github.com/waku-org/pm/issues/347)

**Owner**: App/Chat Dev

#### **Feature**: [Rate Limit Manager](/FURPS/application/rate_limit_manager.md)

**FURPS**:
- F7. Can consume RLN API to access rate limit and current quota.

#### **Feature**: [Group Chat](/FURPS/application/group_chat.md)

**FURPS**:
- S3. SDK can be instantiated with a RLN-enabled Waku node.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)