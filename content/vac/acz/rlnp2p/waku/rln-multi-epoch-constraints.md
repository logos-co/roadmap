---
title: "Multi Epoch Constraints"
---
## `vac:acz:rlnp2p:waku:multi-epoch-constraints`
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
    Multi epoch constraints:  2023-09-15, 2023-11-15
```

- status: 0%
- CC: Ramses

### Description

Currently, RLN v1 allows for a fixed message rate of 1/msg per epoch while RLN v2 allows for n msgs/epoch.
The goal of this milestone is designing the key derivation and related cryptographic components for allowing several n msgs/epoch constraints.
For example: 24 msg / day && 1 msg/10 seconds.

* the nullifier defined in the [RLN RFC](https://rfc.vac.dev/spec/32/#slashing-and-shamirs-secret-sharing) has to be adapted accordingly.

### Justification


### Deliverables



