---
title: "Status: Logos Delivery Integration"
tags:
  - messaging-milestone
date: 2026-02-01
github: https://github.com/logos-messaging/pm/issues/408
---


**Resources Required**:
- 1 Delivery engineer (50% of work)
- 1 Status engineer (50% of work)

Status replaces go-waku with Logos Delivery, consumed through the Messaging API. The old nwaku relay integration has been removed and `liblogosdelivery` builds for mobile. The remaining plan:

1. **Prepare the network** — move Status to a shape the Messaging API can serve
2. **Build and link** — `libsds` and `liblogosdelivery` built through Nimble and linked into `status-go` and `status-app` on every platform
3. **Close the Messaging API gaps** — every feature `status-go` relies on is implemented in Logos Delivery or explicitly dropped
4. **Replace go-waku** — switch `status-go` to Logos Delivery behind its transport, then delete go-waku

## Related milestones

- [Integrate nwaku in Status Desktop relay mode only](2024-nwaku-in-status-desktop) — superseded by this milestone
- [Messaging API — Beta](2026-messaging-api-beta.md) — prerequisite (includes edge mode for mobile, Subscribe API)

## Risks

| Risk                        | (Accept, Own, Mitigation)                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Go bindings for C libraries | `status-go` needs Go bindings for Logos Delivery C-bindings. Extra development work.                                     |
| Messaging API gaps          | `status-go` relies on features the Messaging API lacks. Tracked and resolved in the Messaging API gaps deliverable.     |
| Cross-platform builds       | Nimble builds must work on all desktop and mobile platforms and in every CI. `nim-sds` trials the integration first.   |
| DST blocked on discovery    | DST testing of Logos Delivery in Status is blocked by a discovery issue. Needs resolution before meaningful benchmarking. |

## Deliverables

### [Remove existing nwaku integration](https://github.com/logos-messaging/pm/issues/394)

**Owner**: Delivery Team + Status Core

- Remove nwaku CI jobs from `status-go` (no more duplicated jobs)
- Remove existing nwaku relay integration code from `status-go`
- Status continues with go-waku only until Messaging API is ready

### [Support mobile platforms in `logos-delivery`](https://github.com/logos-messaging/pm/issues/468)

**Owner**: Delivery Team

- Ensure `logos-delivery` can be compiled for Android and iOS
- Corresponding `nimble` targets are created, similar to SDS

**Done when**: CI jobs build `liblogosdelivery` for Android and iOS.

### [Prepare the network for the Messaging API](https://github.com/logos-messaging/pm/issues/486)

- Move the Status network to a single shard
- Stop using the WakuMessage `version` field
- Add a `status.prod` preset to Logos Delivery

**Done when**: Status sends and listens on shard 32 only, and Logos Delivery can join the Status network with its preset.

### [Build and link Logos Delivery in status-go and status-app](https://github.com/logos-messaging/pm/issues/487)

- Build `libsds` and `liblogosdelivery` through Nimble
- Link both into `status-go` and `status-app` on every platform and in every CI
- `nim-sds` is already part of the build, so it trials the Nimble integration first

**Done when**: `status-go` and `status-app` build with both libraries on Linux, macOS, Windows, Android and iOS, and all their CI jobs are green.

### [Messaging API: close the gaps Status needs](https://github.com/logos-messaging/pm/issues/488)

Close the gaps between what `status-go` uses today and what the Messaging API offers, so the adapter needs no workarounds:

- Node info (ENR, listen addresses, peer ID, version)
- Store peer auto-selection
- Send retry owned by Logos Delivery
- Missing-message gap detection
- Send priority: keep or drop
- OS connectivity hint: keep or drop
- `send` returns the message hash the envelope monitor needs
- Pause/Resume for mobile backgrounding

**Done when**: every item is implemented in Logos Delivery or explicitly dropped.

### [Replace go-waku with Logos Delivery in status-go](https://github.com/logos-messaging/pm/issues/489)

- Replace go-waku with Logos Delivery behind the `status-go` transport
- Both backends compile; the choice is runtime config, not a build tag
- Delete go-waku once the switch is done
- Depends on the build and Messaging API gaps deliverables for the cutover; the seam and adapter can start earlier

**Done when**: `status-go` runs on Logos Delivery by default, the Go and functional suites pass on it, and go-waku is gone from `go.mod`.
