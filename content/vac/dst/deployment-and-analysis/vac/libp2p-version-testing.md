---
title: "Ongoing testing of specific monthly libp2p releases"
description: "On a monthly cadence, test specific releases of libp2p and provide feedback."
---
## `vac:dst:deployment-and-analysis:vac:libp2p-version-testing`
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
    LibP2P: 2024-05-15, 2024-12-31
```

- status: Ongoing
- CC: Wings

### Description

The Vac P2P team is transitioning nim-libp2p to a monthly release cycle.
This process involves selecting a commit hash to designate as the monthly version a week prior to release. 

DST will conduct stability tests on this version.
This also comprises analysing results as well as identifying and pinpointing bugs if any arise.
Specific issues might require several test runs and thorough analysis.

Our aim is to increasingly automate this process.

Additional testing outside the scope of DST and this milestone comprises:

* testing on a Nimbus test fleet
* testing on a Waku test fleet

### Justification

### Deliverables
- Monthly report of libp2p testing outcomes
