# CLARVUE Design System
> Living design document. Single source of truth for all visual decisions.
> Read this before touching any UI. Update it when decisions are made.

---

## 1. Creative North Star

**"The Digital Herbarium"** — a high-end editorial experience that is clinical and precise, never soft or decorative. We blend the rigor of a laboratory instrument with the organic depth of botanical documentation.

CLARVUE does not look like a wellness app. It looks like a precision instrument worn by someone who also owns an Oura ring.

**Archetype in visual language:** Ruler × Sage — structured, authoritative, earned. Every design decision should feel *decided*, not suggested.

### Three-State Theme System

Each app state has a distinct background treatment. Do not mix them.

| State | Background | Text | Notes |
|---|---|---|---|
| **Onboarding** | Brand gradient `135deg · #1A2E1A → #3D7A3D → #C8D4C0` | Chrome White (`#E8EDE4`) | Full-screen gradient via `screenBg` prop; form card uses glassmorphism |
| **Active Window** | Chrome White (`#E8EDE4`) | Forest Signal (`#1A2E1A`) dark text | Light theme — all cards, text, and labels adapted for light bg |
| **Dormant** | Cipher Green (`#0A140A`) | Chrome White (`#E8EDE4`) | Dimmed logo, muted countdown |

**Outer page background** (behind phone mockup on desktop): `#E8EDE4` — matches Active Window, feels like the phone is resting on the same surface.

### Active Window — Light Theme Details

The screen background (`#E8EDE4`) requires all colors to flip. Key mappings when `screen === 'active'`:

| Element | Dark (default) | Light (active) |
|---|---|---|
| Card bg | `rgba(15,26,15,0.75)` dark glass | `rgba(26,46,26,0.06)` light glass |
| Primary text | `#E8EDE4` Chrome White | `#1A2E1A` Forest Signal |
| Feature labels | `#C8D4C0` Silver Mist | `#3D7A3D` Signal Green |
| Status chip | Silver Mist on dark | Signal Green on light |
| Logo wordmark | `#C8D4C0` Silver Mist | `#1A2E1A` Forest Signal |
| RESET button text | Chrome White | Forest Signal |
| Day counter number | Chrome White | Forest Signal |
| DAY / OF 7 labels | textDim | Signal Green |

Components with `light` prop: `LogoLockup`, `ActionCard`.

---

## 2. Color Tokens

These are the canonical values. Use them consistently. Do not introduce new hex values without adding them here.

| Token | Hex | Role |
|---|---|---|
| `bgBase` | `#0A140A` | Cipher Green — deep canvas. Never use `#000000`. |
| `bgSurface` | `#0F1A0F` | Card surfaces — 1st lift above base. Replaces borders. |
| `bgElevated` | `#152015` | Inner/nested elements — 2nd lift. Secondary buttons. |
| `signalGreen` | `#3D7A3D` | Signal Green — CTAs, active states, checkboxes |
| `forestSignal` | `#1A2E1A` | Forest Signal — brand dominant, phone frame, logo fill |
| `malachite` | `#2D5C2D` | Gradient mid-point, depth layers |
| `silverMist` | `#C8D4C0` | **AI acted indicator.** Only appears when CLARVUE has done something. |
| `sageCircuit` | `#6B9B6B` | Secondary elements, muted body text, step numbers |
| `textPrimary` | `#E8EDE4` | Chrome White — all primary text on dark surfaces |
| `textMuted` | `#6B9B6B` | Same as sageCircuit — muted body, descriptions |
| `textDim` | `#3A4A3A` | Very muted — category labels, timestamps, ghost elements |

**Silver rule:** `silverMist` appears only where CLARVUE has already taken an action. The meal card left-border is silver because CLARVUE already decided the meal. The Active Window chip is silver because CLARVUE is watching. Seeing silver = relief. Never use it decoratively.

**Dark mode only.** Light mode is deferred. Do not design light surfaces.

### Gradients

| Name | Value | Use |
|---|---|---|
| The Signal | `135deg · #1A2E1A → #3D7A3D → #C8D4C0` | Window activation accent, hero moments |
| Night Protocol | `180deg · #0A140A → #1A2E1A` | Dark surface depth, phone background |
| The Edge | `90deg · #6B9B6B → #E8EDE4` | Subtle surface accents |

---

## 3. Typography

Three-font system. Each has a specific role — do not mix roles.

| Font | Role | Weights |
|---|---|---|
| **Space Grotesk** | CLARVUE wordmark only | 400 · 500 · 600 · 700 |
| **Manrope** | All body text, headings, labels, buttons, form labels | 300 · 400 · 500 · 600 · 700 |
| **Space Mono** | All numerical data — day counts, prep times, timestamps | 400 |

**Rule:** Any number that represents data (DAY 3 OF 7, prep time, macro amounts) must use Space Mono. It signals measurement.

### Type Scale

| Level | Font | Size | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| Brand Mark | Space Grotesk | — | 700 | −0.02em | CLARVUE wordmark — headline tight tracking |
| Display | Space Grotesk | 36–46px | 700 | −0.02em | Day counter "3", dormant countdown |
| H1 | Space Grotesk | 20–22px | 700 | +0.01em | Meal name in modal |
| H2 | Space Grotesk | 14–16px | 600 | +0.01em | Meal card title |
| Feature Label | Space Grotesk | 10px | 600 | +0.15em | TODAY'S PICK, ONE THING TO TRY TODAY — always uppercase |
| System Label | Space Grotesk | 9–10px | 600 | +0.10–0.14em | Category tags, section metadata — always uppercase |
| Body | Manrope | 13–14px | 400 | 0 | Card descriptions, modal content |
| Body Sm | Manrope | 11–12px | 400 | 0 | Sub-labels, science notes, hints |
| Data Display | Space Mono | 80px | 700 | −0.03em | Day counter number |
| Data Label | Space Mono | 22px | 700 | +0.06em | "DAY", "OF 7" — large, same visual weight as number |
| Dormant Data | Space Mono | 52px | 700 | −0.02em | Dormant countdown number |
| Dormant Label | Space Mono | 14px | 400 | +0.06em | "WINDOW OPENS IN", dormant timestamps |
| Data Chip | Space Mono | 10–11px | 400 | +0.06em | Prep time badge, system-generated values |
| Caption | Manrope | 11–12px | 400 | +0.01em | Supporting info, science note in card |

---

## 4. Surface Hierarchy — The No-Line Rule

**Explicit rule from the preferred aesthetic:** Do not use 1px solid borders to section content. Depth is created through background shifts and negative space — never strokes.

The UI is a stack of fine, heavy-weight paper sheets.

| Layer | Token | Hex | Usage |
|---|---|---|---|
| Page canvas | `bgBase` | `#0A140A` | Base background — the void |
| Cards / sections | `bgSurface` | `#0F1A0F` | Any card, panel, or grouped content |
| Inner elements | `bgElevated` | `#152015` | Buttons (secondary), nested containers, science note box |
| Floating/Modal (active) | Chrome White | `#E8EDE4` | MealModal on Active Window — light theme, no blur overlay |

A `bgSurface` card on a `bgBase` page has a visible, natural lift without any border. No dividers inside cards — use `gap` spacing (12–16px) to separate header from body.

### Exception: The Silver Signal
The meal card's left border (`3px solid #C8D4C0`) is not a layout separator — it is a brand signal. It is the only permitted "border" in the UI. It means: CLARVUE decided this.

### Ghost Border (Accessibility Fallback Only)
If a UI element absolutely requires a boundary for accessibility, use: `outline-variant` (`#6B9B6B`) at **15–20% opacity**. Example: input field focus state. High-contrast solid borders are forbidden.

---

## 5. Components

### 5.1 Cards

Glassmorphism is the primary card treatment across all states.

```
Background: rgba(15, 26, 15, 0.75)  — semi-transparent bgSurface
Backdrop-filter: blur(20px)
Border: 1px solid rgba(200, 212, 192, 0.06)  — ghost highlight
Border radius: 12px
Padding: 12–14px / 14–16px
Gap (internal): 8–10px between header and body
```

**Onboarding input card (on gradient):**
```
Background: rgba(10, 20, 10, 0.35)
Backdrop-filter: blur(20px)
Border: 1px solid rgba(232, 237, 228, 0.12)
Border radius: 16px
```

**Meal card specifics:**
- Silver left border: `border-left: 3px solid #C8D4C0` (the only permitted opaque border — brand signal)
- Hover: background shifts to `rgba(18, 30, 18, 0.85)`
- cursor: pointer
- Prep time: Space Mono chip in `rgba(200, 212, 192, 0.1)` background, `#C8D4C0` text

**Action card specifics:**
- No silver border (action is presented, not decided by CLARVUE)
- Done overlay: glassmorphism (`rgba(8,14,8,0.88)` + `backdrop-blur: 12px`)
- Done overlay text: Space Mono, Silver Mist — "RESET COMPLETE."

### 5.2 Buttons

```
Primary (CTA):
  Background: #3D7A3D (Signal Green)
  Text: #E8EDE4 (Chrome White)
  Font: Space Grotesk, 12px, 700, +0.12em tracking, uppercase
  Radius: 12px
  Hover: opacity 0.85
  Transition: opacity 200ms ease

Secondary:
  Background: #152015 (bgElevated)
  Text: #3A4A3A (textDim) or #6B9B6B (textMuted)
  Font: Space Grotesk, 9px, 600, +0.10em tracking, uppercase
  Radius: 8px
  Border: none
  Hover: background shifts slightly lighter

Ghost (Reset):
  Background: transparent
  Border: none
  Text: #E8EDE4 at 20% opacity
  Hover: 60% opacity
  Used only for the Reset button — de-emphasized, accessible but unobtrusive
```

**Rule:** No pill-shaped buttons. 12px outer radius, 8px inner. No pure rounded buttons (`rounded-full`) except the logo mark status dot.

### 5.3 Inputs

```
Background: bgSurface (#0F1A0F)
Font: Space Mono (emphasizes precision)
Border: 1.5px solid rgba(107, 155, 107, 0.20) — ghost Sage Circuit
Focus border: rgba(107, 155, 107, 0.50)
Radius: 10px
Padding: 12px 16px
```

### 5.4 Feature Labels

The brand identifiers for major features. Always uppercase. Space Grotesk 10px 600 +0.15em.

```
THE TUNNEL   → color: silverMist (#C8D4C0)
DAILY RESET  → color: textDim (#3A4A3A) — quieter, secondary feature
THE PROTOCOL → color: silverMist (reserved, Phase 2)
```

### 5.5 AI Intelligence Chips

Used for system-generated data (prep time, window status):

```
Font: Space Mono, 10–11px
Background: rgba(200, 212, 192, 0.10) — Silver Mist at 10%
Text: #C8D4C0 (Silver Mist)
Radius: 4px
Padding: 3px 8px
```

"Stamped metal tags, not soft buttons."

### 5.6 Checkboxes (Action Card)

```
Default: 20×20px, radius 4px, border 1.5px solid rgba(58,74,58,0.6)
Checked: Signal Green background, SVG checkmark (stroke #E8EDE4)
Transition: background-color 200ms ease, border-color 200ms ease
```

Always use an SVG checkmark icon — not a text character (`✓`).

### 5.7 Week Strip

```
Day label: Space Grotesk, 9px, 500, uppercase, textDim
Date number: Space Mono, 11px
Today circle: Signal Green (#3D7A3D), Chrome White text
Period start circle: #4A1E1E (dark warm red), #C08080 text
"START" label: Space Grotesk, 8px, 600, #7A4040
"TODAY" label: Space Grotesk, 8px, 600, Sage Circuit
Footer text: Space Mono, 10px, textDim — "N DAYS REMAINING IN WINDOW"
```

### 5.8 Modal (MealModal)

**Light theme — matches Active Window state.**

```
Background: #E8EDE4 (Chrome White) — no dark overlay, no blur
Triggered by tapping meal card
Header: TODAY'S PICK feature label in Signal Green (left) + Close button (right)
Close button: rgba(26,46,26,0.08) bg, Signal Green text
Meal name: Forest Signal (#1A2E1A), Space Grotesk 20px 700
Prep time chip: rgba(61,122,61,0.1) bg, Signal Green text
Science note: rgba(26,46,26,0.05) container, Sage Circuit text
Ingredient list: dash (—) in Sage Circuit, Manrope 13px, Forest Signal body
Steps: Space Mono step numbers in Signal Green, Manrope body in Forest Signal
Closing: tapping overlay or Close button
```

### 5.9 Logo Lockup

Use the `LogoLockup` component with size `sm` | `md` | `lg`, `dim` prop for dormant, `light` prop for Active Window.

- Mark: `logo.svg` as `<img>` (fills render correctly, no font dependency)
- Wordmark: Space Grotesk 700, −0.02em tracking (headline tight spacing)
  - Default (dark bg): Silver Mist (`#C8D4C0`)
  - `light={true}` (Active Window): Forest Signal (`#1A2E1A`)
- Onboarding: mark only (`logo.svg`, 72×72px) — no wordmark text
- Active: `opacity: 1`
- Dormant: `opacity: 0.3`

**Do not use `full-logo-dark.svg` or `full-logo-light.svg` as `<img>` tags** — the SVG text references Space Grotesk externally and will not render correctly. Compose the lockup with `logo.svg` + styled HTML text instead.

`full-logo-dark.svg` and `full-logo-light.svg` are suitable for exports, presentations, and contexts where the font is embedded or can be guaranteed (Figma, print).

---

## 6. Motion

```
Duration: 200–300ms for micro-interactions
Duration: 600ms for window activation gradient fade
Easing: cubic-bezier(0.16, 1, 0.3, 1) — sharp ease-out
Property: use transform/opacity only (not width/height)
```

**Transitions to implement:**
- Button hover: `opacity 200ms ease`
- Card hover: `background-color 200ms ease`
- Logo dimming: `opacity 300ms ease`
- Done overlay: appears with `backdrop-blur`

**`prefers-reduced-motion`:** Skip all transitions for users who have it set. (Not yet implemented — Phase 2.)

---

## 7. Spacing & Layout

**Base grid:** 8px. All spacing in multiples of 4 or 8.

| Spacing | Value | Usage |
|---|---|---|
| xs | 4–5px | Internal gaps (icon to text) |
| sm | 8–10px | Within component gaps |
| md | 14–18px | Between components |
| lg | 24–28px | Section separation |
| xl | 32px+ | Breathing room — the No-Line Rule uses space to create cognitive separation |

**Mobile:** Full `100dvh` layout, no horizontal scroll. Content fits without scroll on active screen.
**Desktop:** 414×868 phone mockup centered on `#050C05` background.

**Card radius:** 12px outer, 8px inner (e.g., prep time chip within meal card).
**Button radius:** 12px (primary), 8px (secondary/ghost).
**Input radius:** 10px.

---

## 8. Elevation & Depth

Traditional drop shadows are prohibited. Depth is achieved by stacking background tiers.

```
Level 0 — Page:   bgBase  (#0A140A)
Level 1 — Cards:  bgSurface (#0F1A0F)
Level 2 — Nested: bgElevated (#152015)
Level 3 — Float:  rgba(6,12,6,0.96) + blur(20px)
```

**Ambient shadows:** Only for the phone mockup itself:
`0 48px 120px rgba(0,0,0,0.95), 0 8px 32px rgba(0,0,0,0.7)`

---

## 9. Copy Rules (UI Text)

| Pattern | Do | Don't |
|---|---|---|
| Status | "Your window is active." | "You're in your luteal phase!" |
| Feature intro | "Today's fuel. Decided." | "Today's pick." / "We recommend:" |
| Action completion | "Good. That's enough for today." | "Good job! Keep it up." / "RESET COMPLETE." |
| Dormant | "CLARVUE is monitoring." | "Come back soon!" |
| Data labels | "DAY 3 OF 7" | "Day 3 of your window" |
| Window countdown | "WINDOW OPENS IN / 14 DAYS" | "Window inactive — 14 days to go!" |
| Contextual intel | "Day 4. Progesterone drop flagged. Protocol calibrated." | "Day 4 — you might be feeling a bit off" |

Notification copy: under 12 words. Past tense where CLARVUE has acted. No exclamation marks. No emoji in UI.

---

## 10. What This Design System Avoids

- Pink, blush, lavender, purple — any color that places CLARVUE in the "period app" category
- Rounded pill buttons — signals playfulness, not precision
- Divider lines between card sections — use space instead
- Emoji used as icons — use SVG icons (Heroicons, Lucide, or inline SVG)
- Soft overlay copy ("Good. That's enough for today.") — use data-forward language
- Gradient backgrounds on the full screen — reserved for activation moments only
- Pure black (`#000000`) — always Cipher Green (`#0A140A`) for deep darks

---

## 11. Pre-Delivery Checklist

Before shipping any UI change:

**Visual**
- [ ] No color values outside the token system (no new hex values without updating this doc)
- [ ] No explicit content borders (`border: 1px solid`) — surface lift only
- [ ] Silver (#C8D4C0) used only where CLARVUE has acted
- [ ] Space Mono on all data, numbers, and system-generated values
- [ ] Space Grotesk on all labels, feature names, UI metadata

**Interaction**
- [ ] All clickable elements have `cursor: pointer`
- [ ] All interactive elements have hover states with smooth transitions (150–300ms)
- [ ] Buttons disabled visually during async operations (not yet implemented — Phase 2)

**Accessibility**
- [ ] Images have `alt` text (or `aria-hidden="true"` for decorative)
- [ ] Icon-only buttons have `aria-label`
- [ ] Minimum 44×44px touch targets on mobile

**Copy**
- [ ] No exclamation marks
- [ ] No reassuring/comfort language
- [ ] Feature names ALL CAPS (THE TUNNEL, THE PROTOCOL, DAILY RESET)
- [ ] CLARVUE always ALL CAPS

---

*CLARVUE Design System · April 2026 · Sync with CLARVUE-context.md for brand decisions.*
