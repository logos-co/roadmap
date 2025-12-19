---
title: Enable easy C-Bindings for Mobile
tags:
    - messaging-milestone
date: 2025-12-19
---

# Enable easy C-Bindings for Mobile

**Estimated date of completion**: {Enter date}

**Resources Required for 2025H2**:
TODO

Ensure that nim-ffi's resulting bindings are usable on mobile platforms: iOS and Android.
Also enhance nim-ffi by using protobuf instead of JSON to pass data across the bindings,
enabling usage of protobuf generation libraries. 

## FURPS

See deliverables.

## Risks

| Risk                              | (Accept, Own, Mitigation)                                                                                        |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------|
| Mobile cross-compilation          | This is not a straightforward functionality delivery. Do note that most of the c-bindings works is already done. |
| Nim macros                        | Nim messaging team have limited experience with Nim macros, potentially impacting the speed of delivery.         |

## Deliverables

### Ensure nim-ffi's resulting libraries work for mobile platforms

**Owner**: Nim Messaging Team

**Feature**: [Nim FFI](/messaging/furps/application/nim_ffi.md)

**FURPS**:

- S2. The exposed C library can be used in Logos Core for mobile: iOS and Android.


### Streamline FFI API Creation by using Protobuf types instead of JSON PoC

**Owner**: Nim Messaging Team

**Feature**: [Nim FFI](/messaging/furps/core/nim_ffi.md)

**FURPS**:
- F4. The interaction with the exposed C library can be done using protobuf.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)
