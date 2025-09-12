# `<details>` Dropdown Menu

<details>
  <summary><strong id="menu">Menu</strong></summary>

- [Description](#description)
- [Features](#features)
- [JavaScript](#javascript)
- [CSS](#css)
- [Accessibility](#accessibility)
- [CANIUSE Anchor Positioning?](#caniuse-anchor-positioning)
- [Code Source](#code-source)
- [Theme Toggling](#theme-toggling)
- [Testing and Compatibility](#testing-and-compatibility)
- [How to Run](#how-to-run)
- [Build & Deployment Setup for `/docs` Folder](#build--deployment-setup-for-docs-folder)

</details>

## Description

A lightweight, accessible navigation and content system built using the native HTML `<details>` and `<summary>` elements.  
Enhances the default behavior with JavaScript for better usability, keyboard support, and ARIA state management — without relying on external libraries.

[Back to menu](#menu)

---

## Features

- Native `<details>` used for dropdown menus in navigation and content.
- Automatic closing of `<details>` when clicking outside a navigation area.
- Keyboard support: pressing `Escape` closes the currently focused `<details>`.
- ARIA attributes (`aria-expanded`) synchronized with open/close state.
- `<details>` elements can be grouped with a shared `data-group` attribute for mutually exclusive behavior (opening one closes the others), supported in all major browsers.
- Responsive hamburger menu with accessible ARIA controls.
- Modern **CSS Anchor Positioning** used for aligning dropdown menus.

[View on GitHub Pages](https://chrisnajman.github.io/details-dropdown-menu)

[Back to menu](#menu)

---

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `details.js`: Handles `<details>` accessibility and behavior.
  - Syncs `aria-expanded` between `<summary>` and `<details>`.
  - Closes dropdowns when clicking outside navigation.
  - Supports closing via the `Escape` key and restores focus.
  - Implements grouped accordion behavior using the `data-group` attribute: when one `<details>` in a group opens, any others in the same group automatically close.
- `hamburger-button.js`: Toggles the mobile navigation menu.
  - Updates `aria-expanded` on the button.
  - Switches between hidden/visible menu states.
  - Updates the visually hidden text for screen readers.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

[Back to menu](#menu)

---

## CSS

- **Anchor Positioning** (`position-anchor`) is used to align dropdown menus relative to their `<summary>`.
  - In browsers without Anchor Positioning support (e.g., Firefox), the layout gracefully falls back to a standard flow layout, preserving an unbroken user experience.
- Uses **media query range syntax** for responsive breakpoints.
- Mobile-first design, with progressive enhancements for larger viewports.
- Dropdown menus adapt to available space without JavaScript intervention.

[Back to menu](#menu)

---

## Accessibility

- ARIA attributes (`aria-expanded`) dynamically updated on all `<summary>` elements.
- Escape key support: closes the open `<details>` and returns focus to its `<summary>`.
- Clicking outside a `<nav>` closes only its dropdown menus.
- Mobile hamburger menu includes `aria-controls` and `aria-expanded` for screen reader support.
- Semantic HTML structure (`<header>`, `<nav>`, `<main>`, `<details>`, `<summary>`) aids navigation for assistive technologies.

[Back to menu](#menu)

---

## CANIUSE Anchor Positioning?

As of September 2025, **Caniuse** reports that the following browsers/platforms support anchor positioning:

- Chrome v.140
- Edge v.140
- Opera v.122
- Chrome for Android v.139
- Safari on IOS v.26
- Android Browser v.139

**Caniuse** reports that "All major browser engines are working on implementing this spec".

[Caniuse: anchor positioning](https://caniuse.com/css-anchor-positioning)

**Note**: unsupported browsers/platforms will display the default `details` behaviour.

[Back to menu](#menu)

---

## Code Source

The anchor positioning code for the main navigation comes from a **Codepen** by [Ryan Trimble](https://codepen.io/mrtrimble). My only changes were:

- Changing IDs to classes
- Adding `position-try-fallbacks: flip-block, flip-inline` to the target's `::details-content`
- Making both targets `position-area: block-end center`

[View CodePen](https://codepen.io/mrtrimble/pen/ZYzzqOJ/676e5968b2726fb2c3383819ffb8d15b)

[Back to menu](#menu)

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

> [!IMPORTANT]
> Remember to change `const LOCAL_STORAGE_PREFIX` in `js-modules/theme.js` to a unique identifier.

[Back to menu](#menu)

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome (full support, including Anchor Positioning)
  - Mozilla Firefox (no Anchor Positioning support yet, but layout gracefully falls back to default `<details>` behavior)
  - Microsoft Edge (full support, including Anchor Positioning)

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

[Back to menu](#menu)

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).

[Back to menu](#menu)

---

## Build & Deployment Setup for `/docs` Folder

If you want to deploy a minified version of this project to **GitHub Pages**, read on.

### 1. Install Required Packages

Run this once in your project root to install dev dependencies:

```bash
npm install
```

### 2. Run the full build process

> [!IMPORTANT]
> Any assets not described in `package.json` must be added. In the current project we don't have an `img` folder. If you create one and add images to it, you have to add this to `copy:assets`, e.g.

#### Current `package.json`

```
"copy:assets": "shx cp -r  site.webmanifest favicon.ico favicon-16x16.png favicon-32x32.png apple-touch-icon.png android-chrome-192x192.png android-chrome-512x512.png docs/",
```

#### Updated `package.json` with "img"

```
"copy:assets": "shx cp -r  img site.webmanifest favicon.ico favicon-16x16.png favicon-32x32.png apple-touch-icon.png android-chrome-192x192.png android-chrome-512x512.png docs/",
```

etc, etc.

Then in the terminal, run:

```bash
npm run build
```

### 3. Deploy to GitHub Pages

Once you've created a repository and pushed the files,

- go to `https://github.com/[your-name]/[your-project-name]/settings/pages`.
- Under "Build and deployment > Branch" make sure you set the branch to `main` and folder to `/docs`.
- Click "Save".

> [!NOTE]
> For a detailed description of the build process, configuration files and npm packages see my [GitHub Pages Optimised Build](https://github.com/chrisnajman/github-pages-optimised-build).

[Back to menu](#menu)
