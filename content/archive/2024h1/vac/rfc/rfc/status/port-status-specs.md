---
title: "Port Status Specs"
---
## `vac:rfc:rfc:status:port-status-specs`
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
    Port Status Spec:  2023-08-01, 2023-11-31
```

- status: 85%
- CC: Jimmy

### Description


This milestone comprises the first version of each of the specifications. Iterations on spec parlance and further enhancements will be covered in future milestones.
The goal we want to aim for is to take down and completely get rid of https://specs.status.im/ and its accompanying repo https://github.com/status-im/specs , so that all Status protocol specs are in the https://github.com/vacp2p/rfc repo

Tasks:

* determine which specs from https://specs.status.im/ are still relevant as protocol specs, and which old specs are no longer relevant and can be discarded
* out of the still relevant protocol specs that haven't yet been moved over to the Vac RFC repo, update these specs as needed and move them into the Vac RFC repo
* once done, take down https://specs.status.im/ and archive the https://github.com/vacp2p/rfc repo

The new Status website will have a 'Specs' section inside the 'Developers' part of the website, and this Specs section will pull in and render all specs from https://rfc.vac.dev/ with "STATUS-" in their title.
Note that feature specs should NOT be added to the Vac RFC repo, only protocol specs should go here.

RFCs to be moved / updates:

* (todo add RFCs we already ported)
* [x] `6/PAYLOADS` (needs significant update)
* [x] `2/ACCOUNT`
* [x] `16/Keycard` (discuss with keycard team)
* `16/Push-Notifications` (raw, needs update)
* `10/waku-usage` (outdated, check if we need that, update to Waku 2 if makes sense)

#### out of scope?

* `14/Dapp browser API usage` (this is not part of chat SDK, is this still a RFC? API doc would be more fitting here.)
* `13/3RD-PARTY` (investigate, most likely out-of-scope as it is not a protocol spec)
* `8/EIPS` (clarify if we have to port this → this should not be an RFC, needs constant updates, link EIPS in RFCs where needed)

#### stable - deprecated
(just copy these; confirm this is OK)

* `4/whisper-mailserver`
* `11/Waku-Mailserver`

### Justification


### Deliverables

* https://rfc.vac.dev/spec/53/
* https://rfc.vac.dev/spec/54/
* https://rfc.vac.dev/spec/55/
* https://rfc.vac.dev/spec/56/
* https://rfc.vac.dev/spec/61/
* https://rfc.vac.dev/spec/63/


