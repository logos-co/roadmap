---
title: Waku RLN-RELAY Enhancements Details
---

## `vac:acz:rlnp2p::waku:rln-relay-enhancements`
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
		RLN-RELAY enhancements :done, 2023-06-01, 2023-09-30
```
- due: 2023/09/30
- status: 100%

### Description
- simple membership management setup (fixed CC list)
- instruction on how to register to the membership set / setup up (for Waku CCs)

#### Goal
Run RLN relay on the Waku production fleet. Waku CCs can use it

### Info

## 2023/09/04 - 2023/09/11

* if only one key exists in the keystore, use it - https://github.com/waku-org/nwaku/pull/1984
* fix log levels for some logs - https://github.com/waku-org/nwaku/pull/1986
* updated documentation for rln-relay - https://github.com/waku-org/nwaku/pull/1993
* clean nullifier table every `MaxEpochGap` - https://github.com/waku-org/nwaku/pull/1994
* created `rln_db_inspector` tool, allows inspection into merkle tree structure - https://github.com/waku-org/nwaku/pull/1999, https://github.com/waku-org/nwaku/pull/2012
* fixed missing memberships between history sync and new memberships sync with @alrevuelta - https://github.com/waku-org/nwaku/pull/2015
* remove `rln` from waku's experimental features - https://github.com/waku-org/nwaku/pull/2001
* fix metric calculation for registered members - https://github.com/waku-org/nwaku/pull/2018
* uups proxy for waku-rln-registry - https://github.com/waku-org/waku-rln-contract/pull/9

## 2023/08/28 - 2023/09/04

* rln was enabled by default in the Makefile - fixed - https://github.com/waku-org/nwaku/pull/1964
* ordered pubsub validator execution - https://github.com/waku-org/nwaku/pull/1966
* fixed deserialization of valid merkle roots - https://github.com/waku-org/nwaku/pull/1973
* confirm that the fetched credential from the keystore is registered to the membership set - https://github.com/waku-org/nwaku/pull/1980
* fixed makefile target for zerokit's `librln.a` - https://github.com/waku-org/nwaku/pull/1981
* converted zero-based indexing to 1-based indexing on vacp2p/rln-contract - https://github.com/vacp2p/rln-contract/pull/28
* downstreamed zero-based indexing to waku-org/waku-rln-contract - https://github.com/waku-org/waku-rln-contract/pull/8 -
* deployed new version of the registry contract on sepolia - `0xc04937d502E0ae671cedFC2A0BCD6692055520f3`

#### 2023/08/21 - 2023/08/28

* tree metadata should include chainId and contractAddress - https://github.com/waku-org/nwaku/pull/1932
* set flush_interval appropriately -https://github.com/waku-org/nwaku/pull/1933
* integrate new WakuRlnRegistry contract - https://github.com/waku-org/nwaku/pull/1943
* bump zerokit to v0.3.2
* https://github.com/waku-org/nwaku/pull/1951
* tree metadata should include window of roots - https://github.com/waku-org/nwaku/pull/1953
* sync tree state from contract deployed block number - https://github.com/waku-org/nwaku/pull/1955
* optimization to waku_keystore - https://github.com/waku-org/nwaku/pull/1956
* fixed a forceProgression bug in the WakuRlnRegistry contract - https://github.com/waku-org/waku-rln-contract/pull/6

#### 2023/08/14 - 2023/08/21
* rpc handler for waku rln relay - https://github.com/waku-org/nwaku/pull/1852
* fixed ganache’s change in method to manage subprocesses, fixed timeouts related to it - https://github.com/waku-org/nwaku/pull/1913
* should error out on rln-relay mount failure - https://github.com/waku-org/nwaku/pull/1904
* fixed invalid start index being used in rln-relay - https://github.com/waku-org/nwaku/pull/1915
* constrain the values that can be used as idCommitments in the rln-contract - https://github.com/vacp2p/rln-contract/pull/26
* assist with waku-simulator testing
* remove registration capabilities from nwaku, it should be done out of band - https://github.com/waku-org/nwaku/pull/1916
* add deployedBlockNumber to the rln-contract for ease of fetching events from the client - https://github.com/vacp2p/rln-contract/pull/27

#### 2023/08/07 - 2023/08/14
*  Created tracking issue to manage status of this milestone - https://github.com/waku-org/nwaku/issues/1906

#### 2023/07/31 - 2023/08/07

* [Waku RLN contract registry](https://github.com/waku-org/waku-rln-contract/pull/3)
* [Mark duplicated messages as spam](https://github.com/waku-org/nwaku/pull/1867)
* [Use `waku-org/waku-rln-contract` as a submodule in `nwaku`](https://github.com/waku-org/nwaku/pull/1884)

### Deliverables

* https://github.com/waku-org/nwaku/issues/1906
