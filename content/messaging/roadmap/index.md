---
title: Messaging Roadmap Overview
date: 2025-12-10
---

# Roadmap Overview

Logos Messaging is working towards these features, required to be implemented for Mainnet:

- Delivery module for Logos Core
	- Exposes [Messaging API](2025-messaging-api)
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
- [x] [Chat — Developer Preview](2025-extend-chat-sdk-with-group-conversations)
- [ ] [Logos Core Integration — Phase 2](2026-logos-core-integration-phase-2)
- [ ] [QUIC Transport in Logos Delivery](2025-support-discovery-research-and-libp2p-quic)
- [ ] [RLN for Edge Nodes](2026-rln-for-edge-nodes.md)

### Testnet [v0.3](v03)

- [ ] [Modularize Delivery Kernel](2026-modularize-delivery-kernel)
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


---
# Chronological (archive)

## H2 2025

- [Create Chat SDK MVP](2026-chat-foundations.md)
- [Messaging API](2025-messaging-api.md)
- [Enable easy C-Bindings for Desktop](2026-initial-integration-to-logos-core.md)
- [Formalize and Expand Waku Web Apps](2025-formalize-and-expand-waku-web-apps.md)
- [Harden RLN Testnet Deployment](2025-harden-rln-testnet-deployment.md)
- [Improve DevEx: API, TWN, Metrics, Docs](2025-improve-devex.md)
- [Implement RLN Membership Management](2025-implement-rln-membership-management.md)
- [Streamline DevEx: Mobile, Rust and Web dev](2025-streamline-devex.md)

## H1 2025

- [Foundation for Communities Optimization](2025-foundation-for-communities-optimization.md)
- [Formalize and Expand Waku Web Apps](2025-formalize-and-expand-waku-web-apps.md)
- [Nwaku in Status Mobile and Light Mode MVP](2025-nwaku-in-status-mobile.md)

## 2024

- [Introduce E2E Reliability in Status Communities](2024-e2e-reliability-protocol.md)
- [Integrate nwaku in status desktop relay mode only](2024-nwaku-in-status-desktop.md)

# Closed Milestones

- [Implement RLN Membership Management](2025-implement-rln-membership-management.md) — superseded by [RLN on Logos Blockchain](2026-add-support-for-rln-on-lee)
- [Support Discovery Research and Libp2p QUIC](2025-support-discovery-research-and-libp2p-quic.md) — discovery now under AnonComms; QUIC moved to v0.2
- [Enable easy C-Bindings for Desktop](2026-initial-integration-to-logos-core.md) — absorbed into [Initial Integration to Logos Core](2026-initial-integration-to-logos-core.md)
- [Enable easy C-Bindings for Mobile](2025-enable-easy-c-bindings-for-mobile.md) — absorbed into [Support Mobile Platforms](2026-support-mobile-platforms)
- [Add Edge Mode to Messaging API](2025-add-edge-mode-to-messaging-api.md) — absorbed into [Messaging API — Developer Preview](2026-messaging-api-developer-preview)
- [Messaging and Chat on Mobile](2025-messaging-chat-on-mobile.md) — absorbed into [Support Mobile Platforms](2026-support-mobile-platforms)
- [Add peer discovery to mixnet and support browser](2025-add-peer-discovery-to-mixnet-and-support-browser.md)
- [Debugging Tools](2025-debugging-tools.md)
- [Define Incentivisation for RLNaaS](2025-define-incentivisation-for-rlnaas.md)
- [Deploy RLN onchain tree on L2 Testnet](2025-deploy-rln-onchain-tree-on-l2-testnet.md)
- [Explore Peer Discovery Gap](2025-explore-peer-discovery-gap.md)
- [Hardening and scaling foundations for private chats](2025-hardening-and-scaling-foundations-for-private-chats.md)
- [Incentivisation and Marketplace Follow-Up Outline](2025-incentivisation-and-marketplace-follow-up-outline.md)
- [Introduce Mixnet For Message Sending](2025-introduce-mixnet-for-message-sending.md)
- [Upgrade Waku for the Web](2025-upgrade-waku-for-the-web.md)
- [Acquire first 10 Customers](2024-acquire-first-10-customers.md)
- [Demonstrate Product Market-Fit](2024-demonstrate-product-market-fit.md)
- [Direct Message Reliability](2024-direct-msg-reliability.md)
- [Incentivise running a Waku infrastructure node](2024-incentivise-running-infra-node.md)
- [Scale up number of Communities](2024-scale-number-of-communities.md)
- [Static Sharding - dedicated shards](2024-static-sharding-dedicated-shards.md)
- [Store Service Upgrade](2024-store-service-upgrade.md)
- [Quality Assurance processes are in place](2023-quality-assurance-processes.md)
- [Support 1 Million Users](2023-support-1-million-users.md)
- [Support Many Platforms](2023-support-many-platforms.md)
- [Waku Network Gen 0](2023-waku-network-gen-0.md)
