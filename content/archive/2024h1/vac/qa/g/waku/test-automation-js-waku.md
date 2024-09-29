---
title: "Test Automation js-waku"
---
## `vac:qa::waku:test-automation-js-waku`
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
    Test Automation js-waku:  2023-09-15, 2024-02-29
```

- status: 100%
- CC: Florin

### Description

* filter (t)
* lightpush (t)
* store (t)
* relay
* peer exchange
* discv5
* peer & connection management
* CI integration

Additional requirements:
It should be possible to choose the nwaku version the js waku test use (done via github actions inputs)

### Justification


### Deliverables

* [filter](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/filter)
* [lightpush](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/light-push)
* [store](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/store)
* [relay](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/relay)
* [peer exchange](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/peer-exchange)
* [peer & connection management](https://github.com/waku-org/js-waku/tree/master/packages/tests/tests/connection-mananger)
* [CI integration](https://github.com/waku-org/js-waku/blob/master/.github/workflows/test-node.yml)
