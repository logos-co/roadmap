---
title: Nwaku in Status Mobile
tags:
    - waku-milestone
date: 2025-01-10
---

Github Milestone: https://github.com/waku-org/pm/milestone/39

Proceed with integration of nwaku in Status application on all platforms; including extending scope to light mode and mobile. Use resulting nwaku-based Status apps for dogfooding and documenting last steps to make nwaku default Waku client in Status apps.

## Deliverables

### [Light mode in Status app MVP]()

Implement missing functions on nwaku FFI API to enable Status Mobile and Desktop apps to run in light mode with Waku core protocols provided by nwaku. Full replacement of go-waku (go-waku API logic such as periodic store queries and store confirmations) is **not** in scope.

### [Status mobile build with nwaku MVP](https://github.com/waku-org/pm/issues/276)

Status mobile on iOS and Android can be built with nwaku; CI is set up to demonstrate and provide builds alongside current go-waku based builds.

### Roadmap to nwaku by default in Status app

Once nwaku can be used on both desktop and mobile, relay and light mode, it will be possible to extend dogfooding of nwaku-based Status applications. Proceed with dogfooding, identify remaining work to make nwaku the default Waku client and fully deprecate go-waku and agree with the Status team on conditions and date to make the switch.
