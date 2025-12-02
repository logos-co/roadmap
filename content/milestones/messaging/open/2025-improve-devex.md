---
title: Improve DevEx - API, TWN, Metrics, Docs
tags:
    - waku-milestone
date: 2025-07-03
---
# [Improve DevEx: API, TWN, Metrics, Docs](https://github.com/logos-messaging/pm/milestone/46)

**Estimated date of completion**: 31 Aug

**Resources Required for 2025H2**:
- 2 js-waku engineers
- 1.5 nwaku eng
- 1 core research for 1 month
- 1 app chat eng for 1 month


Proceed with a number of improvements to the developer experience on Waku, for both internal and external purposes.
This includes:

- Improving The Waku Network reliability for Logos apps and other web apps
- Simplifying the Waku API
- Measuring Waku usage across all integrations
- Review and setting strategy for Waku documentation
- Testing quic as new transport

## FURPS

See deliverables.

## Risks

| Risk                                                                            | (Accept, Own, Mitigation)                                                                      |
|---------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Define collaboration with BI for metrics                                        | Communicate                                                                                    |
| Browser reliability is a multi-prong problem (js-waku/libp2p, nwaku/nim-libp2p) | Strong collaboration                                                                           |
| No "documentation" expert or dedicated resources                                | outsource help from doc experts in IFT, focus on setting guidelines for all Waku CCs to follow |


## Deliverables

### ~~[Global Network Metrics](https://github.com/waku-org/pm/issues/295)~~

**Owner**: ~~App/Chat Dev~~ BI

**Feature**: [Network Metrics Tracker](/FURPS/application/network_metrics_tracker.md)

**FURPS**:
- all

### [Scalable Data Sync in Browser](https://github.com/logos-messaging/pm/issues/280)

**Owner**: js-waku

**Feature**: [SDS](/FURPS/application/sds.md)

**FURPS**:
- all

For S2. For Web apps as a developer library.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Implement Light Push Error codes in The Browser](https://github.com/logos-messaging/pm/issues/339)

**Owner**: js-waku

**Feature**: [Light Push](/FURPS/core/light_push.md)

**FURPS**:
- F4. Supports comprehensive error codes for various failure scenarios.
- U4. Provides descriptive error messages in responses.
- R2. Status codes indicate the best recovery method (retry, discard service node or irrecoverable failure).

For S2. Browser as client
Spec delivery not included.

### [Introduce Waku API in the Browser](https://github.com/logos-messaging/pm/issues/283)

**Owner**: js-waku

**Feature**: [Waku SDK](/FURPS/core/waku_sdk.md)

**FURPS**: 
- F1. Setup, start and stop a Waku node.
- F2. Support edge node operation mode.
- F4. Does automatic peer discovery based on the node platform and operation mode.
- F5. Returns health and connectivity information using proven heuristics.
- F6. Previously discovered peers are persisted across restarted, and potentially used for future connections.
- U1. When setting up a Waku node, no need to specify what protocols to mount, only an operational mode (edge or relay).
- U2. Disconnection detection and recovery, and other peer management matters are automatically handled.
- U3. Developers do not need to specify the protocols used to send and receive messages; it is deduced from the mode of operation.
- U4. Developers pass and receive data to the API in types native to the wrapping language.
- U5. By default, auto-sharding is applied, meaning developers do not need to be concerned by sharding; pubsub topics are never exposed.
- U6. Developers only need to handle errors in cases of irretrievable failure requiring end-user action. Internal errors are not bubbled up if they can be recovered internally.
- R1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

For S3. Browser; distribution via npmjs.com.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Introduce Waku API in nwaku](https://github.com/logos-messaging/pm/issues/305)

**Owner**: nwaku

**Feature**: [Waku SDK](/FURPS/core/waku_sdk.md)

**FURPS**:
- F1. Setup, start and stop a Waku node.
- F3. Support relay node operation mode.
- F4. Does automatic peer discovery based on the node platform and operation mode.
- F5. Returns health and connectivity information using proven heuristics.
- F6. Previously discovered peers are persisted across restarted, and potentially used for future connections.
- U1. When setting up a Waku node, no need to specify what protocols to mount, only an operational mode (edge or relay).
- U2. Disconnection detection and recovery, and other peer management matters are automatically handled.
- U3. Developers do not need to specify the protocols used to send and receive messages; it is deduced from the mode of operation.
- U4. Developers pass and receive data to the API in types native to the wrapping language.
- U5. By default, auto-sharding is applied, meaning developers do not need to be concerned by sharding; pubsub topics are never exposed.
- U6. Developers only need to handle errors in cases of irretrievable failure requiring end-user action. Internal errors are not bubbled up if they can be recovered internally.
- R1. Sends a message using peer-to-peer reliability (service node redundancy, optional store confirmation)
- R2. Receives messages using peer-to-peer reliability (service node redundancy, periodic store query, periodic filter ping)

For:
- S1. Nim library; import via git path.
- S2. Golang library; available on pkg.go.dev.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### ~~[Review Documentation and Define Guidelines](https://github.com/logos-messaging/pm/issues/323)~~

**Owner**: ~~core research~~ EcoDev-Docs

(No FURPS)

- [ ] Review the current developer documentation
  - [ ] And contributor doc
- [ ] Define a guideline for Waku teams to
  - [ ] Minimum requirements to consider "doc done" for any future deliverable
  - [ ] How to contribute to documentation: location, format
- [ ] Setup an initial structure to enable the guideline

### [Trial QUIC](https://github.com/waku-org/pm/issues/324)

**Owner**: nwaku

**Feature**: [nwaku](/FURPS/application/nwaku.md)

**FURPS**:
- S4. QUIC transport is supported for peer-to-peer message routing connections.

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)

### [Optimise Browser Bootstrapping](https://github.com/logos-messaging/pm/issues/290)

**Owner**: js-waku

**Feature**: [js-waku](/FURPS/application/js-waku.md)

**FURPS**:

- R1. From an operating state, a node can resume transmitting messages within 1 second after disconnection; in a network with 1 bootstrap node, 100 service nodes and 500 browser nodes (**Vac-DST**)
- P1. From a cold start, a node can start transmitting messages within 5 seconds; in a network with 1 bootstrap node, 100 service nodes and 500 browser nodes (**Vac-DST**)

**Checklist**:
- [ ] Specs: link to specs and/or API definition
- [ ] Code: link to GitHub issues/PRs/Epic
- [ ] Dogfood: link to dogfooding session/artefact
- [ ] Docs: links to README.md or docs.waku.org (TBD)