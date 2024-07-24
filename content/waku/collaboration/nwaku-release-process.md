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

Make sure that Status client works properly when connected to a fleet running on the release candidate version. For it, please follow its corresponding [guide](waku/collaboration/test-nwaku-on-status.md).

## Release Calendar

| Name   | Date   | Release Owner   | nwaku-version   | Comment   |
|------------|------------|------------|------------|------------|
| wakuv2.test deployment  | 2024-01-15 | SP      | 0.24.0 |  |
| wakuv2.prod deployment  | 2024-01-22 | SP      | 0.24.x |  |
| wakuv2.test deployment  | 2024-02-12 | Zoltan  | 0.25.0 |  |
| wakuv2.prod deployment  | 2024-02-19 | Zoltan  | 0.25.x |  |
| waku.test deployment    | 2024-03-11 | Zoltan  | 0.26.0 |  |
| waku.sandbox deployment | 2024-03-18 | Zoltan  | 0.26.x |  |
| waku.test deployment    | 2024-04-15 | Gabriel | 0.27.0 |  |
| waku.sandbox deployment | 2024-04-22 | Gabriel | 0.27.x |  |
| waku.test deployment    | 2024-05-13 | Gabriel | 0.28.0 |  |
| waku.sandbox deployment | 2024-05-20 | Gabriel | 0.28.x |  |
| waku.test deployment    | 2024-06-10 | Ivan    | 0.29.0 |  |
| waku.sandbox deployment | 2024-06-17 | Ivan    | 0.29.x |  |
| waku.test deployment    | 2024-06-24 | Ivan    | 0.30.0 | This is meant to add mostly RLN_v2 Not a big gap. @Alvaro R. suggested that 🙂 |
| waku.sandbox deployment | 2024-06-26 | Ivan    | 0.30.x |  |
| waku.test deployment    | 2024-07-22 | Ivan    | 0.31.0 | Notice that I’m doing another because the previous release should have been simpler than a regular one |
| waku.sandbox deployment | 2024-07-24 | Ivan    | 0.31.x |  |
| waku.test deployment    | 2024-08-26 | Zoltan  | 0.32.0 |  |
| waku.sandbox deployment | 2024-08-28 | Zoltan  | 0.32.x |  |
| waku.test deployment    | 2024-09-23 | Zoltan  | 0.33.0 |  |
| waku.sandbox deployment | 2024-09-25 | Zoltan  | 0.33.x |  |
| waku.test deployment    | 2024-10-28 | Gabriel | 0.34.0 |  |
| waku.sandbox deployment | 2024-10-30 | Gabriel | 0.34.x |  |
