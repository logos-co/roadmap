---
title: "Midscale"
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

- status: 20%
- CC: Wings

### Description

Run deployments of between 1000 and 5000 Waku nodes actively passing messages in one network.

- Measure relay bandwidth
- Measure reliability of Waku message relaying
- Measure usage of the DiscV5 protocol
- Test Store protocol at scale
- Test Waku relay+store reliability with nodes going offline/online
    - If nodes go online/offline, we should be able to retrieve missing messages from the store. This will also test Waku message relaying in a different way.
- Filter and lightpush tests
- Test heterogenous clusters involving different node implementations such as nwaku and go-waku.

### Justification

### Deliverables
Similar deliverables to 10k sim, but with focuses on smaller scale and more frequent deployments.