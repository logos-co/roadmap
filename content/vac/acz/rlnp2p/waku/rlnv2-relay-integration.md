---
title: "RLN v2 Waku Relay Integration"
description: "Integrating RLN v2 into Waku Relay."
---
## `vac:acz:rlnp2p:waku:rlnv2-relay-integration`
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
    RLN v2 relay integration:done, 2023-11-01, 2024-02-29
```

- status: 100%
- CC: Aaryamann

### Description

* also involves
  - TKE
  - implemenations in various Waku versions


### Justification

rln-v2 brings multi message per epoch signaling which is favourable for all users of rln instead of abiding by one global rate limit. 

### Deliverables

- [x] https://github.com/waku-org/nwaku/issues/2345


