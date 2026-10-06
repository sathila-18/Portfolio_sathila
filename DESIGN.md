---
version: alpha
name: Sathila De Silva — Portfolio
description: >
  Editorial portfolio for product design and design-system work. Calm, type-led,
  generous whitespace; the work supplies the colour. Tokens mirror the Figma
  variable collections exactly (Primitives → Alias Colors → Mapped Colors,
  Alias Spacing, Alias typography). Layout and component values were read from
  the Figma file (pages: Home, MEGT case study, Pearl case study, Sampath case study).

colors:
  primary: "{colors.primary-500}" # key brand colour (highland green)
  # ── Layer 1 · Primitives (raw hex). Never use directly in UI code.
  # colors/highland-green
  raw-highland-green-50: "#F1F4EF"
  raw-highland-green-100: "#D4DECE"
  raw-highland-green-200: "#BFCDB7"
  raw-highland-green-300: "#A2B796"
  raw-highland-green-400: "#90A981"
  raw-highland-green-500: "#749362"
  raw-highland-green-600: "#6A8659"
  raw-highland-green-700: "#526846"
  raw-highland-green-800: "#405136"
  raw-highland-green-900: "#313E29"
  # colors/purple
  raw-purple-50: "#F5E7FB"
  raw-purple-100: "#DFB5F3"
  raw-purple-200: "#CF91ED"
  raw-purple-300: "#B95EE4"
  raw-purple-400: "#AC3FDF"
  raw-purple-500: "#970FD7"
  raw-purple-600: "#890EC4"
  raw-purple-700: "#6B0B99"
  raw-purple-800: "#530876"
  raw-purple-900: "#3F065A"
  # colors/violet
  raw-violet-50: "#FAE7FB"
  raw-violet-100: "#EEB5F3"
  raw-violet-200: "#E691ED"
  raw-violet-300: "#DB5EE4"
  raw-violet-400: "#D43FDF"
  raw-violet-500: "#C90FD7"
  raw-violet-600: "#B70EC4"
  raw-violet-700: "#8F0B99"
  raw-violet-800: "#6F0876"
  raw-violet-900: "#54065A"
  # colors/blue
  raw-blue-50: "#EFE6FB"
  raw-blue-100: "#CCB1F2"
  raw-blue-200: "#B38BEC"
  raw-blue-300: "#9056E3"
  raw-blue-400: "#7B35DD"
  raw-blue-500: "#5A03D5"
  raw-blue-600: "#5203C2"
  raw-blue-700: "#400297"
  raw-blue-800: "#320275"
  raw-blue-900: "#260159"
  # colors/grey
  raw-grey-50: "#EBEBEB"
  raw-grey-100: "#C0C0C0"
  raw-grey-200: "#A1A1A1"
  raw-grey-300: "#767676"
  raw-grey-400: "#5C5C5C"
  raw-grey-500: "#333333"
  raw-grey-600: "#2E2E2E"
  raw-grey-700: "#242424"
  raw-grey-800: "#1C1C1C"
  raw-grey-900: "#151515"
  # colors/foundation
  raw-white: "#FFFFFF"
  raw-black: "#000000"
  # colors/sampath
  raw-sampath-50: "#FEF2E9"
  raw-sampath-100: "#FCD5BA"
  raw-sampath-200: "#FAC199"
  raw-sampath-300: "#F8A56A"
  raw-sampath-400: "#F7944D"
  raw-sampath-500: "#F57921"
  raw-sampath-600: "#DF6E1E"
  raw-sampath-700: "#AE5617"
  raw-sampath-800: "#874312"
  raw-sampath-900: "#67330E"
  # colors/sampath-blue
  raw-sampath-blue-50: "#F0ECFE"
  raw-sampath-blue-100: "#D2C3FA"
  raw-sampath-blue-200: "#BCA6F8"
  raw-sampath-blue-300: "#9D7EF5"
  raw-sampath-blue-400: "#8A65F3"
  raw-sampath-blue-500: "#6D3EF0"
  raw-sampath-blue-600: "#6338DA"
  raw-sampath-blue-700: "#4D2CAA"
  raw-sampath-blue-800: "#3C2284"
  raw-sampath-blue-900: "#2E1A65"
  # ── Layer 2 · Alias Colors (role ramps → primitives)
  # colors/primary → raw-highland-green
  primary-50: "{colors.raw-highland-green-50}"
  primary-100: "{colors.raw-highland-green-100}"
  primary-200: "{colors.raw-highland-green-200}"
  primary-300: "{colors.raw-highland-green-300}"
  primary-400: "{colors.raw-highland-green-400}"
  primary-500: "{colors.raw-highland-green-500}"
  primary-600: "{colors.raw-highland-green-600}"
  primary-700: "{colors.raw-highland-green-700}"
  primary-800: "{colors.raw-highland-green-800}"
  primary-900: "{colors.raw-highland-green-900}"
  # colors/secondary → raw-purple
  secondary-50: "{colors.raw-purple-50}"
  secondary-100: "{colors.raw-purple-100}"
  secondary-200: "{colors.raw-purple-200}"
  secondary-300: "{colors.raw-purple-300}"
  secondary-400: "{colors.raw-purple-400}"
  secondary-500: "{colors.raw-purple-500}"
  secondary-600: "{colors.raw-purple-600}"
  secondary-700: "{colors.raw-purple-700}"
  secondary-800: "{colors.raw-purple-800}"
  secondary-900: "{colors.raw-purple-900}"
  # colors/tertiary → raw-violet
  tertiary-50: "{colors.raw-violet-50}"
  tertiary-100: "{colors.raw-violet-100}"
  tertiary-200: "{colors.raw-violet-200}"
  # colors/tertiary → raw-violet
  grey00: "{colors.raw-violet-300}"
  # colors/tertiary → raw-violet
  tertiary-400: "{colors.raw-violet-400}"
  tertiary-500: "{colors.raw-violet-500}"
  tertiary-600: "{colors.raw-violet-600}"
  tertiary-700: "{colors.raw-violet-700}"
  tertiary-800: "{colors.raw-violet-800}"
  tertiary-900: "{colors.raw-violet-900}"
  # colors/tertiary-2 → raw-blue
  tertiary-2-50: "{colors.raw-blue-50}"
  tertiary-2-100: "{colors.raw-blue-100}"
  tertiary-2-200: "{colors.raw-blue-200}"
  tertiary-2-300: "{colors.raw-blue-300}"
  tertiary-2-400: "{colors.raw-blue-400}"
  tertiary-2-500: "{colors.raw-blue-500}"
  tertiary-2-600: "{colors.raw-blue-600}"
  tertiary-2-700: "{colors.raw-blue-700}"
  tertiary-2-800: "{colors.raw-blue-800}"
  tertiary-2-900: "{colors.raw-blue-900}"
  # colors/tertiary-3 → raw-grey
  tertiary-3-50: "{colors.raw-grey-50}"
  tertiary-3-100: "{colors.raw-grey-100}"
  tertiary-3-200: "{colors.raw-grey-200}"
  tertiary-3-300: "{colors.raw-grey-300}"
  tertiary-3-400: "{colors.raw-grey-400}"
  tertiary-3-500: "{colors.raw-grey-500}"
  tertiary-3-600: "{colors.raw-grey-600}"
  tertiary-3-700: "{colors.raw-grey-700}"
  tertiary-3-800: "{colors.raw-grey-800}"
  tertiary-3-900: "{colors.raw-grey-900}"
  # colors/sampath → raw-sampath
  sampath-50: "{colors.raw-sampath-50}"
  sampath-100: "{colors.raw-sampath-100}"
  sampath-200: "{colors.raw-sampath-200}"
  sampath-300: "{colors.raw-sampath-300}"
  sampath-400: "{colors.raw-sampath-400}"
  sampath-500: "{colors.raw-sampath-500}"
  sampath-600: "{colors.raw-sampath-600}"
  sampath-700: "{colors.raw-sampath-700}"
  sampath-800: "{colors.raw-sampath-800}"
  sampath-900: "{colors.raw-sampath-900}"
  # colors/sampath-blue → raw-sampath-blue
  sampath-blue-50: "{colors.raw-sampath-blue-50}"
  sampath-blue-100: "{colors.raw-sampath-blue-100}"
  sampath-blue-200: "{colors.raw-sampath-blue-200}"
  sampath-blue-300: "{colors.raw-sampath-blue-300}"
  sampath-blue-400: "{colors.raw-sampath-blue-400}"
  sampath-blue-500: "{colors.raw-sampath-blue-500}"
  sampath-blue-600: "{colors.raw-sampath-blue-600}"
  sampath-blue-700: "{colors.raw-sampath-blue-700}"
  sampath-blue-800: "{colors.raw-sampath-blue-800}"
  sampath-blue-900: "{colors.raw-sampath-blue-900}"
  # ── Layer 3 · Mapped Colors (semantic). USE THESE IN UI CODE. ──────
  # White has no Alias Colors entry, so white-based tokens point at the primitive.
  bg-primary: "{colors.raw-white}"
  bg-secondary: "{colors.tertiary-3-50}"
  bg-cards: "{colors.raw-white}"
  bg-action: "{colors.primary-500}"
  bg-sampath-blue-banner: "#E8E0FD" # Figma: sampath-blue-500 @ 16%, composited on white. Over non-white use rgba(109, 62, 240, 0.16)
  text-primary: "{colors.tertiary-3-500}"
  text-secondary: "{colors.tertiary-3-300}"
  text-tertiary: "{colors.tertiary-3-400}"
  text-white: "{colors.raw-white}"
  text-off-white: "{colors.tertiary-3-50}"
  text-light: "{colors.tertiary-3-200}"
  text-pearl: "{colors.tertiary-2-50}"
  text-pearl-secondary: "{colors.tertiary-2-100}"
  text-pearl-tertiary: "{colors.tertiary-2-700}"
  text-sampath: "{colors.sampath-500}"
  text-sampath-secondary: "{colors.sampath-50}"
  text-label: "{colors.primary-600}"
  border-default: "{colors.tertiary-3-50}"
  border-white: "{colors.raw-white}"
  border-sampath: "{colors.sampath-500}"
  fg-white: "{colors.raw-white}"
  fg-sampath: "{colors.sampath-500}"
  fg-sampath-blue: "{colors.sampath-blue-500}"
  # ── Shared values used in the screens that aren't in Mapped Colors ──
  bg-subtle: "#F7F7F7" # MEGT page background, project media wells, client-logo tiles
  bg-inverse: "{colors.tertiary-3-700}" # MEGT full-bleed dark sections + metrics band (#242424)
  bg-icon-subtle: "{colors.primary-50}" # footer social-icon circles
  text-heading-brand: "{colors.primary-900}" # case-study section headings (h2), metadata labels (#313E29)
  text-link-active: "{colors.primary-500}" # active sidebar link, "Go back"
  border-media: "{colors.tertiary-3-100}" # 1px outline on product screenshots (#C0C0C0)
  # ── Case-study backgrounds (local to each case study, never global) ──
  pearl-bg: "#F2F4FF" # Pearl page + alternating sections (with white)
  pearl-bg-dark: "#080E1F" # Pearl "Building the Engine" section
  pearl-bg-dark-alt: "#121726" # Pearl metrics band
  sampath-bg-warm: "#F7F3EF" # Sampath light sections
  sampath-bg-warm-alt: "#EDEAE5" # Sampath "Reflection" section
  sampath-border-warm: "#E0D9D0" # dividers/cards on warm sections
  sampath-bg-dark: "#141416" # Sampath dark sections
  sampath-bg-dark-alt: "#313136" # Sampath transition-image band
  sampath-card-dark: "#3C3C41" # cards on Sampath dark sections

typography:
  h1:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 90px
    lineHeight: 108px
  h2:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 56px
    lineHeight: 72.8px
  h3:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 48px
    lineHeight: 62.4px
  h4:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 40px
    lineHeight: 56px
  h5:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 32px
    lineHeight: 44.8px
  h6:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 24px
    lineHeight: 36px
  # Mobile headings (< 768px), from the "Typography (Mobile)" sheet; weights unchanged.
  h1-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 36px
    lineHeight: 46.8px
  h2-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 32px
    lineHeight: 41.6px
  h3-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 28px
    lineHeight: 39.2px
  h4-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 24px
    lineHeight: 33.6px
  h5-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 20px
    lineHeight: 28px
  h6-mobile:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 16px
    lineHeight: 24px
  body-xl:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 20px
    lineHeight: 30px
  body-l:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 16px
    lineHeight: 24px
  body-m:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 14px
    lineHeight: 21px
  body-s:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 12px
    lineHeight: 18px
  title-l:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 16px
    lineHeight: 24px
  title-m:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 14px
    lineHeight: 21px
  title-s:
    fontFamily: Google Sans Flex
    fontWeight: 500
    fontSize: 12px
    lineHeight: 18px
  label-l:
    fontFamily: Google Sans Flex
    fontWeight: 600
    fontSize: 16px
    lineHeight: 24px
  label-m:
    fontFamily: Google Sans Flex
    fontWeight: 600
    fontSize: 14px
    lineHeight: 21px
  label-s:
    fontFamily: Google Sans Flex
    fontWeight: 600
    fontSize: 12px
    lineHeight: 18px
  label-xs:
    fontFamily: Google Sans Flex
    fontWeight: 600
    fontSize: 11px
    lineHeight: 16.5px
  number-xl:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 90px
    lineHeight: 108px
  number-l:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 80px
    lineHeight: 104px
  number-m:
    fontFamily: Google Sans Flex
    fontWeight: 400
    fontSize: 56px
    lineHeight: 72.8px
  # Pearl only: "The Exception" section, italic (render with font-style: italic). Also used at 16/24.
  pearl-quote:
    fontFamily: Google Sans Code
    fontWeight: 400
    fontSize: 20px
    lineHeight: 30px

rounded:
  none: 0px
  sm: 8px # client-logo tiles
  md: 16px # info cards, product screenshots, project media (MEGT, Batelco)
  lg: 24px # case-study hero media, Sampath project media
  full: 9999px # avatar pill, social-icon circles

spacing:
  # Alias Spacing (Figma name Space-N → key "N")
  none: 0px
  "2": 2px
  "4": 4px
  "6": 6px
  "8": 8px
  "12": 12px
  "16": 16px
  "24": 24px
  "32": 32px
  "36": 36px
  "40": 40px
  "48": 48px
  "56": 56px
  "64": 64px
  "72": 72px
  "80": 80px
  "120": 120px
  "172": 172px
  "240": 240px
  # Layout widths (also in Alias Spacing)
  "343": 343px
  "360": 360px
  "375": 375px
  "1200": 1200px
  "1440": 1440px
  "1920": 1920px

components:
  top-nav:
    backgroundColor: "rgba(255, 255, 255, 0.19)" # + backdrop-filter: blur(10px)
    textColor: "{colors.text-tertiary}"
    typography: "{typography.label-l}"
    height: 88px
    padding: 32px 120px
  hero-eyebrow:
    textColor: "{colors.text-tertiary}"
    typography: "{typography.h6}"
  hero-headline:
    textColor: "{colors.text-primary}"
    typography: "{typography.h1}"
  hero-lead:
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-xl}"
  project-media:
    backgroundColor: "{colors.bg-subtle}"
    rounded: "{rounded.md}"
  project-category:
    textColor: "{colors.text-label}"
    typography: "{typography.title-m}"
  project-title:
    textColor: "{colors.text-primary}"
    typography: "{typography.h6}"
  client-logo-tile:
    backgroundColor: "{colors.bg-subtle}"
    rounded: "{rounded.sm}"
    width: 138px
    height: 64px
  section-eyebrow:
    textColor: "{colors.text-tertiary}"
    typography: "{typography.label-m}"
  section-heading:
    textColor: "{colors.text-heading-brand}"
    typography: "{typography.h2}"
  metadata-label:
    textColor: "{colors.text-heading-brand}"
    typography: "{typography.title-l}"
  metadata-value:
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-m}"
  metrics-band:
    backgroundColor: "{colors.bg-inverse}"
    textColor: "{colors.text-off-white}"
    height: 334px
  metric-value:
    textColor: "{colors.text-off-white}"
    typography: "{typography.number-xl}"
  metric-label:
    textColor: "{colors.text-off-white}"
    typography: "{typography.title-m}"
  info-card:
    backgroundColor: "{colors.bg-cards}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-l}"
    rounded: "{rounded.md}"
    padding: 16px
  info-card-title:
    textColor: "{colors.text-primary}"
    typography: "{typography.h6}"
  product-screenshot:
    rounded: "{rounded.md}"
  sidebar-link:
    textColor: "{colors.text-tertiary}"
    typography: "{typography.title-l}"
  sidebar-link-active:
    textColor: "{colors.text-link-active}"
    typography: "{typography.label-l}"
  social-icon-button:
    backgroundColor: "{colors.bg-icon-subtle}"
    rounded: "{rounded.full}"
    size: 44px
  footer:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-m}"
    height: 316px
  button-primary:
    backgroundColor: "{colors.bg-action}"
    textColor: "{colors.text-white}"
    typography: "{typography.label-l}"
  pearl-section:
    backgroundColor: "{colors.pearl-bg}"
    textColor: "{colors.text-primary}"
  pearl-section-dark:
    backgroundColor: "{colors.pearl-bg-dark}"
    textColor: "{colors.text-off-white}"
  sampath-section:
    backgroundColor: "{colors.sampath-bg-warm}"
    textColor: "{colors.text-primary}"
  sampath-section-dark:
    backgroundColor: "{colors.sampath-bg-dark}"
    textColor: "{colors.text-white}"
  sampath-banner:
    backgroundColor: "{colors.bg-sampath-blue-banner}"
    textColor: "{colors.text-primary}"
---

# Sathila De Silva — Portfolio

## Overview

A restrained, editorial portfolio for Sathila De Silva, centred on product design
and the systems that hold products together. The site should feel confident,
thoughtful and practical, not promotional. Large Medium-weight headlines set the
point of view, and project imagery and concrete evidence build credibility.

Defining statement: **"Designing products and the systems that hold them together."**

Principles:
1. **Content before decoration.** The shell is white, grey and quiet, and the work supplies the colour.
2. **Consistent foundations, distinct project expression.** Every page shares the same type, spacing, text colours, top nav and footer. Each case study has its own **background** palette and section rhythm.
3. **Evidence before claims.** Keep numbers, roles, timelines and quotes exactly as written in the source designs. Never invent results.

Pages: **Home**, **MEGT case study**, **Sampath case study**, **Pearl case study**.
Figma frames are desktop only, at 1920px wide. Mobile type comes from the
"Typography (Mobile)" sheet. Other responsive behaviour below is a
recommendation, not a confirmed design.

**How to use this file:** build every value from the tokens in the front matter.
When a Figma layer has a value that isn't a token, apply the snapping rules in
Layout. Use the text style applied in Figma, not the font values stored on a
layer, which can be stale.

## Colors

### Three layers

Colour variables are organised in three layers. Code should follow the same chain:

1. **Primitives** (`raw-*`): raw hex ramps (highland-green, purple, violet, blue,
   grey, sampath, sampath-blue, white, black). Never use them directly in UI code.
2. **Alias Colors**: role ramps that point to primitives.
   `primary` → highland-green, `secondary` → purple, `tertiary` → violet,
   `tertiary-2` → blue (renders as deep indigo-purple), `tertiary-3` → grey,
   `sampath` → sampath, `sampath-blue` → sampath-blue.
3. **Mapped Colors**: meaningful semantic names (`bg-*`, `text-*`, `border-*`,
   `fg-*`) that point to Alias Colors. **UI code uses only this layer.**
   White-based tokens (`bg-primary`, `bg-cards`, `text-white`, `border-white`,
   `fg-white`) point straight at the white primitive because Alias Colors has no
   white. `bg-sampath-blue-banner` is a raw colour at 16% opacity.

In CSS, emit all three layers as custom properties that reference each other
(`--text-primary: var(--tertiary-3-500)`, `--tertiary-3-500: var(--raw-grey-500)`),
so changing one primitive updates everything.

### Text colours (shared by every page)
Text uses the same Mapped Colors on every page. Case-study-specific text has its
own tokens (`text-pearl*`, `text-sampath*`).

| Token | Value | Use |
|---|---|---|
| `text-primary` | #333333 | Hero headlines, project titles, info-card titles, Home "Clients and Brands" |
| `text-heading-brand` | #313E29 | Case-study section headings (`h2`), metadata labels |
| `text-tertiary` | #5C5C5C | Nav links, hero eyebrows, section eyebrows, inactive sidebar links, metadata labels in hero bands |
| `text-secondary` | #767676 | Lead paragraphs, body copy, metadata values, footer |
| `text-label` | #6A8659 | Project category line ("Enterprise • Product Design • Web App") |
| `text-link-active` | #749362 | Active sidebar link, "Go back" |
| `text-white` / `text-off-white` | #FFFFFF / #EBEBEB | Headings / body on dark sections (MEGT, Pearl) |
| `text-sampath-secondary` / `text-light` | #FEF2E9 / #A1A1A1 | Headings / body on Sampath dark sections |
| `text-sampath` | #F57921 | Sampath eyebrows on dark sections, big Sampath numbers |
| `text-pearl` / `text-pearl-tertiary` | #EFE6FB / #400297 | Pearl accents |

### Shared surfaces
| Token | Value | Use |
|---|---|---|
| `bg-primary` | #FFFFFF | Home page, footer |
| `bg-subtle` | #F7F7F7 | MEGT page background, project media wells, client-logo tiles |
| `bg-cards` | #FFFFFF | Info cards (on `bg-subtle`) |
| `bg-inverse` | #242424 | MEGT full-bleed dark sections and metrics band |
| `bg-secondary` | #EBEBEB | Available. Not used as a surface in the current screens |
| `bg-action` | #749362 | Primary buttons (none on current screens) |
| `bg-icon-subtle` | #F1F4EF | Footer social-icon circles |
| `border-default` | #EBEBEB | Hairlines, Pearl hero metadata band |
| `border-media` | #C0C0C0 | 1px outline on product screenshots |

`bg-subtle`, `bg-inverse`, `bg-icon-subtle`, `text-heading-brand`,
`text-link-active` and `border-media` are values the screens use that aren't
part of Mapped Colors. Treat them as tokens in code.

### Case-study backgrounds (local only)
Backgrounds differ per case study. These tokens are scoped to their case study
and must never appear elsewhere:

- **MEGT**: page `bg-subtle` (#F7F7F7), full-bleed dark sections `bg-inverse`
  (#242424): "How it was built", "Design system" and the metrics band.
- **Pearl**: sections alternate `pearl-bg` (#F2F4FF) and white. Dark sections:
  `pearl-bg-dark` (#080E1F, "Building the Engine") and `pearl-bg-dark-alt`
  (#121726, metrics band).
- **Sampath**: dark image hero. Sections alternate `sampath-bg-warm` (#F7F3EF)
  and `sampath-bg-dark` (#141416), with `sampath-bg-warm-alt` (#EDEAE5) for
  "Reflection" and `sampath-bg-dark-alt` (#313136) for the transition-image band.
  On warm sections use `sampath-border-warm` (#E0D9D0) for dividers. On dark
  sections use `sampath-card-dark` (#3C3C41) for cards.

Never promote colours from client logos, screenshots or embedded product UI into
tokens. Text inside mockups and token diagrams (for example near-black #141412)
belongs to the image.

### Gradients
- **Brand gradient** on the "S" logo mark and the footer social icons:
  `#333333 0% → #759563 54% → #DFEE09 100%`.
- **"Fintech" highlight** in the Home hero: `#333333 0% → #759563 54% → #B4B975 100%`.
- **Info-card icons** (MEGT): `#FACAFF → #C90FD7` (pink to violet).

Use gradients only on these elements. Never on large surfaces or body text.

### Accessibility
Check contrast against the actual background:
- On white: `text-primary` 12.6:1, `text-heading-brand` 11.3:1,
  `text-tertiary` 6.7:1 ✅. `text-secondary` 4.54:1 ✅.
- On `bg-subtle` (#F7F7F7, the MEGT page): `text-secondary` is **4.24:1**,
  just under AA for body text. `text-label` 3.79:1 and `text-link-active` 3.22:1
  also fall short. Build as designed, note it in a code comment, and keep
  `text-secondary` paragraphs at `body-xl` / `body-l`.
- On dark sections: `text-light` (#A1A1A1) on #141416 is 7.1:1 ✅ and
  `text-sampath` (#F57921) on #141416 is 6.7:1 ✅. Both are fine there. On white
  or warm backgrounds they're 2.3–2.8:1. Sampath uses `text-sampath` for 14px
  eyebrows on warm sections (2.5:1): build as designed and flag it in a comment.
  Don't extend that use.
- `text-label` on white is 4.06:1 ⚠️. It's used at 14px Medium for the category
  line. Keep it to that use.
- `button-primary`: white on `bg-action` is **3.45:1**, which fails AA for a 16px
  label. Build it as designed, use `primary-700` (#526846, 6.1:1) for
  hover/pressed, and flag it in a comment.

## Typography

**Google Sans Flex** (free on Google Fonts, variable) for everything. Load weights
400, 500 and 600. **Google Sans Code** (italic) is used only in Pearl's
"The Exception" section. Fallback:
`"Google Sans Flex", system-ui, -apple-system, "Segoe UI", sans-serif`.

Figma text styles map 1:1 to these tokens: `headings/H1…H6` → `h1…h6`,
`body/XL…S` → `body-xl…s`, `title/L…S` → `title-l…s`, `label/L…XS` → `label-l…xs`,
`number/XL`, `number/L`, `number/S` → `number-xl`, `number-l`, `number-m`.

| Style | Desktop | Mobile (< 768) | Weight | Use in the designs |
|---|---|---|---|---|
| `h1` | 90 / 108 | 36 / 46.8 | Medium | Hero headline on every page |
| `h2` | 56 / 72.8 | 32 / 41.6 | Medium | Case-study section headings |
| `h3` | 48 / 62.4 | 28 / 39.2 | Medium | Rarely used |
| `h4` | 40 / 56 | 24 / 33.6 | Medium | Home "Clients and Brands", Sampath sub-sections |
| `h5` | 32 / 44.8 | 20 / 28 | Medium | The word "Fintech" in the Home hero |
| `h6` | 24 / 36 | 16 / 24 | Medium | Hero eyebrows, project titles, info-card titles |
| `body-xl` | 20 / 30 | same | Regular | Lead paragraphs, body copy in case studies |
| `body-l` | 16 / 24 | same | Regular | Body copy, info-card text |
| `body-m` | 14 / 21 | same | Regular | Metadata values, footer copyright |
| `title-l` | 16 / 24 | same | Medium | Metadata labels, inactive sidebar links |
| `title-m` | 14 / 21 | same | Medium | Project category line, metric labels |
| `label-l` | 16 / 24 | same | SemiBold | Nav links, active sidebar link, "Go back" |
| `label-m` / `label-s` | 14 / 12 | same | SemiBold | Section eyebrows / labels in hero metadata bands |
| `number-xl` / `number-l` / `number-m` | 90 / 80 / 56 | see note | Regular | Metric values |
| `pearl-quote` | 20 / 30 and 16 / 24 | same | Regular italic | Pearl "The Exception" only |

- **Mobile headings** use the `*-mobile` tokens (from the Figma
  "Typography (Mobile)" sheet), with the **same weights as desktop**.
- **Tablet (768–1199)** uses desktop styles, except `h1` drops to the `h2` size
  (56/72.8). This is a recommendation.
- **Mobile numbers** aren't defined in Figma. The recommendation is
  `number-xl` → 56/72.8 on mobile.
- **Title styles on the mobile sheet** are labelled 32, 18 and 16, which look
  wrong. Keep the desktop `title-*` sizes on mobile until confirmed.

### Google Sans Code (Pearl)
Pearl's "The Exception" section intentionally sets its quote and paragraphs in
**Google Sans Code italic** (16/24 and 20/30). Build them with `pearl-quote`
and `font-style: italic`. Use it nowhere else.

### Mixed-style text
Some layers apply different text styles per line instead of one style per layer,
for example the hero metadata values (line 1 `label-*`, line 2 `body-*`). Build
each line with its own style.

Text inside product mockups and token diagrams (Inter, SF Pro, Geist,
JetBrains Mono) ships as part of the images or animations. **Load only Google
Sans Flex and Google Sans Code.**

Rules:
- Headings are **Medium (500)**, never Bold. `number-*` styles are **Regular**.
- Use sentence case and natural language. No all-caps headlines or wide tracking.
  The small "ROLE"-style labels in the Sampath hero band are the one exception
  in the designs.
- Let text wrap naturally, and don't keep desktop line breaks.

## Layout

### Spacing scale
Use only Alias Spacing values for gap, padding and margin:
`0 · 2 · 4 · 6 · 8 · 12 · 16 · 24 · 32 · 36 · 40 · 48 · 56 · 64 · 72 · 80 · 120 · 172 · 240`

**Snap any off-scale value in Figma to the nearest step.** On an exact tie,
follow the confirmed mappings (10 → 8, 20 → 24, 28 → 32, 52 → 48, 60 → 56).

| Figma | Use |
|---|---|
| 3, 5 | 4 |
| 7.9, 9, 9.5, 10 | 8 |
| 14 | 12 |
| 18, 19 | 16 |
| 20, 22, 26, 27 | 24 |
| 28 | 32 |
| 46, 49, 52 | 48 |
| 60 | 56 |
| 82, 88, 89, 94, 96 | 80 |
| 103, 107, 113, 131 | 120 |
| 279 | 240 |

Fixed-height bands (top nav 88, metrics band 334, footer 316) keep their
heights, with content centred inside.

### Grid and widths
- Content container: **1200px** max, centred. That gives 360px margins at 1920
  and 120px at 1440.
- **Top nav** is full-width with 120px side padding, so it's wider than the
  container. The Pearl hero also uses 120px side padding.
- Pearl's narrative sections use a **narrow reading column**: 740px including
  64px side padding (612px of text), centred.
- Mobile: 16px gutter (343px content at 375). Tablet: 32px gutter (recommendation).
- Breakpoints (not tokenised): mobile < 768, tablet 768–1199, desktop ≥ 1200.

### Every page
**Top nav** at the top of every page, including Sampath and Pearl. They don't
have it in Figma yet, but they get it in the build. **Footer** at the bottom of
every page.

### Home (top to bottom)
1. **Top nav**: fixed, 88px tall.
2. **Hero**: content starts 172px below the top of the page. Eyebrow
   "I am Sathila De Silva" (`h6`, `text-tertiary`) with a 116×63 pill-shaped
   avatar overlapping its end, then the `h1` headline (max ~930px), then a lead
   line (`body-xl`, `text-secondary`) ending in the word "Fintech" (`h5`,
   gradient). Stack gap 24.
3. **Work**, 120px below the hero: two project cards side by side (576px each,
   gap 48), then one full-width project card (1200px). 48px between rows.
4. **Clients and Brands**, 80px below: `h4` title, 48px gap, then a row of
   logo tiles (gap 40).
5. **Footer**, 80px below.

### MEGT case study (page background `bg-subtle`)
1. **Top nav**.
2. **Intro** (1200 container): eyebrow line "Client · Product type · Year"
   (`h6`, `text-tertiary`), gap 8, then `h1` headline, gap 24, lead paragraph
   (`body-xl`, `text-secondary`, max ~840px).
3. **Metadata row**, 56px below: 4 columns (My role, Timeline, Deliverables,
   Tools) distributed evenly, gap 40.
4. **Hero media**, 56px below: 1200px wide, `rounded.lg`.
5. **Metrics band**: full-bleed `bg-inverse`, 334px tall, 4 metrics with gap 40,
   centred.
6. **Body**: a **sticky sidebar** at the left (x = 120, 234px wide) with
   "← Go back" and section links. The content column starts at x = 480 and is
   1200px wide (240px right margin at 1920). Sections are 120px apart. "How it
   was built" and "Design system" are full-bleed `bg-inverse` sections.
   - Below 1440px, hide the sidebar or turn it into a horizontal "jump to" row
     (recommendation). It must never cover the reading column.
7. **Footer**.

### Sampath case study (no sidebar)
1. **Top nav** over a dark image hero. See Components for the nav on dark heroes.
2. **Hero**: full-bleed dark image, 887px tall, content **centred**. Eyebrow
   (`h6`, `text-sampath-secondary`) with an 8px `fg-sampath` dot, then the `h1`
   title in `text-white`. Below that, a translucent metadata band of 4 cells
   (label `label-s` uppercase in white; value: first line `label-l`, then
   `body-l`, in white at 70%).
3. **Numbered sections** ("01 — Starting Point" … "08 — Reflection"): full-bleed
   bands alternating `sampath-bg-warm` and `sampath-bg-dark`. Inside each, a
   1200 container with 64px side padding and 120px top and bottom padding.
   - Warm sections: headings `text-primary`, body `text-secondary`, eyebrows
     `text-sampath`.
   - Dark sections: headings (`h2`) `text-sampath-secondary`, body `text-light`,
     eyebrows `text-sampath`.
4. **Footer**.

### Pearl case study (page background `pearl-bg`, no sidebar)
1. **Top nav**.
2. **Hero**: left-aligned with 120px side padding. Eyebrow (`h6`,
   `text-tertiary`), then the `h1` headline (max ~1175px), then a lead paragraph
   (`body-xl`, `text-secondary`, max ~835px). Artwork on the right (~706px).
3. **Hero metadata band**: full-width row of 4 cells, 480px each, with
   `border-default` hairlines and padding 32/40 (snapped from 28/40). Label
   `label-s` + `text-tertiary`; value: first line `label-m`, then `body-m`, in
   `text-secondary`.
4. **Metrics band**: full-bleed `pearl-bg-dark-alt`, metrics evenly spaced in
   the 1200 container (`number-*` values).
5. **Numbered sections**: full-bleed bands alternating `pearl-bg` and white, each
   with 120px top and bottom padding (80 for "The Exception") and content in the
   narrow reading column. "Building the Engine" uses `pearl-bg-dark` with
   headings in `text-white` and body in `text-off-white`.
6. **Footer**.

## Elevation & Depth

The shell is flat. Separation comes from whitespace and background changes.

- **Top nav**: `rgba(255,255,255,0.19)` with `backdrop-filter: blur(10px)`.
- **Product screenshots and illustrations**: one shadow,
  `0 8px 16px rgba(0,0,0,0.08)`, plus a 1px `border-media` outline on
  screenshots. (Figma uses several near-identical shadows; normalise to this one.)
- Atmospheric blurs, gradients and glows *inside* project imagery belong to the
  work. Export them as images rather than rebuilding them in CSS.
- No shadows on cards, sections or nav.

## Shapes

| Token | Use |
|---|---|
| `rounded.sm` 8 | Client-logo tiles |
| `rounded.md` 16 | Info cards, product screenshots, MEGT and Batelco project media |
| `rounded.lg` 24 | Case-study hero media, Sampath project media |
| `rounded.full` | Avatar pill, social-icon circles |
| 0 | Page sections, bands, nav |

Radii inside project artwork stay as they are. Don't normalise imagery.

## Components

**Top nav** (every page): logo mark ("S", 18×24, brand gradient) on the left.
Text links on the right (Home, Contact): `label-l`, `text-tertiary`, gap 40,
vertically centred. Height 88, padding 32/120. Translucent white with blur,
fixed to the top. Hover: `text-primary`. Mobile: same links with 16px padding.
Two links fit, so no hamburger is needed.
- *On dark heroes (Sampath), not designed in Figma. Recommendation:* use
  `text-white` links and a white logo while the nav overlaps the hero, then
  switch to the default style once the page scrolls past it.

**Project card** (Home): vertical stack, gap 16.
- Media: `bg-subtle` well containing the project visual. 576×537 (half) or
  1200×559 (full). `rounded.md`, or `rounded.lg` for Sampath as in Figma.
  Export the visual as one image.
- Text box, gap 8: category line (`title-m`, `text-label`, "A • B • C"),
  then title (`h6`, `text-primary`, max ~900px).
- The whole card is one link. Hover: media scales to 1.02 over 200ms, and the
  title underlines.
- Mobile: single column.

**Client-logo tile**: 138×64, `bg-subtle`, `rounded.sm`, logo centred at its
original colours and proportions. Row gap 40. Wrap on smaller screens.

**Section heading** (MEGT): vertical stack, gap 8: eyebrow (`label-m`,
`text-tertiary`), then heading (`h2`, `text-heading-brand`, max ~690px). Lead
paragraph (`body-xl`, `text-secondary`) 48px below. Content 48px below that.
Sampath and Pearl use the same `h2` + `body-xl` pairing with the colours listed
for their sections.

**Metadata item** (MEGT): label (`title-l`, `text-heading-brand`), gap 12, then
values as a list (`body-m`, `text-secondary`) with 8px gap.

**Metrics band**: full-bleed, 334px tall, content centred. Each metric: value
(`number-xl`), gap 12, label (`title-m`), both `text-off-white` on MEGT. 4 per
row on desktop, 2×2 on tablet and mobile. Keep "+" and units exactly as written.

**Info card** (MEGT): `bg-cards` on the `bg-subtle` page, `rounded.md`,
padding 16, gap 16: 32px icon (pink-violet gradient), then copy (gap 12): title
(`h6`, `text-primary`), body (`body-l`, `text-secondary`). Grid gap 24, 2 per
row on desktop, 1 on mobile.

**Story row** (MEGT): illustration 716px wide, `rounded.md`, with the shared
shadow. Gap 24 to the text. Rows 80px apart. Stacks on mobile.

**Sticky sidebar** (MEGT): "← Go back" (`label-l`, `text-link-active`), 40px gap,
then section links (gap 12). The active link uses `label-l` + `text-link-active`,
and inactive links use `title-l` + `text-tertiary`. Highlight the active link on
scroll (IntersectionObserver).

**Footer** (every page): white, 316px tall, content centred, gap 56. Social
icons: 44px circles, `bg-icon-subtle`, 24px brand-gradient icon, gap 40
(LinkedIn, Mail, Instagram, Dribbble). Then "© {year} Sathila De Silva. All
rights reserved." (`body-m`, `text-secondary`, 16px icon, gap 8).

**Button** (not used on current screens): `button-primary` per front matter,
padding 12/24, `rounded.full`, with the contrast note in Colors.

### Interaction states (not designed in Figma; use these defaults)
- Links: hover `text-primary`. Focus: 2px `primary-700` outline, 2px offset.
- Cards: hover as above. Focus-visible ring on the card link.
- Keep motion to 150–250ms ease-out and respect `prefers-reduced-motion`.
- Touch targets ≥ 44px.

## Do's and Don'ts

**Do**
- Build from Mapped Colors and the type and spacing tokens. Emit all three
  colour layers as CSS custom properties.
- Use the same text tokens on every page. Switch only backgrounds per case study.
- Put the top nav and footer on every page.
- Snap off-scale spacing to the scale using the table above.
- Keep project copy, numbers, roles and timelines exactly as in the designs.
- Export project visuals (mockups, collages, diagrams, illustrations) as images
  or animations.
- Use semantic HTML: one `h1` per page (the hero headline), ordered headings,
  and alt text on all project images.

**Don't**
- Hardcode hex values outside the tokens, or use `raw-*` primitives in components.
- Use a case study's background colours on another page.
- Use 10px, 20px, 28px or any other off-scale spacing.
- Load any font other than Google Sans Flex and Google Sans Code.
- Bold headings or numbers, or use all-caps headlines.
- Add shadows to cards and sections, or gradients beyond the listed uses.
- Invent metrics, testimonials or claims. Force desktop line breaks on mobile.
