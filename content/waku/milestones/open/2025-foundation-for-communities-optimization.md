---
title: Foundation for Communities Optimization
tags:
    - waku-milestone
date: 2024-09-07
---

## [Foundation for Communities Optimization](https://github.com/waku-org/pm/milestone/31)

Once completed, the usage of content topics by Communities will be simplified, enabling both improvements in terms of store queries and light mode message receival, but also enabling future optimization and improvements at a lower cost.

Moreover, Communities traffic will be separated from other functionalities. This enables easy bandwidth and performance improvements (remove usage of relay for large messages, reduce message retention and hence DB size for control messages), as well as protecting users that do not use communities from Communities traffic.

Finally, Communities traffic will be segregated in a few shards, per message types. Enabling future bandwidth or performance optimization such as setting up different DB per message type, reducing retention time for control messages, or disabling the usage of relay for large messages.


### Deliverable: [Define and implement sharding for Communities messages](https://github.com/waku-org/pm/issues/266)

Define message flows to be moved to separate shards (e.g. community control + content messages). Extracting community messages off the common open shard (also used by private chats) should be considered.

Breaking changes and migration plans, if necessary, should be specified as part of this output.

### Deliverable: [Review usage of content topics in Status Communities protocol](https://github.com/waku-org/pm/issues/268)

The usage of content topics in Status is aligned with Wakuv1. Waku v2 comes with a new recommended format that enables auto-sharding.

Moreover, single Status users currently use a high number of content topics, which may have an impact on performance of req-res protocols such as store and filter.

Such impact is to be measured in a previous milestone by Vac DST.

The output of this deliverable should be an RFC update on how content topics should be used, backed with simulations when performance improvement is expected.

It should include migration strategy and potential impact on the product.
