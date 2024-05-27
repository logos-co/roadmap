---
title: "Interop Testing Part 1"
---
## `vac:qa::waku:interop-testing`
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
    Interop Testing Part 1:  2023-09-01, 2024-04-30
```

- status: 100%
- CC: Florin, Roman

### Description

Create an interop testing framework that can run Waku nodes and cover it's

* filter
* lightpush
* store
* relay
* nwaku <> go-waku interop
* ci integrations
* nightly reports

### Justification


### Deliverables

* Created scalable pytest framework
* Reached ~ 320 tests
* Created CI github actions workflows that:
  * Runs nightly on latest nwaku and go-waku versions
  * Runs tests between multiple nwaku nodes but with nwaku as service node and go-waku as client nodes in an interop way
  * Can be run on demand against any nwaku / go-waku version
  * Publishes nice reports with history and logs using github pages, [check example](https://waku-org.github.io/waku-interop-tests/nim/210/)
  * Notifies waku discord channel about results of tests and pings developers if there are failures
* Coverage:
  *  [filter](https://github.com/waku-org/waku-interop-tests/tree/master/tests/filter)
  *  [lightpush](https://github.com/waku-org/waku-interop-tests/tree/master/tests/light_push)
  *  [relay](https://github.com/waku-org/waku-interop-tests/tree/master/tests/relay)
  *  [store](https://github.com/waku-org/waku-interop-tests/tree/master/tests/store)
  *  [sharding](https://github.com/waku-org/waku-interop-tests/tree/master/tests/sharding)
* Nwaku issues found: 
  *  2719: store v3 response format issues
  *  2717: nwaku crashes for a store v3 request with invalid cursor format
  *  2716: passing a cursor that doesn't correspond to any message in the store will return all messages
  *  2715: store v3 returns error "waku message hash parsing error: Incorrect base64 string" for some cursors
  *  2644: nwaku node fails to start without a shard flag
  *  2586: node doesn't store messages if relay is disabled
  *  2582: contentTopic naming not consistent in the store response where is's content_topic
  *  2567: lightpush fails with Failed to request a message push: dial_failure after the peer node restart
  *  2565: strange errors when light pushing messages with payload >= 300 kb
  *  2552: node ca be started on multiple clusters
  *  2550: node crashes with Message: AsyncEventQueue size exceeds limits when there are many flags to the docker start command
  *  2546: only receive messages if someone subscribes explicitly via REST API to a pubsubTopic
  *  2538: autosharding resolves content topics to wrong shard
  *  2512: some lightnodes are not receiving filter push in certain conditions
  *  2437: relay publish fails with 400 Bad Request when message contains an unknown field
  *  2436: relay publish fails with 400 Bad Request when message contains ephemeral field
  *  2388: relayed messages reach recently started peer with a big delay (~60 seconds)
  *  2380: Relayed messages are not stored when running nwaku with docker compose
  *  2372: failed to setup archive driver: Postgres has been configured but not been compiled. Check compiler definitions
  *  2371: multiple messages published in the same second via RLN RELAY are not dropped
  *  2320: Filter relay/v1/messages GET returns duplicate messages
  *  2319: Relay publish returns Failed to publish: timedout when a peer filter node is disconnected
  *  2315: updating a non existing subscriptions returns no error
  *  2299: Relay connection works no more
  *  2286: filter/v2/subscriptions response not in the expected format
  *  2255: pubsub topic not mandatory for filter/v2/subscriptions
  *  2214: relay publish fails with 400 Bad Request when message contains meta field
  *  2198: relay push with malformed timestamp crashes nwaku
  *  2147: store query cursor misbehaving for specific cursors
  *  2117: store response is empty when requests contains invalid cursor
* Go-Waku issues found:
  *  1110: store v3 - passing a cursor that doesn't correspond to any message in the store will return all messages
  *  1109: store v3 returns error "illegal base64 data at input byte" for some cursors/hashes
  *  1108: pubsubTopic and contentTopics are required for store v3 requests
  *  1107: standardize store types by using camel case instead of snake case
  *  1106: store v3 local queries time out
  *  1087: failed to negotiate protocol: protocols not supported: [/vac/waku/store/2.0.0-beta4] when the peer node has store disabled
  *  1079: missing RequestId field error when lightpush has unexpected payload of content topic
  *  1078: lightpush on non subscribed pubsub topic hangs
  *  1076: strange errors when light pushing messages with payload >= 300 kb
  *  1074: all REST API calls return 200 with empty response
  *  1068: ephemeral field is ignored and not returned when retrieving messages even if the message contained this field
  *  1064: subscription not found if we start the node with the --pubsub-topic and we attempt to retrieve messages
  *  1061: dont harcode clusterid for autosharding
  *  1054: filter subscribe on a pubsubtopic from a different cluster id freezes
  *  1034: DELETE /relay/v1/subscriptions freezes in certain conditions
  *  988: invalid memory address or nil pointer dereference when trying to connect nodes
  *  972: filter/v2/subscriptions take a lot of time and even timeout sometimes
  *  971: Unsubscribing from one pubsubtopic seems to unsubscribe from all
  *  970: ping request failed with 503 when peer has no subscription
  *  969: PUT /filter/v2/subscriptions doesn't exist
  *  968: 503 instead of 400 when a filter/v2/subscriptions bad request is sent
  *  967: filter/v2/subscriptions freezes when pubsubtopic is from the non-default (0) cluster
  *  960: Strange "not subscribed to pubsubTopic" errors for filter/v2/messages GET requests
  *  928: encoding/hex: odd length hex string for filter/v2/subscriptions POST requests
  *  923: discv5/discover.go messages flooding the docker DEBUG logs
  *  922: duplicate validator for topic error when trying to re-subscribe to previously unsubscribed topic
  *  914: REST relay publish returns HTTP 500 Internal Server Error instead of 4XX for invalid requests E:REST API service node
