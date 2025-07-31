import { FullSlug, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { Date, getDate } from "./Date"
import { QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

function extractDateFromWakuTitle(title: string): Date | null {
  // Extract date from titles like "2025-07-28 Waku Weekly" or "2023-08-06 Waku weekly"
  const match = title.match(/^(\d{4}-\d{2}-\d{2})\s+Waku/i)
  if (match && match[1]) {
    // Parse the date string (YYYY-MM-DD format)
    const dateStr = match[1]
    const [year, month, day] = dateStr.split('-').map(Number)
    const date = new (Date as any)(year, month - 1, day) // month is 0-indexed
    return isNaN(date.getTime()) ? null : date
  }
  return null
}

function isWakuUpdatesContent(slug: string): boolean {
  return slug.includes('/waku/updates/')
}

export function byDateAndAlphabetical(
  cfg: GlobalConfiguration,
): (f1: QuartzPluginData, f2: QuartzPluginData) => number {
  return (f1, f2) => {
    const f1IsWaku = isWakuUpdatesContent(f1.slug ?? "")
    const f2IsWaku = isWakuUpdatesContent(f2.slug ?? "")

    // Special handling for waku updates content
    if (f1IsWaku && f2IsWaku) {
      const f1Title = f1.frontmatter?.title ?? ""
      const f2Title = f2.frontmatter?.title ?? ""
      const f1Date = extractDateFromWakuTitle(f1Title)
      const f2Date = extractDateFromWakuTitle(f2Title)
      
      if (f1Date && f2Date) {
        // Sort waku updates by date in title, descending (newest first)
        return f2Date.getTime() - f1Date.getTime()
      }
      // Fallback to alphabetical if date extraction fails
      return f1Title.toLowerCase().localeCompare(f2Title.toLowerCase())
    }

    // If one is waku and one isn't, prioritize waku content
    if (f1IsWaku && !f2IsWaku) {
      return -1
    }
    if (!f1IsWaku && f2IsWaku) {
      return 1
    }

    // Original logic for non-waku content
    if (f1.dates && f2.dates) {
      // sort descending
      return getDate(cfg, f2)!.getTime() - getDate(cfg, f1)!.getTime()
    } else if (f1.dates && !f2.dates) {
      // prioritize files with dates
      return -1
    } else if (!f1.dates && f2.dates) {
      return 1
    }

    // otherwise, sort lexographically by title
    const f1Title = f1.frontmatter?.title.toLowerCase() ?? ""
    const f2Title = f2.frontmatter?.title.toLowerCase() ?? ""
    return f1Title.localeCompare(f2Title)
  }
}

type Props = {
  limit?: number
} & QuartzComponentProps

export function PageList({ cfg, fileData, allFiles, limit }: Props) {
  let list = allFiles.sort(byDateAndAlphabetical(cfg))
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
                  <Date date={getDate(cfg, page)!} />
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
