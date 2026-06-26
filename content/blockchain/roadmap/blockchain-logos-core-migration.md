# Blockchain Logos Core Migration

## Resources Required

- 2 Engineers

## Risks

- Logos Core is a C++ project, developers are more familiar with Rust
- Migration must preserve existing node behaviour and configuration across testnet runs

## Deliverables

### Blockchain Node Migration to Logos Core

**Owner**: David Rusu

**Feature**: [FURPS](/blockchain/furps/index.md)

Migrate the blockchain node onto Logos Core as the standard way to run, configure, and operate a node, replacing the standalone integration with the module-based Logos Core deployment.

**FURPS**:

- U1. Blockchain node will be accessible through Logos-Core
- U2. Blockchain configuration will be done through Logos-Core
- U5. Ability to select which blockchain services are configured in a blockchain node

**Checklist**:
- [x] Blockchain node packaged as a Logos Core module
- [x] Node configuration migrated to Logos Core
- [x] Service selection exposed through Logos Core
- [x] Migration validated against existing node deployments
