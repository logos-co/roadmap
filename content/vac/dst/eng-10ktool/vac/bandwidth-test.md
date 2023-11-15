---
title: "Bandwidth Test"
---
## `vac:dst:eng-10ktool:vac:bandwidth`
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
    Bandwidth Test: 2023-08-01, 2023-10-31
```

- status: 80%
- CC: Alberto

### Description

A first version of tool that allows running >10k gossipsub / waku relay nodes.
The tool should measure bandwidth usage per node and bundle the simulation data for analaysis.

### Justification


### Deliverables

* https://github.com/vacp2p/cs-codex-dist-tests



