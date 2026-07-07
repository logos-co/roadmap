---
title: Messaging API — Beta
tags:
  - messaging-milestone
date: 2025-07-03
github: https://github.com/logos-messaging/pm/issues/403
---

**Resources Required for 2026H1**:
- 1 Nim engineer for testing support and bugfixes
- 1 Nim engineer for Store API work.

The Developer Preview delivered the Send, Health, and Subscribe/Receive APIs, including both core and edge mode. General Availability completes the Messaging API with:

1. **Store API** — Status still relies on Store nodes for history retrieval, community descriptions, profiles, and SDS-hinted missed messages. Either introduce a new Store API alongside Messaging API, or allow using low-level API from the same `liblogosdelivery`.
2. **Test suite** — Messaging API is QA-approved. Involvement of DST for reliability testing.
3. **Documentation** — comprehensive developer documentation on the API.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): F6, S2

## Risks

| Risk                                | (Accept, Own, Mitigation)                                                                                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Store is out of Messaging API scope | The Messaging API intentionally left the Store protocol outside to prevent foot-guns, a decision has to be made here to enable Status to use Messaging API. |

## Deliverables

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

