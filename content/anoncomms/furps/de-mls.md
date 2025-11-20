# De-MLS FURPS

## Functionality

1. A group can have multiple stewards (spec + impl)
2. A member can leave a group. (spec + impl)
3. Group state can be updated within a reasonable amount of time
4. An API spec is published that exposes de-MLS functionality and abstracts consensus
5. An API is implemented in Rust and C

## Usability

1. The specification contains implementation suggestions to guide developers

## Reliability

1. Groups can be re-synched after state partition. (spec + impl)

## Performance

1. Benchmark scalability of the consensus mechanism
2. Benchmark scalability of the integrated de-MLS protocol

## Supportability

1. Hashgraph-like consensus is separated out into its own library for modularity

## Miscellaneous dependencies:

1. Dependency on DST for benchmarking of consensus mechanism
1. Dependency on DST for benchmarking of de-MLS integrated protocol
1. Dependency on ChatSDK to clarify requirements for API