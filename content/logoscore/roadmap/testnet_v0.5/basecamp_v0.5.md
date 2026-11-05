# Basecamp Enhancements and Maintenance: Testnet v0.5

**Track:** [Basecamp Enhancements and Maintenance Track](/logoscore/roadmap/basecamp.md)

**Estimated date of completion**: Testnet v0.5 launch

Remove the deprecated paths, plus notifications, the status bar, theming and Basecampium, the new default shell.

## Risks

| Risk                   | (Accept, Own, Mitigation)                                                                                        |
|------------------------|------------------------------------------------------------------------------------------------------------------|
| December holidays | |
| System notifications may not fit in v0.5 | Accept: lowest priority this cycle; moves to the next milestone if it doesn't land |
| Desktop layout direction not decided (free windows, or tiles + tabs + pull-out windows) | Own: decide with Alisher early in the cycle; the window manager is built only if free windows are chosen |

## Deliverables

- [ ] Fix all bugs raised against Basecamp this cycle
- [ ] Remove deprecated app types, so only one UI app type remains
  - QML-only apps
  - Legacy `ui` (C++ widget) apps
  - Today's `ui_qml` apps with a built-in C++ backend, replaced by a QML view + core-module backend
- [ ] App and system notifications (at risk for v0.5)
  - In-app notifications: a toast and a list, posted by apps and by Basecamp
  - Basecamp's own notices, starting with "app stopped unexpectedly" with Reopen
  - Desktop notifications while Basecamp is in the background (macOS, Windows, Linux)
  - Settings → Notifications: a switch per app
- [ ] Bottom status bar: running nodes, indicators, rescue indicator
- [ ] Settings page leftovers
- [ ] Open links in the external browser
- [ ] Stretch: translations groundwork; workspaces / docking design
- [ ] Theme choice in the Settings app: built-in themes, an Appearance picker, upload through a shell-drawn file picker
- [ ] Basecamp theme-ready: the last hard-coded colours replaced, shell surfaces as named theme slots; themes switch live in every app

### Basecampium, the new default shell

- [ ] Opt-in desktop shell: tabs, one bar, Ctrl+K search, its own theme slots
- [ ] Versioned shell API: the host decides, the shell draws
- [ ] Split view, and dragging a tab out into its own window and back
- [ ] Phone and tablet layouts; default apps made mobile-ready
- [ ] Basecampium becomes the default; users' settings migrated; the sidebar shell kept for one release

### Activity

- [ ] Activity model: what apps publish, where it's stored, whether content may be private, how pending requests sit alongside it
- [ ] Home app: the New tab page leaves the shell and shows activity and pending requests
- [ ] Search app: ranks apps and shared items

### Desktop layout

- [ ] Decide the direction: free windows inside Basecamp, or tiles + tabs + pull-out windows
- [ ] If free windows: Basecamp window manager v1, with platform and accessibility checks on macOS, Windows and Linux
