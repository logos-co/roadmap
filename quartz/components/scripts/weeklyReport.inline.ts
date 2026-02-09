// Weekly Report Interactive Features
// This script provides interactivity for weekly report HTML files

// Flag to prevent duplicate initialization
let isWeeklyReportInitialized = false
let weeklyReportKeydownHandler: ((e: KeyboardEvent) => void) | null = null

function initializeWeeklySummary() {
  // Only initialize if we're on a weekly report page
  const hasWeeklyReportContent = document.querySelector(".tab[data-team]") !== null
  if (!hasWeeklyReportContent) {
    return
  }

  // Prevent duplicate initialization
  if (isWeeklyReportInitialized) {
    return
  }

  // Tab switching
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const team = (tab as HTMLElement).dataset.team
      if (!team) return

      // Update active tab
      document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")

      // Update active content
      document.querySelectorAll(".team-content").forEach((content) => {
        content.classList.remove("active")
      })
      const teamContent = document.getElementById(team)
      if (teamContent) {
        teamContent.classList.add("active")
      }
    })
  })

  // Search functionality
  const searchInput = document.getElementById("search") as HTMLInputElement | null
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const query = (e.target as HTMLInputElement).value.toLowerCase()

      document.querySelectorAll(".milestone, .repo-card").forEach((item) => {
        const text = item.textContent?.toLowerCase() || ""
        if (query === "" || text.includes(query)) {
          item.classList.remove("hidden")
          if (item.classList.contains("milestone") && query !== "") {
            item.classList.add("expanded")
          }
        } else {
          item.classList.add("hidden")
        }
      })

      document.querySelectorAll(".highlight-card").forEach((card) => {
        const text = card.textContent?.toLowerCase() || ""
        if (query === "" || text.includes(query)) {
          card.classList.remove("hidden")
        } else {
          card.classList.add("hidden")
        }
      })
    })
  }

  // Keyboard navigation - store handler to prevent duplicates
  if (weeklyReportKeydownHandler) {
    document.removeEventListener("keydown", weeklyReportKeydownHandler)
  }
  weeklyReportKeydownHandler = (e: KeyboardEvent) => {
    if (e.key >= "1" && e.key <= "5") {
      const tabs = document.querySelectorAll(".tab")
      const index = parseInt(e.key) - 1
      if (tabs[index]) {
        ;(tabs[index] as HTMLElement).click()
      }
    }
  }
  document.addEventListener("keydown", weeklyReportKeydownHandler)

  isWeeklyReportInitialized = true
}

// Milestone toggle function (global for onclick attributes)
;(window as any).toggleMilestone = function (header: HTMLElement) {
  const milestone = header.parentElement
  if (milestone) {
    milestone.classList.toggle("expanded")
  }
}

// Reset initialization flag when navigating away
function resetWeeklyReportInitialization() {
  isWeeklyReportInitialized = false
  if (weeklyReportKeydownHandler) {
    document.removeEventListener("keydown", weeklyReportKeydownHandler)
    weeklyReportKeydownHandler = null
  }
}

// Listen for Quartz SPA navigation events
document.addEventListener("nav", () => {
  resetWeeklyReportInitialization()
  // Small delay to ensure DOM is updated by Quartz
  setTimeout(initializeWeeklySummary, 50)
})

// Initial page load
initializeWeeklySummary()
