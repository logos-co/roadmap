---
title: Add Edge Mode to Messaging API
tags:
    - messaging-milestone
date: 2025-12-10
---

# Add Edge Mode to Messaging API

**Estimated date of completion**: {Enter date}

**Resources Required for 2025H2**:
- {roles and % application to it}
- {external services consumed (Vac/IFT)}
- {infrastructure}

Extend the [Messaging API](/messaging/milestones/open/2025-nwaku-in-status-mobile.md) to support edge mode.
This means supporting the usage of light push for message sending, filter for message reception, and peer exchange (only)
for peer discovery.
This includes the support of p2p reliability protocol in edge mode.

## FURPS

- [{Feature Name}]({path/to/furps/file}): {list of furps: F1, etc}

## Risks

| Risk   | (Accept, Own, Mitigation)     |
|--------|-------------------------------|
| [Risk] | [how to we address this risk] |

## Deliverables

### [Add Edge Mode to Messaging API](https://github.com/waku-org/pm/issues/357)

**Owner**: Nim Messaging Team

**Feature**: [nwaku](/messaging/furps/application/nwaku.md)

**FURPS**:
- S6. libwaku support edge node functionalities.
