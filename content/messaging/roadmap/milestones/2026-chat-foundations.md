---
title: Chat — Foundations
tags:
  - messaging-milestone
date: 2025-06-24
github: 'https://github.com/logos-messaging/pm/issues/407'
---

**Resources Required for 2026H1**:
- 2 Chat Researchers
- 1 Delivery Dev for 1 month (C-bindings)
- 3 devs for 2 months

Logos Chat is intentionally minimal at this stage — focused solely on proving the usability of the core approach. It supports 1:1 chat with out-of-band contact discovery and includes supporting implementations to help developers get up and running quickly.

The primary goal is to deliver a usable library that developers can build with today, while laying a flexible foundation for future extensions such as group chats and identity. Releasing as early as possible maximizes feedback time and interaction speed.

Motivations for development of a new chat protocol are described [here](https://forum.vac.dev/t/chatsdk-motivations/501).

This milestone is complete when a working Logos Chat library is integrated in Logos Core and demonstrated at PSF Lisbon.

For testing, a `logos.dev` fleet is used, at early stages with no RLN support.

Note: Logos Delivery is embedded directly in Logos Chat via Nimble — Logos Chat does *not* use the Delivery Logos Core module. Moving to an architecture where the Chat module uses the locally available Delivery module is planned for v0.2 (Logos Core Integration — Phase 2).

Identity is limited to installation keys (one keypair = one client instance). There is no concept of a "user" spanning multiple devices — that is deferred to [Chat — Developer Preview](2026-chat-developer-preview).

## FURPS

[Logos Chat](/messaging/furps/application/chat_sdk.md)

## Risks

| Type/Level            | Risk                                   | (Accept, Own, Mitigation)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|-----------------------|----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Schedule/High         | Lack of Nim experience                 | Nim is a new language to many who will be performing this work, and will require skill-up to be effective. Delays and high bug counts are possible due to underestimating effort required to become proficient. Leveraging existing Nim knowledge in the team will help mitigate this risk.                                                                                                                                                                                                                                                                                      |
| Organisational/Medium | Direction Alignment                    | Currently the chat use case does not have a Security Model and Privacy Model defined from which to drive development. These will need to be drafted while work begins. Given these documents will have wider impact in the org and community there is a risk that consensus will take longer than anticipated, stalling development. Mitigation involves documenting the targeted approach and socializing it as early as possible. Following the Protocol Design Framework outlined for chat use cases will help decompose work areas making partial consensus easier to reach. |
| Schedule/Medium       | Cryptographic Primitives               | There is an assumption that the cryptographic libraries needed for the success of this project are available and in a usable state. To mitigate, early tasks will involve spikes to find appropriate libraries and de-risk their usage. Collaboration with ACZ Think Tank. Extra time spent preparing crypto libraries / porting will result in delays.                                                                                                                                                                                              |
| Technical/Low         | Uncertain Performance                  | Performance targets for bandwidth are hard to quantify at this stage. They are listed as `P1` in the FURPS. While these targets appear reasonable (125 bytes per second per user) that remains to be seen. This is hard to mitigate as the library cannot be profiled until late in the development cycle, making adjustments difficult.                                                                                                                                                                                                                                             |
| Migration/High        | RLN-less fleet leads to breaking change | If the staging, and then prod fleets, for Logos Chat are set up without RLN, then breaking changes will be needed to migrate to an RLN-protected network.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Technical/Medium      | Async execution model in Logos Core    | Logos Core requires a single async environment (Nim-based). Rust-side code in Logos Chat must remain synchronous for v0.1 to avoid multi-runtime conflicts. This constrains the architecture and may require rework for v0.2.                                                                                                                                                                                                                                                                                                                                                      |

## Deliverables

### [Logos Chat Library](https://github.com/logos-messaging/pm/issues/316)

**Owner**: Chat Team

**Feature**: [Logos Chat](/messaging/furps/application/chat_sdk.md)

**FURPS**:
- F1. Accounts can be created in a permission-less way, to communicate on the network.
- F2. Accounts can send messages to conversations with one other participant.
- F3. All conversations benefit from forward secrecy and post-compromise security.
- F4. Sender gets confirmation of message reception by recipient device.
- F5. Developers can create their own payload types or use supplied basic types.
- F6. Library contains a default message database for developers. *(deferred to v0.2)*
- F7. Library contains a default secrets database for developers. *(deferred to v0.2)*

- U1. Secure session setups are non-interactive, allowing messages to be sent without waiting for the recipient's device to come online.
- U2. Conversations are initiated by sharing invite links out-of-band.
- U3. Minimal example of Logos Chat is no more than 25 lines of code.

- R1. Participants in a conversation can eventually determine whether they missed messages.

- P1. 10K active users on a single shard add no more than an average of 10Mbps to the total bandwidth; based on clients generating 100 character chat messages, 4 times per minute.

- S1. Messaging integrates RLN-like rate limit, limiting outbound messages per epoch.
- S2. Payload definitions are versioned to support future protocol updates.

- +4. Nimble package manager is used to build.
