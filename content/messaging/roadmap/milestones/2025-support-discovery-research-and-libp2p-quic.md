---
title: QUIC Transport in Logos Delivery
tags:
  - messaging-milestone
date: 2025-12-03
---


**Resources Required**: 0.5 Nim Engineer

Replace legacy multiplexers (Yamux, Mplex) with QUIC transport. The old multiplexers are going towards deprecation — Yamux is inefficient, Mplex is outdated. QUIC should be prioritized.

## FURPS

- [Messaging API](/messaging/furps/core/messaging_sdk.md): S4. QUIC transport is supported for peer-to-peer message routing connections.

## Risks

| Risk                       | (Accept, Own, Mitigation)                                                              |
| -------------------------- | -------------------------------------------------------------------------------------- |
| QUIC maturity in nim-libp2p | QUIC support in nim-libp2p may not be production-ready. Trial and evaluate early.      |

## Deliverables

### [Trial QUIC](https://github.com/waku-org/pm/issues/324)

**Owner**: Delivery Team

**Feature**: [Messaging API](/messaging/furps/core/messaging_sdk.md)

**FURPS**:
- S4. QUIC transport is supported for peer-to-peer message routing connections.
