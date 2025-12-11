# Privacy-Preserving File Sharing

**Estimated date of completion.** Oct 2026

Privacy-preserving file sharing means that:
* neither publisher or downloader of a file can be identified as so by third parties when querying and/or retrieving data;
* cache nodes cannot be held accountable for the content they cache (plausible deniability).

This is key for Logos. Our starting point for this are:
* Tor's[^tor_specs] specs for hidden services;
* Tribler's specs for anonymous seeding[^bouman_21], downloading and streaming[^stokkink_24];
* our own internal specs for a libp2p mixnet[^mani_25];
* lessons from Freenet Routing.[^sandberg_05][^freenet_25]

We then need to build an understanding of the characteristics and tradeoffs for each approach. Tribler for instance explicitly states in their website that their routing is not meant to protect users from government-grade adversaries, so we must develop a good understanding of what that means. There is also abundant literature describing how Tor might be vulnerable to powerful adversaries.[^johnson_13][^gegenhuber_23]

This understanding, together with what compromises we are (and are not) willing to make should ultimately dictate how we balance performance, privacy, and a timely release schedule in providing this.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| We take an approach of building filesharing first and then enhancing it with privacy, and figure out that we need an different protocol altogether. | Try to identify this as early as possible and fail fast. |
| Anon coms team builds something that does not work for us. | Close collaboration with anon coms, with the embedding of a logos storage researcher within their effort. Employ strategic and small multidisciplinary team including both cryptography and networking researchers and engineers. |
| Dependency on DST team for benchmarking and iterative improvements | Develop test strategy/simulations from the outset in collaboration with DST team |

## Deliverables

**Feature**: [Serving Frontends, Modules, and Files](../furps/privacy-preserving-filesharing.md)

A list of detailed deliverables will be specified soon.

