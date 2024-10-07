---
title: Nwaku in Status Desktop
tags:
    - waku-milestone
date: 2024-09-07
---

[Milestone Nwaku in Status Desktop (Relay, *nix)](https://github.com/waku-org/pm/milestone/33)

Due Date: TBD

With this milestone, Status Desktop builds on Linux and Mac can use nwaku instead of go-waku.
Go-waku will still be used for Windows (Desktop) and Status Mobile.

### Deliverable: [Nwaku in Golang desktop](https://github.com/waku-org/pm/issues/201)

Provide a Golang library that uses the nwaku bindings (relay+store API) in a desktop environment. The bindings must be usable without RLN for the context of Status Desktop application.

### Deliverable: [Nwaku in Golang: Relay](https://github.com/waku-org/pm/issues/202)

Expose and demonstrate the usage of relay protocols/API usef on go-waku by status-go in the Golang nwaku bindings.
Build on the previous by adding the APIs used by status-go in relay mode. Proceed with dogfooding of said APIs in PoC app to confirm their behaviour in Golang Desktop environment.
This includes work to ensure that the relay reliability protocol implemented in nwaku is used and other libp2p protocols such as autonat, circuit-relay client and hole-punching.

Light client protocols are out of scope.

### Deliverable: [Nwaku in Status Desktop (Relay, *nix)](https://github.com/waku-org/pm/issues/203)

Use nwaku instead of go-waku in Status Desktop and produce a working and distributable special (no light client) build for Linux and Mac OS environments.
“Light client” mode should be disabled for this build as only relay protocols are implemented.
Windows builds are also out of scope.

This includes an abstraction layer to enable the other builds to still use go-waku:
- Desktop Windows
- Desktop “prod” (with both light client and relay modes, via go-waku)
- Mobile

CLIs created for Vac/QA should also be produced with nwaku to enable QA and DST to run tests/simulations.
