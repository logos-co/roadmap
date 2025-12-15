---
title: Package SDS in Reliable Channel API
tags:
    - messaging-milestone
date: 2025-12-10
---

# Package SDS in Reliable Channel API

**Estimated date of completion**: {Enter date}

**Resources Required for 2025H2**:
- {roles and % application to it}
- {external services consumed (Vac/IFT)}
- {infrastructure}

The [[Create Chat SDK MVP]] - developer preview - does include the [Scalable Data Sync](https://github.com/vacp2p/rfc-index/blob/main/vac/raw/sds.md) protocol usage. However, dedicated work is necessary to
fully leverage SDS to:
- identify and retrieved missed messages
- track acknowledge, and resend unacknowledged message

The [Reliable Channel API](https://github.com/logos-messaging/specs/pull/89) delivers a simple API that enables those features, as well as:
- message segmentation
- Rate limit management (in preparation to future RLN integration).
- SDS-Repair, an extension to SDS that reduce reliance on Store services, and improves received anonymity from original SDS protocol.

Note: Dependency to nim-messaging is to be handled via Nimble, meaning the Chat Logos Module would have libp2p,
messaging, etc embedded. It also means that there is no "reliable channel" Logos Core module as part of this milestone.
Moving to an architecture where the Chat module uses the locally available messaging module, is not yet planned.

## FURPS

- [{Feature Name}]({path/to/furps/file}): {list of furps: F1, etc}

## Risks

| Risk   | (Accept, Own, Mitigation)     |
|--------|-------------------------------|
| [Risk] | [how to we address this risk] |

## Deliverables

### Deliver Reliable Channel API

**Owner**: Nim Messaging Team

**Feature**: [{Feature Name (only 1)}]({path/to/furps/file})

**FURPS**:
- {F1. copy-paste full furps statement}

### Implement SDS Repair

**Owner**: Nim Messaging Team

**Feature**: [{Feature Name (only 1)}]({path/to/furps/file})

**FURPS**:
- {F1. copy-paste full furps statement}

### Use Reliable Channels in Chat SDK

**Owner**: Chat Team

**Feature**: [{Feature Name (only 1)}]({path/to/furps/file})

**FURPS**:
- {F1. copy-paste full furps statement}