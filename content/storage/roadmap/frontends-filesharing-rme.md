# Create A Basic File Sharing Client for Logos Core

**Estimated date of completion.** Feb 2026

**Resources Required**: 3 developers for 12 weeks.

Serving frontends, modules, and files boils down to being able to allowing users to publish and retrieve content-addressable files over the network. From the point of view of Logos Storage, this means providing the required primitives and protocols which enable that.

The current Nim implementation of Storage already provides that to some extent, so we will ship this as a module. We will also in parallel work in an improved version which should replace the Nim version in the long run. The initial version will not be privacy preserving in any way, and should look pretty much like an IPFS/Bittorrent client.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| Usefulness contingent on having the right primitives available to Logos Core | Work alongside the Logos Core team early on to ensure we have all the bases covered. |
| Parallel work on two implementations may lead to us having none that works | Prioritize making sure that the current implementation is able to cater for the uses cases we need. |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |


## Deliverables

**Feature**: [[frontends-filesharing]]

A list of detailed deliverables will be specified soon.