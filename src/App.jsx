import { useState, useEffect } from 'react'

const MEAL = {
  name: 'Salmon & Quinoa Bowl',
  prep: '20 min',
  note: 'Omega-3s and magnesium support progesterone balance in the luteal phase.',
}

function getScreen(periodDateStr) {
  if (!periodDateStr) return { screen: 'onboarding' }
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const periodStart = new Date(periodDateStr + 'T00:00:00')
  const daysUntil = Math.round((periodStart - today) / (1000 * 60 * 60 * 24))
  if (daysUntil >= 1 && daysUntil <= 7) {
    return { screen: 'active', day: 8 - daysUntil }
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
            {/* Scrollable content, padded below notch */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 64,
                overflowY: 'auto',
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

// absolute so it positions correctly inside both mockup and full-screen mobile
function ResetLink({ onReset }) {
  return (
    <button
      onClick={onReset}
      className="absolute top-4 right-5 text-xs tracking-widest opacity-40 hover:opacity-100 transition-opacity"
      style={{ color: '#E8E8E8' }}
    >
      RESET
    </button>
  )
}

export default function App() {
  const [periodDate, setPeriodDate] = useState('')
  const [inputDate, setInputDate] = useState('')
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
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
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
    )
  } else if (screen === 'active') {
    content = (
      <div className="flex-1 flex flex-col px-6 py-6 relative">
        <ResetLink onReset={handleReset} />
        <header className="flex items-center justify-between mb-12">
          <h1 className="text-xl font-bold tracking-widest text-white">CLARVUE</h1>
          <span
            className="text-xs font-semibold tracking-widest px-3 py-1 rounded-full"
            style={{ backgroundColor: '#1a3d2e', color: '#2D6A4F' }}
          >
            YOUR WINDOW IS ACTIVE
          </span>
        </header>
        <main className="flex flex-col gap-10">
          <p className="text-7xl font-bold text-white leading-none">
            Day {day}
            <span className="text-3xl font-normal" style={{ color: '#E8E8E8' }}> of 7</span>
          </p>
          <div
            className="rounded-2xl p-6 flex flex-col gap-4"
            style={{ backgroundColor: '#111', border: '1px solid #1e3d2e' }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-white leading-snug">{MEAL.name}</h2>
              <span
                className="text-xs tracking-wide shrink-0 mt-1 px-2 py-1 rounded"
                style={{ backgroundColor: '#1a3d2e', color: '#2D6A4F' }}
              >
                {MEAL.prep}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#E8E8E8' }}>
              {MEAL.note}
            </p>
          </div>
        </main>
      </div>
    )
  } else {
    const daysToWindow = daysUntil - 7
    const countdown =
      daysUntil <= 0
        ? 'Your window has passed.'
        : `Your window opens in ${daysToWindow} day${daysToWindow === 1 ? '' : 's'}.`

    content = (
      <div className="flex-1 flex flex-col items-center justify-center px-6 relative">
        <ResetLink onReset={handleReset} />
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
    )
  }

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0a0a0a' }}>
        {content}
      </div>
    )
  }

  return <PhoneMockup>{content}</PhoneMockup>
}
