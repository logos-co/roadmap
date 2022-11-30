---
title: "Status Network Agents Breakdown"
tags:
- "status"
- "waku"
- "scalability"
---

This page creates a model to describe the impact of the various clients within the Status ecosystem by describing their individual contribution to the messages within the Waku network they leverage. 

This model will serve to create a realistic network topology while also informing the appropriate _dimensions of scale_ that are relevant to explore in the [Status Waku scalability study](roadmap/networking/status-waku-kurtosis.md)

Status has three main clients that users interface with (in increasing "network weight" ordering):
- Status Web
- Status Mobile
- Status Desktop

Each of these clients has differing (on average) resources available to them, and thusly, provides and consumes different Waku protocols and services within the Status network. Here we will detail their associated messaging impact to the network using the following model:

```
Agent
  - feature
    - protocol
      - contentTopic, messageType, payloadSize, frequency
```

By describing all `Agents` and their associated feature list, we should be able do the following:

- Estimate how much impact per unit time an individual `Agent` impacts the Status network
- Create a realistic network topology and usage within a simulation framework (_e.g._ Kurtosis)
- Facilitate a Status Specification of `Agents`
- Set an example for future agent based modeling and simulation work for the Waku protocol suite 

## Status Web

## Status Mobile

## Status Desktop
Status Desktop serves as the backbone for the Status Network, as the software runs on hardware that is has more available resources, typically has more stable network and robust connections, and generally has a drastically lower churn (or none at all). This results in it running the most Waku protocols for longer periods of time, resulting int he heaviest usage of the Waku network w.r.t. messaging. 

Here is the model breakdown of its usage:
```
Status Desktop
  - Prekey bundle broadcast
  - Account sync
  - Historical message melivery
    - Waku-Relay (answering message queries)
  - Message propogation
    - Waku-Relay
    - Waku-Lightpush (receiving)
```