---
title: Reliable Channel API
date: 2025-12-17
tags:
    - messaging-furps
---
## Functionality

1. All messages sent in a channel are eventually received by all participants.
2. Senders are notified when messages are acknowledged by other participants.
3. Missing messages are automatically detected.
4. Missing messages are automatically retrieved via store hash queries.
5. Messages are causally ordered using Lamport timestamps.
6. Outbound messages that are not acknowledged are automatically resent.
7. API delegates message encryption and decryption to consumer-provided implementations.
8. When encryption is applied, the SDS envelope is encrypted.
9. Missing messages re-emission is requested from other channel participants.
10. Large messages are segmented to fit transport constraints.
11. A different encryption mechanism can be applied for sync message (than the one for content messages).
12. Outbound messages passed on the API are queued, and persisted locally, when the rate limit is exceeded.
13. Ephemeral outbound messages passed on the API are dropped when the rate limit is approached or exceeded.
14. Outbound messages retries are queued when the rate limit is approached or exceeded.

## Usability

1. Sane defaults with pre-configured parameters for common scenarios.
2. Single cohesive interface wrapping SDS, store queries, segmentation, and rate limits.
3. Event-driven model exposing message lifecycle through intuitive events.
4. The API is agnostic to the encryption mechanism used.
5. Rate limit is configurable at channel creation.
6. Rate limit "approached" state is configurable at channel creation.

## Reliability

1. Eventual message consistency guarantees for all participants.
2. Segments tracked independently and reassembled before delivery.
3. Timeout mechanism for lost message dependencies.

## Performance

1. Configurable sync, retry, and query intervals.
2. Final encoded routed message stays below 150 KB routing layer limit.

## Supportability

1. Sender ID unique per participant and persisted between sessions.
2. Resource exhaustion limits implemented.
