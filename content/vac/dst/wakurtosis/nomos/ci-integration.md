---
title: "CI Integration"
---
## `vac:dst:wakurtosis:nomos:ci-integration`
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
    CI Integration: done, 2023-07-01, 2023-07-31
```

- status: 100%
- CC: Alberto

### Description

Add Nomos integration to wakurtosis so Nomos can be also used in it.

### Justification

Nomos is under constant developmet.
With this integration, each time a change is done, a continuous integration test is done, making sure the consensus protocol works properly with a few nodes.

### Info

We stopped working on a follow up milestone since we deprecated Wakurtosis in favour of our new 10ktool.

### Deliverables

*  first version of Nomos CI integration (https://github.com/vacp2p/wakurtosis/pull/141)



