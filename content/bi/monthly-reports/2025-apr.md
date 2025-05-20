---
title: "2025-04 BI Monthly report"
tags:
  - "BI-updates"
date: 2025-05-20
lastmod: 2025-05-20
draft: false
description: "April Monthly update of BI Team"

---

## Executive Summary

## Key Updates

### Main Focus

The main focus of the month have been:

* Building dashboard for Status Application Analytics
* Building dashboard for Keycard
* Building RAG to improve IFT LLM

### Visualization

* [Status Application Analytics](https://github.com/status-im/data-docs/issues/17): Build Dashabord to identify user retention.
* [Github Analytics](https://superset.bi.status.im/superset/dashboard/96/) - Have an idea of the contribution.
* [Keycard Analytics](https://grafana.bi.status.im/goto/zY5bZwaHg)
* [Discord Visualization](https://github.com/status-im/data-docs/issues/32)

### Data Extraction

* IFT LLM, [documentation extraction](https://github.com/status-im/data-docs/issues/26): IFT blogs, IFT Notion and contributer website.
* [Status App - App Store data extraction](https://github.com/status-im/data-docs/issues/19)
* Extraction of Umami data.

### IFT LLM

* [Ingest extracted Data](https://github.com/status-im/data-docs/issues/30)
    * Chunking the data extracting
    * Embedding the data.

### Infrastructure

* Data Lake: Finish deploying the environment
* DataHub: Start testing and configuring the Data Catalog.
* Airbyte: Upgrade to a more [recent version](https://github.com/status-im/infra-bi/issues/167).
* Web Analytics: Deploying [Umami](https://umami.is/)
* Deploying Qdrant for a Vector Database used by the IFT LLM RAG project.

> Note, Superset wont be decommissed since it has been request by some teams.

## Futue Plan

### Visualization

* [Umami Dashboard](https://github.com/status-im/data-docs/issues/33)
* Keycard - [Add older data](https://github.com/status-im/data-docs/issues/43)
* Discord
    * (https://github.com/status-im/data-docs/issues/34)

### Data Extraction

* Social media:
    * [Extract Reddit Data](https://github.com/status-im/data-docs/issues/38)
    * [Extract Twitter Video data](https://github.com/status-im/data-docs/issues/39)
    * [Improve Tweets extraction](https://github.com/status-im/data-docs/issues/36)
    * Improve Discord extraction - Extract message in Public channels
    * [Extract Luna Data](https://github.com/status-im/data-docs/issues/35)
* Status App - [Extract Paraswap data](https://github.com/status-im/data-docs/issues/42)
* Status Network - [Improve the data extraction](https://github.com/status-im/data-docs/issues/41): use the RPC endpoint, make it run at high frequecency.
* Finance:
    * [Extract platform where SNT is listed](https://github.com/status-im/data-docs/issues/37)

### IFT LLM

* Build first version of the entire pipeline and make it available
* [Perpare a Sentiment Analysis Pipeline](https://github.com/status-im/data-docs/issues/40) for Social media data.

### Infrastructure

* IFT LLM:
    * [Dagster](https://dagster.io): Research and test alternative solution to Airflow
* Data Lake: Optimizing the prod environment
* DataHub: finish deploying and configuring DataHub

## Sources and Useful Links

* [Repository to create new issues](https://github.com/status-im/data-docs): If your team need some Visualization or access to some data, please create an issue in this repo.
* [BI documentation](https://docs.bi.status,im)

