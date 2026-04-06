# CLAUDE.md — CLARVUE Project Guide

> For any Claude session working in this repository.
> This file provides working rules. For the full brand story, see `CLARVUE-context.md`. For design tokens and component rules, see `design.md`.

---

## Project Summary

**CLARVUE** is an AI-powered luteal phase companion app. It is not a period tracker. It makes two daily decisions during the 7-day window before menstruation — a hormone-calibrated meal (THE TUNNEL) and a micro-protocol action (DAILY RESET) — so the user doesn't have to.

**Brand promise:** *"CLARVUE sees it before you feel it."*

**Live MVP:** https://seuyoungc.github.io/clarvue-mvp/

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS v4 + inline styles (design token constants) |
| Fonts | Space Grotesk (wordmark only) · Manrope (all body/headings/labels) · Space Mono (data/numbers) — Google Fonts, loaded in `index.html` |
| Storage | localStorage only — no accounts, no backend |
| Deploy | GitHub Pages via `gh-pages` |

---

## Key Files

| File | Purpose |
|---|---|
| `src/App.jsx` | All UI logic and components — single-file app |
| `src/index.css` | Tailwind import + base body styles |
| `src/assets/logo.svg` | Logo mark (symbol only, use as `<img>`) |
| `src/assets/full-logo-dark.svg` | Full lockup — SVG text, use on dark backgrounds |
| `src/assets/full-logo-light.svg` | Full lockup — use on light backgrounds |
| `CLARVUE-context.md` | Full brand context, persona, voice, feature spec |
| `design.md` | **Living design system** — tokens, components, rules. Read this before making UI changes. |

---

## How to Use `design.md`

`design.md` is the single source of truth for all visual decisions in this project.

**Before making any UI change, read:**
1. `design.md` → Section 2 (Color Tokens) and Section 3 (Typography)
2. `design.md` → Section 5 (Component Rules) for the specific component you're touching

**Critical rules from `design.md` to internalize:**
- **No border lines** on cards or sections — use surface hierarchy (background shifts) instead
- **Silver (`#C8D4C0`) only appears when CLARVUE has acted** — never use it decoratively
- **Space Mono for all data/numbers** — day counts, timestamps, prep times, macros
- **Feature labels** (THE TUNNEL, DAILY RESET) use Space Grotesk, 10px, 600, +0.15em tracking, uppercase

---

## Brand Rules (Non-Negotiable)

**Always:**
- CLARVUE = ALL CAPS always
- Brand archetype: Ruler × Sage — optimizes and equips, does not comfort or nurture
- Frame interactions as briefings/actions, not suggestions
- Silver (#C8D4C0) = the visual language of "CLARVUE acted" — treat it as a Pavlovian signal

**Never:**
- Use pink, blush, or purple anywhere
- Use `#000000` pure black — always use Cipher Green (`#0A140A`) for deep darks
- Add tracking features, symptom logs, streak mechanics, or anything that puts cognitive work on the user
- Refer to CLARVUE as a "period app" or "cycle tracker"
- Use soft, reassuring, or comfort-coded language in UI copy ("You've got this!", "Be gentle with yourself")
- Use the text "Phase Ring" — the logo is the Focused Quadrant

**Copy patterns:**
- Lead with data or status, not emotion
- Past tense for actions already taken ("Protocol adjusted", "Meals front-loaded")
- Feature names ALL CAPS: THE TUNNEL, THE PROTOCOL
- Meals are decided, not suggested: "Today's fuel." not "We recommend:"

---

## Design System in Code (`src/App.jsx`)

Color tokens are defined at the top of `App.jsx` as the `C` constant:

```js
const C = {
  bgBase:       '#0A140A',  // Cipher Green — page background
  bgSurface:    '#0F1A0F',  // Card surface — 1st lift
  bgElevated:   '#152015',  // Inner elements — 2nd lift
  signalGreen:  '#3D7A3D',  // CTAs, active states
  forestSignal: '#1A2E1A',  // Phone frame, brand dominant
  malachite:    '#2D5C2D',  // Gradient mid-point
  silverMist:   '#C8D4C0',  // AI acted signal
  sageCircuit:  '#6B9B6B',  // Secondary text
  textPrimary:  '#E8EDE4',  // Chrome White
  textMuted:    '#6B9B6B',  // Muted body
  textDim:      '#3A4A3A',  // Very muted — timestamps, labels
}
```

Font families are constants: `grotesk` (Space Grotesk, wordmark only), `mono` (Space Mono, data), `dm` (Manrope — renamed constant kept as `dm` for stability, value is `'Manrope', sans-serif`).

Cards use glassmorphism: `rgba(15, 26, 15, 0.75)` background + `backdrop-filter: blur(20px)` + ghost border `rgba(200, 212, 192, 0.06)`. Onboarding input card uses a lighter glass on the brand gradient.

To add a new component, follow the patterns in `ActionCard` and `MealModal` — glassmorphism card, Space Grotesk for feature labels, Manrope for body, Space Mono for data.

---

## Current Screens

| Screen | Trigger | Key Element |
|---|---|---|
| Onboarding | No date set | Date input → INITIALIZE button |
| Active Window | 1–7 days before period | DAY N OF 7 counter · THE TUNNEL meal card · DAILY RESET action card |
| Dormant | >7 days before period | Dimmed logo · "WINDOW OPENS IN N DAYS" countdown |

---

## What's Not Built Yet

- THE PROTOCOL (Phase 2 — calendar sync, Apple/Google Calendar)
- Push notifications
- User accounts
- Mood check-in (in ideation — not confirmed)
- Dormant state ambient intelligence (open problem — see CLARVUE-context.md §8)

Do not build these unless explicitly asked. Do not add tracking, symptom logging, or streak mechanics.

---

*Last updated: April 2026 · Sync with CLARVUE-context.md for any product or brand decisions.*
