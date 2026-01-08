# Zerokit-rln FURPS

## Functionality

1. The RLN prover module supports gasless L2 operations
2. Multiple RLN prover instances can operate on a shared database
3. An RLN prover can burn multiple message-ids in a single proof
4. The Zerokit module supports big-endian operations

## Usability

1. The Zerokit public API is defined in a specification
2. The Zerokit public API provides an easy-to-use interface for developers in Rust and C
3. The Zerokit FFI, including WASM targets, supports big-endian arguments
4. The RLN prover module has an associated specification

## Reliability

1. Multiple RLN prover instances operate consistently without database conflicts
2. Decentralized slashers establish authenticated connections to the RLN prover to observe proofs and detect spam

## Performance

1. 

## Supportability

1. A gasless L2 whitepaper is written to document the design and trade-offs

## Miscellaneous dependencies:

1. Dependency on Status L2 team for reviewing codebase
