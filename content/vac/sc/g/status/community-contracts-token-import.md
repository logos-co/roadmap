---
title: "Community Contracts Token Import"
description: "token import"
---
## `:sc:g:status:communty-contracts-token-import`
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
    Production Readiness:
```

- status: 5%
- CC: Andrea

### Description

*Note*: This milestones needs further details, which will be agreed apon with Status in an upcoming meeting.

Preliminary description:

Design and implement a contract that offers a  token import functionality to communities.
It should allow:
- deploying a token vault for a given token
- depositing tokens to specific token vaults
- specific community members (token masters) can alter (e.g. airdrop) tokens in the store
- tokens in the vault can be air dropped

A token vault is basically a community wallet that a community's token masters can airdrop from.

### Justification


### Deliverables

* design description
* smart contract



