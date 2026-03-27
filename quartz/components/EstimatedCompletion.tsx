import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function EstimatedCompletion({ fileData, displayClass }: QuartzComponentProps) {
  const estimated = fileData.frontmatter?.["est-completion"]
  if (!estimated) return null

  return (
    <div class={`estimated-completion ${displayClass ?? ""}`}>
      <span class="estimated-completion-badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="14"
          height="14"
          aria-hidden="true"
        >
          <path d="M4.75 0a.75.75 0 0 1 .75.75V2h5V.75a.75.75 0 0 1 1.5 0V2h1.25c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V3.75C1 2.784 1.784 2 2.75 2H4V.75A.75.75 0 0 1 4.75 0ZM2.5 7.5v6.75c0 .138.112.25.25.25h10.5a.25.25 0 0 0 .25-.25V7.5Zm10.75-4H2.75a.25.25 0 0 0-.25.25V6h11V3.75a.25.25 0 0 0-.25-.25Z" />
        </svg>
        Est. completion: {String(estimated)}
      </span>
    </div>
  )
}

EstimatedCompletion.css = `
.estimated-completion {
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
}

.estimated-completion-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  border: 1px solid var(--lightgray);
  color: var(--gray);
  font-size: 0.85em;
}

.estimated-completion-badge svg {
  fill: currentColor;
  flex-shrink: 0;
}
`

export default (() => EstimatedCompletion) satisfies QuartzComponentConstructor
