# CLAUDE.md — SID Conversation Design

## Project Overview

Static website for **SID (Structured Intelligence Design)** — a Vietnamese-language course on conversation design and structured AI interaction. Hosted on GitHub Pages.

## File Structure

```
/
├── index.html              # Main landing page (Vietnamese)
├── sid-curriculumn.html    # Curriculum / course outline page
├── sid-handbook.html       # Handbook page
├── CNAME                   # GitHub Pages custom domain
└── content/
    ├── css/
    │   └── style.css       # Single global stylesheet
    └── images/             # Image assets
```

## Tech Stack

- Pure HTML/CSS — no build tools, no frameworks, no JS bundler
- Vietnamese language (`lang="vi"`)
- Google Fonts: Space Grotesk, Inter, JetBrains Mono
- Google Analytics (gtag.js)
- Cloudflare Turnstile (bot protection on registration modal)

## Development Workflow

No build step. Edit HTML/CSS files directly and open in a browser to preview.

To verify changes in the browser preview:
1. `preview_start` with the `index.html` URL (file:// or via local server)
2. Or use the `run` skill to launch a local static server

## Conventions

- All user-facing copy is in **Vietnamese**
- Single `style.css` for all pages — no per-page stylesheets
- No TypeScript, no React, no npm — plain files only
- Images live in `content/images/`

## Deployment

Pushed to `main` → GitHub Pages deploys automatically via the `CNAME` config.

## Key Branches

- `main` — production
- Feature branches merged via PR into `main`
