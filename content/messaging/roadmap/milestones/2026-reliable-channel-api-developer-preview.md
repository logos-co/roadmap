---
title: Reliable Channel API — Developer Preview
tags:
  - messaging-milestone
date: 2025-12-10
github: https://github.com/logos-messaging/pm/issues/405
---

**Resources Required for 2026H1**:
- 2 Delivery engineers
- 1 Chat engineer for integration

The [Chat — Foundations](2026-chat-foundations.md) milestone does not include the [Scalable Data Sync](https://github.com/vacp2p/rfc-index/blob/main/vac/raw/sds.md) protocol. This milestone delivers dedicated work to fully leverage SDS to:
- Identify and retrieve missed messages
- Track, acknowledge, and resend unacknowledged messages

The [Reliable Channel API](https://github.com/logos-messaging/specs/pull/89) delivers a simple API that enables those features, as well as:
- SDS-Repair, an extension to SDS that reduces reliance on Store services and improves receiver anonymity from the original SDS protocol.

This milestone focuses on forming the API and delivering a pre-configured SDS experience. Segmentation and rate limit manager will be delivered in the [General Availability](2026-reliable-channel-api-beta.md) milestone.

## FURPS

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): F1, F2, F3, F4, F5, F6, F7, F8, F9, U1, U2, U3, U4, R1, R3

## Risks

| Risk                             | (Accept, Own, Mitigation)                                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SDS maturity                     | SDS protocol has not been extensively tested in production. May require tuning of parameters to avoid network saturation.                                                                   |
| SDS-Repair network overhead      | SDS-R can quickly saturate the network with repair requests if parameters are not carefully tuned. Linear backoff should become exponential.                                                |

## Deliverables

### Deliver Reliable Channel API

**Owner**: Delivery Team

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

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F9. Missing messages re-emission is requested from other channel participants

