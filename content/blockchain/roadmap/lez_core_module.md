# LEZ Core Module

## Resources Required

- 1 Engineer

## Risks

- Logos Core is a C++ project, developers are more familiar with Rust
- Interface must be general enough to serve diverse LEZ apps without app-specific changes

## Deliverables

### LEZ Core Module

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

A Logos Core module that serves as the shared backend for all LEZ apps. It exposes LEZ wallet and program operations so that apps built on LEZ — wallet, AMM, DEX, and others — share a common backend rather than each reimplementing LEZ access.

**FURPS**:

- U8. Logos Core integration for LEZ Wallet
- U12. Logos Core Module for LEZ operations

**Checklist**:
- [x] LEZ core module supports transaction proving / transaction signing
- [x] LEZ core module supports submitting txs to sequencer

