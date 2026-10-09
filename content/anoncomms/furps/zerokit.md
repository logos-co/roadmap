# Zerokit FURPS

## Functionality

1. The Zerokit module supports big-endian operations
2. Zerokit supports Poseidon2 as an alternative hash function alongside Poseidon
3. Zerokit supports the automatic generation of round parameters for both Poseidon and Poseidon2

## Usability

1. The Zerokit public API is defined in a specification
2. The Zerokit public API provides an easy-to-use interface for developers in Rust and C
3. The Zerokit FFI, including WASM targets, supports big-endian arguments
4. A Zerokit release is published introducing partial proof generation and multi-ID burning
5. The Zerokit architecture is changed from compile-time feature flags to runtime configuration based on enums
6. The hash function selection (Poseidon vs Poseidon2) is exposed via the runtime configuration enum
7. The implementation of the new Poseidon2 circuit has been completed and documented in the circom-rln repo
8. A Zerokit release is published introducing Poseidon2 support
9. The Zerokit API specification is updated for v3.1.0 covering Poseidon2

## Reliability

1. Poseidon2 proofs verify correctly and Poseidon behavior remains unchanged when Poseidon2 is enabled
2. A mismatch between the configured resources and hash function is reported with a specific error at validation time rather than as a generic invalid proof

## Performance

1. Poseidon2 proof generation is benchmarked against Poseidon and demonstrates measurable improvement

## Supportability

1. Outstanding issues and dependency updates are addressed to keep the codebase maintainable
2. Static analysis of the circuits for both Poseidon and Poseidon2 is performed and documented
3. New Poseidon2-related functionality and APIs are fully exposed through the FFI and WASM interfaces
