# CLAUDE.md

Portfolio site for Sathila De Silva: Home plus three case studies (MEGT, Pearl, Sampath).

## Sources of truth

- **DESIGN.md**: follow it strictly. Use only its tokens (colours, typography, spacing, radii, components). Never hardcode values that aren't tokens. Snap off-scale values using its rules.
- **Figma details per page**: before each page, the user provides design details from Figma. These are the source of truth for that page. Where they conflict with DESIGN.md, ask before building.
- **design-reference/**: full-page reference screenshots (`PortfolioHome.png`, `MEGT.png`, `Pearl.png`, `Sampath.png`), exported at 2×.
- **src/assets/**: images, in `src/assets/images/<page>/`, imported through Astro so they get resized and converted to WebP. Client logos are in `src/assets/images/home/logos/`. See `src/assets/images/index.csv`, which maps every image to its Figma layer path and the size it's shown at in the design.

## Stack

- Astro, with plain CSS. No CSS frameworks or UI libraries.
- Vanilla JS only where it's needed (for example, the sticky-sidebar active state). Prefer zero JS.

## Workflow

1. Build one page at a time and one section at a time.
2. After each section, stop, show the user what was built, and wait for approval before starting the next section.
3. Never start a new page until the user says so.
4. Before each page, wait for the user's Figma design details, and use them as the source of truth for that page.
5. When the user says "approved", commit and push to GitHub straight away, without asking.
6. Update the Progress section below after each step: section started, section approved, page done.

## Gotchas

- The dev server sometimes keeps serving old component styles after an edit. If a style change doesn't show, restart it: `npx astro dev stop`, `rm -rf node_modules/.vite .astro`, then `npx astro dev --host`.

## Open questions

Built with these defaults until the user confirms:
- `grey00` in DESIGN.md (violet-300) is treated as `tertiary-300`.
- Gradient directions: brand is confirmed (149deg, from the logo SVG). "Fintech" runs left to right (90deg) and info-card icon top to bottom (180deg), unconfirmed.
- Footer social links: LinkedIn, Instagram and Dribbble URLs still to come (placeholders in `src/components/Footer.astro`, no link yet). The footer icons are placeholders too and may be replaced.
- MEGT sidebar: hidden below 1200px (user's decision, after the Pawprint case study they referenced); between 1200 and 1920 the content column shrinks instead. "← Go back" keeps DESIGN.md's arrow (Figma has none).
- MEGT sidebar over the full-bleed dark sections ("How it was built", "Design system"): each item lightens while it's over a band ("Go back" and the active link white, the rest `text-light`), since green is borderline there (about 4.5:1). Confirmed by the user.
- Gap above the footer on the case studies (user's decision): the footer has no top margin there (`footerFlush`); the last section sets the gap, 120 on desktop and 48 on mobile. Pearl's last band (white, like the footer) has no bottom padding at all. Home keeps the footer's 80.
- On mobile only `number-xl` shrinks (to 56/72.8), so `number-l` (80) is larger than `number-xl` there. Left as specified.

## Progress

Status values: `not started` · `in progress` · `approved`

### Setup
| Section | Status |
|---|---|
| Astro project scaffold, tokens and base styles from DESIGN.md | approved |

### Home
| Section | Status |
|---|---|
| Top nav (shared by all pages) | approved |
| Hero | approved |
| Work | approved |
| Clients and Brands | approved |
| Footer (shared by all pages) | approved |

### MEGT case study
| Section | Status |
|---|---|
| Hero: introduction | approved |
| Hero: project metadata | approved |
| Hero: form builder preview | approved |
| Project metrics | approved |
| Sticky sidebar | approved |
| Context | approved |
| The challenge | approved |
| How it was built | approved |
| The product | approved |
| Before and after | approved |
| Canvas behavior | approved |
| Design system | approved |
| Honest reflections | approved |
| Mobile pass: spacing (48 between sections, tighter in-section gaps), stacked metrics, reflection animation on scroll | approved |

### Pearl case study
| Section | Status |
|---|---|
| Hero | approved |
| Hero metadata | approved |
| Metrics band | approved |
| 01 · The Setup | approved |
| 02 · First Move | approved |
| 03 · Architecture Call | approved |
| 04 · Foundations | approved |
| 05 · Building the Engine | approved |
| The Third Surface (Figma frame mislabelled "Section 07 — Handoff") | approved |
| 06 · The Exception | approved |
| 07 · Handoff | approved |
| 08 · Close | approved |

### Sampath case study
| Section | Status |
|---|---|
| Hero | approved |
| 01 · Starting Point | approved |
| 02 · The plan changed (Figma frame "Frame 1853320920") | approved |
| 03 · Building the System | approved |
| 04 · Components | approved |
| Transition image band | approved |
| 05 · Impact | approved |
| 06 · Built to Last | approved |
| 07 · Delivery | approved |
| 08 · Reflection | approved |
