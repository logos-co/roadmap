# Enhanced Filehsharing Protocol

We aim at a simpler, cleaner and more principled implementation which should be easier to explain and reason about while at the same time being faster and more efficient.

## Functionality

1. Downloads can be started, stopped and resumed.
1. At any time, it should be possible to query the progress of a download.
1. It should be possible to replace the scheduling disciplines for a download. The initial version should support at least streaming and randomized/rarest-first.

## Usability

1. The protocol should be published with accompanying specs detailing the wire formats and all relevant details.

## Performance

1. The new protocol should be at least 10 times faster than the current implementation for large files.
1. Memory footprint should be bounded, and it should not grow with file size.
1. A single peer should be able to service hundreds of other peers without significant drops in overall peer throughput, and without crashing.

## Supportability

1. The protocol **does not** need to be backward compatible with the previous protocol.
