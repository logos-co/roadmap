# Serving Frontends, Modules, and Files

## Functionality

1. **File sharing.** Any user in the network should be able to share files (frontend bundles and modules) such that those can be downloaded by any other user in the network.
1. **Content addressability.** Files should be addressable by a content identifier, such that users are sure that the content they download is the content they expect.
1. **Organic replication.** Users that download a file should be able to provide it to other users in the network.
1. **Caching and storing.** Nodes should allow files to be either _cached_ or _stored_. Caching is constrained by a quota, and any file placed onto a node node should be cached unless explicitly told otherwise. Cached files are _evicted_ once the node runs out of quota. Optionally, a file might be marked as _stored_, at which point it no longer occupies the caching quota, and is simply preserved on disk.

## Usability

1. **C API.** A C API with the proper primitives for publishing and downloading files by address and pinning is published.
1. **Logos Core.** The filesharing client is published as a working Logos Core module.
1. **Zero-config networking.** Within the possibilities of current technology, user should not have to take any extra steps; e.g. opening ports on a router, to get file sharing working.[^1]
1. **File search.** Accessing a file requires knowledge of a file identifier; i.e., a Content ID (CID). We assume that the user will obtain these CIDs out-of-band, either directly from other users or through an external indexing/discovery service.
1. **Specs.** The set of services, protocols and primitives making up the filesharing client are published as specifications.

## Reliability

1. **Correctness.** If the network is eventually stable and the content is available, then downloads should always complete.

## Performance

1. **Baseline.** File downloads should perform comparably to Bittorrent, e.g., not less that $50\%$ of the performance of, say, Deluge.
1. **Lookup latency.** Lookup latencies should be comparable to state-of-the-art systems like IPFS. We should employ caching techniques (e.g. standard lookup path caching) to make lookup of popular content faster.

## Supportability

1. **Upgrade and migration paths.** Post-mainnet, version upgrades should not incur in data loss.

## Notes

DHT lookups and swarm bootstrap are the costliest/slowest operations in a Bittorrent/IPFS-based system. If one needs to access thousands of small files to download a website, this will likely not work very well. The expectation is that frontends and modules are instead packed as bundles, which might themselves be small, but such that loading a website or module requires downloading as few files as possible. f this turns out to be a problem, we might consider hybrids in which some small bundles get cached along lookup paths without the need for a swarm, leading to a [Swarm-like](https://www.ethswarm.org/) design.

[^1]: The initial goal is feature-parity with [[messaging]].