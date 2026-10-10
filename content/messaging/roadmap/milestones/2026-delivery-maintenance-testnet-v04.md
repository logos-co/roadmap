---
title: Delivery Maintenance — Testnet v0.4
tags:
  - messaging-milestone
date: 2026-10-02
github: https://github.com/logos-messaging/pm/issues/479
---

**Targets**: Testnet v0.4

**Type**: Maintenance

Continuous maintenance of Logos Delivery. This milestone has no exit criteria and is not reviewed at the go/no-go: it reserves team capacity. Unfinished items roll over to the next release.

Exit criteria of other milestones are never moved here. Items are in priority order.

## Scope

### [Bump Delivery dependencies](https://github.com/logos-messaging/pm/issues/485)

**Owner**: Delivery Team

- `nim-libp2p` 2.4.0
- `zerokit` 3.0
- Nim 2.2.12

### Review the CI setup

**Owner**: Delivery Team

Nim is installed through Nimble, not the opposite, as already done in `nim-sds`. Includes [speeding up PR CI](https://github.com/logos-messaging/logos-delivery/issues/4342).

### Treat compile warnings as errors

**Owner**: Delivery Team

**Done when**: `logos-delivery` builds without warnings, and CI fails on new warnings.

### Retire docs.waku.org

**Owner**: Delivery Team + Docs Team

https://docs.waku.org is superseded by https://docs.logos.co. Coordinate with the Docs team, who own the migration.

### Backlog fixes

**Owner**: Delivery Team

Issues picked from the triaged Delivery backlog, tracked in [Maintenance Y2026H2](https://github.com/logos-messaging/logos-delivery/issues/4043), if capacity allows.
