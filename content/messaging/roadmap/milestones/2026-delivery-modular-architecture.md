---
title: Delivery — Target Architecture Agreed
tags:
  - messaging-milestone
date: 2026-10-02
github:
---

**Targets**: Testnet v0.4

**Type**: Research

**Resources Required**:

- Delivery Team, mostly during the architecture session

Logos Delivery is a simple project, and should look like one. Most of the building blocks of a node should be replaceable by an external plugin and testable on its own.

This starts with diagrams. This milestone is reached when the team agrees on where the architecture is going. Decomposing the path into implementation milestones and the actual refactoring work follows in the next cycle.

## Exit criteria

- [ ] A diagram of the current architecture is published.
- [ ] A diagram of the target architecture is published and agreed by the team.

## Decisions

| Question                                                                                   | Owner         | Decide by  |
| ------------------------------------------------------------------------------------------ | ------------- | ---------- |
| Is libp2p embedded in `logos-delivery`, provided by a Logos Core libp2p module, or either? | Delivery Team | 2026-11-16 |

## Risks

| Risk                        | (Accept, Own, Mitigation)                                                                                         |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| New Logos Core architecture | A new Logos Core architecture is coming, and may change what a "module" is. Account for it in the target diagram. |

## Deliverables

### Draw the current architecture

**Owner**: Delivery Team

### Draw the target architecture

**Owner**: Delivery Team

The architecture should be language-agnostic and use common primitives instead.
