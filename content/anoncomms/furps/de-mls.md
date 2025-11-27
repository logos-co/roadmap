# De-MLS FURPS

## Functionality

1. A messaging group can have multiple stewards
2. A member can leave a messaging group
3. Groups can resync after state partition

## Usability

1. De-MLS protocol with multi-steward support is published in a specification
2. The specification describes how members can leave the group
3. The specification describes how groups can resync after a state partition
4. The specification contains implementation suggestions to guide developers
5. An API spec is published that exposes de-MLS functionality and abstracts consensus
6. De-MLS is implemented in Rust
7. The De-MLS API is available in Rust and C

## Reliability

1.

## Performance

1. The consensus mechanism is scalable to groups of 10000 members
2. The integrated de-MLS protocol is scalable to groups of 10000 members
3. Group state can be updated within a reasonable amount of time

## Supportability

1. Hashgraph-like consensus is separated out into its own library for modularity

## Miscellaneous dependencies:

1. Dependency on DST for benchmarking of consensus mechanism
1. Dependency on DST for benchmarking of de-MLS integrated protocol
1. Dependency on ChatSDK to clarify requirements for API