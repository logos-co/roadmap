---
title: "Deployer Tool"
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

- status: 80%
- CC: Alberto

### Description

A first version of tool that allows deploying >10k gossipsub / waku relay nodes.

The tool should measure bandwidth usage per node and bundle the measurement data for analaysis.

The tool should be built in such a way that it can be used for other deployments as well.

### Justification


### Deliverables

* https://github.com/vacp2p/10ksim
