import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__top container">

        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__brand-link">
            <img src={logo} alt="MS Canopy" className="footer__logo" />
            <span className="footer__company">MS Canopy</span>
          </Link>
          <p className="footer__tagline">
            Premium exotic mushrooms, grown with science and passion — delivered farm-fresh to your door.
          </p>
          <div className="footer__social">
            <a href="https://wa.me/919113881150" className="footer__social-btn" aria-label="WhatsApp">💬 WhatsApp</a>
          </div>
        </div>

        {/* Navigate */}
        <div className="footer__col">
          <h4 className="footer__heading">Navigate</h4>
          <Link to="/" className="footer__link">Home</Link>
          <Link to="/products" className="footer__link">Our Products</Link>
          <Link to="/contact" className="footer__link">Contact Us</Link>
          <Link to="/contact" className="footer__link">Order Now</Link>
        </div>

        {/* Products */}
        <div className="footer__col">
          <h4 className="footer__heading">Mushrooms</h4>
          {['Golden Oyster', 'Pink Oyster', 'Milky Mushroom', 'King Oyster', 'Shiitake', 'Lion\'s Mane'].map(m => (
            <span key={m} className="footer__link footer__link--plain">{m}</span>
          ))}
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__heading">Get In Touch</h4>
          <a href="mailto:info@dashruum.in" className="footer__link">📧 info@dashruum.in</a>
          <a href="tel:+91 9113881150" className="footer__link">📞 +91 9113881150</a>
          <span className="footer__link footer__link--plain">📍 Bengaluru, Karnataka</span>
          <span className="footer__link footer__link--plain">🕐 Mon–Sat · 8 AM – 6 PM</span>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {year} MS Canopy. All rights reserved.</p>
        <p className="footer__sub">Cultivated with passion · Served with pride</p>
      </div>
    </footer>
  )
}
