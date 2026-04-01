---
title: Package Manager — Foundations
tags:
  - logoscore-milestone
date: 2026-03-31
github-milestone: 'https://github.com/logos-co/logos-workspace/issues/45'
---

# Package Manager — Foundations

https://github.com/logos-co/logos-workspace/issues/45

**Estimated date of completion**: June 2026 (Testnet v0.2)

**Resources Required for 2026H1**:

- 3 Engineers

Progress the package management story toward a future decentralized package manager. This milestone focuses on two areas: extracting and hardening the library layer so it can evolve independently, and shipping user-facing improvements to package lifecycle operations.

The library extraction (splitting the library, moving binaries, abstracting the provider) is largely complete. Remaining work focuses on package integrity via signatures, and on the user-facing side — upgrade/uninstall support, SEMVER, and UI improvements.

Full decentralized distribution (DHT/Codex) is out of scope and tracked for Testnet v0.4.

## FURPS

- [Package Manager Module](/logoscore/furps/package-manager-module.md)

## Deliverables

### Extract Library; Prepare for Decentralized Package Manager

**Owner**: Logoscore Team

**Feature**: [Package Manager Module](/logoscore/furps/package-manager-module.md)

Carve out library boundaries from existing code so the package manager can evolve toward decentralized distribution without blocking current milestones.

**Tasks**:

- ~~[Split package manager library](https://github.com/logos-co/logos-package-manager/issues/7)~~ (done)
- ~~[Move library and command-line binaries to logos-package-manager](https://github.com/logos-co/logos-package-manager/issues/2)~~ (done)
- [Ensure package manager provider is abstracted](https://github.com/logos-co/logos-package-manager-module/issues/3) — clean separation so the package source (centralized registry, Codex, etc.) can be swapped without changing consumer code
- [Support signatures to verify package integrity](https://github.com/logos-co/logos-package-manager-module/issues/5) — cryptographic verification of packages to prevent tampering, required foundation for trustless distribution

### Various Improvements and Updates

**Owner**: Logoscore Team

**Feature**: [Package Manager Module](/logoscore/furps/package-manager-module.md)

User-facing improvements to package lifecycle operations, dependency resolution, and the package manager UI.

**Tasks**:

- [Support upgrading packages](https://github.com/logos-co/logos-package-manager/issues/6) — allow users to upgrade installed packages to newer versions
- [Support uninstalling packages](https://github.com/logos-co/logos-package-manager/issues/5) — clean removal of installed packages and their dependencies
- [Support SEMVER for packages and modules](https://github.com/logos-co/logos-package-manager-module/issues/7) — enforce semantic versioning for dependency resolution and compatibility checking
- [Allow user to choose release for modules in UI](https://github.com/logos-co/logos-package-manager-module/issues/33) — expose version selection in the package manager interface
- ~~[Async fetching of module list in UI](https://github.com/logos-co/logos-package-manager-module/issues/34)~~ (done)
- [Package Manager UI updates](https://github.com/logos-co/logos-package-manager-ui/issues/23) — general UI improvements based on dogfooding feedback
- ~~[Differentiate portable vs non-portable LGX packages](https://github.com/logos-co/logos-package/issues/16)~~ (done)
