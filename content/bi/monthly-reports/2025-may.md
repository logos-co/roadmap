---
title: 2025-05 BI Monthly report
tags:
  - BI-updates
date: 2025-05-30
lastmod: 2025-06-04
draft: true
description: May Monthly update of BI Team
---

## Executive Summary

## Key Updates

### Main Focus

The main focus of the month have been:
* Building metrics for Github community engagement
* Building IFT RAG using internal documentation
* Providing Website analytics
* Extracting social media data to build give sentiment analysis of community interaction
* Deploy a Metadata Catalog.

### Visualization

* [Umami Dashboard](https://github.com/status-im/data-docs/issues/33)
* [Discord Analitycs](https://superset.bi.status.im/superset/dashboard/discord-analytics)

### Data Extraction

* Social media:
    * [Extract Reddit Data](https://github.com/status-im/data-docs/issues/38)
    * [Improve Tweets extraction](https://github.com/status-im/data-docs/issues/36)
    * Improve Discord extraction - Extract message in Public channels

### AI Solution

* Start deployment of test environment.
* [Prepare a Sentiment Analysis Pipeline for Social media post](https://github.com/status-im/data-docs/issues/40): Design and implementation of a PoC based on Twitter data.

### Infrastructure

- Experiment with [Dagster](https://dagster.io): Research and test alternative solution to Airflow.
- Deploy Qdrant for IFT LLM.
* DataHub: finish deploying and configuring DataHub. Available at https://datahub.bi.status.im

## Future Plan

### Visualization

* Keycard - [Add historical data](https://github.com/status-im/data-docs/issues/43)
* Discord - improve existing dashboard
    * [Show public activity](https://github.com/status-im/data-docs/issues/34)
    * [Show user retention](https://github.com/status-im/data-docs/issues/47)
* Podcasts - [Create analytics for Youtube and Twitter Accounts](https://github.com/status-im/data-docs/issues/48)

### Data Extraction

* Social media:
    * Improve Discord extraction
    * [Extract Luna Data](https://github.com/status-im/data-docs/issues/35)
    * [Extract Twitter Video data](https://github.com/status-im/data-docs/issues/39)
    * [Extract Data from Farcaster](https://github.com/status-im/data-docs/issues/49)
* [Podcast](https://github.com/status-im/data-docs/issues/48) Extract data from the various Youtube Channels
* Status App - [Extract Paraswap data](https://github.com/status-im/data-docs/issues/42)
* Status Network - [Improve the data extraction](https://github.com/status-im/data-docs/issues/41)
* Finance: [Extract platform where SNT is listed](https://github.com/status-im/data-docs/issues/37)
* Insight, help extracting FURBS and milestones of different project

### AI Solution

* Finish the DAG data retrieval and response generation. Deploy the pipeline on the test environment.
* [Enhance sentiment analysis](https://github.com/status-im/data-docs/issues/45) by adding translation and include more data source.

### Infrastructure

* IFT LLM - Finish building the environment Pipeline
    * Deploy Ollama
    * Orchestrate the data extraction, chunkying and processing
* Data Lake: Optimizing the prod environment


## Sources and Useful Links

* [Repository to create new issues](https://github.com/status-im/data-docs): If your team need some Visualization or access to some data, please create an issue in this repository
* [BI documentation](https://docs.bi.status,im)
* [Data Catalog](https://datahub.bi.status.im)

