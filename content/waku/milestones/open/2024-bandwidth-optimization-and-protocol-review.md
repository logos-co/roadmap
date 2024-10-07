---
title: Bandwidth optimization and protocol review
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Bandwidth optimization and Communities protocol review](https://github.com/waku-org/pm/milestone/31)

Estimated Date of Completion: Q2 2025, Precise date to be provided as part of 2024 H1 planning.

Once completed, further specification and analysis of Status Communities and some chat protocols will be available; as well as a recommendation on how Status Communities protocol should use Waku in a scalable and bandwidth efficient manner.

Moreover, low hanging-fruits and temporary solutions to improve bandwidth consumption would have been implemented.

### Deliverable: [Minimal Community Specification and Implementation]()

1. Specify community procedures, including the encryption, reliability and functional scope of each. [This forum post](https://forum.vac.dev/t/chat-protocol-work-for-2025-codex-integration-organisation-proposal/311) serves as a starting point.
2. Using spec from (1) as a basis, define message flows to be moved to separate shards (e.g. community control + content messages). Extracting community messages off the common open shard (also used by 1:1 chats) should be considered.

As well as other low-hanging fruit improvements previously identified.

Breaking changes and migration plans, if necessary, should be specified as part of this output.

Finally, proceed with the implementation of (2).

### Deliverable: [Telemetry review](https://github.com/waku-org/pm/issues/264)

Using the output of [Telemetry: Measure Bandwidth]() and [Minimal Community Specification and Implementation]() (traffic separated by shards), analyse the distribution of traffic on relay, and data in store. Providing a report in terms of Status Chat functionality.

### Deliverable: [Minimal solution for greedy messages](https://github.com/waku-org/pm/issues/265)

Based on [telemetry review](), specify and implement a workaround solution (light push + store) that removes most data greedy functionality from the relay network.

At the time of writing, we assume that self-addressed messages (backup/sync) and community description messages would be affected by this change.

### Deliverable: [Define long-term solution](https://github.com/waku-org/pm/issues/267)

The output of this deliverable is to compile a list of recommendations, for Waku, Status Communities and chat protocols. This should include potential benefits of changes and enable scheduling the work between Status and Waku teams.
Decision on the work to be done and planning it should be part of the output of this deliverable.

The recommendation should be grounded in the output of the previous deliverables of this milestone.

The recommendation is unlikely to encompass the entire chat protocol, and all status message types due to the amount of work it would entailed. Instead, an empirical approach should be taken where changes are prioritised based on the user impact, known limitations and functionalities (e.g. profile backup and device pairing usage of Waku), and telemetry metrics.

This would impact any current usage of Waku by the Status app. Which does include communities, 1:1 chat but profile back and device pairing.

This could include review of discv5 implementation in go-waku and nwaku if bandwidth usage is excessive.

### Deliverable: [Review usage of content topics in Status Communities protocol](https://github.com/waku-org/pm/issues/268)

The usage of content topics in Status is aligned with Wakuv1. Waku v2 comes with a new recommended format that enables auto-sharding.

Moreover, single Status users currently use a high number of content topics, which may have an impact on performance of req-res protocols such as store and filter.

Such impact is to be measured in a previous milestone by Vac DST.

The output of this deliverable should be an RFC update on how content topics should be used, backed with simulations when performance improvement is expected.

It should include migration strategy and potential impact on the product.
