---
title: "Network Privacy Stack - Stakeholder Privacy"
---
## `vac:dr:consesus:nomos:network-privacy-stack-stake-privacy`
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
    Network Privacy Stack - Stake:
```

- status: 0%
- CC: Moh

### Description

This milestone comprises component 3 of the [Nomos network pivacy stack](https://www.notion.so/Network-Privacy-Stack-2a2a86647d2a42ca9de6940c55f99851)
in the context of consesus privacy:

Upper layer protections of the network from the sender:

* Simplest solution to prevent attacks to private PoS: minimum age of transaction for inclusion
* Potential future solutions: proof of mixing + modifications to the base mixnet design. This seems like a difficult path, for long-term research if feasible.

The main goal of this work is finding in-protocol (carnot) mechanisms to solve the problem of timing attacks

Certain types of timing attacks and network observation to identify high stake participants are already being worked on at the network level.
However, this problem should be considered at the PoS/consesus layer as well.


#### more info

* [paper: On the Anonymity Guarantees of Anonymous Proof-of-Stake Protocols](https://eprint.iacr.org/2021/409.pdf)

From the abstract:

```
[...] focus on anonymizing the
messages of the blockchain protocol, but suggest that potential identity leaks from the networklayer can be removed as well by employing anonymous broadcast channels.
In this work we show that this intuition is flawed.
```

Generally, our endeavor in stake privacy research centers on preserving the confidentiality of validator stakes.
By leveraging cryptographic techniques and innovative approaches, we aim to enhance the privacy and security of staking operations within the Carnot ecosystem.

Older docs:

* Hash-based Node Id encryption Hash-based-Node-Id-encryption-7bfb11941a6840c49bfe065f535877c9?pvs=24
* Carnot PoS Discussion notion.so/Carnot-PoS-Discussion-f2ef371102f6433da81fb1b1b9213c2b?pvs=24


### Justification

This is and important step towards achieving the Nomos privacy requirements.

### Deliverables

* specification



