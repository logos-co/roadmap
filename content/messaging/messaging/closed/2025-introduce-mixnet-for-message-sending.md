---
title: Introduce Mixnet For Message Sending
tags:
    - messaging-milestone
date: 2025-09-30
---
Github Milestone: https://github.com/waku-org/pm/milestone/48

# ~~Introduce Mixnet For Message Sending~~

**Ownership moved to Anon Comms Team**

**Estimated date of completion**: 10 Oct 2025

**Resources Required for 2025H2**:

- 1 core research engineer for 3 months

A PoC implementation to improve anonymity in Waku message publishing by mixing Waku Lightpush requests and responses.

## Strategic Objective

Logos Vision: Core Values Alignment

## FURPS

See deliverables.

## Risks

| Risk                                    | (Accept, Own, Mitigation)                                          |
| --------------------------------------- | ------------------------------------------------------------------ |
| Dependency on mix library               | Strong collaboration, integrate early, get involved behind the API |
| Impact on latency and other UX elements | Run simulations and studies to understand impact                   |

## Deliverables

### [Integrate libp2p mix into lightpush](https://github.com/waku-org/pm/issues/291)

**Owner**: core research

**Feature**: [Mix](/furps/messaging/core/mix.md)

**FURPS**:

- F1. Relay nodes can mount mixnet protocol, acting as sender, intermediary or exit nodes.
- F2. Nodes can connect to other nodes that support mix using static configuration.
- F3. Client nodes can send light push requests over the mixnet before delivery to a service node.
- F4. Client nodes can receive a response to a light push request over the mixnet.

- S1. `wakunode2` for intermediary and exit nodes.
- S2. nwaku CLI for sender nodes.

**Checklist**:

- [ ] Specs: link to specs
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)