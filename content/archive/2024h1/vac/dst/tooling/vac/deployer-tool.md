---
title: "Deployer Tool"
description: "Build a tool that makes it easy to deploy large numbers of nodes in a controlled network."
---
## `vac:dst:tooling:vac:deployer-tool`
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
    Deployer Tool: 2024-05-01, 2024-11-01
```

- status: 90%
- CC: Alberto, Wings

### Description

A first version of tool that allows deploying >10k gossipsub / waku relay nodes.

The tool should measure bandwidth usage per node and bundle the measurement data for analysis.

The tool should be built in such a way that it can be used for other deployments as well.

It should allow automated, repeatable and accountable deployments.

### Justification


### Deliverables

* https://github.com/vacp2p/10ksim
* https://github.com/vacp2p/vaclab/argocd
