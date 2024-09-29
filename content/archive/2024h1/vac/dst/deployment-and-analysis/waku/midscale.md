---
title: "Midscale"
description: "Run smaller 1K-5K node Waku deployments, with a pipeline for analysis and measurements."
---
## `vac:dst:deployment-and-analysis:waku:midscale`
---

```mermaid
%%{ 
  init: { 
    'theme': 'base', 
    'themeVariables': { 
      'primaryColor': '#BB2528', 
      'primaryTextColor': '#fff', 
      'primaryBorderColor': '#7C0000', 
      'lineColor': '#F8B229', 
      'secondaryColor': '#006100', 
      'tertiaryColor': '#fff' 
    } 
  } 
}%%
gantt
  tickInterval 1month
  dateFormat YYYY-MM-DD 
  section Status
    Midscale: 2024-05-01, 2024-11-01
```

- status: 40%
- CC: Wings

### Description

Run deployments of between 1000 and 5000 Waku nodes actively passing messages in one network.

Testing is to be done in this order of priority:
1. Measure relay bandwidth
2. Measure reliability of Waku message relaying
3. Measure usage of the DiscV5 protocol in the same scenario as (1).
4. Test Store protocol at scale
5. Test Waku relay+store reliability with nodes going offline/online
  - If nodes go online/offline, we should be able to retrieve missing messages from the store. This will also test Waku message relaying in a different way.
6. Measure (1) and (3) in heterogenous clusters involving different node implementations such as nwaku and go-waku
7. Test waku shard behaviour and stability with various of numbers of shards
8. Filter and lightpush tests
9. Measure (3) with Waku peer exchange protocol used for discovery by a subset of nodes.
10. Measure (1) with a mix of nodes using Resource-restricted device reliability protocol and peer exchange, meaning a small number of nwaku nodes serve store, light push and filter protocols and a high number of clients consume them. For example, 6-10 service nodes, 200 relay nodes and 1000 light nodes.
This should include connection and node churn impact on reliability for both relay and light clients.

Additionally, perform monthly regression tests against a chosen version of Waku to ensure that no new bugs have been introduced. Produce a report on the results of the tests and any interesting findings.

### Justification
Provide a greater understanding of Waku's performance and reliability in midsized networks.

### Deliverables
Frequent deployments of 1000-5000 node networks.

Documentation of both the deployment process and actual deployments.

Useful analytics for the Waku team that can be used to improve the Waku software.

Research articles such as blog posts about findings from the midscale deployments.