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

- status: 90%
- CC: 
	- Ramses
	- Aaryamann

### Description

Currently, RLN v1 allows for a fixed message rate of 1/msg per epoch while RLN v2 allows for n msgs/epoch.
The goal of this milestone is designing the key derivation and related cryptographic components for allowing several n msgs/epoch constraints.
For example: 24 msg / day && 1 msg/10 seconds.

* the nullifier defined in the [RLN RFC](https://rfc.vac.dev/spec/32/#slashing-and-shamirs-secret-sharing) has to be adapted accordingly.

### Justification

Dynamic epoch sizes are required  for users who have smaller messaging needs, to optimize for stake used.
rln-v3 will allow that.
### Deliverables

* [x] design document: https://www.notion.so/rln-v3-PoC-b05af585f52f4b15a249184d4a627096
* [x] PoC: https://github.com/vacp2p/gnark-rln/blob/9b05eddc89901a06d8f41b093ce8ce12fd0bb4e0/rln/rln.go
* [ ] blog post/ethresearch crosspost


