---
title: "Test Automation nwaku"
---
## `vac:qa::waku:test-automation-nwaku`
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
    Test Automation nwaku:  2023-09-15, 2024-02-29
```

- status: 100%
- CC: Alex

### Description

* filter (t)
* lightpush (t)
* store (t)
* relay
* peer exchange
* discv5
* peer & connection management
* CI integration

### Justification


### Deliverables

# Filter
    - https://github.com/waku-org/nwaku/pull/2023
    - https://github.com/waku-org/nwaku/pull/2034
    - https://github.com/waku-org/nwaku/pull/2035
    - https://github.com/waku-org/nwaku/pull/2046
    - https://github.com/waku-org/nwaku/pull/2057
    - https://github.com/waku-org/nwaku/pull/2085
    - https://github.com/waku-org/nwaku/pull/2095
    - https://github.com/waku-org/nwaku/pull/2096

    * [tests/node/test_wakunode_filter.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/test_wakunode_filter.nim)
    * [tests/waku_filter_v2/test_waku_client.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_filter_v2/test_waku_client.nim)

# Lightpush
    - https://github.com/waku-org/nwaku/pull/2269

    * [tests/node/test_wakunode_lightpush.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/test_wakunode_lightpush.nim)
    * [tests/waku_lightpush/test_client.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_lightpush/test_client.nim)

# Store
    - https://github.com/waku-org/nwaku/pull/2234
    - https://github.com/waku-org/nwaku/pull/2235
    - https://github.com/waku-org/nwaku/pull/2240

    * [tests/waku_store/test_client](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_store/test_client)
    * [tests/node/test_wakunode_store](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/test_wakunode_store)

# Relay
    - https://github.com/waku-org/nwaku/pull/2101
    - https://github.com/waku-org/nwaku/pull/2224

    * [tests/waku_relay/test_message_id.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_relay/test_message_id.nim)
    * [tests/waku_relay/test_protocol.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_relay/test_protocol.nim)

# Peer Exchange
    - https://github.com/waku-org/nwaku/pull/2464

    * [tests/node/test_wakunode_peer_exchange.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/test_wakunode_peer_exchange.nim)
    * [tests/test_relay_peer_exchange.nim (partial)](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/test_relay_peer_exchange.nim (partial))
    * [tests/waku_peer_exchange/test_protocol.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_peer_exchange/test_protocol.nim)
    * [tests/waku_peer_exchange/test_rpc_codec.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_peer_exchange/test_rpc_codec.nim)

# Peer & Connection Management
    - https://github.com/waku-org/nwaku/pull/2321
    - https://github.com/waku-org/nwaku/pull/2566

    * [tests/node/peer_manager/peer_store/test_migrations.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/peer_manager/peer_store/test_migrations.nim)
    * [tests/node/peer_manager/peer_store/test_peer_storage.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/peer_manager/peer_store/test_peer_storage.nim)
    * [tests/node/peer_manager/peer_store/test_waku_peer_storage.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/peer_manager/peer_store/test_waku_peer_storage.nim)
    * [tests/node/test_wakunode_peer_manager.nim](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/node/test_wakunode_peer_manager.nim)

# Discv5
    - https://github.com/waku-org/nwaku/pull/2487

    * [tests/waku_discv5/test_waku_discv5.nim (refactor and implementation)](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_discv5/test_waku_discv5.nim (refactor and implementation))
    * [tests/waku_enr/test_sharding.nim (refactor)](https://github.com/waku-org/nwaku/blob/840e012294d8fba7f989c87a6f69689fbd397c92/tests/waku_enr/test_sharding.nim (refactor))

# CI Integration
    - None
