# Logos Collective Project Roadmaps

## Overview
This repository contains the aggregated technical roadmaps of projects under and associated with the Logos Collective. It is an attempt to provide easy access to what we're all actively working on, and how it's going. 

In its current form, it is an implementation of a [Quartz]() "mind-garden", which is a [Hugo]() theme that allows for easy text and graph-based searching of markdown files. This repository is built and served to https://roadmap.logos.co 

The content, today, contains the definition of work planned by various projects, broken up via:

`Project --> Milestones --> Epics --> Issues`

Each project is given as much autonomy as possible to work as they see fit, with a minimal reporting scheme that sits on top that allows for aggregation of information and project tracking. 

In a nutshell, projects give a definitions of their roadmap up-front, which includes the mapping of issues to epics, and epics to milestones. They also provide perceived risks and dependencies associated with their work. 

The projects then report a weekly "diff" associated with the work they did each week, which is ostensibly a stand-up. The Insights team can work from there to do what they need. 

## Contribution
The bulk of the content is added by the Insights team within the Logos Collective, which is a team that works to keep track of activity within the projects in order to provide analysis and insight based on that work to various stakeholders, including the projects themselves.

For now, this process is quite manual, purposely. In order to solidify the format that the content is delivered in, manual processing and iteration are required. Once this is more consistent and smooth, we plan to open the door to more contributors. Step one is transparency and consistency. 

If you see a type or broken link, PRs are always welcome :)

If there is information you'd like to see included that isn't here, create and issue :)

### Using Obsidian
Quartz is created to serve a static site off of an [Obsidian](https://obsidian.md) vault, and thus is the preferred way to manage content locally. In order for all it to function properly, a few things need to be done properly.

First and foremost, Quartz uses links references with `content` as the root directory, so when opening in Obsidian, open the `content` folder, and _not_ the repo directory. 

Then the following vault settings need to be configured

- under `Options --> Files and Links`
  - enable `Automatically update internal links`
  - `Link format` should be set to `Absolute path in vault`
  - enable `use Wikilinks`

In order to use the templates in the `Templates` folder for auto populating commmon files,

- Install and enable `Templater` in the Community Plugins
  - set the `Templates folder` to `templates`
  - enable `automatic jump to cursor`
  - enable `Trigger Templater on new file creation`
  - enable `Folder templates`
  - assign whichever templates you want to be triggered when a new file is created in a given folder. 

Refer the [Templater documentation](https://silentvoid13.github.io/Templater/) for how to create your own templates.
