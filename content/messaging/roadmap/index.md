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

### Testnet [v0.1](v01)

- [x] [Messaging API — Developer Preview](2026-messaging-api-developer-preview.md)
- [x] [Chat — Foundations](2026-chat-foundations.md)
- [x] [Initial Integration to Logos Core](2026-initial-integration-to-logos-core.md)

### Testnet [v0.2](v02)

- [x] [Messaging API — Beta](2026-messaging-api-beta.md)
- [x] [Reliable Channel API — Developer Preview](2026-reliable-channel-api-developer-preview.md)
- [x] [Chat — Developer Preview](2026-chat-developer-preview)
- [x] [Logos Core Integration — Phase 2](2026-logos-core-integration-phase-2)
- [ ] [Support QUIC Transport in Logos Delivery](2025-support-discovery-research-and-libp2p-quic)
- [x] [RLN for Edge Nodes](2026-rln-for-edge-nodes.md)

### Testnet [v0.3](v03)

- [ ] [Messaging API — General Availability](2026-messaging-api-general-availability)
- [ ] [Reliable Channel API — Beta](2026-reliable-channel-api-beta.md)
- [ ] [Chat — Beta](2026-chat-beta)
- [ ] [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee)
- [ ] [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3)

### Required for Mainnet

- [ ] [Chat — General Availability](2026-chat-general-availability)
- [ ] [Logos Core Integration — Phase 4](2026-logos-core-integration-phase-4.md)
- [ ] [Support Mobile Platforms](2026-support-mobile-platforms)
- [ ] Security audit (internal security team review followed by external audit)

### Parallel milestones

- [x] [Nimble Migration](2026-nimble-migration)
- [ ] [Fleet Stability](2026-fleet-stability)
- [ ] [Status: Logos Delivery Integration](2026-status-logos-delivery-integration)
- [x] [Status: Foundation for Communities Optimization](2025-foundation-for-communities-optimization)
- [ ] [Status: E2E Reliability in Communities](2024-e2e-reliability-protocol)
- [ ] [Status: Logos Chat Integration](2026-status-logos-chat-integration)
