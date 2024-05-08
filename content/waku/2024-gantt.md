# Waku Roadmap 2024 Gantt Chart

Status short term work only:

- reliability for 1:1 chat and communities
- up to 100 communities

Colour legend:

- **Red**: engineering work to deliver the feature.
- Other: test and telemetry work to ensure quality

golang engineers: working on status-go/go-waku
nim engineers: working on nwaku, may be a CC from research team too.

```mermaid
gantt
    dateFormat YYYY-MM-DD
    axisFormat %d-%b
    
%% Milestones overview with deliverables
    section Store Service Upgrade
        Store v3-beta (msg hash): crit, milestone, after storev3-br, 0
        Store v3 (sync): crit, milestone, after storev3-r storev3-g storev3-n, 0
        DoS protection for req-res protocols: crit, milestone, after dosreqresn dosreqresj dosreqresg, 0
        PostgreSQL maintenance: crit, milestone, after pgsql, 0
        (metric) Count store messages: milestone, after count-store-msg, 0
    section Direct Message Reliability
        (testing) direct messages: milestone, after test-direct-msg, 0
        Review connection management: crit, milestone, after review-conn-mgmt-1 review-conn-mgmt-2, 0
        (telemetry) Fleet logging: milestone, after telem-fleet-logging, 0
        (telemetry) direct message reliability: milestone, after telem-d-msg-rel, 0
        Reliability Protocol for Relay: crit, milestone, after rel-relay-g rel-relay-n, 0
        Reliability Protocol for Resource-Restricted Clients: crit, milestone, after rel-reqres-g rel-reqres-j, 0
        Review MVDS usage and fail path: crit, milestone, after mvds, 0
    section Static Sharding - dedicated shards
        (telemetry) Measure Bandwidth: milestone, after telem-bandwidth, 0
        Sharding peer mgmt and discovery hardening: crit, milestone, after sh-peer-mgmt-j sh-peer-mgmt-n sh-peer-mgmt-g, 0
        (testing) Custom shard impl of Communities: milestone, after test-custom-shard, 0

%% Tasks
    section golang eng 1
        %% Estimation TBC
        Review connection management: crit, review-conn-mgmt-1, 2024-05-13, 8w
        %% Estimate TBC
        Review MVDS usage and fail path: crit, mvds, after review-conn-mgmt-1, 6w
        %% Estimate/start TBC
        (testing) direct messages: test-direct-msg, after mvds, 4w
        %% Estimate TBC
        (testing) Custom shard impl of Communities: test-custom-shard, after test-direct-msg, 4w 
    section golang eng 2
        Reliability Protocol for Relay (status-go): crit, rel-relay-g, 2024-05-13, 12w
    section golang eng 3
        Store v3 (go-waku client only): crit, storev3-g, 2024-02-26, 2024-05-24
        %% Estimate TBC - assuming parallel work possible
        Review connection management: crit, review-conn-mgmt-2, after storev3-g, 8w
        %% TBC Estimate
        Sharding peer mgmt and discovery hardening (go-waku): crit, sh-peer-mgmt-g, after review-conn-mgmt-2, 8w
    section golang eng 4
        %% Review if actually needed
        Store v3 (sync): crit, 2024-02-08, 2024-04-26
        %% Estimate TBC assuming no RFC here
        Reliability Protocol for Resource-Restricted Clients (status-go): crit, rel-reqres-g, 2024-05-13, 10w
        (metric) Count store messages: count-store-msg, after rel-reqres-g, 2w
    section golang eng 5
        %% Estimate TBD
        DoS protection for req-res protocols (go-waku client only): crit, dosreqresg, 2024-05-20, 4w
        %% TBC estimate and start
        (telemetry) direct message reliability: telem-d-msg-rel, 2024-06-17, 6w
        %% TBC estimate and start
        (telemetry) Measure Bandwidth: telem-bandwidth, after telem-d-msg-rel, 8w
    section test eng 1
        %% TODO: start small scale simulations of DST such store perf    
    section nim eng 1
        %% TBC estimation done?
        Store v3-beta (msg hash): crit, storev3-br, 2024-01-01, 12w
        %% TBC estimation
        Store v3 (sync): crit, storev3-r, after storev3-br, 20w
    section nim eng 2
        PostgreSQL Maintenance: crit, pgsql, 2024-01-01, 2024-05-24
        Reliability Protocol for Relay (nwaku): crit, rel-relay-n, 2024-05-01, 12w
    section nim eng 3
        %% TBC estimate/end
        DoS Protection for Req-Res Protocols: crit, dosreqresn, 2024-01-01, 90d
        %% TBC estimate, this is assuming PoC is done, ie,  how much hardening would be needed?
        Store v3-beta + v3 (nwaku hardening): crit, storev3-n, after storev3-br storev3-r dosreqresn, 3w
        %% TBC estimate/end/start
        (telemetry) Fleet logging: telem-fleet-logging, after storev3-n, 4w
    section nim eng 4
        %% TBC estimate/end
        Sharding peer mgmt and discovery hardening (nwaku): crit, sh-peer-mgmt-n, 2024-05-13, 12w
    section js eng 1
        Reliability for Req-Res Protocols: crit, rel-reqres-j, 2024-05-01, 12w
    section js eng 2
        %% TBC scope
        Sharding peer mgmt and discovery hardening: crit, sh-peer-mgmt-j, 2024-06-01, 4w
```
