---
title: Store Sync — Hardened
tags:
  - messaging-milestone
date: 2026-10-02
github: https://github.com/logos-messaging/pm/issues/470
---

**Targets**: Testnet v0.4

**Resources Required**:

- 1 Delivery engineer

Store Sync protocol was expected to bring reliability to Store nodes, but ended up being disabled as it was found to be resource-heavy. This milestone makes the Store Sync protocol reliable, with performance in line with the other Logos Delivery protocols. DST validation follows in [Store Sync — DST Signed Off](2026-store-sync-dst-signed-off.md).

## FURPS

- [Store Sync](/messaging/furps/core/store_sync.md)

## Exit criteria

- [ ] The specification version to implement against is agreed.
- [ ] No known P0 or P1 issues in Store Sync.

## Deliverables

### [Check the Sync protocols specifications state](https://github.com/logos-messaging/pm/issues/508)

**Owner**: Delivery Team

Check with the AnonComms team what the state of the [LIP-181](https://lip.logos.co/messaging/core/raw/store-sync.html) and [LIP-182](https://lip.logos.co/messaging/core/raw/sync.html) is, and whether there are changes we would like to make.

**Done when**: The specification version to implement against is agreed, and the changes we want are raised.

### [Review implementation of Store Sync protocol](https://github.com/logos-messaging/pm/issues/469)

**Owner**: Delivery Team

Review the implementation against the agreed specification, triage all reported bugs into this milestone, and fix them.
