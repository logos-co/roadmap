---
title: "Waku Keystore"
description: "Waku Keystore"
---
## `vac:rfc:rfc:waku:waku-keystore`
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
    Waku Keystore RFC:  2023-11-01, 2023-11-31
```

- status: 0%
- CC: Jimmy

### Description

Waku keystore offers a secure way to store RLN credentials,
which consist of the user's `identityCredential`,
the `identityIndex` (the index of their commitment in the tree),
and the `membershipContract` (the contract to which this credential is registered).
We follow EIP-2335 closely, with some changes that are more evident from the code.

* nwaku implementation of keystore - https://github.com/waku-org/nwaku/tree/master/waku/waku_keystore
* go-waku implementation of keystore - https://github.com/waku-org/go-waku/blob/master/waku/v2/protocol/rln/keystore/keystore.go
* js-waku implementation of keystore - https://github.com/waku-org/js-rln/tree/master/src/keystore
* Sample keystore - https://github.com/waku-org/js-rln/blob/891ee3474aa97e8fe5ac1b35b7ed7387f395a537/src/keystore/keystore.spec.ts#L16-L95

The RFC should describe the credential encryption format, the supported kdf's, as well as a sample keystore.

### Justification


### Deliverables

* RFC


