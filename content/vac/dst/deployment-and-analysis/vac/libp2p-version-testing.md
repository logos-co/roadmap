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
Our approach involves selecting a commit hash to designate as the monthly version a week prior to release. 
DST will conduct stability tests on this version (with additional testing in Nomos and Waku test fleets outside of the DST scope). 
Our aim is to increasingly automate this process. 
The next round of testing is scheduled for the end of May, targeting the beginning of June.

### Justification

### Deliverables
- Monthly report of libp2p testing outcomes