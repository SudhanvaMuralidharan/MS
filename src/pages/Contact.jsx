import './Contact.css'

const INFO_ITEMS = [
  { icon: '📍', label: 'Address', value: 'Bengaluru, Karnataka, India' },
  { icon: '📧', label: 'Email', value: 'info@dashruum.in', href: 'mailto:info@dashruum.in' },
  { icon: '📞', label: 'Phone', value: '+91 9113881150', href: 'tel:+919113881150' },
  { icon: '💬', label: 'WhatsApp', value: '+91 9113881150', href: 'https://wa.me/9113881150' },
  { icon: '🕐', label: 'Hours', value: 'Mon – Sat · 8 AM – 6 PM' },
]

export default function Contact() {
  return (
    <div className="contact-page">

      {/* ════ PAGE HERO ════ */}
      <section className="contact-hero">
        <div className="contact-hero__bg" />
        <div className="container contact-hero__body">
          {/* Header text removed as per request */}
        </div>
      </section>

      {/* ════ MAIN CONTENT ════ */}
      <section className="contact-main container">
        <div className="contact-info contact-info--centered">
          <h2 className="contact-info__title">How Can We Help?</h2>
          <p className="contact-info__body">
            We supply farm-fresh mushrooms to home chefs, restaurants, cloud kitchens, hotels and
            retailers across Bengaluru. Reach out through any of the channels below and we'll get back within 24 hours.
          </p>

          <ul className="info-list">
            {INFO_ITEMS.map(item => (
              <li key={item.label} className="info-item">
                <span className="info-item__icon">{item.icon}</span>
                <div>
                  <p className="info-item__label">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="info-item__value info-item__value--link">{item.value}</a>
                    : <p className="info-item__value">{item.value}</p>
                  }
                </div>
              </li>
            ))}
          </ul>

          <div className="contact-promise">
            <span>🌱</span>
            <p>All mushrooms are harvested <strong>fresh on the day of dispatch</strong>. Freshness always guaranteed.</p>
          </div>
        </div>
      </section>

      {/* ════ MAP PLACEHOLDER ════ */}
      <div className="map-strip">
        <div className="map-strip__grid" />
        <div className="map-card">
          <span className="map-card__pin">📍</span>
          <p className="map-card__name">MS Canopy Farm</p>
          <p className="map-card__loc">Bengaluru, Karnataka, India</p>
        </div>
      </div>

    </div>
  )
}
