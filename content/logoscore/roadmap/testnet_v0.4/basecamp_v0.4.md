# Basecamp Enhancements and Maintenance: Testnet v0.4

**Track:** [Basecamp Enhancements and Maintenance Track](/logoscore/roadmap/basecamp.md)

**Estimated date of completion**: Testnet v0.4 launch

New app architecture alongside the old one, storage onboarding, default apps, generic intents, and bug fixes.
Default apps, shell hardening and generic intents start here, best effort; whatever isn't finished carries into v0.5.

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
- [ ] In-app Basecamp updates, via `repos.json` and storage CIDs
- [ ] Modules slow to unload: prompt the user to kill them after a timeout, instead of waiting
- [ ] Spike: explore running each app in its own process instead of the Basecamp process (exploration, done on the side)
- [ ] Shell host hardening: shell choice stored outside the shell, fallback instead of a crash, safe mode

### Default apps and security

Settings, App Manager and Package Manager as separate bundled apps that can't be impersonated.

- [ ] Default-app table: grants by slot, reserved names, loaded from the bundle only, hash-checked
- [ ] Package Manager UI as a safe default app
- [ ] QML sandbox allowlist for Qt modules
- [ ] Library shared by App Manager and Package Manager UI
- [ ] App Manager app: non-technical, apps only, installs through the shell
- [ ] Per-role interface for default-app views
- [ ] Settings app; developer tools moved into their own app

### Generic intents

User actions are requested and answered the same way from any app, backend or CLI app.
Built on our side now, without waiting for the new core.

- [ ] Intent contract: user actions only, result schemas, platform identity, namespaces
- [ ] Generic names for current intents, with aliases (`signing.approve` first)
- [ ] `intents_module`: Basecamp's broker and registry ported out of Basecamp
- [ ] `intents_module`: requester, provider and presenter APIs
- [ ] `intents_module`: security rules and refusal tests
- [ ] Providers as modules: deliver to a provider's backend; results pulled with a receipt
- [ ] Basecamp as presenter: claims the role, answers requests, restrictions by slot
- [ ] Click tokens and the pending-requests list in Basecamp
