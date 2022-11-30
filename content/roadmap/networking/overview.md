---
title: "P2P Networking Overview"
tags:
- "networking"
- "overview"
---

This page summarizes the work around the P2P networking layer of the Nomos project.

## Waku
[Waku](https://waku.org) is an privacy-preserving, ephemeral, peer-to-peer (P2P) messaging suite of protocols which is developed under [Vac](https://vac.dev) and maintained/productionized by the [Logos Collective](https://logos.co). 

It is hopeful that Nomos can leverage the work of the Waku project to provide the P2P networking layer and peripheral services associated with passing messages around the network. Below is a list of the associated work to investigate the use of Waku within the Nomos Project. 

### Scalability Studies
Currently, the amount of research and analysis of the scalability of Waku is not sufficient to give enough confidence that Waku can serve as the networking layer for the Nomos project. Thusly, it is our effort to push this analysis forward by investigating the various boundaries of scale for Waku. Below is a list of endeavors in this direction which we hope serves the broader community: 
- [Status' use of Waku study w/ Kurtosis](./status-waku-kurtosis.md)



### Rust implementations
We have created and maintain a stop-gap solution to using Waku with the Rust programming language, which is wrapping the [go-waku](https://github.com/status-im/go-waku) library in Rust and publishing it as a crate. This library allows us to do tests with our [Tiny Node](roadmap/development/prototypes.md#Tiny-Node) implementation more quickly while also providing other projects in the ecosystem to leverage Waku within their Rust codebases more quickly. 

It is desired that we implement a more robust and efficient Rust library for Waku, but this is a significant amount of work. 

Links:
- [Rust bindings to go-waku repo](https://github.com/waku-org/waku-rust-bindings)