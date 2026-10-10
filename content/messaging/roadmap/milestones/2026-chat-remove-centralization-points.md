---
title: Chat — Centralized Services Removed
tags:
  - messaging-milestone
date: 2026-10-02
github:
---

**Targets**: not scheduled (after Testnet v0.4)

**Resources Required**:
- Chat Team
- Logos Blockchain (LEZ) support

Logos Chat still relies on centralized services that were introduced as testnet stopgaps. This milestone removes them.

## FURPS

- [Group Chat](/messaging/furps/application/group_chat.md): +PRIV2

## Exit criteria

- [ ] The AccountLog is stored on Logos Blockchain (LEZ).
- [ ] Key packages are not stored in a centralized service.

## Dependencies

- **Logos Blockchain**: LEZ program model and hosted testnet able to store the AccountLog.

## Risks

| Risk                  | (Accept, Own, Mitigation)                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| LEZ readiness         | Storing the AccountLog on LEZ depends on LEZ tooling and the hosted testnet. Validate early.      |
| Chat Team capacity    | Group reliability has priority.   |

## Scope

### Store the AccountLog on LEZ

**Owner**: Chat Team

The AccountLog is specified in [logos-lips#404](https://github.com/logos-co/logos-lips/pull/404).

### Replace the centralized key package storage

**Owner**: Chat Team

Replaces the interim testnet service ([logos-chat#110](https://github.com/logos-messaging/logos-chat/issues/110)).
