# Basecamp Enhancements and Maintenance: Testnet v0.4

**Track:** [Basecamp Enhancements and Maintenance Track](/logoscore/roadmap/basecamp.md)

**Estimated date of completion**: Testnet v0.4 launch

New app architecture alongside the old one, storage onboarding, and bug fixes.

## Deliverables

- [ ] Fix all bugs raised against Basecamp this cycle
- [ ] UI backends as core modules: new path alongside the current one, one reference app ported
- [ ] Module builder: QML-only UI path, deprecation warning on the old path
- [ ] Basecamp runs apps standalone, replacing per-app standalone builds
- [ ] Onboarding: choose download source (GitHub, storage, or both)
- [ ] Show download source (GitHub / storage) while a download is running
- [ ] Package signature checks
  - Ship Logos' own keys as trusted
  - Let users add keys they trust; packages signed with a trusted key skip the check prompt
  - Check on download and on run
