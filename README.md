# Elisha Wisdom Mifatu — Portfolio

This repository contains the source for the personal portfolio of Elisha Wisdom Mifatu.
The site is a Vite + React + TypeScript project with Tailwind CSS and small UI primitives.

## Quickstart (local)

Requirements

- Node.js 18+ (use nvm if you need to manage versions)

Install and run dev server

```powershell
npm install
npm run dev
```

Build for production

```powershell
npm run build
npm run preview
```

Lint

```powershell
npm run lint
```

## Project structure

- `src/` — main source
  - `components/` — UI components and design primitives
  - `pages/` — top-level pages (Index, NotFound)
  - `lib/` — utilities (e.g. `cn` helper)

## Accessibility

- The Hero contains a terminal-like animation. A hidden status node or `aria-live` attribute is included for screen readers. If you have suggestions for further improvements, I can add them.

## SEO & Open Graph

- Add a custom Open Graph image at `public/og-image.png` to improve link previews.

## Tests

- No tests yet. Recommended: Vitest + React Testing Library.

## Contributing

- Run lint and build locally before opening a PR.
