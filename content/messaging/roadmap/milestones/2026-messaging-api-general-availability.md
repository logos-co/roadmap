---
title: Messaging API — General Availability
tags:
  - messaging-milestone
date: 2025-07-03
---

# Messaging API — General Availability

**Estimated date of completion**: June 2026 (Testnet v0.2)

**Resources Required for 2026H1**:
- 1 Nim engineer for testing support and bugfixes
- 1 Nim engineer for edge mode
- 1 Nim engineer for Store API work.

The Developer Preview delivered the Send and Health APIs in core mode. General Availability completes the Messaging API with:

1. **Subscribe/Receive API** — complete the message reception flow with P2P reliability
2. **Edge mode** — support light push for sending, filter for reception, and peer exchange for discovery. Required for mobile support and Status integration.
3. **Store API** — Status still relies on Store nodes for history retrieval, community descriptions, profiles, and SDS-hinted missed messages. Either introduce a new Store API alongside Messaging API, or allow using low-level API from the same `liblogosdelivery`.
4. **Test suite** — Messaging API is QA-approved. Involvement of DST for reliability testing.
5. **Documentation** — comprehensive developer documentation on the API.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): F2, F6, R2, S2

## Risks

| Risk                                | (Accept, Own, Mitigation)                                                                                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| P2P Reliability in edge mode        | P2P reliability has only been tested in core mode. Edge mode introduces filter and light push which may require different reliability strategies.           |
| Store is out of Messaging API scope | The Messaging API intentionally left the Store protocol outside to prevent foot-guns, a decision has to be made here to enable Status to use Messaging API. |

## Deliverables

### Add Subscribe/Receive functionality to Messaging API

**Owner**: Delivery Team

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

### Support edge mode in Messaging API

**Owner**: Delivery Team

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- F2. Support edge node operation mode.
- F6. Previously discovered peers are persisted across restarts, and potentially used for future connections.

### Provide Store API access for Status needs

**Owner**: Delivery Team

Status relies on Store nodes for:
1. Fetching history while being offline
2. Fetching community descriptions and profiles
3. Fetching missed messages (by SDS hints)

Either introduce a new Store API (next to Messaging API), or allow using low-level API from the same `liblogosdelivery`.

Note that Store protocol was intentionally left out of Messaging API. But we should provide a solution for existing apps, e.g. Status.

### Test suite for Messaging API

**Owner**: Delivery Team

Messaging API should be QA-approved. Coordinate with DST for reliability and scale testing.

### Provide comprehensive documentation on the API

**Owner**: Delivery Team
