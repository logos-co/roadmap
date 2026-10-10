---
title: Messaging Roadmap Overview
date: 2025-12-10
---

# Roadmap Overview

Logos Messaging is working towards these features, required to be implemented for Mainnet:

- Delivery module for Logos Core
  - Exposes [Messaging API](messaging_sdk)
  - Exposes [Reliable Channel API](reliable_channel)
  - Supports RLN membership on Logos Blockchain
- Chat module for Logos Core
  - Exposes 1:1 chats API
  - Exposes group chats API, based on de-MLS
  - Uses Delivery module as transport, through Logos Core
- Status:
  - Uses [SDS protocol](sds) for Communities
  - Uses Logos Chat for 1:1 and group chats
  - Integration of Logos Chat and Delivery is done using Logos Core

## Milestones

The work is split into milestones, planned to be achieved by certain release.

We use three release stages for developer-facing APIs and libraries:

- **Developer Preview** — first externally-usable release. Functional but limited scope, intended for early adopters and feedback collection.
- **Beta** — feature-complete and API-stable. Documentation, QA sign-off and performance tuning may still be in progress.
- **General Availability** — feature-complete, documented, QA-approved, production-ready release.

Work that is still in research stage does not use these stages. Research milestones are measured by the decisions and measurements they produce, not by the features they ship.

### How milestones relate to releases

Releases are time-boxed: a release date does not move. Milestones are criteria-boxed: a milestone _targets_ a release, and is part of it only once its exit criteria are met.

A milestone is a state the project reaches, not the work to reach it. It is named after that state (e.g. "Messaging API — General Availability", "Chat — Group Reliability Measured"), and is reached when all its exit criteria are true.

Each milestone defines:

- **Exit criteria** — the conditions that make the milestone done. They cannot be moved to another milestone. If an exit criterion is not met, the milestone is not done.
- **Scope** — deliverables planned for the milestone. Unfinished scope can roll over to the next release without blocking the milestone.
- **Decisions** (research milestones) — open questions, each with an owner and a decide-by date.

Each release has a go/no-go review at its release candidate (RC) date. Every milestone targeting the release gets one outcome:

- **Graduated** — exit criteria met. Unfinished scope rolls over.
- **Slipped** — exit criteria not met. The milestone retargets the next release; the release ships the component at its previous stage.
- **Rescoped** — exit criteria changed or the milestone renamed, with the reason recorded in the milestone.

Validation deliverables (DST, QA, integration in a real application) are scheduled at the start of the release cycle, not at its end.

### Testnet [v0.1](v01)

- [x] [Messaging API — Developer Preview](2026-messaging-api-developer-preview.md)
- [x] [Chat — Foundations](2026-chat-foundations.md)
- [x] [Initial Integration to Logos Core](2026-initial-integration-to-logos-core.md)

### Testnet [v0.2](v02)

- [x] [Messaging API — Beta](2026-messaging-api-beta.md)
- [x] [Reliable Channel API — Developer Preview](2026-reliable-channel-api-developer-preview.md)
- [x] [Chat — Developer Preview](2026-chat-developer-preview)
- [x] [Logos Core Integration — Phase 2](2026-logos-core-integration-phase-2)
- [x] [Support QUIC Transport in Logos Delivery](2025-support-discovery-research-and-libp2p-quic)
- [x] [RLN for Edge Nodes](2026-rln-for-edge-nodes.md)

### Testnet [v0.3](v03)

- [ ] [Messaging API — General Availability](2026-messaging-api-general-availability) — **slipped to v0.4**: features shipped, DST and QA sign-off pending.
- [x] [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)
- [x] [Chat — Beta](2026-chat-beta) — **graduated with exceptions**: DST reliability testing and Status test integration not done, see [Chat — Group Reliability Measured](2026-chat-group-reliability.md).
- [x] [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee)
- [x] [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3)

### Testnet v0.4

| Phase   | Date       |
| ------- | ---------- |
| RC      | 2026-11-16 |
| Release | 2026-11-30 |

The go/no-go review is held at the RC date.

Estimates are in person-weeks of Messaging team time, excluding DST, QA and other teams. Capacity per cycle is about 15 person-weeks for the Delivery Team and 11 for the Chat Team. Low confidence means the estimate depends on unknowns, such as findings or another team's work.

Milestones:
- [ ] [Delivery Messaging API — General Availability](2026-messaging-api-general-availability) (slipped from v0.3)
  - Product · Delivery · 4–6 person-weeks, medium confidence · required for Mainnet
  - Depends on: DST
  - Unblocks: [Status: Logos Delivery Integrated](2026-status-logos-delivery-integration)
- [ ] [Delivery Reliable Channel API — Future Decided](2026-reliable-channel-api-general-availability.md)
  - Decision · Delivery + Chat · 1 person-week, high confidence · Mainnet: depends on the decision
  - Unblocks: Reliable Channel API GA or deprecation, reliable invitations
- [ ] [Delivery — Target Architecture Agreed](2026-delivery-modular-architecture.md)
  - Research · Delivery · 2 person-weeks, high confidence · not required for Mainnet
  - Depends on: Logos Core (new architecture)
  - Unblocks: Delivery — Architecture Decomposed
- [ ] [Chat — Group Reliability Measured](2026-chat-group-reliability.md)
  - Research · Chat · 4–6 person-weeks, medium confidence · prerequisite for Mainnet
  - Depends on: DST or QA
  - Unblocks: Chat — Groups of N Members Reliable, Chat GA re-baseline
- [ ] [Chat — Ready for App Developers](2026-chat-developer-readiness.md)
  - Product · Chat · 4–6 person-weeks, medium confidence · required for Mainnet
  - Unblocks: Status test integration of Logos Chat
- [ ] [Status: Logos Delivery Integrated](2026-status-logos-delivery-integration)
  - Product · Delivery + Status Core · 1 person-week, medium confidence · prerequisite for Mainnet
  - Depends on: Status Core team
  - Unblocks: [Status: Logos Chat Integration](2026-status-logos-chat-integration)

Also in the cycle:
- Releases: `logos-delivery-module` v0.3.1 (RLN proof validation in `logos.test`) and `logos-delivery` v0.40
  - Release · Delivery · 3 person-weeks, high confidence
  - Depends on: DST sign-off
- [Delivery Maintenance — Testnet v0.4](2026-delivery-maintenance-testnet-v04.md)
  - Capacity · Delivery · 3 person-weeks
  - Not a milestone: reserves capacity, has no exit criteria and is not reviewed at the go/no-go.

### After v0.4

Not scheduled yet. Assigned to a release at the v0.4 go/no-go, depending on what graduates.

- **Delivery — Architecture Decomposed** — implementation milestones, starting with pluggable libp2p
  - Research · Delivery · 2 person-weeks, medium confidence · prerequisite for Mainnet
  - Unblocks: Pluggable libp2p, [Discovery Module](2026-logos-core-integration-phase-4.md)
- **Build something with Logos Delivery** — each team member builds a small application on Logos Delivery, to face the API, CLI and configuration inconveniences users face
  - Product · Delivery · 3 person-weeks, high confidence · not required for Mainnet
  - Unblocks: Messaging API feedback, Delivery — Architecture Decomposed
- [Store Sync — DST Signed Off](2026-store-sync-reliability.md)
  - Product · Delivery · 4 person-weeks, low confidence · not required for Mainnet
  - Depends on: DST, AnonComms (specification)
- [Delivery Module — Multiple Clients Supported](2026-delivery-module-clean-api.md)
  - Product · Delivery · 3–4 person-weeks, low confidence · Mainnet: depends on the decision
  - Depends on: Logos Core (new architecture)
  - Unblocks: Several modules sharing one Delivery module
- **Chat — Groups of N Members Reliable** — new de-MLS architecture, SDS with SDS-FS, fork resolution, reliable invitations
  - Research · Chat · 10–16 person-weeks, low confidence · required for Mainnet
  - Depends on: AnonComms (de-MLS)
  - Unblocks: [Chat — General Availability](2026-chat-general-availability), group chats in [Status: Logos Chat Integration](2026-status-logos-chat-integration)
- [Chat — Centralized Services Removed](2026-chat-remove-centralization-points.md)
  - Product · Chat · 6–8 person-weeks, low confidence · required for Mainnet
  - Depends on: Logos Blockchain (LEZ)
  - Unblocks: [Chat — General Availability](2026-chat-general-availability)

Open questions:

- **RLN on Logos Blockchain at scale** — RLN on LEZ was not tested at scale. Is scaling to X members at Y messages per epoch owned by AnonComms, or do we need a DST sign-off from our side?
- **Mix + RLN** — the libp2p team is working on it. Do we need to assist or ship anything in `logos-delivery`?
- **Protocol performance** — what does DST currently confirm about node and protocol performance? To be revisited after the architecture is decomposed.
- **New Logos Core architecture** — does it require rewriting the modules?

### Required for Mainnet

- [ ] [Chat — General Availability](2026-chat-general-availability)
- [ ] [Logos Core Integration — Discovery Module](2026-logos-core-integration-phase-4.md)
- [ ] [Support Mobile Platforms](2026-support-mobile-platforms)
- [ ] [Status: Logos Chat Integration](2026-status-logos-chat-integration)
- [ ] Security audit (internal security team review followed by external audit)

### Parallel milestones

- [x] [Nimble Migration](2026-nimble-migration)
- [x] [Fleet Stability](2026-fleet-stability)
- [x] [Status: Foundation for Communities Optimization](2025-foundation-for-communities-optimization)
- [x] [Status: E2E Reliability in Communities](2024-e2e-reliability-protocol)
