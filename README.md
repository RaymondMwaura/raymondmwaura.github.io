# raymondmwaura.github.io

Personal portfolio of Raymond Mwaura — frontend engineer, Nairobi.

Live at **https://raymondmwaura.github.io**

## Stack

| Concern | Choice                                              |
| ------- | --------------------------------------------------- |
| Build   | Vite                                                |
| UI      | React 19 + TypeScript (strict)                      |
| Styling | Tailwind CSS v4                                     |
| Type    | Newsreader · IBM Plex Sans · IBM Plex Mono          |
| Lint    | Biome (lint + format in one tool)                   |
| Deploy  | GitHub Actions → GitHub Pages                       |

Runtime dependencies are React and React DOM only. Fonts are self-hosted (Latin subset,
woff2 only) so the page makes no third-party request.

Next.js was considered and deliberately rejected: GitHub Pages serves static files
only, so `output: 'export'` would disable SSR, ISR, API routes and image optimisation —
paying the framework's complexity cost for a static export anyway. Revisit if a real
MDX blog is ever added.

## Commands

```bash
npm install
npm run dev        # dev server
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # Biome check
npm run format     # Biome check --write
```

## Editing content

All copy lives as typed data in [`src/content/`](src/content/) — never inside JSX:

- `profile.ts` — name, title, about narrative, skill groups, social links
- `experience.ts` — positions, earlier roles, qualifications
- `projects.ts` — the selected work entries
- `types.ts` — the shapes everything above must satisfy

Adding a project means adding one object to `projects`. The compiler will tell you
if anything is missing.

### Design system

The visual design came from Claude Design and is implemented in
[`src/index.css`](src/index.css) as Tailwind v4 `@theme` tokens. Components never
hard-code a colour — they reference `canvas`, `surface`, `border`, `ink`, `ink-muted`,
`accent` and `live`, so re-theming is a change to one file.

Dark is the default; light is the same token set re-valued under
`:root[data-theme="light"]`, not a filter. The theme is set pre-paint by an inline
script in `index.html` so a dark-mode visitor never sees a white flash.

Two custom utilities carry the design's motifs:

- `label` — the mono uppercase micro-label used for nav, dates, section numbers, chips
- `hairline-grid` — cells separated by 1px of `border` showing through a grid gap,
  rather than each cell drawing its own border and doubling on the seams

### Conventions worth keeping

- **No skill percentage bars.** Self-assigned proficiency scores are noise and invite
  the reader to doubt them. Skills are grouped lists.
- **No fabricated social proof.** No testimonials, no client logos.
- **Project cards must work without a live link.** `status` is one of `live`,
  `in-development` or `archived`; cards render correctly for all three.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which lints, typechecks,
builds and publishes `dist/` to Pages.

**One-time setup:** in repo Settings → Pages, set _Source_ to **GitHub Actions**.
Without this the workflow succeeds but the site still 404s.

## History

The previous version of this site was a scraped copy of a commercial ThemeForest
template running jQuery 2.1.3 and Bootstrap 3. It was rebuilt from scratch in
August 2026 — no files were carried over except two images.
