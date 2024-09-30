# Vac Roadmaps and Reports

## Overview
This repository contains the aggregated technical roadmaps of Vac R&D Service Units.
It is an attempt to provide easy access to what we're all actively working on, and how it's going. 

In its current form, it is an implementation of a [Quartz]() "mind-garden".
This repository is built and served to https://roadmap.vac.co

## Contribution

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
