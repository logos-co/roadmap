# De-MLS FURPS

## Functionality

1. A messaging group can use peer scoring to track bad behaviour and remove misbehaving members
2. A messaging group can use steward list to elect and function with multiple stewards
3. Messaging groups with multiple stewards can deterministically handle multiple commits
4. Messaging groups with multiple stewards can trigger and recover from a partial freeze to resolve basic conflicts
5. Messaging groups have a recovery mode to deal with more serious unexpected group states
6. New joiners can properly setup the group state after being accepted into the group
7. Commits can be validated and violations appropriately handled
8. De-MLS obtains the current time through a caller-provided WallClock service instead of hardcoded debug timer values
9. A messaging group can recover from steward liveness failures by triggering a new steward list election

## Usability

1. De-MLS protocol with multi-steward support is published in a specification
2. The specification describes peer scoring
3. The specification describes steward lists and election process
4. The specification describes different conflict resolution and recovery mechanisms
5. An API spec is published that exposes de-MLS functionality and abstracts consensus
6. De-MLS is implemented in Rust
7. The De-MLS API is available in Rust and C
8. De-MLS is included in the Logos Chat protocol stack specification
9. De-MLS is integrated into a working Logos Chat module deployed to Logos Core
10. De-MLS integrates into libchat as a standard module using caller-provided services

## Reliability

1. De-MLS operates correctly within libchat

## Performance

1. The consensus mechanism is scalable to groups of 10000 members
2. The integrated de-MLS protocol is scalable to groups of 10000 members
3. Group state can be updated within a reasonable amount of time

## Supportability

1. Hashgraph-like consensus is separated out into its own library for modularity
2. The WallClock service provides test implementations that simulate time progression without real-time waits

## Miscellaneous dependencies:

1. Dependency on DST for benchmarking of consensus mechanism
2. Dependency on DST for benchmarking of de-MLS integrated protocol
3. Dependency on ChatSDK to clarify requirements for API