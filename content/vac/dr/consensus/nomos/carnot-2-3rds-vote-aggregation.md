---
title: "Carnot 2/3 Vote aggregation"
---
## `vac:dr:nomos:nomos:carnot-vote-2-3rds-vote-aggregation`
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
    Carnot 2/3 Vote Aggregation:  2023-08-01, 2023-10-15
```

- status: 20%
- CC: Moh


### Description

This research will use the Carnot flexible design to make it collect more than 2/3rd of cryptographic proof of votes cast for a block.

* write a research log post
* desciption of the solution

* support by the DST team: [[ roadmap/vac/dst/dr-support/vac/carnot-2-3rds-executable-spec | carnot-2rds-executable-spec ]]

### Risks

Might slightly increase the protocol overhead. But we make sure this overhead is minimal.

### Justification


### Deliverables

*  [x] Presentation slides (logos research)
* Pseudocode (potentially paper in a future milestone)
* notion doc describing the solution
* research log post
* python code, support by the DST team [[ roadmap/vac/dst/dr-support/vac/carnot-2-3rds-executable-spec | carnot-2rds-executable-spec ]]
* RFC on rfc.vac.dev containing executable spec

Note: Need to be discussed: The Pseudocode can be completed earlier so that devs can began implementation, whereas the paper can be completed later.


