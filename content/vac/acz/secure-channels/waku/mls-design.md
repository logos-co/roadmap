---
title: "Secure Channels - MLS design"
---
## `vac:acz:secure-channels:waku:mls-design`
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
    Ethereum Chat: done, 2023-09-12, 2024-05-31
```

- status: 100%
- CC: Ramses

### Description

The goal of this milestone is having 

* using the [noise](http://noiseprotocol.org/noise.html) framework
* Ethereum Wallet address used to derive authentication key for noise
* Design an Ethereum address-based 1:1 chat
  - should be transport agnostic
  - toy eth chat: https://rfc.vac.dev/spec/20/
    - this milestone requires forward secrecy (see limitations section of the toy eth chat RFC)
  - consider using https://eips.ethereum.org/EIPS/eip-5564
* Naive Groupchat functionality (using `n` 1:1 chat channels)
* involve metamask here (metamask im team)

* a follow up milestone will cover running Ethereum chat on top of Waku
* follow up goal: develop this into an EIP


### Justification


### Deliverables

* [x] https://github.com/vacp2p/rfc-index/blob/main/vac/raw/eth-secpm.md (specification)


