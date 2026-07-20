# AGENT.md — SID Conversation Design

## Agent Guidance

This repo is a **pure static site** (HTML + CSS only). No build pipeline, no package manager, no framework.

## What to Do

- Edit `index.html`, `sid-curriculumn.html`, `sid-handbook.html`, or `content/css/style.css` directly
- All copy is in **Vietnamese** — keep it that way unless explicitly asked to change language
- After any HTML/CSS change, verify visually in a browser preview before reporting done
- Use the `run` skill or `preview_start` with a local static server (e.g. `python3 -m http.server 8080`) to preview

## What NOT to Do

- Do not introduce npm, a bundler, a framework, or any build step
- Do not create new CSS files — everything goes into `content/css/style.css`
- Do not add new pages without being asked — the existing pages are `index.html`, `sid-curriculumn.html`, `sid-handbook.html`
- Do not push to `main` without user confirmation

## Codebase Facts

- `index.html` — landing page with nav, hero, problem/solution/curriculum/pricing/trainer sections, and a registration modal using Cloudflare Turnstile
- `style.css` — single stylesheet for all pages
- GitHub Pages deploys from `main` via the `CNAME` file (apex domain)

## Common Tasks

| Task | Approach |
|------|----------|
| Update copy | Edit the relevant HTML file directly |
| Style changes | Edit `content/css/style.css` |
| Add a new section | Add HTML to the appropriate page, add CSS to `style.css` |
| Preview | `python3 -m http.server 8080` from repo root, then open `localhost:8080` |
| Deploy | Commit + push to `main` (confirm with user first) |
