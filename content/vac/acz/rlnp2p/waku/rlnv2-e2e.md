---
title: RLN v2 E2E integration
---

## `vac:acz:rlnp2p:waku:rlnv2-e2e`
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
	dateFormat YYYY-MM-DD 
	section Status
		RLN v2 e2e Integration : , 2024-05-20, 2024-06-20
```
- due: 2024-06-20
- status: 90%

### Description
- [x] Come up with final gas estimation after the optimizations (RLN v2 + RLN in resource-restricted)
- [x] Deliver end-to-end PoC working in The Waku Network showcasing the new features.
- [x] Bug fixes found along testing
- [x] New smart contract with both RLNv2 and RLN in resource-restricted clients changes.
- [x] Deploy and consider using a L2 testnet.
- [ ] Deprecate tree sync in nwaku

#### Goal
Run RLN relay v2 on TWN.

### Deliverables

- [x] https://github.com/waku-org/pm/issues/168
- [x] https://github.com/waku-org/nwaku/issues/2758
