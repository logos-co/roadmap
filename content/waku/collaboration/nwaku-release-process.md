---
title: nwaku Release Process
tags:
    - Waku
    - collaboration
    - nwaku
date: 2024-07-22
lastmod: 2024-07-22
---

## Testing week

On each release, we establish a testing period of one week, when we lock the `waku.test` fleet so that it only runs the target version. During that period, we need to continuously stress that fleet from the sandbox machine, for example.

It is important to make sure the `waku-simulator` works as expected and the nodes can establish connections among themselves.

During that week, the release owner needs to check the *Kibana* logs from the previous month (since the last release was deployed) looking for possible crashes or errors in `waku.test` & `waku.sandbox`. These are the most relevant logs to check:

- `(fleet: "waku.test" OR fleet: "waku.sandbox") AND message: "SIGSEGV"`

Make sure that Status client works properly when connected to a fleet running on the release candidate version. For it, please follow its corresponding [guide](content/waku/collaboration/test-nwaku-on-status.md).