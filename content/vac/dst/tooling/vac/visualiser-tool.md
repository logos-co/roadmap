---
title: "Visualiser Tool"
description: "Build a web app that displays a map of a project's network, showing the flow of messages between nodes."
---
## `vac:dst:tooling:vac:visualiser-tool`
---

```mermaid
%%{ 
  init: { 
    'theme': 'base', 
    'themeVariables': { 
      'primaryColor': '#BB2528', 
      'primaryTextColor': '#fff', 
      'primaryBorderColor': '#7C0000', 
      'lineColor': '#F8B229', 
      'secondaryColor': '#006100', 
      'tertiaryColor': '#fff' 
    } 
  } 
}%%
gantt
  tickInterval 1month
  dateFormat YYYY-MM-DD 
  section Status
    Visualiser Tool: 2024-05-01, 2024-11-01
```

- status: 75%
- CC: Alberto, Alberto

### Description

The visualiser tools are two tools that can be used for visualising the message flow of a Waku network. They are adaptable to other network types too (particularly Nomos, Codex).

They rely on either Grafana Loki or VictoriaLogs to store and query logs.

The live visualiser is used for viewing the network in real time.

The debug visualiser is used for viewing a deployment that has already taken place.

### Justification
To make it easy and intuitive to understand the message flow and propagation patterns and properties of a Waku network and apply that same understanding to other networks.

### Deliverables

A peer to peer network mapper that creates a visualisation something like this:

![alt text](image.png)
[![Visualiser Tool](visualiser-tool.png)](visualiser-tool.png)

The tool should be able to visualise the message flow of a Waku network, by lighting up nodes in a graph as they receive messages, flashing a different colour for each message (or message type).

The live visualiser is feature complete, needing only minor tweaks and bug fixes:
https://github.com/vacp2p/dst-live-visualiser

The debug visualiser is still under development, but the core functionality is available already.