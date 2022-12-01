---
title: "Status' use of Waku - A Scalability Study"
tags: 
- "networking"
- "scalability"
- "waku"
---

[Status](https://status.im) is the largest consumer of the Waku protocol, leveraging it for their entire networking stack. THeir upcoming release of Status Desktop and the associated Communities product will heavily push the limits of what Waku can do. As mentioned in the [Networking Overview](roadmap/networking/overview.md) page, rigorous scalability studies have yet to be conducted of Waku (v2). 

While these studies most immediately benefit the Status product suite, it behooves the Nomos Project to assist as the lessons learned immediately inform us the limits of what the Waku protocol suite can handle, and how that fits within our [Technical Requirements](requirements/overview.md).

This work has been kicked off as a partnership with the [Kurtosis](https://kurtosis.com) distributed systems development platform. It is our hope that the experience and accumen gained during this partnership and study will serve us in the future with respect to Nomos developme, and more broadly, all projects under the Logos Collective. 

As such, here is an overview of the various resources towards this endeavor:
- [Status Network Agent Breakdown](roadmap/networking/status-network-agents.md) - A document that describes the archetypal agents that participate in the Status Network and their associated Waku consumption.
- [Wakurtosis repo](https://github.com/logos-co/wakurtosis) - A Kurtosis module to run scalability studies
- [Waku Topology Test repo](https://github.com/logos-co/Waku-topology-test) - a Python script that facilitates setting up a reasonable network topology for the purpose of injecting the network configuration into the above Kurtosis repo
- [Initial Vac forum post introducing this work](https://forum.vac.dev/t/waku-v2-scalability-studies/142)
- [Waku Github Issue detailing work progression](https://github.com/waku-org/pm/issues/2)
  - this is also a place to maintain communications of progress
- [Initial Waku V2 theoretical scalability study](https://vac.dev/waku-v1-v2-bandwidth-comparison)