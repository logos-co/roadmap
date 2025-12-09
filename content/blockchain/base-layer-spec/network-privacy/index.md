---
title: Nomos Network Privacy Details
---
## `nomos:network-privacy:`
---

### Current Focus

**Mixnet 1.0** - a technology/system that helps keep information sent over the internet private and secure. It does so by mixing up data from different sources before sending it to its destination. In Nomos chain:
- Mixnet nodes opt-in by publishing their IP and providing stake.
- The mixnet topology of layers is public and defined on-chain (by some deterministic algorithm using the random-beacon for example).
- After certain number of epochs (to be determined), a new set of nodes is chosen and a new topology of Mixnet layers is defined. Nodes need to renew their stake and their keys (for security).

For more information, check https://www.notion.so/Private-Routing-Mixnet-Network-Privacy-Component-1-613f53cf11a245098c50af6b191d31d2 

### Research
#### Current Tasks

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
    Viability analysis of the Embedded Mixnet: In progress, 2023-09-18, 2023-10-06
```


### Engineering
#### Current Tasks 

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
  tickInterval 7day
  dateFormat YYYY-MM-DD 
  section Status
    Mixnet 1.0 Stabilization: In progress, 2023-09-18, 2023-09-30
```

