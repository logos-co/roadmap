# Weekly Summary Template Guide

This directory contains weekly summary reports for the Logos Collective. Each week's summary is generated from individual team update files using the `TEMPLATE.html` file.

## Quick Start

1. Copy `TEMPLATE.html` to a new file named `YYYY-MM-DD.html` (use the date of the week's end)
2. Replace all placeholder tags `[LIKE_THIS]` with actual content
3. Add team content sections based on their weekly update files
4. Update stats, highlights, and tabs accordingly

## Template Structure

### Header Section
```html
<title>Logos Collective Weekly Summary - Week [WEEK_NUMBER], [YEAR]</title>
<p class="date">Week [WEEK_NUMBER], [YEAR] ([FULL_DATE])</p>
```

**Example:**
```html
<title>Logos Collective Weekly Summary - Week 5, 2026</title>
<p class="date">Week 5, 2026 (February 2, 2026)</p>
```

### Stats Bar

Update the four statistics:
- `[NUM_TEAMS]` - Number of teams reporting this week
- `[NUM_PRS]` - Approximate number of PRs/updates
- `[NUM_DELIVERABLES]` - Number of deliverables closed/completed
- `[NUM_NEW_REPOS]` - Number of new repositories created

### Highlights Section

Add 4-6 key highlights from the week. Each highlight card needs:
- Team class: `storage`, `messaging`, `logoscore`, `blockchain`, or `anoncomms`
- Team name
- Brief description (1-2 sentences)

**Example:**
```html
<div class="highlight-card messaging">
    <div class="team">Messaging</div>
    <p>Completed first Send API iteration for Logos Messaging Nim.</p>
</div>
```

### Tabs Section

Add tabs for each reporting team. The first tab must have `active` class:

```html
<button class="tab messaging active" data-team="messaging">Messaging</button>
<button class="tab logoscore" data-team="logoscore">Logos Core</button>
<button class="tab anoncomms" data-team="anoncomms">AnonComms</button>
```

**Important:** Update the keyboard navigation range in the JavaScript if you change the number of tabs:
```javascript
if (e.key >= '1' && e.key <= '3') {  // Change '3' to match number of tabs
```

## Team Content Formats

### Format 1: Milestone-Based (AnonComms, Blockchain, Storage)

Use for teams that organize work by milestones and deliverables:

```html
<div class="team-content active" id="anoncomms">
    <div class="milestone">
        <div class="milestone-header" onclick="toggleMilestone(this)">
            <h3><a href="https://github.com/.../milestone/1">Milestone Title</a></h3>
            <span class="milestone-toggle">^</span>
        </div>
        <div class="milestone-body">
            <div class="milestone-content">
                <div class="deliverable">
                    <h4><a href="https://github.com/.../issues/1">Deliverable Title</a></h4>
                    <span class="section-label achieved">Achieved</span>
                    <ul class="item-list">
                        <li>Achievement description with <a href="url">optional link</a></li>
                    </ul>
                    <span class="section-label next">Next</span>
                    <ul class="item-list">
                        <li>Next step description</li>
                    </ul>
                    <span class="section-label blockers">Blockers</span>
                    <ul class="item-list">
                        <li>Blocker description</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Tips:**
- Add `expanded` class to milestone for important/active milestones: `<div class="milestone expanded">`
- Section labels are optional - only include if that section has content
- Available section labels: `achieved`, `next`, `blockers`

### Format 2: Repository-Based (Logos Core)

Use for teams with many repositories:

```html
<div class="team-content" id="logoscore">
    <div class="repo-list">
        <div class="repo-card">
            <h4><a href="https://github.com/logos-co/repo-name">repo-name</a></h4>
            <p>Brief description of updates this week</p>
            <div class="pr-list">
                <a href="https://github.com/logos-co/repo-name/pull/1">#1</a>
                <a href="https://github.com/logos-co/repo-name/pull/2">#2</a>
            </div>
        </div>
    </div>
</div>
```

**Tips:**
- Mark new repositories: `<h4><a href="...">repo-name (NEW)</a></h4>`
- PR list is optional if no specific PRs to highlight
- Description should be concise (1 sentence)

### Format 3: Mixed (Messaging)

Combines milestones with simpler structure:

```html
<div class="team-content" id="messaging">
    <div class="milestone expanded">
        <div class="milestone-header" onclick="toggleMilestone(this)">
            <h3>Create Chat SDK MVP</h3>
            <span class="milestone-toggle">^</span>
        </div>
        <div class="milestone-body">
            <div class="milestone-content">
                <div class="deliverable">
                    <h4><a href="url">Chat SDK Developer Preview</a></h4>
                    <span class="section-label achieved">Achieved</span>
                    <ul class="item-list">
                        <li>Feature description - <a href="pr-url">#24</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Source Files

Weekly update files are located in:
- `/content/messaging/updates/YYYY-MM-DD.md`
- `/content/logoscore/updates/YYYY-MM-DD.md`
- `/content/anoncomms/updates/YYYY-MM-DD.md`
- `/content/blockchain/updates/YYYY-MM-DD.md`
- `/content/storage/updates/YYYY-MM-DD.md`

## Common Patterns

### Marking Closed Deliverables
```html
<h4><a href="url">Deliverable Title (CLOSED)</a></h4>
<span class="section-label achieved">Achieved</span>
<ul class="item-list">
    <li><strong>Closed deliverable</strong> with publication of <a href="url">Document Name</a></li>
</ul>
```

### Multiple Deliverables in One Milestone
```html
<div class="milestone-content">
    <div class="deliverable">
        <h4><a href="url1">First Deliverable</a></h4>
        <!-- content -->
    </div>
    <div class="deliverable">
        <h4><a href="url2">Second Deliverable</a></h4>
        <!-- content -->
    </div>
</div>
```

### Work in Progress (WIP)
```html
<span class="section-label achieved">Achieved</span>
<ul class="item-list">
    <li>WIP: Brief description of ongoing work</li>
</ul>
```

## Checklist

Before publishing your weekly summary:

- [ ] File named correctly: `YYYY-MM-DD.html`
- [ ] Title and date updated in `<head>` and `<header>`
- [ ] Stats bar numbers accurate
- [ ] 4-6 highlights added with correct team classes
- [ ] Tabs match reporting teams
- [ ] First tab has `active` class
- [ ] First team-content has `active` class and `id` matches first tab's `data-team`
- [ ] All `[PLACEHOLDER]` tags replaced
- [ ] Links tested (no broken URLs)
- [ ] Keyboard navigation range updated if needed
- [ ] Important milestones marked with `expanded` class
- [ ] New repositories marked with "(NEW)"
- [ ] Section labels only included when they have content

## Troubleshooting

### Tabs not working after page load
The template includes fixes for static site generators and client-side routing. The initialization function runs on:
- `DOMContentLoaded` (initial page load)
- Immediate execution if DOM is ready
- `pageshow` event (browser navigation)

If tabs still don't work, check browser console for JavaScript errors.

### Search not finding items
Make sure the search input has `id="search"` and items to search have appropriate classes (`.milestone`, `.repo-card`, `.highlight-card`).

### Milestone won't expand/collapse
Verify the `onclick="toggleMilestone(this)"` attribute is on the `.milestone-header` element.

## Styling Notes

- Color scheme is GitHub dark mode inspired
- Team colors:
  - Storage: Green (`#3fb950`)
  - Messaging: Blue (`#58a6ff`)
  - Logos Core: Purple (`#a371f7`)
  - Blockchain: Orange (`#f78166`)
  - AnonComms: Light Purple (`#d2a8ff`)
- Mobile-responsive design included
- Keyboard shortcuts: Press 1-5 to switch tabs

## Example Files

Reference existing weekly summaries for examples:
- `2026-01-26.html` - Example with 5 teams
- `2026-02-02.html` - Example with 3 teams, includes messaging

## Questions?

For questions about the template or weekly summary process, contact the roadmap maintainers.
