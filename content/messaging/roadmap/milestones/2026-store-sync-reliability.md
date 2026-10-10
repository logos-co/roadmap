---
title: Store Sync — DST Signed Off
tags:
  - messaging-milestone
date: 2026-10-02
github: https://github.com/logos-messaging/pm/issues/470
---

**Targets**: not scheduled (after Testnet v0.4)

**Resources Required**:
- 1 Delivery engineer
- DST

The protocols are implemented. Now they have to be fixed. This milestone makes the Store Sync protocol reliable, with performance in line with the other Logos Delivery protocols.

## FURPS

- [Store Sync](/messaging/furps/core/store_sync.md)

## Exit criteria

- [ ] Expected reliability and performance of Store Sync are agreed with DST at the start of the cycle.
- [ ] DST signs off Store Sync against those expectations.
- [ ] No known P0 or P1 issues in Store Sync.

## Dependencies

- **AnonComms**: state of the Store Sync specification.

## Risks

| Risk                           | (Accept, Own, Mitigation)                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Specification changes          | Changes to the specification may invalidate the review. Check the specification state first.              |
| DST findings late in the cycle | Run the first DST pass in the first half of the cycle, so there is time to fix what it finds.              |

## Scope

### Check the Store Sync specification state

**Owner**: Delivery Team

Check with the AnonComms team what the state of the Store Sync specification is, and whether there are changes we would like to make.

**Done when**: The specification version to implement against is agreed, and the changes we want are raised.

### [Review implementation of Store Sync protocol](https://github.com/logos-messaging/pm/issues/469)

**Owner**: Delivery Team

Review the implementation against the specification, triage all reported Store Sync bugs into this milestone, and fix them.

### DST sign-off for Store Sync

**Owner**: Delivery Team + DST

**Done when**: A DST report covering the agreed expectations is available and signed off.
