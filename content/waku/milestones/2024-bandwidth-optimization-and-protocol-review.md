---
title: End-to-end reliability protocol
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Bandwidth optimization and protocol review](https://github.com/waku-org/pm/milestone/31)

Due Date: TBD

Bandwidth measurement from the previous milestone may lead to improvement that should be tackled with this milestone. This should be done in tandem with tackling low-hanging/high value items of the [Status Community protocols potential scaling problems](https://github.com/vacp2p/research/issues/177).

Finally, usage of content topics should be reviewed to align with Waku’s recommendation, clear migration strategy, caveat and benefits should be outlined, such as future usage of auto-sharding and reduction of topics used by a single user for more efficient use of services.

### Deliverable: [Status Communities protocol scaling/bandwidth optimization recommendation](https://github.com/waku-org/pm/issues/197)

Some of the [Status Communities protocols potential scaling problems](https://github.com/vacp2p/research/issues/177) have already been mitigated. However, further work may be needed and identified from simulations and telemetry.

The output of this deliverable is to compile a list of recommendations, for both Waku and Status Communities protocol. This should include potential benefits of changes and enable scheduling the work between Status and Waku teams.
Decision on the work to be done and planning it should be part of the output of this milestone.

This could include review of discv5 implementation in go-waku and nwaku if bandwidth usage is excessive.

### Deliverable: [Review usage of content topics in Status Chat and Communities protocol](https://github.com/waku-org/pm/issues/198)

The usage of content topics in Status is aligned with Wakuv1. Waku v2 comes with a new recommended format that enables auto-sharding.
Moreover, single Status users currently use a high number of content topics, which may have an impact on performance of req-res protocols such as store and filter.
Such impact is to be measured in a previous milestone by Vac DST.

The output of this deliverable should be an RFC update on how content topics should be used, backed with simulations when performance improvement is expected.
It should include migration strategy and potential impact on the product.