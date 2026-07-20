---
title: Chat — Developer Preview
tags:
  - messaging-milestone
date: 2025-12-18
github: 'https://github.com/logos-messaging/pm/issues/406'
---


**Resources Required for 2026H1**:
- 2 Chat engineers

Once done, apps like Status can build a chat experience which includes support for multiple devices and multiple participants in a given group chat.

Group chat features will be limited at this stage and extended with further milestones. Support for plugging Status Communities on top of Logos Chat is **not** expected — further group size scaling and extension of membership management API would be needed.

**Encryption approach**: de-MLS (decentralised MLS) from the AnonComms team, which provides multi-steward group management. de-MLS API is consumed as a dependency from the AnonComms team.

**Identity**: A simple identity model must be in place for this milestone. A "user" is a set of installations (devices), with basic association between them. Key rotation and device recovery are included at a basic level. Full identity (binding to external identities, provenance logs, advanced recovery) is planned for [Chat — Beta](2026-chat-beta).

**Remove unnecessary Nim shim**: This milestone includes an attempt to remove the unnecessary Nim layer in Logos Chat by rewriting it in Rust. Currently the Nim layer exists primarily to manage the async runtime and Logos Delivery integration, but adds complexity with no clear benefit. This rewrite is only feasible if Logos Chat can remain fully synchronous on the Rust side. If successful, it would significantly simplify development going forward.

## FURPS

- [Group Chat](/messaging/furps/application/group_chat.md): all

## Risks

| Type/Level      | Risk                             | (Accept, Own, Mitigation)                                                                                                                                              |
| --------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Schedule/Medium | Milestone dependency             | This milestone depends on [Chat — Foundations](2026-chat-foundations.md). Delays there translate into delays here.                                                        |
| Technical/Low   | Group chat bugs                  | Group chat is prone to bugs even when using existing encryption protocols. Extra time allocated to testing and debugging.                                              |
| Technical/High  | SDS and de-MLS ordering conflict | SDS works backward in the dependency tree, but de-MLS requires forward construction from checkpoints. Specific deliverable scheduled to design and define integration. |
| Technical/High  | Nim shim removal feasibility     | Removing the Nim layer is only possible if Logos Chat remains fully synchronous. If async is required (e.g. for data storage), the removal may not be feasible.        |

## Deliverables

### [Add Group Chat](https://github.com/logos-messaging/pm/issues/346)

**Owner**: Chat Team

**Feature**: [Group Chat](/messaging/furps/application/group_chat.md)

**FURPS**:
- F3. Accounts can create group chats between multiple accounts.
- F4. Participants can set a group name and description for all participants in the group.

- R1. Group participants in a conversation can tell if a message is missing, and who sent it.

- P1. The number of network messages for a single outbound group message does not scale with the number of group members.

- +PRIV1. Non-participants cannot correlate a group conversation to any of its participants.

Installation-related FURPS (F1, F2, F5, F6, +PRIV2) moved to [Installation management](2026-chat-beta#installation-management) in Chat — Beta.

### Implement simple identity model

**Owner**: Chat Team

- A "user" is represented as a set of installations (devices)
- Basic association between installations belonging to the same user
- Basic key rotation: ability to add/remove installations

### Implement contact discovery

**Owner**: Chat Team

The implementation should replace v0.1 out-of-band intro bundle sharing.
Current agreement is to use on-chain storage.

> [!WARNING] Risk
> Requires research into whether Logos Blockchain supports the needed functionality by this timeline. Fallback is to continue with out-of-band sharing.
### Remove unnecessary Nim shim from Logos Chat

**Owner**: Chat Team

Evaluate and attempt removing the Nim layer of Logos Chat (`logos-chat`) by rewriting it in Rust. The Nim layer currently handles async runtime management and Logos Delivery integration but adds development complexity. If Logos Chat can remain fully synchronous, this layer can be replaced with Rust, unifying the codebase.

