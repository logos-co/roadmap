---
title: Add peer discovery to mixnet and support browser
tags:
    - waku-milestone
date: 2025-10-21
---

# Add peer discovery to mixnet and support browser

**Estimated date of completion**: 31 March 2026

**Resources Required for 2025H2**:

- 1 core research engineer for 5 months

Peer discovery for mixnet was descoped from the previous milestones due to upcoming challenges around ENR usage and modification to libp2p needed to support mix peers in rendezvous.

Web apps have been a strong  dogfooding and adoption driver for Waku, especially for edge nodes. Adding mix will not only enable wider dogfooding, but also increase anonymity for browser users.

## Strategic Objective

Logos Vision: Core Values Alignment

## FURPS

See deliverables.

## Risks

| Risk                                    | (Accept, Own, Mitigation)                                          |
| --------------------------------------- | ------------------------------------------------------------------ |
| Impact on latency and other UX elements | Run simulations and studies to understand impact                   |
| Unknowns in implementing js-mix         | Further study and understanding of js-libp2p internals             |
| Possible `exit==destination` in dependency library impact existing implementation | Frequent syncing with Vac and p2p team to understand impact and progress |

## Deliverables

### [Implement and integrate libp2p mix in js-waku for light push](https://github.com/waku-org/pm/issues/365)

**Owner**: Core Research

**Feature**: [Mix](/FURPS/core/mix.md)

**FURPS**:

- P1. Payloads are limited to 4kB

- S3. Browser based apps built using js-waku support acting as entry nodes.

**Checklist**:

- [ ] Specs: link to specs
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Implement basic discovery for mix](https://github.com/waku-org/pm/issues/366)

**Owner**: Core Research

**Feature**: [Mix](/FURPS/core/mix.md)

**FURPS**:

- F5. Nodes can discover other nodes that support mix using available peer discovery mechanisms.

- S4. Browser based apps built using js-waku support discovering mix nodes using available peer discovery mechanisms.

**Checklist**:

- [ ] Specs: link to specs
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)
