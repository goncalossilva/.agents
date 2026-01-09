---
name: browser-tools
description: Interactive browser automation via Chrome DevTools Protocol. Use when you need to interact with web pages, test frontends, or when user interaction with a visible browser is required.
---

# Browser Tools

Chrome DevTools Protocol tools for agent-assisted web automation. These tools connect to a Chromium-based browser (Chromium/Chrome) running on `:9222` with remote debugging enabled.

## Setup

Run once before first use:

```bash
cd "$HOME/.agents/skills/browser-tools"
npm install
```

## Start Chromium / Chrome

```bash
"$HOME/.agents/skills/browser-tools/browser-start.js"              # Fresh profile
"$HOME/.agents/skills/browser-tools/browser-start.js" --profile    # Copy your profile (cookies, logins)
"$HOME/.agents/skills/browser-tools/browser-start.js" --browser chromium
"$HOME/.agents/skills/browser-tools/browser-start.js" --browser chrome
```

Launch a browser with remote debugging on `:9222`. Use `--profile` to preserve your authentication state.

If the auto-detection picks the wrong browser, set:

- `BROWSER_TOOLS_BROWSER=chromium` (or `chrome`)
- `BROWSER_TOOLS_EXECUTABLE=/absolute/path/to/browser`
- `BROWSER_TOOLS_PROFILE_SRC=/absolute/path/to/profile/dir` (optional)

## Navigate

```bash
"$HOME/.agents/skills/browser-tools/browser-nav.js" https://example.com
"$HOME/.agents/skills/browser-tools/browser-nav.js" https://example.com --new
```

Navigate to URLs. Use `--new` flag to open in a new tab instead of reusing current tab.

## Evaluate JavaScript

```bash
"$HOME/.agents/skills/browser-tools/browser-eval.js" 'document.title'
"$HOME/.agents/skills/browser-tools/browser-eval.js" 'document.querySelectorAll("a").length'
```

Execute JavaScript in the active tab. Code runs in async context. Use this to extract data, inspect page state, or perform DOM operations programmatically.

For multi-line code or statements, wrap in an IIFE:

```bash
"$HOME/.agents/skills/browser-tools/browser-eval.js" '(() => { const x = 1; return x + 1; })()'
```

## Screenshot

```bash
"$HOME/.agents/skills/browser-tools/browser-screenshot.js"
```

Capture current viewport and return temporary file path. Use this to visually inspect page state or verify UI changes.

## Pick Elements

```bash
"$HOME/.agents/skills/browser-tools/browser-pick.js" "Click the submit button"
```

**IMPORTANT**: Use this tool when the user wants to select specific DOM elements on the page. This launches an interactive picker that lets the user click elements to select them. The user can select multiple elements (Cmd/Ctrl+Click) and press Enter when done. The tool returns CSS selectors for the selected elements.

Common use cases:

- User says "I want to click that button" → Use this tool to let them select it
- User says "extract data from these items" → Use this tool to let them select the elements
- When you need specific selectors but the page structure is complex or ambiguous

## Cookies

```bash
"$HOME/.agents/skills/browser-tools/browser-cookies.js"
```

Display all cookies for the current tab including domain, path, httpOnly, and secure flags. Use this to debug authentication issues or inspect session state.

## Extract Page Content

```bash
"$HOME/.agents/skills/browser-tools/browser-content.js" https://example.com
```

Navigate to a URL and extract readable content as markdown. Uses Mozilla Readability for article extraction and Turndown for HTML-to-markdown conversion. Works on pages with JavaScript content (waits for page to load).

## When to Use

- Testing frontend code in a real browser
- Interacting with pages that require JavaScript
- When user needs to visually see or interact with a page
- Debugging authentication or session issues
- Scraping dynamic content that requires JS execution
