---
title: "SNT Optimism Bridge"
description: "Finalizig work necessary to bridge SNT to Optimism"
---
## `vac:sc::status:snt-optimism-bridge`
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
    SNT Optimism Bridge:  2023-09-01, 2023-09-30
```

- status: 70%
- CC: Ricardo

### Description

This milestone comprises issues that have to be completed to bridge SNT to Optimism.
These issues are part of enhancing the MimiMe token.

* https://github.com/vacp2p/minime/issues/19
* https://github.com/vacp2p/minime/issues/17
* https://github.com/vacp2p/minime/issues/7
* https://github.com/vacp2p/minime/issues/5
* https://github.com/vacp2p/minime/issues/31

Following enhancments to the MimiMe token (future work) are tracked in:
[[ vac/sc/g/status/mimime-token-enhancement | mimime-token-enhancement ]]

This milestone also contains:
* a listing of issues identified in the 1st Certora audit, which we addressed
* a listing of issues that are now out of scope because we forked the MimiMe repo, and removed parts we do not need
* Certora checking

#### Info

This milestone comprises what the SC has to deliver towards the completion of Status No1 prio:

`the SNT contract for deployment on Optimism is top priority`


### Justification


### Deliverables



