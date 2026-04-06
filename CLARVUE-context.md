# CLARVUE — Project Context File
> For use with Claude (MCP / Claude Code / Claude.ai)
> Last updated: April 2026 · Version 2.1

---

## What This File Is

This file gives Claude full context about the CLARVUE project so that every conversation — whether in Claude.ai, Claude Code, or via MCP — starts with complete shared understanding. No re-explaining. No re-establishing tone. Just work.

---

## 1. Project Overview

**CLARVUE** is an AI-powered luteal phase companion app for women. It is not a period tracker. It is a precision micro-decision system that activates for exactly 7 days before menstruation — the luteal phase, when PMS symptoms peak — and makes two decisions for the user each day so she doesn't have to:

1. **THE TUNNEL** — one hormone-calibrated meal recommendation per day
2. **THE PROTOCOL** — AI-driven calendar adjustment that reschedules or downgrades high-intensity tasks before she feels the disruption

The core insight: existing apps (Clue, Flo, Moody Month) are historians. They track, educate, and explain. None of them *act*. CLARVUE acts. It sees the window coming and engineers the week before she feels anything.

**Brand promise:** *"CLARVUE sees it before you feel it."*
**Primary tagline:** *"Clarity before the disruption."*

---

## 2. The Name

**CLARVUE** — pronounced KLAR-vyoo. Always written in ALL CAPS.

Three stacked meanings that all simultaneously apply:

| Meaning | Explanation |
|---|---|
| Clarity of vision | *Clair* (French: clear, bright) + *vue* (view, vision) — she sees her week before it happens |
| Clairvoyance | Deliberately echoes *clairvoyant* — the AI is genuinely predictive, not reactive |
| Premium European register | French construction places it in the same aesthetic register as Phlur, Aesop, Byredo |

---

## 3. The Problem (Research-Backed)

Three themes run through every study, every personal narrative, every app review from women dealing with PMS and PMDD. They are consistent, research-backed, and emotionally charged.

### 3.1 Life derails on schedule — and no one engineers around it
PMS and PMDD are linked to significant absenteeism, reduced productivity, and impaired daily functioning. Women with PMDD describe the premenstrual week as a time when ordinary activities become impossible — then they overcompensate afterward, working longer hours and bringing work home, fueling a crash-guilt-burnout loop that repeats every cycle. This is not moodiness. It is a predictable, recurring disruption that deserves proactive structure, not willpower.

### 3.2 She is not believed — or is trivialized as "just PMS"
PMS is routinely dismissed. PMDD is underdiagnosed and stigmatized. Women report cycling through 5+ healthcare providers, encountering dismissal or ignorance, before receiving appropriate help. Personal narratives describe years of being told it's "just stress" or "just how women are."

### 3.3 She manages it alone — with brain fog and too many decisions
Attention and working memory are measurably weaker in the luteal phase. Yet this is exactly when she's expected to manage medication, meals, workouts, and deadlines. Her coping strategies are manual and ad hoc. Existing apps make it worse — PMDD users report that long symptom forms and complex interfaces feel like extra work during the luteal phase. They explicitly ask for simple navigation, minimal distractions, and the ability to opt out of non-useful features.

### Product Hypothesis
If we give women with PMS/PMDD a low-burden assistant that anticipates their luteal phase and delivers one small, concrete daily action, they will feel less blindsided, experience less decision fatigue, and report fewer disruptions to work and relationships during that week.

### Key Research Sources
- *The impact of premenstrual disorders on work disruptions* (2024, PMC) — absenteeism, reduced productivity
- *Changes in mood, cognitive performance and appetite in the late luteal and follicular phases* (ScienceDirect) — dysphoric mood, food cravings, cognitive slowing
- *Effects of PMS/PMDD on attention and short-term memory* (Düşünen Adam) — luteal-phase attention/memory impairment
- *Double stigma of menstruation and premenstrual disorders* (2025, PMC) — trivialization, underdiagnosis
- *Patient Perspectives of Healthcare for PMDD in Australia* (2026, PMC) — 5+ providers before appropriate help
- *Self-perception of the illness experience… PMDD* (Longdom) — "ruining my life," daily activities impossible
- *Ways of coping with premenstrual change* (PMC) — anticipation, planning, stress avoidance
- *Developing a Mood and Menstrual Tracking App for People With PMDD* (JMIR Formative, 2024) — minimal burden, save effort

---

## 4. Target Audience

**Young professional women, ages 20–40, with real purchasing power and high trend sensitivity.**

She is not new to wellness. She is upgrading it.

### Who She Is
- Uses Oura, tracks macros, has a curated supplement stack
- Buys Phlur over Bath & Body Works — not because it's more expensive, but because it's more intentional
- Reads ingredient labels and knows what adaptogens are
- Follows longevity/biohacking creators (Huberman, Attia, etc.)
- Views her menstrual cycle as data to be optimized, not a burden to be managed

### How She Dresses
- Business by day — polished, intentional, put-together without being overdone
- Athleisure for off hours — Alo, Lululemon, the kind of workout-to-brunch outfit that signals she takes her body seriously

### Her Social Media Aesthetic
- Healthy habits, diets, science-backed wellness facts
- Exercise routines and movement content
- Meal prep ideas — clean, photogenic, functional
- Heavy Pinterest user — curates boards for ideas, aesthetics, routines
- Her feed looks intentional, not aspirational. She's already doing these things, not dreaming about them.

### Brands She Already Loves
- **Beauty / Fashion:** Refy, Rhode, Alo, Lululemon — minimal, confident, premium but not ostentatious
- **Wellness:** AG1, Oura, WHOOP, Levels — data-driven, performance-oriented, credible
- **Fragrance / Lifestyle:** Phlur, Aesop, Byredo — curated, European register, intentional

### What She Signals to Her Peers
She signals *intentionality over volume*. Her choices say: I researched this. I chose this deliberately. My wellness is architected, not reactive. She doesn't broadcast struggle — she broadcasts that she has systems in place. Owning an Oura ring or drinking AG1 isn't about health anxiety; it's about communicating that she treats her body like an asset worth investing in. She signals competence and control — her routine, her supplements, her workout split all say "I have this handled." CLARVUE needs to feel like the next tool in that curated stack: the one that handles the one week no one else has a system for.

**Her core self-concept (the identity CLARVUE must confirm):**
> *"I am a successful woman who is aware of her health and has agency to use tools to make my life better."*

CLARVUE must confirm that identity. She should feel, picking up this app, exactly what she feels picking up a Phlur fragrance or a precision supplement — *this was made for someone like me.*

**She is not:**
- Looking for softness or reassurance
- Tracking her cycle because her doctor told her to
- Overwhelmed by information — she wants the right information, precisely timed

---

## 5. Product Features

### Phase 1 — MVP (Built & Deployed)
A responsive web app with three states:

| State | What it shows |
|---|---|
| **Active Window** | Day X of 7 · Today's one meal recommendation · Action suggestion card |
| **Dormant** | Countdown: "Your window opens in N days." Calm, minimal. Reinforces precision. |
| **Onboarding** | One question: last period start date. No sign-up, no account. localStorage only. |

**Tech stack:** React · Tailwind CSS · Claude API (meal generation) · localStorage · GitHub Pages
**Live MVP:** `https://seuyoungc.github.io/clarvue-mvp/`

### Ideation: Mood Check-In (Not built — not confirmed)
A mood check-in is being explored as a potential configuration layer. The idea: based on mood input, CLARVUE adjusts the meal or activity recommendation — making it a lightweight signal that shapes the output, not a logging burden. Current thinking on the logic:
- 😔 Low → Soothing Rituals action category
- 😐 Okay → Breath & Mindfulness category
- 💪 Holding up → Movement category

This is still in ideation. It has not been confirmed as a feature. The key constraint: it must feel like a configuration toggle (one tap, done), not symptom logging.

### Phase 2 — Planned (Not built yet)
- THE PROTOCOL (AI calendar sync — Apple Calendar / Google Calendar)
- Push notifications
- User accounts
- Workout swap suggestions (HIIT → zone 2 walk)
- Full widget system with icon state changes

---

## 6. Brand Identity

### Archetype
**Ruler × Sage** — not Caregiver. CLARVUE does not nurture or comfort. It optimizes and equips.

Brand register: Oura, WHOOP, AG1, Levels, Alo, Refy, Rhode — not Flo, Clue, or Calm.

### Color System

| Name | Hex | Role |
|---|---|---|
| Cipher Green | `#0A140A` | Dark backgrounds, deep anchor |
| Forest Signal | `#1A2E1A` | Brand dominant, primary text on light, logo fill |
| Signal Green | `#3D7A3D` | Active states, CTAs, THE TUNNEL |
| Silver Mist | `#C8D4C0` | Chrome / AI active indicator |
| Chrome White | `#E8EDE4` | Light surfaces, cards |
| Malachite | `#2D5C2D` | Gradient mid-point, depth, logo gradient end |
| Sage Circuit | `#6B9B6B` | Secondary elements, progress fills |
| Mint Chrome | `#B8D4B8` | Light accents |
| Graphite | `#2A2A2A` | Body text on light |

**Gradients:**
- **Primary — "The Signal":** 135° · `#1A2E1A` → `#3D7A3D` → `#C8D4C0`
- **Surface — "The Edge":** 90° · `#6B9B6B` → `#E8EDE4`
- **Dark Mode — "Night Protocol":** 180° · `#0A140A` → `#1A2E1A`

**Color as narrative rule:** Silver/chrome appears *only* when CLARVUE has done something. Seeing silver = CLARVUE acted. This is a deliberate Pavlovian design choice — silver means relief. The app is quiet (deep Cipher Green) most of the cycle. When the 7-day window activates, the Signal gradient appears. Silver is the visual language of clairvoyance in action.

### Typography

| Role | Typeface | Weight | Notes |
|---|---|---|---|
| Display / Brand | Space Grotesk | 700 | ALL CAPS always for CLARVUE wordmark. +0.12em tracking wordmark, +0.06em headlines |
| Body / UI | DM Sans | 400, 500 | Primary reading, notifications, cards. Tracking 0 to +0.01em |
| Data / Readouts | Space Mono | 400 | Numbers, cycle days, macros, timestamps. Monospace signals measurement |

**Type scale:**

| Level | Font | Size | Weight | Usage |
|---|---|---|---|---|
| Brand Mark | Space Grotesk | — | 700 | CLARVUE wordmark |
| Display | Space Grotesk | 36px | 700 | Hero text, feature headers |
| H1 | Space Grotesk | 26px | 600 | Section headers |
| H2 | DM Sans | 20px | 600 | Card titles |
| Body | DM Sans | 16px | 400 | Primary reading |
| Data | Space Mono | 14px | 400 | Numbers, day counts, macros |
| Caption | DM Sans | 12px | 400 | Supporting info, timestamps |
| Feature Label | Space Grotesk | 11px | 600 | THE TUNNEL, THE PROTOCOL — uppercase, +0.15em tracking |

### Logo — The Focused Quadrant

**The CLARVUE mark is a filled quarter-circle (quadrant)** in deep forest green (`#1A2E1A` → `#2D5C2D`), representing the 7-day luteal window — because 7/28 days = exactly ¼ of the menstrual cycle. The quadrant sits with its right angle at bottom-left, curved edge sweeping from top to right.

Inside the quadrant, **scattered dots of varying sizes** in muted silver-green tones lead to **one bright, glowing silver-white signal point at center** — the "clairvoyant signal." The bright dot represents CLARVUE seeing the window. The smaller dots represent ambient biological signals building toward the moment of clarity.

**Why the quadrant:** It is mathematically the window. ¼ of a circle = the exact proportion of the cycle that CLARVUE is active. The filled shape (vs. the earlier Phase Ring stroke concept) communicates confidence and solidity — this is not tentative, it is decisive.

**Key rules:**
- Quadrant fill: gradient from `#1A2E1A` to `#2D5C2D`
- Signal dots: varying sizes, muted silver-green (`#6B9B6B` to `#C8D4C0`)
- Clairvoyant signal point: bright silver-white, centered, glowing
- Minimum size: 24px (mark only), 80px (with wordmark)
- Wordmark lockup: quadrant mark to the left, CLARVUE in Space Grotesk 700 ALL CAPS to its right
- Never rotate the quadrant. Never recolor the signal dot. Never add external shadow or glow.
- The quadrant can be used as a subtle background watermark at very low opacity (~5%) on dark surfaces.

**Logo states in the UI:**
- **Active window:** Signal dot glows bright — CLARVUE is watching
- **Dormant:** Signal dot dims, smaller dots barely visible — CLARVUE is quiet

### Tone of Voice — 4 Modes

| Mode | Used for | Character |
|---|---|---|
| **The Intel** | Push notifications, daily open | Precise, brief, reads like a briefing not a suggestion |
| **The Protocol** | Calendar moves, workout mods | Already done. Past tense where possible. |
| **The Confirmation** | Task complete, window close | Minimal. Acknowledgment, not celebration. |
| **The Signal** | Educational cards, feature explains | Mechanism first, then solution. Max 2 sentences of science. |

**Example copy per mode:**
- **The Intel:** "Day 3 of your window. Cortisol is elevated. Today's fuel: dark chocolate walnut bowl. 8 min."
- **The Protocol:** "Thursday's HIIT moved to zone 2 walk. Your energy window peaks Friday — we saved it for then."
- **The Confirmation:** "Window closed. You held the protocol. That's the edge."
- **The Signal:** "Progesterone drops. Cortisol spikes. High-magnesium foods buffer the stress response. That's why today's bowl works."

**CLARVUE never says:**
- "Listen to your body" — places the burden back on her
- "You've got this!" — hollow, beneath her register
- "Be gentle with yourself" — she wants results, not gentleness
- "Track your symptoms" — CLARVUE is not a tracker
- "Feeling a bit off?" — she knows. CLARVUE already acted.

### Message Architecture

| Tier | Content |
|---|---|
| **Tier 1 — The Belief** | Your biology is not a blind spot. It is a system to be read — and engineered. |
| **Tier 2 — The Promise** | CLARVUE makes one precise nutrition decision and one schedule adjustment — every day of your luteal window — before you feel the disruption. |
| **Tier 3 — The Features** | THE TUNNEL · THE PROTOCOL · Calendar integration · Active 7 days only |
| **Tier 4 — The Proof** | Luteal biochemistry · Real schedule reading · Behavioral science (tunneling) · Built for women who already invest in performance |

### Visual Direction
- **Photography:** Editorial flatlay. Hard white background. Chrome hardware, botanical green elements, supplements, matcha, phone with app. Objects of intelligent daily ritual. Never warm-lit. Never soft comfort-coded.
- **Illustration:** Precise line art, geometric botanical forms, abstract data visualization. Never literal anatomy. Never organic softness.
- **Motion:** Sharp ease-out `cubic-bezier(0.16, 1, 0.3, 1)`, 250–350ms. Window activation gradient fades in over 600ms. The app snaps into place.

---

## 7. Strategic Positioning

### The Three Gaps CLARVUE Fills

| From | To |
|---|---|
| Tracking → Precision | Others flood with data. CLARVUE delivers the one action that matters today. |
| Self-blame → Agency | Others expect you to recover. CLARVUE pre-engineers the week so there's nothing to recover from. |
| Static → AI-timed | Others give generic advice. CLARVUE reads your real schedule and acts before you feel anything. |

### Competitive Landscape

| App | What they do well | The gap |
|---|---|---|
| Clue | Science-based tracking, credibility | Doesn't make decisions for you |
| Flo | Simple UX, phase explanations | Tracking + education only, no structural change |
| Moody Month | Content suggestions, forecasts | "Many options" not one tunneled action |
| Me v PMDD | PMDD-specific symptom tracking | Heavy logging burden, no calendar/environment changes |

**CLARVUE's position:** None of them behave like an AI micro-decider that reduces decision fatigue at the exact high-risk window.

---

## 8. MLP Direction (Minimum Lovable Product)

The current MVP solves the problem. The MLP creates the feeling.

### The MLP Emotion
She opens her phone in the morning, checks her schedule, and something has already been prepared. She didn't ask. CLARVUE just did it. The content may be similar to the MVP — the emotional shift comes from framing and presentation. A tool *responds*. An agent *prepares*.

### The Single MLP Sprint Deliverable
**Redesign the window activation screen as a briefing that was "prepared" before she opened the app.** One screen. That's it.

**What this screen contains (minimum):**
1. Day counter as data readout: "DAY 1 OF 7" in Space Mono
2. Status line: "Your window is active." — no emoji, no exclamation
3. THE TUNNEL card: one meal, already selected and presented as *decided* (not suggested). Silver left-border accent signals CLARVUE acted. Macro data in Space Mono. Prep time visible.
4. Contextual intelligence line: one sentence implying CLARVUE was watching her week. Example: "Wednesday looks heavy. Lighter meals loaded for Tue–Thu." This can be hardcoded for the sprint and made dynamic later.

**What to cut from the MLP sprint:**
- Mood check-in (still in ideation — not built, not confirmed. If it ships, it should not appear on first open; it interrupts the "already done" feeling)
- Action suggestion cards (dilutes focus from the one meal)
- Dormant state redesign, window close moment, dead zone solutions — all valuable, all deferred
- Light mode — dark mode is the primary and only mode for now

**The test:** Show the screen to someone without explanation. If she says "oh, it already picked something for me?" — MLP achieved. If she says "oh, it's recommending a meal" — still MVP. Same content, completely different emotional read.

### MLP Design Principles
1. She should never feel like she is using a period app
2. The product does the work, not explains the work
3. Delight must happen before she needs it
4. The first 7-day window is the entire first impression
5. Silver is the signal that something good just happened
6. Frame as briefing, not suggestion — the shift from pull to push

### The Obsession Object
The thing she tells her friend about is not THE TUNNEL itself. It is the moment of opening the app and finding that work has already been done. The "it already knew" moment. Everything in the MLP is engineered backward from that single feeling.

### Unsolved: The Three-Week Dead Zone
The app is silent from signup until the first window. She forgets it exists before it activates. Solving this is the highest-priority gap after the window activation screen ships. Direction to explore: ambient intelligence during dormancy — not daily, but 1–2 lines across the dead zone that imply CLARVUE is watching. "Window opens in 6 days. Your Wednesday looks heavy — watching it."

---

## 9. Design System Status

### What Exists
- Brand identity document (Craft: Work → CLARVUE → Brand Identity)
- Research on "WHY" document (Craft: Work → CLARVUE → Brand Identity → Research on "WHY")
- Synthesized brand foundation document (Craft: Work → CLARVUE → Brand Foundation (Synthesized))
- Visual identity system (rendered in Claude)
- Logo mark: Focused Quadrant with clairvoyant signal point (completed)
- Live MVP deployed

### What's In Progress
- Brand guideline slides (19 slides, using Google Stitch)
- Design system components (using Google Stitch)
- Example UI: window activation screen (using Google Stitch)

### What's Next
- Design system Figma file with variables and color tokens
- Prototype built from Figma components via MCP
- MLP sprint: window activation screen redesign (single deliverable)

### Figma File Structure (planned)

```
CLARVUE — Brand Slides          ← presentation format (1920×1080)
CLARVUE — Design System         ← component library
  └── 🎨 Foundations            color styles, text styles, spacing
  └── ✦ Variables               color tokens (light/dark), spacing, radius
  └── ◈ Logo & Mark             quadrant mark, all lockups as components
  └── Aa Typography             all type styles as components
  └── □ Components              buttons, cards, inputs, nav, data labels
  └── 📱 Screens                full app screens built from components
```

---

## 10. Claude-Specific Instructions

When working on this project, Claude should:

**Always:**
- Refer to the product as CLARVUE (all caps)
- Use the brand voice — precise, direct, never soft or reassuring
- Design for the target emotion first, feature function second
- Treat silver/chrome as the "action complete" signal in any UI work
- Assume Space Grotesk + DM Sans + Space Mono as the type stack
- Frame product interactions as briefings/actions, not suggestions/recommendations

**Never:**
- Suggest tracking features, symptom logging, or streak mechanics
- Use warm, soft, or comfort-coded language in UI copy
- Refer to the product as a "period app" or "cycle tracker"
- Add features that put cognitive work back on the user
- Use pink, blush, or purple in any visual output
- Refer to the logo as "Phase Ring" — it is now the Focused Quadrant

**When writing copy for CLARVUE:**
- Lead with data or action, not emotion
- Use past tense for Protocol actions ("Thursday moved to zone 2 walk")
- Keep notification copy under 12 words where possible
- Feature names are always ALL CAPS (THE TUNNEL, THE PROTOCOL)
- Present meals as *decided*, not *suggested* — "Today's fuel:" not "We recommend:"

**When designing UI:**
- Base background: `#0A140A` dark (primary) / `#E8EDE4` light (secondary)
- Active/CTA: `#3D7A3D`
- AI-has-acted indicator: `#C8D4C0` silver
- Data always in Space Mono
- The Focused Quadrant is the logo mark — use it at small scale in the top bar with signal dot state (glowing = active, dim = dormant)
- The quadrant can be used as a subtle background texture at ~5% opacity on dark surfaces
- 8px base grid. Card radius: 12px. Button radius: 8px.

---

## 11. Key Decisions Already Made

These are settled. Do not re-open unless explicitly asked.

| Decision | Outcome | Reason |
|---|---|---|
| Product name | CLARVUE | 3 stacked meanings, all-caps system name, no "a" ending |
| Logo concept | Focused Quadrant with clairvoyant signal point | Filled ¼ circle = mathematically the 7-day window. Bright center dot = CLARVUE seeing. Confident, solid, ownable. |
| Quadrant coverage | 90° (¼ fill) | Mathematically correct: 7/28 days = ¼ circle |
| Color palette | Forest green + silver chrome | Botanical intelligence × precision technology |
| Archetype | Ruler × Sage | Target user self-identifies as high-agency, not needing care |
| MVP scope | Nutrition Tunnel only | Calendar API complexity deferred to Phase 2 |
| MLP sprint scope | Window activation screen only | Single highest-leverage interaction — the "already done" briefing moment |
| No symptom logging | Confirmed removed | Anti-feature: puts burden back on user |
| No streak tracking | Confirmed removed | Creates guilt, contradicts grace-period philosophy |
| MLP framing | Briefing, not suggestion | "Prepared for you" not "we recommend" — the shift from tool to agent |

---

## 12. Open Questions (As of April 2026)

- [ ] How do we solve the 3-week dead zone before first window activation?
- [ ] What does the dormant state look like — fully hidden or ambient intelligence?
- [ ] Phase 2 timeline — when does THE PROTOCOL get built?
- [ ] Mood check-in: should it be built at all? If yes, how does it function as a lightweight configuration toggle rather than logging?
- [ ] What contextual intelligence lines work best for the "CLARVUE was watching" feeling?
- [ ] Widget/notification strategy for when the app is not open

---

## 13. Origin Story

CLARVUE was built from a single observation: the most high-performing women have a blind spot. One week a month, their carefully calibrated system — the workouts, the diet, the calendar — breaks down. Not from lack of discipline. From hormones that arrive on schedule, predictably, every cycle.

The existing tools explained this. None of them acted on it.

CLARVUE doesn't explain your cycle. It sees your luteal window coming 7 days before the first symptom, and quietly engineers the week ahead. One precise nutrition decision. One intelligent calendar adjustment. Every day of your window. Before you need to ask.

---

## 14. File & Resource Index

| Resource | Location |
|---|---|
| Brand Identity System | Craft: Work → CLARVUE → Brand Identity |
| Research on "WHY" | Craft: Work → CLARVUE → Brand Identity → Research on "WHY" |
| Brand Foundation (Synthesized) | Craft: Work → CLARVUE → Brand Foundation (Synthesized) |
| Planning Notes | Craft: Work → CLARVUE → Planning Notes |
| Live MVP | https://seuyoungc.github.io/clarvue-mvp/ |
| MVP Repo | GitHub: seuyoungc/clarvue-mvp |
| Figma (planned) | CLARVUE — Brand Slides + CLARVUE — Design System |
| Logo Asset | Focused Quadrant mark (completed, exported) |

---

*CLARVUE Project Context · v2.1 · April 2026*
*Update this file whenever a key decision is made or the product direction shifts.*