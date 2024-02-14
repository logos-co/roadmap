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

- status: 0%
- CC: Andrea

**This milestone is updated on weekly basis. For a more up-to-date status head over to the [milestone on GitHub](https://github.com/status-im/communities-contracts/milestone/1).

### Description

This milestone is part of the effort to create "Community Vaults".
Community Vaults allow Status users to create communities that maintain their own token balances and later on allow for airdropping their tokens to other Status users or retail them.

This milestone focusses on the "token import".
The naming is a bit misleading, but the basic idea is that users:

- create Status communities and deploy a "vault" contract
- the vault contract acts as a wallet for the community
- any user can send ERC20 and ERC721 tokens to the vault

### Justification


### Deliverables

- `CommunityVault` smart contract implementation
- Migration/upgrade strategy for vaults
- Ability for users to deposit/import tokens to vault
- Tests
- Documentation
- Formal verification



