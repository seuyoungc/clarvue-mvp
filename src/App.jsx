import { useState, useEffect, useRef } from 'react'
import logoMark from './assets/logo.svg'
import fullLogoDark from './assets/full-logo-dark.svg'

// ── Brand Tokens ──────────────────────────────────────────────────────────────
// Source of truth: design.md & CLARVUE-context.md
const C = {
  bgBase:       '#0A140A',  // Cipher Green — deep background canvas
  bgSurface:    '#0F1A0F',  // Card surfaces — 1st lift (no border needed)
  bgElevated:   '#152015',  // Inner/nested elements — 2nd lift
  signalGreen:  '#3D7A3D',  // CTAs, active states, THE TUNNEL accent
  forestSignal: '#1A2E1A',  // Brand dominant, phone frame
  malachite:    '#2D5C2D',  // Depth / gradient mid-point
  silverMist:   '#C8D4C0',  // AI acted indicator — silver = CLARVUE acted
  sageCircuit:  '#6B9B6B',  // Secondary text, progress elements
  textPrimary:  '#E8EDE4',  // Chrome White — primary text on dark
  textMuted:    '#6B9B6B',  // Sage Circuit — muted body
  textDim:      '#3A4A3A',  // Very muted — labels, separators, timestamps
}

// Typography constants
const grotesk = "'Space Grotesk', sans-serif"
const mono    = "'Space Mono', monospace"
const dm      = "'Manrope', sans-serif"

// ── Content ───────────────────────────────────────────────────────────────────
const MEALS = [
  {
    name: 'Salmon & Quinoa Bowl',
    prep: '20 min',
    scienceNote: 'Omega-3s reduce inflammation and magnesium buffers cortisol — both elevated in the luteal phase.',
    ingredients: ['1 salmon fillet (150 g)', '½ cup dry quinoa', '1 cup baby spinach', '½ avocado, sliced', '1 tbsp olive oil', 'Lemon juice, salt, pepper'],
    steps: [
      'Cook quinoa in 1 cup water for 12–15 min until absorbed.',
      'Season salmon with salt, pepper, and a squeeze of lemon.',
      'Heat olive oil in a pan over medium heat. Cook salmon 3–4 min per side.',
      'Flake salmon over quinoa. Add spinach and avocado.',
      'Drizzle with remaining lemon juice and a little olive oil.',
    ],
  },
  {
    name: 'Sweet Potato & Chickpea Tray Bake',
    prep: '25 min',
    scienceNote: 'B6 and complex carbs steady blood sugar and can ease PMS mood swings.',
    ingredients: ['1 medium sweet potato, cubed', '1 can chickpeas, drained', '1 tbsp olive oil', '1 tsp cumin', '½ tsp paprika', 'Salt and pepper', 'Fresh parsley to serve'],
    steps: [
      'Preheat oven to 220°C (425°F).',
      'Toss sweet potato and chickpeas with olive oil, cumin, paprika, salt, and pepper.',
      'Spread on a baking tray in a single layer.',
      'Roast 20–22 min, flipping once halfway, until golden at the edges.',
      'Scatter with parsley and serve.',
    ],
  },
  {
    name: 'Greek Yogurt, Berries & Pumpkin Seeds',
    prep: '5 min',
    scienceNote: 'Calcium + magnesium combo is linked to fewer cramps and less irritability.',
    ingredients: ['1 cup full-fat Greek yogurt', '½ cup mixed berries (fresh or frozen, thawed)', '2 tbsp pumpkin seeds', '1 tsp honey (optional)'],
    steps: [
      'Spoon yogurt into a bowl.',
      'Top with berries and pumpkin seeds.',
      'Drizzle with honey if using.',
      'Eat immediately or refrigerate for up to a few hours.',
    ],
  },
  {
    name: 'Spinach Omelet with Avocado Toast',
    prep: '15 min',
    scienceNote: 'Eggs and spinach add B6 and magnesium to support hormones and reduce fatigue.',
    ingredients: ['2 large eggs', '1 large handful baby spinach', '1 slice sourdough or whole-grain bread', '½ avocado', '1 tsp butter or olive oil', 'Salt, pepper, chilli flakes'],
    steps: [
      'Beat eggs with salt and pepper in a small bowl.',
      'Heat butter in a non-stick pan over medium heat. Add spinach and wilt for 1 min.',
      'Pour eggs over spinach. Cook undisturbed 1–2 min, then fold in half.',
      'Toast bread while the omelet finishes.',
      'Mash avocado on toast, season with chilli flakes, and plate alongside.',
    ],
  },
  {
    name: 'Brown Rice, Black Beans & Sautéed Greens',
    prep: '20 min',
    scienceNote: 'Fiber, protein, and magnesium help calm bloating and keep energy more stable.',
    ingredients: ['½ cup cooked brown rice (or pre-cooked pouch)', '1 can black beans, drained', '2 cups kale or chard, roughly chopped', '1 garlic clove, minced', '1 tbsp olive oil', 'Lime juice, cumin, salt'],
    steps: [
      'Warm brown rice according to pack or reheat leftovers.',
      'Heat olive oil in a pan. Add garlic and cook 30 sec.',
      'Add greens and sauté 3–4 min until wilted. Season with cumin and salt.',
      'Warm black beans in the same pan for 2 min.',
      'Layer rice, beans, and greens in a bowl. Squeeze lime over everything.',
    ],
  },
  {
    name: 'Tofu Stir-Fry with Broccoli & Cashews',
    prep: '20 min',
    scienceNote: 'Plant protein, calcium, and healthy fats support mood and reduce muscle tension.',
    ingredients: ['200 g firm tofu, cubed and patted dry', '1½ cups broccoli florets', '¼ cup cashews', '2 tbsp soy sauce or tamari', '1 tsp sesame oil', '1 garlic clove, minced', '½ tsp ginger, grated', 'Cooked rice to serve'],
    steps: [
      'Press tofu dry, cube, and season with a little soy sauce.',
      'Heat a wok over high heat. Fry tofu 3–4 min until golden. Set aside.',
      'Add a splash of oil. Stir-fry broccoli 3 min.',
      'Add garlic, ginger, cashews, and tofu back in. Toss with remaining soy sauce and sesame oil.',
      'Serve over rice.',
    ],
  },
  {
    name: 'Banana, Tahini & Dark Chocolate Snack Plate',
    prep: '5 min',
    scienceNote: 'Banana B6 and magnesium-rich tahini and chocolate can gently lift luteal-phase mood.',
    ingredients: ['1 ripe banana, sliced', '2 tbsp tahini', '2–3 squares dark chocolate (70%+), broken', 'Pinch of sea salt', 'Optional: a few walnuts or hemp seeds'],
    steps: [
      'Slice banana and arrange on a plate.',
      'Drizzle tahini over the banana slices.',
      'Add dark chocolate pieces alongside.',
      'Finish with a pinch of sea salt and any optional toppings.',
    ],
  },
]

const ACTIONS = [
  {
    category: 'Movement',
    title: 'Take a 10-minute slow walk',
    description: 'A gentle walk (even indoors) releases tension and clears focus without draining your energy.',
  },
  {
    category: 'Movement',
    title: 'Do 5 minutes of soft stretching',
    description: 'Child\'s pose or side reaches loosen tight muscles and calm the nervous system.',
  },
  {
    category: 'Movement',
    title: '5 minutes of progressive relaxation',
    description: 'Tense and release each muscle group from toes to face. Effective at clearing held stress.',
  },
  {
    category: 'Breath',
    title: '3 minutes of slow breathing',
    description: 'Inhale 4 seconds, exhale 6–8. Down-regulates the stress response quickly.',
  },
  {
    category: 'Breath',
    title: 'Quick grounding check-in',
    description: '5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste. Resets focus.',
  },
  {
    category: 'Breath',
    title: '5-minute guided meditation',
    description: 'A short body scan or calming track. Follow along — no input required.',
  },
  {
    category: 'Soothing Ritual',
    title: 'Make a warm, caffeine-free drink',
    description: 'Brew herbal tea or warm water with lemon. A deliberate pause, not a distraction.',
  },
  {
    category: 'Soothing Ritual',
    title: 'Take a short warm shower',
    description: 'Warm water eases muscle tension and signals the body to reduce cortisol output.',
  },
  {
    category: 'Soothing Ritual',
    title: 'Comfort show or playlist — 10 minutes',
    description: 'A familiar show or pre-labeled playlist. Known stimuli, low cognitive load.',
  },
  {
    category: 'Soothing Ritual',
    title: '5–10 minutes of a light hobby',
    description: 'Doodle, color, knit — cozy and low-demand. Activates the default mode network.',
  },
  {
    category: 'Mind',
    title: '5-minute brain dump',
    description: 'Write everything in your head on one page. Offload, don\'t organize.',
  },
  {
    category: 'Mind',
    title: 'One reframe sentence',
    description: 'This is a predictable window — not a personal failing. Name it, move forward.',
  },
  {
    category: 'Sleep',
    title: 'Choose one sleep tweak',
    description: 'Dim lights or cut screens 30 minutes before bed. One change, measurable effect.',
  },
  {
    category: 'Sleep',
    title: 'Tidy one small spot',
    description: 'One surface — nightstand or desk corner. Reduced visual noise reduces cortisol.',
  },
  {
    category: 'Sleep',
    title: '2–5 minutes of daylight',
    description: 'Stand near a window or step outside. Light exposure regulates melatonin timing.',
  },
]

// Contextual intelligence lines — one per day (the "CLARVUE was watching" signal)
const CONTEXT_LINES = [
  'Window initialized. Nutrition protocol loaded.',
  'Day 2. Inflammation window active. Fuel adjusted.',
  'Midpoint. Energy taper incoming. Meals front-loaded.',
  'Day 4. Progesterone drop flagged. Protocol calibrated.',
  'Heavy load day. Fuel engineered for the disruption.',
  'Wind-down phase. Recovery nutrition prepped.',
  'Final day. Protocol held. Window closes tonight.',
]

const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

// ── Logic ─────────────────────────────────────────────────────────────────────
function getScreen(periodDateStr) {
  if (!periodDateStr) return { screen: 'onboarding' }
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const periodStart = new Date(periodDateStr + 'T00:00:00')
  const daysUntil = Math.round((periodStart - today) / (1000 * 60 * 60 * 24))
  if (daysUntil >= 1 && daysUntil <= 7) {
    return { screen: 'active', day: 8 - daysUntil, daysUntil }
  }
  return { screen: 'dormant', daysUntil }
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 430
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 429px)')
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

// ── Utility Components ────────────────────────────────────────────────────────

// LogoLockup — mark + wordmark. dim=true for dormant, light=true for light bg.
function LogoLockup({ size = 'sm', dim = false, light = false }) {
  const s = size === 'lg' ? { mark: 38, text: 28, gap: 12 }
          : size === 'md' ? { mark: 26, text: 19, gap: 9 }
          :                  { mark: 20, text: 15, gap: 7 }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: s.gap, opacity: dim ? 0.3 : 1, transition: 'opacity 300ms ease' }}>
      <img src={logoMark} alt="" aria-hidden="true" style={{ width: s.mark, height: s.mark, display: 'block' }} />
      <span style={{ fontFamily: grotesk, fontWeight: 700, fontSize: s.text, color: light ? C.forestSignal : C.silverMist, letterSpacing: '-0.02em' }}>
        CLARVUE
      </span>
    </div>
  )
}

// FeatureLabel — THE TUNNEL, DAILY RESET, etc.
function FeatureLabel({ children, color = C.silverMist }) {
  return (
    <span style={{ fontFamily: grotesk, fontWeight: 600, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color }}>
      {children}
    </span>
  )
}

// ── WeekStrip ─────────────────────────────────────────────────────────────────
function WeekStrip({ periodDateStr, daysUntil }) {
  const periodStart = new Date(periodDateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const days = Array.from({ length: 8 }, (_, i) => {
    const d = new Date(periodStart)
    d.setDate(d.getDate() - (7 - i))
    const isToday = d.getTime() === today.getTime()
    const isPeriodStart = i === 7
    return { name: DAY_NAMES[d.getDay()], date: d.getDate(), isToday, isPeriodStart }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {days.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <span style={{ fontFamily: grotesk, fontSize: 9, color: C.textDim, letterSpacing: '0.06em', fontWeight: 500 }}>
              {d.name}
            </span>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              backgroundColor: d.isToday ? C.signalGreen : d.isPeriodStart ? '#4A1E1E' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: mono, fontSize: 11, fontWeight: d.isToday || d.isPeriodStart ? 700 : 400, color: d.isToday ? C.textPrimary : d.isPeriodStart ? '#C08080' : C.textDim }}>
                {d.date}
              </span>
            </div>
            {d.isToday ? (
              <span style={{ fontFamily: grotesk, fontSize: 8, color: C.sageCircuit, letterSpacing: '0.08em', fontWeight: 600 }}>TODAY</span>
            ) : d.isPeriodStart ? (
              <span style={{ fontFamily: grotesk, fontSize: 8, color: '#7A4040', letterSpacing: '0.08em', fontWeight: 600 }}>START</span>
            ) : (
              <span style={{ fontSize: 8, color: 'transparent' }}>·</span>
            )}
          </div>
        ))}
      </div>
      <p style={{ fontFamily: mono, fontSize: 10, color: C.textDim, textAlign: 'center', letterSpacing: '0.06em', margin: 0 }}>
        Period starts in {daysUntil} day{daysUntil === 1 ? '' : 's'}
      </p>
    </div>
  )
}

// ── ActionCard ────────────────────────────────────────────────────────────────
function ActionCard({ light = false }) {
  const [actionIdx, setActionIdx] = useState(() => Math.floor(Math.random() * ACTIONS.length))
  const [done, setDone] = useState(false)

  function handleNotToday() {
    let next
    do { next = Math.floor(Math.random() * ACTIONS.length) } while (next === actionIdx && ACTIONS.length > 1)
    setActionIdx(next)
    setDone(false)
  }

  const action = ACTIONS[actionIdx]

  const cardBg    = light ? 'rgba(26, 46, 26, 0.07)' : 'rgba(15, 26, 15, 0.75)'
  const cardBorder = light ? '1px solid rgba(26, 46, 26, 0.1)' : '1px solid rgba(200, 212, 192, 0.06)'
  const titleColor = light ? C.forestSignal : C.textPrimary
  const btnBg     = light ? 'rgba(26, 46, 26, 0.08)' : C.bgElevated
  const btnBgHover = light ? 'rgba(26, 46, 26, 0.14)' : '#1C2A1C'
  const btnColor  = light ? C.signalGreen : C.textDim
  const checkBorder = light ? 'rgba(26, 46, 26, 0.3)' : 'rgba(58, 74, 58, 0.6)'

  return (
    <div style={{
      borderRadius: 12,
      padding: '14px 16px',
      backgroundColor: cardBg,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: cardBorder,
      display: 'flex', flexDirection: 'column', gap: 10,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Done overlay — glassmorphism */}
      {done && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(8, 14, 8, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 2, borderRadius: 12,
        }}>
          <p style={{ fontFamily: dm, fontSize: 13, color: C.silverMist, letterSpacing: '0.02em', textAlign: 'center', padding: '0 24px', margin: 0, lineHeight: 1.6 }}>
            Good. That's enough for today.
          </p>
        </div>
      )}

      {/* Card content */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        {/* Checkbox — 44px touch target, 20px visual */}
        <button
          onClick={() => setDone(true)}
          aria-label="Mark complete"
          style={{
            minWidth: 44, minHeight: 44, borderRadius: 8,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 0,
            transition: 'background-color 200ms ease',
          }}
        >
          <span style={{
            width: 20, height: 20, borderRadius: 4,
            border: `1.5px solid ${done ? 'transparent' : checkBorder}`,
            backgroundColor: done ? C.signalGreen : 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'background-color 200ms ease, border-color 200ms ease',
          }}>
            {done && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                <path d="M1 4L3.5 6.5L9 1" stroke={C.textPrimary} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
        </button>

        {/* Text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontFamily: grotesk, fontSize: 9, color: C.textDim, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
            {action.category}
          </span>
          <h3 style={{ fontFamily: dm, fontSize: 14, fontWeight: 600, color: titleColor, lineHeight: 1.3, margin: 0, textDecoration: done ? 'line-through' : 'none', textDecorationColor: C.textDim }}>
            {action.title}
          </h3>
          <p style={{ fontFamily: dm, fontSize: 12, color: C.textMuted, lineHeight: 1.5, margin: 0 }}>
            {action.description}
          </p>
        </div>
      </div>

      {/* Not today — secondary button, no border */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={handleNotToday}
          style={{
            padding: '10px 16px', borderRadius: 8, minHeight: 44,
            backgroundColor: btnBg,
            color: btnColor,
            fontFamily: grotesk, fontSize: 9, fontWeight: 600,
            border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase',
            transition: 'background-color 200ms ease',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = btnBgHover}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = btnBg}
        >
          Not today
        </button>
      </div>
    </div>
  )
}

// ── MealModal ─────────────────────────────────────────────────────────────────
function MealModal({ meal, onClose }) {
  if (!meal) return null
  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        backgroundColor: C.textPrimary,
        zIndex: 50,
        display: 'flex', flexDirection: 'column',
      }}
      onClick={onClose}
    >
      <div
        style={{ flex: 1, overflowY: 'auto', padding: '24px 24px 40px' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <FeatureLabel color={C.signalGreen}>Today's Pick</FeatureLabel>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(26, 46, 26, 0.08)', border: 'none', borderRadius: 8,
              color: C.signalGreen, fontFamily: grotesk, fontSize: 9, fontWeight: 600,
              letterSpacing: '0.1em', padding: '7px 16px', cursor: 'pointer', textTransform: 'uppercase',
              transition: 'background-color 200ms ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(26, 46, 26, 0.14)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(26, 46, 26, 0.08)'}
          >
            Close
          </button>
        </div>

        {/* Meal name */}
        <h2 style={{ fontFamily: grotesk, fontSize: 20, fontWeight: 700, color: C.forestSignal, margin: '0 0 8px', letterSpacing: '0.01em', lineHeight: 1.2 }}>
          {meal.name}
        </h2>

        {/* Prep time — Silver Mist chip (AI data point) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <span style={{
            fontFamily: mono, fontSize: 11, color: C.signalGreen,
            backgroundColor: 'rgba(61, 122, 61, 0.1)',
            borderRadius: 4, padding: '3px 8px', letterSpacing: '0.06em',
          }}>
            {meal.prep}
          </span>
          <span style={{ fontFamily: dm, fontSize: 11, color: C.sageCircuit }}>prep time</span>
        </div>

        {/* Science note — light surface, no border */}
        <div style={{ backgroundColor: 'rgba(26, 46, 26, 0.05)', borderRadius: 10, padding: '12px 14px', marginBottom: 28 }}>
          <p style={{ fontFamily: dm, fontSize: 12, color: C.sageCircuit, lineHeight: 1.6, margin: 0 }}>
            {meal.scienceNote}
          </p>
        </div>

        {/* Ingredients */}
        <p style={{ fontFamily: grotesk, fontSize: 9, color: C.textDim, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 14px', fontWeight: 600 }}>
          Ingredients
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {meal.ingredients.map((item, i) => (
            <li key={i} style={{ fontFamily: dm, fontSize: 13, color: C.forestSignal, display: 'flex', gap: 12, lineHeight: 1.5 }}>
              <span style={{ color: C.sageCircuit, flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Steps */}
        <p style={{ fontFamily: grotesk, fontSize: 9, color: C.textDim, letterSpacing: '0.14em', textTransform: 'uppercase', margin: '0 0 14px', fontWeight: 600 }}>
          Steps
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {meal.steps.map((step, i) => (
            <li key={i} style={{ fontFamily: dm, fontSize: 13, color: C.forestSignal, display: 'flex', gap: 12, lineHeight: 1.6 }}>
              <span style={{ fontFamily: mono, color: C.signalGreen, flexShrink: 0, minWidth: 18, fontSize: 11 }}>{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// ── PhoneMockup ───────────────────────────────────────────────────────────────
function PhoneMockup({ children, screenBg = C.bgBase }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center py-10"
      style={{ backgroundColor: '#E8EDE4' }}
    >
      {/* Phone frame — Forest Signal green, part of the brand */}
      <div style={{
        width: 414, height: 868,
        borderRadius: 54,
        backgroundColor: C.forestSignal,
        padding: 12,
        boxShadow: '0 48px 120px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(200, 212, 192, 0.05)',
        flexShrink: 0,
      }}>
        {/* Inner bezel */}
        <div style={{
          width: '100%', height: '100%',
          borderRadius: 44,
          backgroundColor: '#1C221C',
          padding: 3,
        }}>
          {/* Screen */}
          <div style={{
            width: '100%', height: '100%',
            borderRadius: 42,
            background: screenBg,
            overflow: 'hidden', position: 'relative',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* Dynamic Island */}
            <div style={{
              position: 'absolute', top: 14, left: '50%',
              transform: 'translateX(-50%)',
              width: 126, height: 37,
              backgroundColor: '#000', borderRadius: 20,
              zIndex: 10, pointerEvents: 'none',
            }} />
            {/* Content, padded below notch */}
            <div style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              paddingTop: 64, overflow: 'hidden',
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [periodDate, setPeriodDate] = useState('')
  const [inputDate, setInputDate] = useState('')
  const dateInputRef = useRef(null)
  const [openRecipe, setOpenRecipe] = useState(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    localStorage.removeItem('clarvue_period_date')
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!inputDate) return
    setPeriodDate(inputDate)
  }

  function handleReset() {
    setPeriodDate('')
    setInputDate('')
  }

  const { screen, day, daysUntil } = getScreen(periodDate)

  // Today as YYYY-MM-DD in the user's local timezone — used as the date input's min
  const todayStr = (() => {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  })()

  // ── Onboarding ──────────────────────────────────────────────────────────────
  let content

  if (screen === 'onboarding') {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px' }}>

          {/* Logo mark — symbol only, no wordmark */}
          <div style={{ marginBottom: 18 }}>
            <img src={logoMark} alt="CLARVUE" style={{ width: 72, height: 72, display: 'block' }} />
          </div>

          {/* Tagline — body typography */}
          <p style={{ fontFamily: dm, fontSize: 14, fontWeight: 400, color: 'rgba(232, 237, 228, 0.75)', letterSpacing: 0, marginBottom: 36, textAlign: 'center', lineHeight: 1.6 }}>
            Decisions handled. Before you need them.
          </p>

          {/* Input card — glassmorphism on gradient */}
          <div style={{
            width: '100%',
            backgroundColor: 'rgba(10, 20, 10, 0.35)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(232, 237, 228, 0.12)',
            borderRadius: 16,
            padding: '20px',
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label
                htmlFor="period-date"
                style={{ fontFamily: dm, fontSize: 14, fontWeight: 500, color: 'rgba(232, 237, 228, 0.85)', textAlign: 'center', letterSpacing: 0 }}
              >
                When does your next period start?
              </label>
              {/* Wrapper hides native icon; our SVG sits on top, clicks pass through */}
              <div style={{ position: 'relative' }}>
                <input
                  ref={dateInputRef}
                  id="period-date"
                  type="date"
                  className="date-input-light"
                  value={inputDate}
                  onChange={e => setInputDate(e.target.value)}
                  min={todayStr}
                  required
                  style={{
                    width: '100%', borderRadius: 10, padding: '12px 44px 12px 16px',
                    fontFamily: mono, fontSize: 14, color: C.textPrimary,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1.5px solid rgba(232, 237, 228, 0.2)',
                    outline: 'none',
                    colorScheme: 'dark',
                    transition: 'border-color 200ms ease',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(232, 237, 228, 0.55)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(232, 237, 228, 0.2)'}
                />
                {/* Custom calendar icon — clicks programmatically open the native picker */}
                <svg
                  aria-label="Open date picker"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke={C.silverMist} strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  onClick={() => dateInputRef.current?.showPicker()}
                  style={{
                    position: 'absolute', right: 14, top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    opacity: 0.85,
                  }}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%', borderRadius: 12, padding: '14px',
                  minHeight: 48,
                  fontFamily: grotesk, fontSize: 13, fontWeight: 700,
                  letterSpacing: '0.12em', color: C.textPrimary,
                  backgroundColor: C.signalGreen,
                  border: 'none', cursor: 'pointer',
                  transition: 'opacity 200ms ease',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                SET DATE
              </button>
            </form>
          </div>
        </div>

        {/* Reset — ghost */}
        <div style={{ padding: '6px 24px 14px', textAlign: 'center' }}>
          <button onClick={handleReset} style={{ background: 'none', border: 'none', fontFamily: grotesk, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: C.textPrimary, opacity: 0.35, cursor: 'pointer', textTransform: 'uppercase', transition: 'opacity 200ms ease', padding: '8px 16px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.35'}
          >
            Reset
          </button>
        </div>
      </div>
    )

  // ── Active Window ───────────────────────────────────────────────────────────
  } else if (screen === 'active') {
    const meal = MEALS[day - 1]
    const contextLine = CONTEXT_LINES[day - 1]

    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        <MealModal meal={openRecipe} onClose={() => setOpenRecipe(null)} />

        {/* Content — light theme, no scroll */}
        <div style={{ flex: 1, overflow: 'hidden', padding: '14px 20px 4px' }}>

          {/* Header — logo (light) + status chip */}
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <LogoLockup size="sm" light={true} />
            <span style={{
              fontFamily: grotesk, fontSize: 9, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 10px', borderRadius: 4,
              backgroundColor: 'rgba(61, 122, 61, 0.1)',
              color: C.signalGreen,
            }}>
              Active Window
            </span>
          </header>

          <main style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Day counter section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>

              {/* Data readout — DAY N OF 7, enlarged */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: mono, fontSize: 22, fontWeight: 700, color: C.signalGreen, letterSpacing: '0.06em' }}>DAY</span>
                <span style={{ fontFamily: mono, fontSize: 80, fontWeight: 700, color: C.forestSignal, lineHeight: 1, letterSpacing: '-0.03em' }}>{day}</span>
                <span style={{ fontFamily: mono, fontSize: 22, fontWeight: 700, color: C.signalGreen, letterSpacing: '0.06em' }}>OF 7</span>
              </div>

              {/* Contextual intelligence line */}
              <p style={{ fontFamily: dm, fontSize: 13, fontWeight: 500, color: C.forestSignal, letterSpacing: '0.01em', margin: '4px 0 0', lineHeight: 1.5, opacity: 0.78 }}>
                {contextLine}
              </p>

              <div style={{ marginTop: 32 }}>
                <WeekStrip periodDateStr={periodDate} daysUntil={daysUntil} />
              </div>
            </div>

            {/* Meal section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontFamily: dm, fontSize: 15, fontWeight: 500, color: C.forestSignal, letterSpacing: '0.005em', margin: '0 0 4px', lineHeight: 1.4, opacity: 0.9 }}>
                Window active. Decisions handled.
              </p>
              <FeatureLabel color={C.signalGreen}>Today's Meal</FeatureLabel>

              {/* Meal card — silver left accent (brand signal), light glass */}
              <div
                style={{
                  borderRadius: 12,
                  padding: '12px 14px',
                  backgroundColor: 'rgba(26, 46, 26, 0.06)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderLeft: `3px solid ${C.silverMist}`,
                  cursor: 'pointer',
                  transition: 'background-color 200ms ease',
                }}
                onClick={() => setOpenRecipe(meal)}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(26, 46, 26, 0.1)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(26, 46, 26, 0.06)'}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <h2 style={{ fontFamily: grotesk, fontSize: 14, fontWeight: 600, color: C.forestSignal, lineHeight: 1.3, margin: 0, letterSpacing: '0.01em' }}>
                      {meal.name}
                    </h2>
                    <p style={{ fontFamily: dm, fontSize: 11, color: C.sageCircuit, lineHeight: 1.4, margin: 0 }}>
                      {meal.scienceNote}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
                    <span style={{
                      fontFamily: mono, fontSize: 10, letterSpacing: '0.06em',
                      padding: '3px 8px', borderRadius: 4,
                      backgroundColor: 'rgba(200, 212, 192, 0.25)',
                      color: C.signalGreen,
                    }}>
                      {meal.prep}
                    </span>
                    <span style={{ fontFamily: grotesk, fontSize: 9, color: C.signalGreen, letterSpacing: '0.06em' }}>Recipe →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <FeatureLabel color={C.signalGreen}>One thing to try today</FeatureLabel>
              <ActionCard light={true} />
            </div>

          </main>
        </div>

        {/* Reset — ghost, pinned bottom, dark text for light bg */}
        <div style={{ padding: '6px 24px 14px', textAlign: 'center' }}>
          <button onClick={handleReset} style={{ background: 'none', border: 'none', fontFamily: grotesk, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: C.forestSignal, opacity: 0.35, cursor: 'pointer', textTransform: 'uppercase', transition: 'opacity 200ms ease', padding: '8px 16px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.35'}
          >
            Reset
          </button>
        </div>
      </div>
    )

  // ── Dormant ─────────────────────────────────────────────────────────────────
  } else {
    const daysToWindow = daysUntil - 7
    const isWindowPassed = daysUntil <= 0

    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 28px' }}>

          {/* Dimmed logo — signal dot quiet */}
          <div style={{ marginBottom: 32 }}>
            <LogoLockup size="md" dim={true} />
          </div>

          {/* Countdown — data readout */}
          {isWindowPassed ? (
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: mono, fontSize: 11, color: C.textDim, letterSpacing: '0.1em', margin: '0 0 8px' }}>
                WINDOW CLOSED.
              </p>
              <p style={{ fontFamily: dm, fontSize: 13, color: C.textDim, margin: 0 }}>
                Reset your date to begin the next cycle.
              </p>
            </div>
          ) : (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontFamily: mono, fontSize: 10, color: C.textDim, letterSpacing: '0.1em', margin: 0 }}>
                WINDOW OPENS IN
              </p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, justifyContent: 'center' }}>
                <span style={{ fontFamily: mono, fontSize: 52, fontWeight: 700, color: C.textPrimary, lineHeight: 1, letterSpacing: '-0.02em' }}>
                  {daysToWindow}
                </span>
                <span style={{ fontFamily: mono, fontSize: 14, color: C.textDim, letterSpacing: '0.06em' }}>
                  DAY{daysToWindow === 1 ? '' : 'S'}
                </span>
              </div>
              <p style={{ fontFamily: dm, fontSize: 12, color: C.textDim, margin: '8px 0 0', letterSpacing: '0.01em' }}>
                CLARVUE is monitoring.
              </p>
            </div>
          )}

        </div>

        {/* Reset — ghost */}
        <div style={{ padding: '6px 24px 14px', textAlign: 'center' }}>
          <button onClick={handleReset} style={{ background: 'none', border: 'none', fontFamily: grotesk, fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: C.textPrimary, opacity: 0.35, cursor: 'pointer', textTransform: 'uppercase', transition: 'opacity 200ms ease', padding: '8px 16px' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '0.35'}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div style={{
        height: '100dvh', display: 'flex', flexDirection: 'column',
        background: screen === 'onboarding'
          ? 'linear-gradient(135deg, #1A2E1A 0%, #3D7A3D 60%, #C8D4C0 100%)'
          : screen === 'active' ? '#E8EDE4'
          : C.bgBase,
      }}>
        {content}
      </div>
    )
  }

  const screenBg = screen === 'onboarding'
    ? 'linear-gradient(135deg, #1A2E1A 0%, #3D7A3D 60%, #C8D4C0 100%)'
    : screen === 'active' ? '#E8EDE4'
    : C.bgBase

  return <PhoneMockup screenBg={screenBg}>{content}</PhoneMockup>
}
