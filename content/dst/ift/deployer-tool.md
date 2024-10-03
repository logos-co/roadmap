---
title: Deployer Tool
tags:
  - "2024q4"
  - "dst"
  - "ift"
draft: false
description: "Develop, test, demonstrate and graduate
a tool or method for reliably deploying,
measuring and scaling arbitrary sets of software
that needs testing and validation"
---

`vac:dst:ift:deployer-tool`

## Description

We will develop, test, demonstrate and graduate (productionise)
a tool or method for reliably deploying, measuring and scaling
arbitrary sets of software that needs testing and validation
- such as Waku, Codex, Nomos, etc.

The tool will be used to improve the developer experience of
deploying these systems at various scales,
including automation, metrics, and the ability to change
a running simulation as needed.

It should support arbitrary Helm and Kustomize charts,
allowing us to use well defined configurations
in the form of Kubernetes resources,
managed by modular bundles that can be swapped in and out as needed.

This will allow us to do all of our other work more easily,
allowing us to focus on providing value to the IFT ecosystem.
Through this, both the narratives of the Conduit of Expertise
is supported - through increasing our efficiency,
capabilities and the reliability of repeating our experiments
and research, allowing us to provide better insights and data
to the teams we work with to allow them to make better decisions.

## Task List

### ArgoCD Or Similar

* fully qualified name: `vac:dst:ift:argocd-or-similar`
* owner: Wings
* status: 80%
* start-date: <2024/06/01>
* end-date: <2024/12/31>

#### Description

Get ArgoCD or a similar tool up and running.

Use it to demonstrate deploying an nwaku simulation from a Git repo
with a Helm chart or plain manifests in it.

#### Deliverables

* The demonstrated ability to run an nwaku simulation.


### Working Matrices

* fully qualified name: <vac:dst:ift:working-matrices>
* owner: Wings
* status: 0%
* start-date: 2024/06/01
* end-date: 2024/12/31

Ensure that deployment matrices work once `ArgoCD Or Similar` is completed.

Test some basic deployments and record findings.

#### Deliverables

* A report on the findings of the tests and the current state of the deployment matrices.
* A deployment matrix tool or set of instructions/documentation.
* Deployments tested and working with a 3x3 matrix of different configurations.
