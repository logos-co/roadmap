---
title: "Tor Push PoC"
---
## `vac:rc:valpriv:vac:tor-push-poc`
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
    Tor Push PoC:  2023-06-01, 2023-09-15
```

- status: 80%
- CC: Umar

### Description

* [x] first PoC of Tor push in Nimbus (testnet Goerli) https://github.com/vacp2p/nimbus-eth2-experimental/issues/1
  - first latency measurements (comprehensive analysis in next milestone)
* research log post on Tor push / Nimbus PoC incl first latency measurements
* add epoch support as described in the [RFC](https://rfc.vac.dev/spec/46/)
* update/adjust Tor push spec
* talk @ Logos research call
* refine PoC (should fully cover the RFC)
* thorough latency measurements for[[vac/dr/valpriv/vac/tor-push-paper|tor-push-paper]]

#### Info

* The epochs

### Justification


### Deliverables

* [WIP] https://github.com/vacp2p/nimbus-eth2-experimental/pull/3

