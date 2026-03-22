import { useState, useEffect } from 'react'

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
    description: 'A gentle walk (even indoors) can release some tension and clear your head without draining your energy.',
  },
  {
    category: 'Movement',
    title: 'Do 5 minutes of soft stretching',
    description: 'Try a few easy stretches like child\'s pose or side reaches to loosen tight muscles and calm your nervous system.',
  },
  {
    category: 'Movement',
    title: 'Try 5 minutes of progressive relaxation',
    description: 'Gently tense and release each muscle group from your toes to your face to help your body let go of stress.',
  },
  {
    category: 'Breath & Mindfulness',
    title: '3 minutes of slow breathing',
    description: 'Breathe in for 4 seconds, out for 6–8, and let your body know it\'s safe to slow down.',
  },
  {
    category: 'Breath & Mindfulness',
    title: 'Do a quick grounding check-in',
    description: 'Notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, and 1 you can taste to bring your mind back to the present.',
  },
  {
    category: 'Breath & Mindfulness',
    title: 'Listen to a 5-minute guided meditation',
    description: 'Put on a short body scan or calming track and let yourself just follow along.',
  },
  {
    category: 'Soothing Rituals',
    title: 'Make a warm, caffeine-free drink',
    description: 'Brew a small cup of herbal tea or warm water with lemon and treat it as a tiny pause just for you.',
  },
  {
    category: 'Soothing Rituals',
    title: 'Take a short warm shower or bath',
    description: 'A quick soak or rinse in warm water can ease cramps and signal your body to relax.',
  },
  {
    category: 'Soothing Rituals',
    title: 'Put on a comfort show or playlist',
    description: 'Spend 10 minutes with a familiar show, song list, or podcast you\'ve pre-labeled as luteal safe.',
  },
  {
    category: 'Soothing Rituals',
    title: 'Do 5–10 minutes of a light hobby',
    description: 'Doodle, color, knit, or do a tiny craft — something that feels cozy and doesn\'t require much thinking.',
  },
  {
    category: 'Mind & Emotions',
    title: 'Do a 5-minute brain dump',
    description: 'Write down everything swirling in your head on one page. No need to organize or fix it.',
  },
  {
    category: 'Mind & Emotions',
    title: 'Say one self-kind sentence',
    description: 'Try: "This is my luteal phase — no wonder everything feels heavier today." Let that be enough.',
  },
  {
    category: 'Sleep & Environment',
    title: 'Choose one tiny sleep tweak',
    description: 'Dim your lights or reduce screens 30 minutes before bed to make it easier to wind down later.',
  },
  {
    category: 'Sleep & Environment',
    title: 'Tidy one small spot',
    description: 'Clear just one surface like your nightstand or desk corner to make your space feel a little lighter.',
  },
  {
    category: 'Sleep & Environment',
    title: 'Step outside for 2–5 minutes of light',
    description: 'Stand near a window or step outside briefly for a bit of daylight and a small mood lift.',
  },
]

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

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

function WeekStrip({ periodDateStr, daysUntil }) {
  const periodStart = new Date(periodDateStr + 'T00:00:00')
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Days 0–6: luteal days 1–7. Day 7: period start date.
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
            <span style={{ fontSize: 10, color: '#666', letterSpacing: '0.02em' }}>
              {d.name}
            </span>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: d.isToday ? '#2D6A4F' : d.isPeriodStart ? '#6b2323' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 12, fontWeight: d.isToday || d.isPeriodStart ? 700 : 400, color: d.isToday || d.isPeriodStart ? '#fff' : '#888' }}>
                {d.date}
              </span>
            </div>
            {d.isToday ? (
              <span style={{ fontSize: 9, color: '#2D6A4F', letterSpacing: '0.04em', fontWeight: 500 }}>Today</span>
            ) : d.isPeriodStart ? (
              <span style={{ fontSize: 9, color: '#c0535a', letterSpacing: '0.04em', fontWeight: 500 }}>Period</span>
            ) : (
              <span style={{ fontSize: 9, color: 'transparent' }}>·</span>
            )}
          </div>
        ))}
      </div>
      <p style={{ fontSize: 11, color: '#555', textAlign: 'center', letterSpacing: '0.02em' }}>
        Period starts in {daysUntil} day{daysUntil === 1 ? '' : 's'}.
      </p>
    </div>
  )
}

function ActionCard() {
  const [actionIdx, setActionIdx] = useState(() => Math.floor(Math.random() * ACTIONS.length))
  const [done, setDone] = useState(false)

  function handleNotToday() {
    let next
    do {
      next = Math.floor(Math.random() * ACTIONS.length)
    } while (next === actionIdx && ACTIONS.length > 1)
    setActionIdx(next)
    setDone(false)
  }

  const action = ACTIONS[actionIdx]

  return (
    <div
      style={{
        borderRadius: 16,
        padding: '14px 16px',
        backgroundColor: '#111',
        border: '1px solid #1e3d2e',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Done overlay */}
      {done && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.82)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
            borderRadius: 16,
          }}
        >
          <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '0.01em', textAlign: 'center', padding: '0 24px', margin: 0, lineHeight: 1.4 }}>
            Good. That's enough for today.
          </p>
        </div>
      )}

      {/* Card content */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        {/* Checkbox */}
        <button
          onClick={() => setDone(true)}
          style={{
            width: 20,
            height: 20,
            borderRadius: 5,
            border: done ? 'none' : '1.5px solid #444',
            backgroundColor: done ? '#2D6A4F' : 'transparent',
            cursor: 'pointer',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 1,
            padding: 0,
          }}
        >
          {done && <span style={{ color: '#fff', fontSize: 11, lineHeight: 1 }}>✓</span>}
        </button>

        {/* Text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontSize: 10, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {action.category}
          </span>
          <h3 style={{
            fontSize: 15,
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.3,
            margin: 0,
            textDecoration: done ? 'line-through' : 'none',
            textDecorationColor: '#555',
          }}>
            {action.title}
          </h3>
          <p style={{ fontSize: 12, color: '#888', lineHeight: 1.45, margin: 0 }}>
            {action.description}
          </p>
        </div>
      </div>

      {/* Not today button — bottom right */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          onClick={handleNotToday}
          style={{
            padding: '6px 12px',
            borderRadius: 8,
            backgroundColor: 'transparent',
            color: '#555',
            fontSize: 11,
            fontWeight: 500,
            border: '1px solid #2a2a2a',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Not today
        </button>
      </div>
    </div>
  )
}

function MealModal({ meal, onClose }) {
  if (!meal) return null
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.93)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={onClose}
    >
      <div
        style={{ flex: 1, overflowY: 'auto', padding: '24px 24px 40px', boxSizing: 'border-box' }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: '1px solid #2e2e2e',
              borderRadius: 8,
              color: '#888',
              fontSize: 13,
              padding: '6px 16px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>{meal.name}</h2>
        <p style={{ fontSize: 12, color: '#2D6A4F', margin: '0 0 28px' }}>{meal.prep}</p>

        <p style={{ fontSize: 11, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
          Ingredients
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 9 }}>
          {meal.ingredients.map((item, i) => (
            <li key={i} style={{ fontSize: 14, color: '#ccc', display: 'flex', gap: 10, lineHeight: 1.5 }}>
              <span style={{ color: '#2D6A4F', flexShrink: 0 }}>—</span>
              {item}
            </li>
          ))}
        </ul>

        <p style={{ fontSize: 11, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 12px' }}>
          Steps
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {meal.steps.map((step, i) => (
            <li key={i} style={{ fontSize: 14, color: '#ccc', display: 'flex', gap: 12, lineHeight: 1.6 }}>
              <span style={{ color: '#2D6A4F', fontWeight: 700, flexShrink: 0, minWidth: 18 }}>{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

function PhoneMockup({ children }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Outer shell — the "frame" */}
      <div
        style={{
          width: 414,
          height: 868,
          borderRadius: 54,
          backgroundColor: '#1c1c1e',
          padding: 12,
          boxShadow:
            '0 40px 100px rgba(0,0,0,0.9), 0 8px 32px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.07)',
          flexShrink: 0,
          boxSizing: 'border-box',
        }}
      >
        {/* Inner bezel — slightly lighter ring */}
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 44,
            backgroundColor: '#2e2e30',
            padding: 3,
            boxSizing: 'border-box',
          }}
        >
          {/* Screen area */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 42,
              backgroundColor: '#0a0a0a',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Dynamic Island pill notch */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 126,
                height: 37,
                backgroundColor: '#000',
                borderRadius: 20,
                zIndex: 10,
                pointerEvents: 'none',
              }}
            />
            {/* Content area, padded below notch */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 64,
                overflow: 'hidden',
                boxSizing: 'border-box',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default function App() {
  const [periodDate, setPeriodDate] = useState('')
  const [inputDate, setInputDate] = useState('')
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

  let content

  if (screen === 'onboarding') {
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 999, backgroundColor: '#222', color: '#888', marginBottom: 16, display: 'inline-block' }}>
            Getting Started
          </span>
          <h1 className="text-4xl font-bold tracking-widest text-white mb-3">CLARVUE</h1>
          <p className="text-sm tracking-wide mb-12" style={{ color: '#E8E8E8' }}>
            Your cycle. Pre-engineered.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-5 w-full max-w-xs"
          >
            <label className="text-sm tracking-wide text-center" style={{ color: '#E8E8E8' }}>
              When does your next period start?
            </label>
            <input
              type="date"
              value={inputDate}
              onChange={e => setInputDate(e.target.value)}
              required
              className="w-full rounded-lg px-4 py-3 text-sm outline-none border"
              style={{ backgroundColor: '#141414', color: '#E8E8E8', borderColor: '#2D6A4F' }}
            />
            <button
              type="submit"
              className="w-full rounded-lg py-3 text-sm font-semibold tracking-widest text-white transition-opacity hover:opacity-80"
              style={{ backgroundColor: '#2D6A4F' }}
            >
              SET DATE
            </button>
          </form>
        </div>
        <div style={{ padding: '6px 24px 10px', textAlign: 'center' }}>
          <button
            onClick={handleReset}
            style={{ background: 'none', border: 'none', fontSize: 11, letterSpacing: '0.12em', color: '#E8E8E8', opacity: 0.3, cursor: 'pointer', textTransform: 'uppercase' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.3}
          >
            Reset
          </button>
        </div>
      </div>
    )
  } else if (screen === 'active') {
    const meal = MEALS[day - 1]
    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
        <MealModal meal={openRecipe} onClose={() => setOpenRecipe(null)} />

        {/* Content region — no scroll */}
        <div style={{ flex: 1, overflow: 'hidden', padding: '14px 20px 4px', boxSizing: 'border-box' }}>
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <h1 className="text-xl font-bold tracking-widest text-white">CLARVUE</h1>
            <span
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 999, backgroundColor: '#1a3d2e', color: '#2D6A4F' }}
            >
              Active Window
            </span>
          </header>
          <main style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Day counter + week strip */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 13, color: '#888', letterSpacing: '0.02em', margin: 0 }}>
                You're in your luteal phase
              </p>
              <p style={{ fontSize: 40, fontWeight: 700, color: '#fff', lineHeight: 1.05, margin: 0 }}>
                Day {day} <span style={{ fontSize: 18, fontWeight: 400, color: '#666' }}>of your window</span>
              </p>
              <WeekStrip periodDateStr={periodDate} daysUntil={daysUntil} />
            </div>

            {/* Meal section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 13, color: '#888', letterSpacing: '0.02em', margin: 0 }}>
                Today's pick.
              </p>
              <div
                style={{ borderRadius: 14, padding: '12px 14px', backgroundColor: '#111', border: '1px solid #1e3d2e', cursor: 'pointer' }}
                onClick={() => setOpenRecipe(meal)}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <h2 style={{ fontSize: 15, fontWeight: 600, color: '#fff', lineHeight: 1.3, margin: 0 }}>{meal.name}</h2>
                    <p style={{ fontSize: 11, color: '#666', lineHeight: 1.45, margin: 0 }}>{meal.scienceNote}</p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, flexShrink: 0 }}>
                    <span style={{ fontSize: 10, letterSpacing: '0.04em', padding: '3px 8px', borderRadius: 4, backgroundColor: '#1a3d2e', color: '#2D6A4F' }}>
                      {meal.prep}
                    </span>
                    <span style={{ fontSize: 9, color: '#444', letterSpacing: '0.04em' }}>Tap for recipe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action card section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <p style={{ fontSize: 13, color: '#888', letterSpacing: '0.02em', margin: 0 }}>
                One thing to try today.
              </p>
              <ActionCard />
            </div>
          </main>
        </div>

        {/* Reset button — pinned outside scroll */}
        <div style={{ padding: '6px 24px 10px', textAlign: 'center' }}>
          <button
            onClick={handleReset}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 11,
              letterSpacing: '0.12em',
              color: '#E8E8E8',
              opacity: 0.3,
              cursor: 'pointer',
              textTransform: 'uppercase',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.3}
          >
            Reset
          </button>
        </div>
      </div>
    )
  } else {
    const daysToWindow = daysUntil - 7
    const countdown =
      daysUntil <= 0
        ? 'Your window has passed.'
        : `Your window opens in ${daysToWindow} day${daysToWindow === 1 ? '' : 's'}.`

    content = (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }}>
          <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 999, backgroundColor: '#1e1e1e', color: '#555', marginBottom: 20, display: 'inline-block' }}>
            Window Inactive
          </span>
          <h1 className="text-2xl font-bold tracking-widest mb-12" style={{ color: '#2D6A4F' }}>
            CLARVUE
          </h1>
          <p className="text-5xl font-bold text-white text-center leading-tight mb-6">
            {countdown}
          </p>
          <p className="text-sm tracking-wide" style={{ color: '#E8E8E8' }}>
            CLARVUE activates when it matters.
          </p>
        </div>
        <div style={{ padding: '6px 24px 10px', textAlign: 'center' }}>
          <button
            onClick={handleReset}
            style={{ background: 'none', border: 'none', fontSize: 11, letterSpacing: '0.12em', color: '#E8E8E8', opacity: 0.3, cursor: 'pointer', textTransform: 'uppercase' }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.3}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column', backgroundColor: '#0a0a0a' }}>
        {content}
      </div>
    )
  }

  return <PhoneMockup>{content}</PhoneMockup>
}
