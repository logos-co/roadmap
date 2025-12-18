---
title: Complete Reliable Channel API
tags:
    - messaging-milestone
date: 2025-12-17
---

# Complete Reliable Channel API

**Estimated date of completion**: {Enter date}

**Resources Required for 2026H1**:
- {roles and % application to it}

The [[Package SDS in Reliable Channel API]] milestone delivers the core SDS experience. This milestone completes the [Reliable Channel API](https://github.com/logos-messaging/specs/pull/89) by adding:
- Message segmentation for large payloads
- Rate limit management (in preparation to future RLN integration)

Also, deprecates store hash queries as they enable linkability of participants in same channel from a store node PoV.
Finally, prepare reliable channel to support de-MLS like encryption.

## FURPS

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): F10, F11, F12, F13, F14, R2, P1, P2, U5, U6
- [Segmentation](/messaging/furps/application/segmentation.md): F1, F2, F3, F4

## Risks

| Risk   | (Accept, Own, Mitigation)     |
|--------|-------------------------------|
| [Risk] | [how to we address this risk] |

## Deliverables

### Add Segmentation to Reliable Channel API

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F10. Large messages are segmented to fit transport constraints.
- R2. Segments tracked independently and reassembled before deliver (via event emission).
- P2. Final encoded routed message stays below 150 KB routing layer limit.

### Add Rate Limit Manager to Reliable Channel API

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F12. Outbound messages passed on the API are queued when the rate limit is exceeded.
- F13. Ephemeral outbound messages passed on the API are dropped when the rate limit is approached or exceeded.
- F14. Outbound messages retries are queued when the rate limit is approached or exceeded.
- U5. Rate limit is configurable at channel creation.
- U6. Rate limit "approached" state is configurable at channel creation.

### Deprecate store hash queries for missing messages

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- ~~F4. Missing messages are automatically retrieved via store hash queries.~~

###  Support different encryption for sync messages

**Owner**: Nim Messaging Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS:**
- F11. A different encryption mechanism can be applied for sync message (than the one for content messages).
