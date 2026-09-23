---
title: Polish the Implementations of Waku Protocols
tags:
  - messaging-milestone
date: 2026-08-22
github: https://github.com/logos-messaging/pm/issues/470
---

Ensure the Waku protocols implemented in Logos Delivery behave correctly:
- Triage all existing reported bugs, assign to this milestone, fix them
- Drop deprecated protocols

## Deliverables

### [Review implementation of Store Sync protocol](https://github.com/logos-messaging/pm/issues/469)

**Owner**: Delivery Team

Previously `store-sync` was known to overload the database. Review the implementation, make sure issues are resolved.

**Done when**: `--store-sync` is enabled in Logos fleets.
