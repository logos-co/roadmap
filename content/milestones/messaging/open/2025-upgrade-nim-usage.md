---
title: Upgrade Nim Usage
tags:
    - waku-milestone
date: 2025-12-19
---
Github Milestone: https://github.com/waku-org/pm/milestone/53

# Upgrade Nim Usage

**Estimated date of completion**: 19 Dec

**Resources Required for 2025H2**:
- 2 nwaku eng for 3 months
- Support from Vac/Nim team

Improve usage of Nim related tooling and design patterns by proceedings with PoCs to discover potential gains and caveats.
This includes adoption of Nimble, dogfooding VSCode plugin and iteration on C-Binding methodology.

## Strategic Objective

Logos Movement Community Enabling: Dev Journey

## FURPS

See deliverables.

## Risks

| Risk                | (Accept, Own, Mitigation)                                                                                                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maturity of tooling | This milestone focusing on trying out fresh Nim tooling, hence it may not be possible to output a PoC, but instead raising a series of upstream issues.                                                             |
| Actual value/impact | The direct value on dev ex is not always clear, especially for Nimble. There is hope on bette contributor experience, but the end impact may mostly be on improving Nim tooling by providing constructive feedback. |

## Deliverables

### Migrate nwaku to Nimble PoC

Note: maybe taken over by Vac-Nim

**Owner**: nwaku

**Feature**: [nwaku](/FURPS/application/nwaku.md)

**FURPS**:
- U1. Uses nimble for package management and build.
- U2. Can be imported as a nim library using nimble.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### Dogfood VSCode Plugin and Nimsuggest

**Owner**: nwaku

**No FURPS**

**Depends on Migrate nwaku to Nimble PoC** 

**Output**:
- [ ] Test nimsuggest in the nwaku codebase
- [ ] Create reproducible setup for crashes and poor performance, open upstream issues.
- [ ] Optional: provide a plan to make nwaku better compatible with nimsuggest (eg. no git submodule, less macros, etc)


### Streamline FFI API Creation by using Protobuf types instead of JSON PoC

**Owner**: nwaku

**Feature**: [Waku SDK](/FURPS/core/waku_sdk.md)

**FURPS**:
- F8. When wrapping the C API, conversion from native types to Protobuf is needed by the wrapper (PoC).

- U7. When wrapping the C API, a protobuf definition can be used to generate native types for the host language (PoC).

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)


### [Create nim-ffi, a library to easily exposes c-bindings from Nim](https://github.com/waku-org/pm/issues/332)

**Owner**: nwaku

**Feature**: [Nim FFI](/FURPS/application/nim_ffi.md)

**FURPS**:

- F1. Provides the core logic needed to expose any synchronous or asynchronous Nim library to a C-FFI library.

- U1. Introduce new pragma definitions, such as `{.ffi.}`, to appropriately annotate types and procedures.
- U2. Any Nim project can use it and can be installed using Nimble,
   similarly to how nim-chronos is imported.
- U3. The interaction with the exposed C library can be done using JSON.
- U4. The interaction with the exposed C library can be done using protobuf.

- R1. Nim-FFI does not leak memory.
- R2. The exposed C library never hangs when working asynchronously.

- S1. The exposed C library can be used in Golang.
- S2. The exposed C library can be used in Rust.
- S3. The exposed C library can be used in Python.

- +1. `nwaku` repository uses `nim-ffi` to expose the existing `libwaku` functionality.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)