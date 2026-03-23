---
title: Fleet Stability
tags:
  - messaging-milestone
date: 2026-02-01
---

# Fleet Stability

**Estimated date of completion**: Ongoing

**Resources Required**:
- 1 Delivery engineer (intermittent)
- Infra team support

Ensure all Logos Delivery production fleets are stable, monitored, and recoverable. This covers:
- `logos.dev` — Logos testnet development fleet
- `logos.test` — Logos testnet staging fleet
- `status.prod` — Status production fleet
- `waku.sandbox` — Waku sandbox fleet

**Note on monitoring**: Status and Waku fleets (`status.prod`, `waku.sandbox`) already have monitoring infrastructure in place (Grafana, Kibana, alerts). For Logos fleets (`logos.dev`, `logos.test`), not all monitoring is available yet — in particular, Grafana dashboards are not possible because Logos Core does not yet expose metrics of modules. This is a blocker that needs to be resolved with the Logos Core team.

## Definition of Done

This milestone is considered complete when **all** of the following are true for every operated fleet:

1. **Monitoring**: Dashboards exist showing node health, connectivity, message throughput, and resource usage. For Logos fleets, this requires Logos Core to expose module metrics.
2. **Alerting**: Alerts fire for node crashes, database issues, connectivity drops, and resource exhaustion.
3. **Crash reporting**: Sentry is integrated and reporting crashes for fleet builds.
4. **Stability**: No known P0 or P1 stability issues. P0 = fleet-wide outage or data loss. P1 = recurring crashes or degraded service affecting users.

## Deliverables

### Integrate Sentry for crash reporting

**Owner**: Delivery Team

- Compile-time flag (`-d:sentry`) for public/open-source builds (no telemetry code present)
- Runtime dynamic loading for fleet builds
- Dual approach satisfies privacy narrative while enabling crash reporting for operated fleets
- Sentry project configured and receiving reports from all fleet nodes

**Done when**: All fleet nodes report crashes to Sentry. Crash reports include stack traces and node metadata.

### Fleet monitoring dashboards for Logos fleets

**Owner**: Delivery Team + Infra + Logos Core Team

- Logos Core exposes module metrics (blocker — coordinate with Logos Core team)
- Dashboards for `logos.dev` and `logos.test` showing:
  - Node uptime and restart frequency
  - Message send/receive rates and latency
  - Peer connectivity (number of peers, connection stability)
  - Resource usage (CPU, memory, disk, bandwidth)
  - Database health (size, query latency, corruption indicators)

**Done when**: Dashboards are deployed and accessible for Logos fleets. Data is current and accurate. (Status and Waku fleets already have this.)

### Fleet alerting for Logos fleets

**Owner**: Delivery Team + Infra

- Alerts configured for:
  - Node crash or unexpected restart
  - Database corruption or excessive size
  - Connectivity drops (below minimum peer threshold)
  - Memory or disk exhaustion
  - Message delivery failure rate exceeding threshold

**Done when**: Alerts fire within 5 minutes of incident. (Status and Waku fleets already have alerting.)

### Resolve known fleet stability issues

**Owner**: Delivery Team

- Address recurring crashes reported in DST testing
- Database corruption issues
- Memory leaks in long-running nodes
- Discovery issues blocking DST benchmarking

**Done when**: No known P0 or P1 stability issues across all fleets for 30 consecutive days.
