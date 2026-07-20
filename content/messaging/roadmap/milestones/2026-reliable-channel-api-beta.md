---
title: Reliable Channel API — Beta
tags:
  - messaging-milestone
date: 2025-12-17
github: https://github.com/logos-messaging/pm/issues/402
---

**Resources Required for 2026H2**:
- 2 Delivery engineers
- 1 Chat engineer

The [Developer Preview](2026-reliable-channel-api-developer-preview.md) delivers the core SDS experience. This milestone completes the [Reliable Channel API](https://github.com/logos-messaging/specs/pull/89) by adding:
- Message segmentation for large payloads
- Rate limit management (in preparation for future RLN integration)

Also deprecates store hash queries as they enable linkability of participants in the same channel from a store node PoV. Prepares reliable channel to support de-MLS encryption.

## FURPS

- [Reliable Channel API](/messaging/furps/application/reliable_channel.md): F10, F11, F12, F13, F14, R2, P1, P2, U5, U6
- [Segmentation](/messaging/furps/application/segmentation.md): F1, F2, F3, F4

## Risks

| Risk                                                             | (Accept, Own, Mitigation)                                                                                                                                                        |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reed-Solomon reconstruction in segementation  might be reduntant | Reed-Solomon-based reconstruction in Segmentation might be redundant, because SDS-R already ensures re-transmission of messages. Consider removing, discuss with AnonComms team. |
| Rate limit UX impact                                             | Rate limiting will cause messages to be queued or dropped. UX implications need to be communicated to Chat team and developers.                                                  |

## Deliverables

### Create Segmentation Library

https://github.com/logos-messaging/pm/issues/318

**Owner**: Chat Team + Delivery Team

**Feature**: [Segmentation](/messaging/furps/application/segmentation.md)

**FURPS**:
- F1. Outbound messages larger than the maximum message size are partitioned into several messages to fit transport constraints.
- F2. Inbound partitioned messages are reconstructed into a whole message.
- F3. A capping limit is applied to pre-segmented messages (e.g. 100MB).
- F4. Messages under the maximum message size are not modified.

- U1. Only takes a maximum message size as a parameter.

- R1. Reconstruction can be performed even when parts are received out of order.
- R2. Reconstruction can be performed as long as 87.5% of the segments is received.
- R3. If too many parts are missing to reconstruct, an informative error should be logged.

- P1. The payload overhead does not exceed 12.5% overall, and 100 bytes per segment.

- S1. Nim library.

- +1. Segmentation metadata should not reveal information about the original message content.
- +2. Relevant for all Logos Delivery nodes.
- +3. Nimble package manager is used to build.

### Add Segmentation to Reliable Channel API

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F10. Large messages are segmented to fit transport constraints.
- R2. Segments tracked independently and reassembled before delivery (via event emission).
- P2. Final encoded routed message stays below 150 KB routing layer limit.

### Deprecate store hash queries for missing messages

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- ~~F4. Missing messages are automatically retrieved via store hash queries.~~

### Support different encryption for sync messages

**Owner**: Delivery Team

**Feature**: [Reliable Channel API](/messaging/furps/application/reliable_channel.md)

**FURPS**:
- F11. A different encryption mechanism can be applied for sync messages (than the one for content messages).

### Provide documentation on the API

**Owner**: Delivery Team

Documentation is a hard requirement before the API graduates to General Availability. It does not have to be published as a website — comprehensive documentation in the repository (e.g. a README) is sufficient.
