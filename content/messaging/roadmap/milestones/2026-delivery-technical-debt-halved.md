---
title: Delivery — Technical Debt Halved
tags:
  - messaging-milestone
date: 2026-10-02
github: https://github.com/logos-messaging/pm/issues/479
---

**Targets**: Testnet v0.4

**Resources Required**:

- Delivery Team

Technical debt in `logos-delivery` has grown in the last few years. It becomes a fog on our road and needs to be sorted out. This milestone sets 50% of debt to be resolved.

To measure it, technical debt is tracked as open issues in `logos-delivery`.

**Baseline**: 207 open issues on 2026-09-28, when the backlog triage started.

**Progress**: 151 of the 207 closed, as of 2026-10-16.

## Exit criteria

- [ ] At least half of the baseline issues are closed.
- [ ] `logos-delivery` builds without compile warnings, and CI fails on new ones.

## Deliverables

### [Bump dependencies](https://github.com/logos-messaging/pm/issues/485)

**Owner**: Delivery Team

- `nim-libp2p` 2.4.0
- `zerokit` 3.0
- Nim 2.2.12

### Fix the CI setup

**Owner**: Delivery Team

Install Nim through Nimble, not the opposite, as already done in `nim-sds`. Find ways and speed up PR-level CI.

### Treat compile warnings as errors

**Owner**: Delivery Team

### Close baseline technical debt issues

**Owner**: Delivery Team

Picked from the triaged backlog, tracked in [Maintenance Y2026H2](https://github.com/logos-messaging/logos-delivery/issues/4043).
