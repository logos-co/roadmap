---
title: Nomos Testnet Details
---
## `nomos:testnet:`
---

### Description

We aim for having an **unstable** testnet (asap) with no guarantees on breaking changes:

- Data can be wiped out at every new rollout
- Accounts may disappear at some point
- There are no incentives initially (ie no token as it requires data permanence)
- A good first functionality target would be to implement something like Bitcoin's ordinals (NFTs), since they are just signed data.

More information: https://www.notion.so/Testnet-55049d959a6145fd9c542c5b3999c65a 

### Research

### Engineering
#### Current Focus

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
    Node for Testnet: In progress, 2023-08-28, 2023-10-27
```


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
    Client for Testnet: In progress, 2023-09-11, 2023-10-27
```


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
    DevOps for Testnet: In progress, 2023-09-11, 2023-09-30
```