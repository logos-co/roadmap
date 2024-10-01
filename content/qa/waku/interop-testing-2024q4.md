---
title: Waku Interop Testing (extended)
tags:
  - "2024q4"
  - "qa"
  - "waku"  
draft: false  
description: Extend Waku interop tests with focus on more advanced scenarios

---

`vac:qa:waku:interop-testing-2024q4`

## Description

- The interop testing framework already provides extensive coverage, running hundreds of tests across both nwaku and gowaku. 
- Initially, the focus was on functional testing, targeting protocols in isolation. 
- For this milestone, we aim to extend coverage with more complex and edge-case scenarios.
- Enhancements include identifying negative test cases, running scenarios with multiple nodes, and improving CI execution speed by leveraging more powerful runners.
- Once the execution speed meets acceptable thresholds, we will integrate this expanded suite or a subset of tests into the nwaku/go-waku CI pipelines, ensuring PR-level validation.

**Alignment with VAC Narratives:**

- The VAC QA team plays a key role in supporting internal collaboration and efficiency across projects by ensuring the quality of Waku’s interop framework. 
- Expanding coverage with comprehensive tests aligns with the goal of fostering an RFC culture and increasing community contributions. 
- By working with developers to address known issues and enhancing CI performance, VAC directly contributes to IFT's strategic objective of scaling capacity and efficiency through community-driven efforts.

---

## Task List

### **Task 1: Edge Cases**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:edge-cases`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 07.10.2024
- End Date: 21.10.2024

**Description:**  
- Expand the coverage to include negative scenarios, ensuring that all edge cases are handled appropriately.
- Focus on edge cases that might not be triggered in normal operational flows, such as protocol failures, unexpected data or unexpected node behavior.

**Deliverables:**  
- PR link with added edge-case tests  
- CI runs showing successful or failed executions with detailed reports  

---

### **Task 2: E2E Scenarios**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:e2e-scenarios`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 21.10.2024
- End Date: 04.11.2024

**Description:**  
- Design and implement end-to-end test scenarios involving at least 4-5 nodes.
- These tests will assess interoperability between nodes and validate the system's ability to handle realistic use cases.
- Incorporate the validation of node metrics at the conclusion of each test to ensure performance stability.

**Deliverables:**  
- PR with E2E test suite  
- CI runs with successful multi-node E2E test executions  

---

### **Task 3: Known Issues**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:known-issues`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 04.10.2024 
- End Date: 18.11.2024

**Description:**  
- Work closely with developers to identify known issues that require testing.
- Develop test cases for the most critical and impactful issues and solicit input from developers for additional scenarios to cover.

**Deliverables:**  
- PRs with tests covering known issues  
- CI runs validating issue resolution and bug regression tests  

---

### **Task 4: Faster Runners**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:faster-runners`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 18.11.2024
- End Date: 02.12.2024

**Description:**  
- Optimize CI execution speed by leveraging more powerful runners and improving test parallelization.
- Ensure that these changes maintain or improve the quality of the tests without compromising coverage.

**Deliverables:**  
- CI configuration updates with improved runners  
- CI runs demonstrating reduced execution time while passing all tests  

---

### **Task 5: CI Integration**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:ci-integration`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 02.12.2024
- End Date: 09.12.2024

**Description:**  
- Integrate a subset of the interop tests into the existing nwaku/go-waku CI pipelines.
- The execution time should not exceed 15 minutes, balancing speed with meaningful test coverage.
- The goal is to catch issues earlier in the PR lifecycle without adding significant overhead to CI.

**Deliverables:**  
- PR to nwaku/go-waku repos with CI test integration  
- CI runs verifying that the interop tests complete within the set time limits  

---

### **Task 6: Network Conditions**

- Fully Qualified Name: `vac:qa:waku:extend-interop-testing-2024q4:network-conditions`
- Owner: fbarbu15 or shashankshampi
- Status: not started
- Start Date: 09.12.2024
- End Date: 24.12.2024 

**Description:**  
- Develop tests to simulate unusual network conditions, such as high latency, packet loss, and low bandwidth, particularly affecting light nodes.
- The framework should be flexible enough to allow for the application of these conditions across a full test run on-demand. Additionally, ensure that a subset of these tests runs nightly to catch issues that may arise under suboptimal network conditions.

**Deliverables:**  
- PR with network condition simulation framework  
- CI configuration for on-demand full test runs with network constraints  
- Nightly CI runs for a subset of tests under network strain

---
