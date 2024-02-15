---
title: "Community Contracts Multitoken (EIP1155)"
---
## `vac:sc::status:community-contracts-multitoken`
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
    Community Contracts Multitoken: 2024-02-19, 2024-03-21
```

- status: 0%
- CC: r4bbit

### Description

This milestone extends the available token contracts that Status communities use to implement things like token gated permissions.

At the time of creating this milestone, two types of token contracts existed:

- `CommunityERC20`
- `CollectibleV1`

These are essentially ERC20 and ERC721 respectively, with some additional functionality, required by Status.

In this milestone, we're adding a new contract that's meant to replace the `CollectibleV1`.
It's supposed to be an EIP1155 multitoken implementation that otherwise comes with the same custom functionality that the `CollectibleV1` has.

### Justification


### Deliverables

- `CommunityERC1155` implementation
- Tests
- Documentation
- Application properties
- Formal verification



