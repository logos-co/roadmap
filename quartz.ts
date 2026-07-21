import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import GithubMilestone from "./quartz/components/GithubMilestone"
import { QuartzPluginData } from "./quartz/plugins/vfile"
import { PageTypes } from "./quartz/plugins"
import { FolderPage, TagPage } from "./.quartz/plugins"

function extractIsoDate(value?: string): Date | undefined {
  const match = value?.match(/\d{4}-\d{2}-\d{2}/)
  if (!match) return undefined

  const date = new Date(match[0])
  return Number.isNaN(date.getTime()) ? undefined : date
}

function comparableDate(file: QuartzPluginData): Date | undefined {
  return (
    file.dates?.created ??
    file.dates?.published ??
    extractIsoDate(file.frontmatter?.title) ??
    extractIsoDate(file.slug)
  )
}

function roadmapSort(first: QuartzPluginData, second: QuartzPluginData): number {
  const firstDate = comparableDate(first)
  const secondDate = comparableDate(second)

  if (firstDate && secondDate) return secondDate.getTime() - firstDate.getTime()
  if (firstDate) return -1
  if (secondDate) return 1

  const firstTitle = first.frontmatter?.title ?? ""
  const secondTitle = second.frontmatter?.title ?? ""
  return firstTitle.localeCompare(secondTitle, undefined, { numeric: true, sensitivity: "base" })
}

const config = await loadQuartzConfig()

// Preserve the roadmap's date-aware ordering for generated folder and tag listings.
config.plugins.pageTypes = (config.plugins.pageTypes ?? []).filter(
  (plugin) => plugin.name !== "FolderPage" && plugin.name !== "TagPage",
)
config.plugins.pageTypes.push(FolderPage({ sort: roadmapSort }), TagPage({ sort: roadmapSort }))

const layout = await loadQuartzLayout()
const contentLayout = layout.byPageType.content ?? {}
const contentBeforeBody = contentLayout.beforeBody ?? layout.defaults.beforeBody ?? []
layout.byPageType.content = {
  ...contentLayout,
  beforeBody: [...contentBeforeBody, GithubMilestone()],
}

// Quartz 4 placed the title before breadcrumbs on generated list pages.
for (const pageType of ["folder", "tag"]) {
  const pageLayout = layout.byPageType[pageType]
  if (pageLayout?.beforeBody?.length === 2) {
    layout.byPageType[pageType] = {
      ...pageLayout,
      beforeBody: [...pageLayout.beforeBody].reverse(),
    }
  }
}

// loadQuartzConfig creates a dispatcher from the YAML layout. Replace it with
// the customized layout above so the local milestone component is rendered.
config.plugins.emitters = config.plugins.emitters.filter(
  (plugin) => plugin.name !== "PageTypeDispatcher",
)
config.plugins.emitters.push(
  PageTypes.PageTypeDispatcher({
    defaults: layout.defaults,
    byPageType: layout.byPageType,
  }),
)

export default config
export { layout }
