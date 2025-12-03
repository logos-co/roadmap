---
title: Support Discovery Research and Libp2p QUIC
tags:
    - messaging-milestone
date: 2025-12-03
---

# Support Discovery Research and Libp2p QUIC

**Estimated date of completion**: {Enter date}

**Resources Required for 2025H2**: 0.5 Nim Engineer

Proceed with several items to support internal teams.

## FURPS

- [{Feature Name}]({path/to/furps/file}): {list of furps: F1, etc}

## Risks

| Risk   | (Accept, Own, Mitigation)     |
|--------|-------------------------------|
| [Risk] | [how to we address this risk] |

## Deliverables 

### [Trial QUIC](https://github.com/waku-org/pm/issues/324)

**Owner**: nim

**Feature**: [nwaku](/furps/messaging/application/nwaku.md)

**FURPS**:
- S4. QUIC transport is supported for peer-to-peer message routing connections.

### Make Discovery Pluggable

**Owner**: nim

**Feature**: [nwaku](/furps/messaging/application/nwaku.md)

**FURPS**:

- F?. Peer exchanges feeds from the running discovery protocol (discv5 or otherwise).
- U?. Discv5 implementation uses a defined interface, enabling it to be swapped with another discovery protocol.
