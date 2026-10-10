---
title: Delivery Module — Multiple Clients Supported
tags:
  - messaging-milestone
date: 2026-09-16
github: https://github.com/logos-messaging/pm/issues/478
---

**Targets**: not scheduled (after Testnet v0.4), once the impact of the new Logos Core architecture is known

**Resources Required**:
- 1 Delivery engineer
- Logos Core team support

Follows [Logos Core Integration — Phase 3](2026-logos-core-integration-phase-3).

The `delivery-module` was intended to be a thin wrapper around `liblogosdelivery`. In v0.3 it gained logic: it implements the RLN and service discovery plugins for `logos-delivery`, so it parses the `createNode` arguments and then passes the same arguments to the library. The two APIs are tangled.

The module is also used by several other modules at once, each potentially wanting a different configuration or the same content topics.

## Exit criteria

- [ ] The role of the `delivery-module` (wrapper, or a module with its own API) is decided and recorded.
- [ ] The `delivery-module` configuration API is separated from the `liblogosdelivery` `createNode` API according to that decision.
- [ ] Two modules using the same `delivery-module` do not interfere: a module unsubscribing from a content topic does not unsubscribe another module from it.
- [ ] The impact of the new Logos Core architecture on the Delivery and Chat modules is assessed.

## Decisions

| Question                                                                                                  | Owner         | Decide by  |
| --------------------------------------------------------------------------------------------------------- | ------------- | ---------- |
| Is the `delivery-module` a wrapper, or does it own an `Initialize` method that wraps `createNode`?         | Delivery Team | TBD        |
| How are conflicting configurations from several client modules handled (e.g. different presets)?          | Delivery Team | TBD        |
| Does the new Logos Core architecture require rewriting the modules?                                       | Delivery Team + Chat Team | TBD        |

## Dependencies

- **Logos Core**: information on the new Logos Core architecture.

## Risks

| Risk                         | (Accept, Own, Mitigation)                                                                          |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| New Logos Core architecture  | Little is known yet. Avoid large module refactors until its impact is assessed.                    |

## Scope

### Separate `delivery-module` API from `createNode`

**Owner**: Delivery Team

**Done when**: The module exposes its own initialization, and the RLN and discovery plugin setup is no longer done by re-parsing `createNode` arguments.

### [Support multiple module clients in `delivery-module`](https://github.com/logos-messaging/pm/issues/484)

**Owner**: Delivery Team

Handle the case when the `delivery-module` is used by several modules, each wanting a different configuration, or sharing content topics.

### Assess the new Logos Core architecture

**Owner**: Delivery Team + Chat Team

**Done when**: The required changes to the Delivery and Chat modules are listed, and milestones for them are created if needed.
