import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Products.css'

/* ── Product data ───────────────────────── */
const products = [
  {
    id: 1,
    name: 'Golden Oyster',
    sci: 'Pleurotus citrinopileatus',
    emoji: '🟡',
    gradient: 'linear-gradient(140deg,#f9d423 0%,#e8a000 100%)',
    badgeLabel: 'Most Popular',
    badgeColor: '#1a1f5e',
    stock: 'Year-round',
    desc: 'Vivid golden clusters with a velvety cap and a delicately nutty, slightly fruity aroma. They cook quickly and add a buttery richness to stir-fries, soups and pasta dishes.',
    benefits: ['Rich in antioxidants', 'High protein', 'Boosts immunity', 'Low calorie'],
    uses: ['Stir-fries', 'Soups', 'Pasta', 'Risotto'],
  },
  {
    id: 2,
    name: 'Pink Oyster',
    sci: 'Pleurotus djamor',
    emoji: '🌸',
    gradient: 'linear-gradient(140deg,#f8a5c2 0%,#e0457b 100%)',
    badgeLabel: 'Fan Favourite',
    badgeColor: '#831843',
    stock: 'Year-round',
    desc: 'Strikingly vivid pink mushrooms with a tender texture and a mild, slightly smoky flavour. A true showstopper on any plate — and delicious as a meat-free bacon substitute.',
    benefits: ['Anti-inflammatory', 'Heart-healthy', 'Vitamin D source', 'Iron-rich'],
    uses: ['Tacos', 'Vegan bacon', 'Soups', 'Salads'],
  },
  {
    id: 3,
    name: 'Milky Mushroom',
    sci: 'Calocybe indica',
    emoji: '🤍',
    gradient: 'linear-gradient(140deg,#f5f5f0 0%,#ccc8be 100%)',
    badgeLabel: 'Indian Favourite',
    badgeColor: '#5c3d2e',
    stock: 'Year-round',
    desc: 'Plump, pearly-white mushrooms with a firm, meaty texture that holds up beautifully in cooking. Mild and versatile, loved across Indian cuisines from curries to biryanis.',
    benefits: ['High fibre', 'Good potassium', 'Supports digestion', 'Low fat'],
    uses: ['Curries', 'Biryanis', 'Grills', 'Sautés'],
  },
  {
    id: 4,
    name: 'King Oyster',
    sci: 'Pleurotus eryngii',
    emoji: '🍄',
    gradient: 'linear-gradient(140deg,#d4a96a 0%,#7c4a1e 100%)',
    badgeLabel: "Chef's Choice",
    badgeColor: '#3a1800',
    stock: 'Limited stock',
    desc: 'The king of oyster mushrooms — thick, trumpet-shaped stems with small brown caps. A dense, meaty texture with a rich umami depth, perfect as a scallop or steak substitute.',
    benefits: ['Ergothioneine-rich', 'Gut health', 'Cholesterol-lowering', 'B vitamins'],
    uses: ['Scallop sub', 'BBQ steaks', 'Ramen', 'Stir-fries'],
  },
  {
    id: 5,
    name: 'Shiitake',
    sci: 'Lentinula edodes',
    emoji: '🍂',
    gradient: 'linear-gradient(140deg,#8d5524 0%,#3a1500 100%)',
    badgeLabel: 'Superfood',
    badgeColor: '#166534',
    stock: 'Year-round',
    desc: "The world's most celebrated mushroom. Dark brown caps, a woodsy fragrance and an intensely savoury umami flavour that deepens beautifully with drying, roasting or braising.",
    benefits: ['Lentinan immune boost', 'Heart support', 'Anti-viral', 'Natural B12'],
    uses: ['Asian broths', 'Miso soup', 'Dried powder', 'Stir-fries'],
  },
  {
    id: 6,
    name: "Lion's Mane",
    sci: 'Hericium erinaceus',
    emoji: '☁️',
    gradient: 'linear-gradient(140deg,#fffde7 0%,#c9b99a 100%)',
    badgeLabel: 'Brain Food',
    badgeColor: '#374151',
    stock: 'Limited stock',
    desc: "A cascade of white, flowing spines resembling a lion's mane. Mild and sweet with a hint of fresh seafood — and remarkable cognitive and nervous-system benefits.",
    benefits: ['Nerve growth factor', 'Cognitive support', 'Anxiety-reducing', 'Gut health'],
    uses: ['Butter sauté', 'Seafood sub', 'Brain health tea', 'Supplements'],
  },
]

/* ── Component ───────────────────────────── */
export default function Products() {
  const [expanded, setExpanded] = useState(null)

  const toggle = (id) => setExpanded(prev => prev === id ? null : id)

  return (
    <div className="products-page">

      {/* ════ PAGE HERO ════ */}
      <section className="prod-hero">
        <div className="prod-hero__bg" />
        <div className="container prod-hero__body">
          <span className="eyebrow">Our Collection</span>
          <h1 className="prod-hero__title">
            Six Extraordinary<br /><em>Mushroom Varieties</em>
          </h1>
          <p className="prod-hero__sub">
            Each mushroom is cultivated in controlled grow rooms — temperature,
            humidity and substrate precisely dialled in for peak quality every harvest.
          </p>
        </div>
      </section>

      {/* ════ PRODUCT GRID ════ */}
      <section className="products-section container">
        <div className="products-grid">
          {products.map((p, i) => {
            const isOpen = expanded === p.id
            return (
              <article
                key={p.id}
                className={`prod-card${isOpen ? ' prod-card--open' : ''}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {/* Visual */}
                <div className="prod-card__visual" style={{ background: p.gradient }}>
                  <span className="prod-card__emoji">{p.emoji}</span>
                  <span
                    className="prod-card__badge"
                    style={{ background: p.badgeColor }}
                  >
                    {p.badgeLabel}
                  </span>
                  {p.stock === 'Limited stock' && (
                    <span className="prod-card__limited">Limited</span>
                  )}
                </div>

                {/* Body */}
                <div className="prod-card__body">
                  <div className="prod-card__header">
                    <div>
                      <h2 className="prod-card__name">{p.name}</h2>
                      <p className="prod-card__sci">{p.sci}</p>
                    </div>
                    <div className={`prod-card__stock ${p.stock === 'Year-round' ? 'prod-card__stock--green' : 'prod-card__stock--amber'}`}>
                      <span className="stock-dot" />
                      {p.stock}
                    </div>
                  </div>

                  <p className="prod-card__desc">{p.desc}</p>

                  {/* Expandable details */}
                  <div className="prod-card__details">
                    <div className="prod-card__detail-row">
                      <h4 className="prod-card__row-label">Health Benefits</h4>
                      <div className="prod-card__tags">
                        {p.benefits.map(b => (
                          <span key={b} className="tag tag--green">{b}</span>
                        ))}
                      </div>
                    </div>
                    <div className="prod-card__detail-row">
                      <h4 className="prod-card__row-label">Best Used In</h4>
                      <div className="prod-card__tags">
                        {p.uses.map(u => (
                          <span key={u} className="tag tag--teal">{u}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="prod-card__footer">
                    <button
                      className="prod-card__toggle"
                      onClick={() => toggle(p.id)}
                      aria-expanded={isOpen}
                    >
                      {isOpen ? '▲ Show Less' : '▼ Details & Uses'}
                    </button>
                    <Link to="/contact" className="prod-card__order">
                      Enquire →
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* ════ BOTTOM CTA ════ */}
      <section className="prod-cta">
        <div className="prod-cta__inner">
          <div className="container">
            <h2 className="prod-cta__title">Need bulk supply or custom orders?</h2>
            <p className="prod-cta__sub">
              We supply restaurants, hotels, cloud kitchens and retailers. Get in touch for pricing and delivery schedules.
            </p>
            <Link to="/contact" className="btn btn-white">Get in Touch</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
