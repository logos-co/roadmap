---
title: Enable easy C-Bindings for Desktop
tags:
    - messaging-milestone
date: 2025-12-19
---

(prev. *Upgrade Nim Usage*)

# [Enable easy C-Bindings for Desktop](https://github.com/waku-org/pm/milestone/53)

**Estimated date of completion**: 19 Dec

**Resources Required for 2025H2**:
TODO

Deliver nim-ffi, a library that facilitates delivering functional c-bindings for nim libraries.

This milestone tracks the work to ensure the resulting bindings are usable on desktop platform: Mac, Linux and Windows. 

## FURPS

See deliverables.

## Risks

| Risk                         | (Accept, Own, Mitigation)                                                                                        |
|------------------------------|------------------------------------------------------------------------------------------------------------------|
| Windows and build challenges | This is not a straightforward functionality delivery. Do note that most of the c-bindings works is already done. |
| Nim macros                   | Nim messaging team have limited experience with Nim macros, potentially impacting the speed of delivery.         | 

## Deliverables

### [Create nim-ffi, a library to easily exposes c-bindings from Nim](https://github.com/waku-org/pm/issues/332)

**Owner**: Nim Messaging Team

**Feature**: [Nim FFI](/messaging/furps/application/nim_ffi.md)

**FURPS**:

- F1. Provides the core logic needed to expose any synchronous or asynchronous Nim library to a C-FFI library.

- U1. Introduce new pragma definitions, such as `{.ffi.}`, to appropriately annotate types and procedures.
- U2. Any Nim project can use it and can be installed using Nimble,
  similarly to how nim-chronos is imported.
- U3. The interaction with the exposed C library can be done using JSON.

- R1. Nim-FFI does not leak memory.
- R2. The exposed C library never hangs when working asynchronously.

- S1. The exposed C library can be used in Logos Core; on Linux, Mac and Windows.

- +1. `logos-messaging-nim` repository uses `nim-ffi`.

### Allow graceful shutdown on nim-chronos

**Owner**: Nim Messaging Team

**FURPS**:

- R1. nim-chronos does not leak any file descriptor or resource on thread shutdown while main process is alive.

- S1. nim-chronos gracefully shuts down threads on Linux, Mac and Windows.
- S2. [nim-sds](https://github.com/logos-messaging/nim-sds/) does not leak resources when reliability manager is destroyed in libsds.
- S3. [logos-messaging-nim](https://github.com/logos-messaging/logos-messaging-nim) does not leak resources when lmn instance is destroyed.