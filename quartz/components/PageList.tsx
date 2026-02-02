import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date as DateComponent, getDate } from "./Date"
import { QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

function extractDateFromTitle(title: string): Date | null {
  // Extract an ISO date anywhere in the title, e.g., "2025-07-28 Waku Weekly"
  const match = title.match(/(\d{4}-\d{2}-\d{2})/)
  if (match && match[1]) {
    const d = new globalThis.Date(match[1])
    return isNaN(d.getTime()) ? null : d
  }
  return null
}

function extractDateFromSlug(slug?: string): Date | null {
  if (!slug) return null
  const match = slug.match(/(\d{4}-\d{2}-\d{2})/)
  if (!match) return null
  const d = new globalThis.Date(match[1])
  return isNaN(d.getTime()) ? null : d
}

export function byDateAndAlphabetical(
  cfg: GlobalConfiguration,
): (f1: QuartzPluginData, f2: QuartzPluginData) => number {
  const getComparableDate = (file: QuartzPluginData): Date | null => {
    console.log("Getting comparable date for file:", file.frontmatter?.title, file.dates)
    return (
      file.dates?.created ??
      file.dates?.published ??
      extractDateFromTitle(file.frontmatter?.title ?? "") ??
      extractDateFromSlug(file.slug) ??
      getDate(cfg, file)
    )
  }

  return (f1, f2) => {
    const f1Date = getComparableDate(f1)
    const f2Date = getComparableDate(f2)

    // If both have dates, sort by date descending (newest first)
    if (f1Date && f2Date) {
      return f2Date.getTime() - f1Date.getTime()
    } else if (f1Date && !f2Date) {
      // Prioritize files with dates
      return -1
    } else if (!f1Date && f2Date) {
      return 1
    }

    // Otherwise, sort lexicographically by title
    const f1Title = f1.frontmatter?.title ?? ""
    const f2Title = f2.frontmatter?.title ?? ""
    return f1Title.localeCompare(f2Title, undefined, { numeric: true, sensitivity: "base" })
  }
}

type Props = {
  limit?: number
} & QuartzComponentProps

export function PageList({ cfg, fileData, allFiles, limit }: Props) {
  let list = [...allFiles].sort(byDateAndAlphabetical(cfg))
  if (limit) {
    list = list.slice(0, limit)
  }

  return (
    <ul class="section-ul">
      {list.map((page) => {
        const title = page.frontmatter?.title
        const tags = page.frontmatter?.tags ?? []

        return (
          <li class="section-li">
            <div class="section">
              {page.dates && (
                <p class="meta">
                  <DateComponent date={getDate(cfg, page)!} />
                </p>
              )}
              <div class="desc">
                <h3>
                  <a href={resolveRelative(fileData.slug!, page.slug!)} class="internal">
                    {title}
                  </a>
                </h3>
              </div>
              <ul class="tags">
                {tags.map((tag) => (
                  <li>
                    <a
                      class="internal tag-link"
                      href={resolveRelative(fileData.slug!, `tags/${tag}` as FullSlug)}
                    >
                      #{tag}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

PageList.css = `
.section h3 {
  margin: 0;
}

.section > .tags {
  margin: 0;
}
`
