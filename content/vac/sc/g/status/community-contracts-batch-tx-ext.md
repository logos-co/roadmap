---
title: "Community Contracts CollectibleV1 Batch transaction Extension"
---
## `vac:sc::status:community-contracts-batch-tx-ext`
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
    Community Contracts CollectibleV1 Batch transaction Extension: 2024-02-19, 2024-03-21
```

- status: 100%
- CC: r4bbit

**This milestone is updated on weekly basis. For a more up-to-date status head over to the [milestone on GitHub](https://github.com/status-im/communities-contracts/milestone/4).

### Description

This milestone extends the available token contracts that Status communities use to implement things like token gated permissions.

At the time of creating this milestone, two types of token contracts existed:

- `CommunityERC20`
- `CollectibleV1`

These are essentially ERC20 and ERC721 respectively, with some additional functionality, required by Status.

In this milestone, we're adding support for batch transacting tokens of the `BaseToken` which `CollectibleV1` is derived from. 

### Justification

Status Desktop needs to allow community owners to first deploy and mint a certain amount of their own token and then batch transact them to other accounts later on.

Right now the only way to do this is to either use the contract's `mintTo()` function, which mints to a list of accounts right away, or to perform multiple transactions for every token to be sent.

### Deliverables

- `BaseToken/CollectibleV1` batch transfer functions
- Tests
- Documentation
- Application properties
- Formal verification



