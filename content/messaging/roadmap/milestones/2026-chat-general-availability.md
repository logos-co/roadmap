---
title: Chat — General Availability
tags:
  - messaging-milestone
date: 2026-03-01
---


**Resources Required**:
- 2 Chat engineers
- 1 Delivery engineer
- DST for scale testing

Logos Chat is feature-complete, production-ready, and QA-approved for mainnet deployment. By this point, identity and user-facing features are already delivered (v0.3). This milestone focuses on production hardening:

- Production-grade reliability at scale (beyond the ~201 users tested in v0.3)
- Comprehensive documentation for production deployments
- Performance optimization for mainnet user projections
- API stability guarantees

## FURPS

- [Logos Chat](/messaging/furps/application/chat_sdk.md): all
- [Group Chat](/messaging/furps/application/group_chat.md): all, extended for scale

## Risks

| Risk                          | (Accept, Own, Mitigation)                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Scale testing                 | Production scale may surface issues not seen in Developer Preview. Coordinate with DST early.                                     |
| API breaking changes          | Any API changes at this stage break existing integrations (Status). Freeze API before GA.                                         |

## Deliverables

### Production scale testing

**Owner**: Chat Team + DST

- Scale testing with DST (target: mainnet user projections)
- Performance optimization based on testing results
- Stress testing group chats at community scale

### Production documentation

**Owner**: Chat Team

- API reference for Logos Chat library
- Getting started guide
- Architecture overview for developers
- Content topic design guidelines for auto-sharding
- Production deployment guide

### API stability

**Owner**: Chat Team

- Freeze API surface
- Deprecation policy for any future changes
- Versioning strategy

### Validate integration in Status

**Owner**: Chat Team + Status Team

Continue and deepen the Status integration started in v0.2. Address issues found during exploratory integration and validate that the polished API works for Status's production requirements.
