import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../contexts/SettingsContext.jsx'
import { Spinner } from '../../components/LoadingStates'
import PaymentInfo from '../../components/PaymentInfo'

const STEPS = [
  { number: '01', title: 'Browse', text: 'Explore the price list — filter by category or search for something specific.' },
  { number: '02', title: 'Add to Cart', text: 'Pick a color if there\u2019s one you like, choose a quantity, and add it to your cart.' },
  { number: '03', title: 'Review Your Order', text: 'Open your cart to double-check items, quantities, and the total.' },
  { number: '04', title: 'Send & Pay', text: 'Tap "Send Order via Messenger," then pay using the QR code below.' },
]

export default function Home() {
  const { settings, loading } = useSiteSettings()

  if (loading) return <Spinner label="Loading…" />

  const businessName = settings?.business_name || 'AXKN07 Crochet'
  const welcomeMessage =
    settings?.welcome_message ||
    'Browse our handmade crochet pieces, check their prices, and find something special for yourself or someone you love.'

  return (
    <div>
      <section className="relative overflow-hidden bg-peach-fade">
        <svg
          className="pointer-events-none absolute -right-8 -top-4 w-56 opacity-80 sm:w-72"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M180 10 C150 40 120 50 90 80 C70 100 60 120 40 140"
            stroke="#F4A9BE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <g fill="#F7B8CA">
            <circle cx="140" cy="45" r="9" />
            <circle cx="120" cy="60" r="7" />
            <circle cx="100" cy="78" r="8" />
            <circle cx="75" cy="102" r="6" />
            <circle cx="55" cy="122" r="7" />
          </g>
        </svg>
        <svg
          className="pointer-events-none absolute -bottom-6 -left-10 w-48 -scale-x-100 opacity-60 sm:w-64"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M180 10 C150 40 120 50 90 80 C70 100 60 120 40 140"
            stroke="#F4A9BE"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <g fill="#F7B8CA">
            <circle cx="140" cy="45" r="9" />
            <circle cx="120" cy="60" r="7" />
            <circle cx="100" cy="78" r="8" />
          </g>
        </svg>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
          <span className="mb-4 text-5xl" aria-hidden="true">
            🌸
          </span>
          <h1 className="font-heading text-3xl font-semibold text-ink sm:text-4xl">
            Welcome to {businessName}
          </h1>
          {settings?.tagline && (
            <p className="mt-2 font-body text-base text-peach">{settings.tagline}</p>
          )}
          <p className="mt-4 max-w-xl font-body text-base text-ink-soft sm:text-lg">{welcomeMessage}</p>
          <Link to="/prices" className="btn-primary mt-8 !px-8 !py-4 text-base">
            View Price List
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="mb-8 text-center font-heading text-2xl font-semibold text-ink">
          How to Use This Price List
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="card flex flex-col gap-2 p-5">
              <span className="font-heading text-3xl font-semibold text-clover">{step.number}</span>
              <h3 className="font-heading text-lg font-semibold text-ink">{step.title}</h3>
              <p className="font-body text-sm text-ink-soft">{step.text}</p>
            </div>
          ))}
        </div>

        {settings?.tutorial_content && (
          <p className="mx-auto mt-8 max-w-2xl text-center font-body text-sm text-ink-soft">
            {settings.tutorial_content}
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <Link to="/prices" className="btn-primary !px-8 !py-4 text-base">
            View Price List
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-14 sm:px-6">
        <PaymentInfo />
      </section>
    </div>
  )
}
