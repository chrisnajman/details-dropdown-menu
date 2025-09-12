export default function details() {
  // Only applies to nav elements that contain details elements
  // Delete or comment out this block, if not required.
  const navs = document.querySelectorAll("nav")
  if (!navs.length) return

  // Close all <details> in a nav when clicking outside that nav
  document.addEventListener("click", (e) => {
    navs.forEach((nav) => {
      const navDetails = nav.querySelectorAll("details")
      if (!nav.contains(e.target)) {
        navDetails.forEach((navDetail) => {
          if (navDetail.open) {
            navDetail.removeAttribute("open")
            navDetail
              .querySelector("summary")
              .setAttribute("aria-expanded", "false")
          }
        })
      }
    })
  })

  // Applies to all <details> elements
  document.querySelectorAll("details").forEach((detail) => {
    const summary = detail.querySelector("summary")

    // Initialize aria-expanded based on initial state
    summary.setAttribute("aria-expanded", detail.open ? "true" : "false")

    // Update aria-expanded whenever the <details> element opens/closes
    detail.addEventListener("toggle", () => {
      summary.setAttribute("aria-expanded", detail.open ? "true" : "false")

      // Enforce accordion behavior (if grouped)
      if (detail.open && detail.dataset.group) {
        // Close all other details in the same group
        const group = detail.dataset.group
        document
          .querySelectorAll(`details[data-group="${group}"]`)
          .forEach((other) => {
            if (other !== detail && other.open) {
              other.removeAttribute("open")
              const otherSummary = other.querySelector("summary")
              if (otherSummary) {
                otherSummary.setAttribute("aria-expanded", "false")
              }
            }
          })
      }
    })

    // Close the <details> element when Escape is pressed inside it
    // Accessibility: returns focus to the <summary> after closing
    detail.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (detail.open) {
          detail.removeAttribute("open")
          summary.setAttribute("aria-expanded", "false")
          summary.focus()
        }
      }
    })
  })
}
