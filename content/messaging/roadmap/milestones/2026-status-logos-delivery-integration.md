---
title: 'Status: Logos Delivery Integration'
tags:
  - messaging-milestone
date: 2026-02-01
---

# Status: Logos Delivery Integration

**Estimated date of completion**: TBD (after Messaging API is integration-ready)

**Resources Required**:
- 1 Delivery engineer (50% of work)
- Status Core team — 1 engineer (50% of work)
- Infra team (fleet management, CI)

Status currently has partial Logos Delivery (nwaku) integration in relay mode, with significant issues (see [current state](2024-nwaku-in-status-desktop)). The integration plan has been agreed:

1. **Remove nwaku CI jobs** — stop maintaining duplicated CI for go-waku and nwaku
2. **Remove existing nwaku integration** from `status-go`
3. **Wait** for Messaging API to be integration-ready
4. **Integrate Messaging API** in `status-go` — full switch to Logos Delivery, drop `go-waku` dependency
5. **Remove existing peer management** from `status-go` — peer management is encapsulated in Logos Delivery Messaging API

Work is split **50/50** between Delivery team and Status team. Delivery team provides the library and Go bindings; Status team adapts `status-go`.

## Related milestones

- [Integrate nwaku in Status Desktop relay mode only](2024-nwaku-in-status-desktop) — current partial state (to be removed)
- [Messaging API — General Availability](2026-messaging-api-general-availability) — prerequisite (includes edge mode for mobile, Subscribe API)
- [Foundation for Communities Optimization](2025-foundation-for-communities-optimization) — content topic sharding for communities
- [E2E Reliability in Status Communities](2024-e2e-reliability-protocol) — SDS protocol for communities

## Risks

| Risk                        | (Accept, Own, Mitigation)                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Go bindings for C libraries | `status-go` needs Go bindings for Logos Delivery C-bindings. Extra development work.                                     |
| Messaging API readiness     | Integration cannot begin until Messaging API is stable enough. Track readiness closely.                                  |
| DST blocked on discovery    | DST testing of Logos Delivery in Status is blocked by a discovery issue. Needs resolution before meaningful benchmarking. |

## Deliverables

### Remove existing nwaku integration

**Owner**: Delivery Team + Status Core

- Remove nwaku CI jobs from `status-go` (no more duplicated jobs)
- Remove existing nwaku relay integration code from `status-go`
- Status continues with go-waku only until Messaging API is ready

### Integrate Messaging API in status-go

**Owner**: Delivery Team (library + Go bindings) + Status Core (status-go adaptation)

- Provide Go bindings for Logos Delivery Messaging API (via C-bindings)
- Replace go-waku usage in `status-go` with Messaging API (send, health, subscribe)
- Drop `go-waku` dependency entirely
- Remove existing peer management from `status-go` — Messaging API handles this internally
- Single implementation path in CI

### Enable SDS protocol for Status Communities

**Owner**: Delivery Team

Related milestones:
- [Foundation for Communities Optimization](2025-foundation-for-communities-optimization) — content topic sharding for communities
- [E2E Reliability in Status Communities](2024-e2e-reliability-protocol) — SDS protocol integration

SDS in Status Communities provides:
- Detection of missed messages in community channels
- Resending unacknowledged messages
- Recovery of missed messages via store queries

### Enable RLN for Status on Status Network

**Owner**: Delivery Team

Using the [pluggable RLN membership interface](2026-add-support-for-rln-on-lee), configure Status to use RLN with the EVM-based backend on Status Network (gasless L2).

**Dependency**: AnonComms RLN Prover for gasless L2 transactions.
