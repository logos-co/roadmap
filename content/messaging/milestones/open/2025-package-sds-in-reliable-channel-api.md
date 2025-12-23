---
title: Package SDS in Reliable Channel API
tags:
    - messaging-milestone
date: 2025-12-10
---

# Package SDS in Reliable Channel API

**Estimated date of completion**: {Enter date}

**Resources Required for 2025H2**:
- {roles and % application to it}
- {external services consumed (Vac/IFT)}
- {infrastructure}

The [[Create Chat SDK MVP]] - developer preview - does include the [Scalable Data Sync](https://github.com/vacp2p/rfc-index/blob/main/vac/raw/sds.md) protocol usage. However, dedicated work is necessary to
fully leverage SDS to:
- identify and retrieved missed messages
- track acknowledge, and resend unacknowledged message

The [Reliable Channel API](https://github.com/logos-messaging/specs/pull/89) delivers a simple API that enables those features, as well as:
- message segmentation
- Rate limit management (in preparation to future RLN integration).
- SDS-Repair, an extension to SDS that reduce reliance on Store services, and improves received anonymity from original SDS protocol.

This milestone focuses on delivering a pre-configured SDS experience. Segmentation and rate limit manager will be delivered at a later stage.

Note: Dependency to logos-messaging-nim is to be handled via Nimble, meaning the Chat Logos Module would have libp2p, logos-messaging, etc embedded. It also means that there is no "reliable channel" Logos Core module as part of this milestone.
Moving to an architecture where the Chat module uses the locally available messaging module, is not yet planned.

## FURPS

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): F1, F2, F3, F4, F5, F6, F7, F8, F9, U1, U2, U3, U4, R1, R3

## Risks

| Risk   | (Accept, Own, Mitigation)     |
|--------|-------------------------------|
| [Risk] | [how to we address this risk] |

## Deliverables

### Deliver Reliable Channel API

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F1. All messages sent in a channel are eventually received by all participants.
- F2. Senders are notified when messages are acknowledged by other participants.
- F3. Missing messages are automatically detected.
- F4. Missing messages are automatically retrieved via store hash queries.
- F5. Messages are causally ordered using Lamport timestamps.
- F6. Outbound messages that are not acknowledged are automatically resent.
- F7. API delegates message encryption and decryption to consumer-provided implementations.
- F8. When encryption is applied, the SDS envelope is encrypted.
- U1. Sane defaults with pre-configured parameters for common scenarios.
- U2. Single cohesive interface wrapping SDS and store queries for missing messages.
- U3. Event-driven model exposing message lifecycle through intuitive events.
- U4. The API is agnostic to the encryption mechanism used.

Note: No segmentation or rate limit manager in this milestone. SDS messages cached locally.

### Implement SDS Repair

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F9. Missing messages re-emission is requested from other channel participants

### Use Reliable Channels in Chat SDK

**Owner**: Chat Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- U2. Single cohesive interface wrapping SDS, store queries, segmentation, and rate limits.