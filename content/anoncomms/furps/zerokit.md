# Zerokit FURPS

## Functionality

1. The RLN prover module supports gasless L2 operations
2. Multiple RLN prover instances can operate on a shared database
3. An RLN prover can burn multiple message-ids in a single proof
4. The Zerokit module supports big-endian operations
5. The RLN prover module supports proof output streaming to an aggregator node

## Usability

1. The Zerokit public API is defined in a specification
2. The Zerokit public API provides an easy-to-use interface for developers in Rust and C
3. The Zerokit FFI, including WASM targets, supports big-endian arguments
4. The RLN prover module has an associated specification
5. A Zerokit release is published introducing partial proof generation and multi-ID burning
6. The Zerokit architecture is changed from compile-time feature flags to runtime configuration based on enums

## Reliability

1. Multiple RLN prover instances operate consistently without database conflicts
2. The aggregator relays RLN proof metadata to decentralized slashers
3. Decentralized slashers extract the secret from double-signaled (spammed) proofs to enable slashing

## Performance

1. 

## Supportability

1. A gasless L2 whitepaper is written to document the design and trade-offs

## Miscellaneous dependencies:

1. Dependency on Status L2 team for reviewing codebase
