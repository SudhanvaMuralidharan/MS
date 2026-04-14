import { Link } from 'react-router-dom'
import './Home.css'

/* ── Data ─────────────────────────────── */
const pillars = [
  { icon: '🌿', title: 'Farm Fresh Daily',       desc: 'Mushrooms harvested every morning and dispatched within hours for peak flavour and nutrition.' },
  { icon: '🔬', title: 'Hygienically Cultivated', desc: 'Sterile, temperature-controlled grow rooms meet rigorous food-safety standards at every stage.' },
  { icon: '🍄', title: 'Six Exotic Varieties',    desc: 'From nutty Golden Oyster to cerebral Lion\'s Mane — a variety for every palate and purpose.' },
  { icon: '📦', title: 'Bulk & Retail Orders',    desc: 'Flexible supply for home cooks, cloud kitchens, restaurants, hotels and wholesale buyers.' },
]

const spotlights = [
  { name: "Golden Oyster",  emoji: '🟡', tagline: 'Buttery & nutty',       grad: 'linear-gradient(135deg,#f9d423,#d4900a)' },
  { name: "Lion's Mane",    emoji: '☁️', tagline: 'Sweet & seafood-like',  grad: 'linear-gradient(135deg,#e8e0d5,#b8a88a)' },
  { name: "Shiitake",       emoji: '🍂', tagline: 'Deep umami earthiness', grad: 'linear-gradient(135deg,#7b4226,#4a2000)' },
]

const stats = [
  { num: '6',     label: 'Varieties' },
  { num: '100%',  label: 'Farm Fresh' },
  { num: 'Daily', label: 'Harvest' },
  { num: '24 hr', label: 'Delivery' },
]

/* ── Component ─────────────────────────── */
export default function Home() {
  return (
    <div className="home">

      {/* ════ HERO ════ */}
      <section className="hero">
        <div className="hero__backdrop">
          <div className="hero__orb hero__orb--a" />
          <div className="hero__orb hero__orb--b" />
          <div className="hero__orb hero__orb--c" />
          <div className="hero__grid" />
        </div>

        <div className="hero__body container">
          <span className="eyebrow" style={{ animationDelay: '0s' }}>Premium Exotic Mushrooms · Bengaluru</span>

          <h1 className="hero__title">
            Nature's Finest,<br />
            <em className="hero__italic">Delivered Fresh</em>
          </h1>

          <p className="hero__sub">
            MS Canopy brings you six extraordinary mushroom varieties — grown with
            precision in our farm and delivered bursting with flavour.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn-teal">Explore Collection</Link>
            <Link to="/contact"  className="btn btn-ghost">Get a Quote →</Link>
          </div>

          {/* Stat strip */}
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div key={i} className="hero__stat">
                <span className="hero__stat-num">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll" aria-hidden="true">
          <div className="hero__scroll-wheel" />
        </div>
      </section>

      {/* ════ PILLARS ════ */}
      <section className="pillars">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Why Choose Us</span>
            <h2 className="section-title">Grown with Intention,<br />Served with Pride</h2>
          </div>
          <div className="pillars__grid">
            {pillars.map((p, i) => (
              <article key={p.title} className="pillar-card" style={{ animationDelay: `${i * 0.09}s` }}>
                <div className="pillar-card__icon">{p.icon}</div>
                <h3 className="pillar-card__title">{p.title}</h3>
                <p className="pillar-card__desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SPOTLIGHT ════ */}
      <section className="spotlight">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-dark">Our Mushrooms</span>
            <h2 className="section-title">A Taste of the Collection</h2>
          </div>

          <div className="spotlight__grid">
            {spotlights.map(p => (
              <article key={p.name} className="spot-card">
                <div className="spot-card__visual" style={{ background: p.grad }}>
                  <span className="spot-card__emoji">{p.emoji}</span>
                </div>
                <div className="spot-card__body">
                  <h3 className="spot-card__name">{p.name}</h3>
                  <p className="spot-card__tagline">{p.tagline}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="spotlight__footer">
            <Link to="/products" className="btn btn-navy">View All 6 Varieties →</Link>
          </div>
        </div>
      </section>


      {/* ════ CTA BANNER ════ */}
      <section className="cta-band">
        <div className="cta-band__inner">
          <div className="container">
            <div className="cta-band__deco" aria-hidden="true" />
            <h2 className="cta-band__title">Ready to order fresh mushrooms?</h2>
            <p className="cta-band__sub">
              Contact us for bulk orders, restaurant supply, home delivery, or any questions.
            </p>
            <Link to="/contact" className="btn btn-white">Contact Us Today</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
