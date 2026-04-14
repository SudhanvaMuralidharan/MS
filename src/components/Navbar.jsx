import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinkClass = ({ isActive }) =>
    `navbar__link${isActive ? ' navbar__link--active' : ''}`

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <Link to="/" className="navbar__brand">
            <img src={`${import.meta.env.BASE_URL}dashruum.png`} alt="DaShruum logo" className="navbar__logo" />
            <span className="navbar__name">DaShruum</span>
          </Link>

          <nav className="navbar__nav" aria-label="Main navigation">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/products" className={navLinkClass}>Products</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          <div className="navbar__right">
            <Link to="/contact" className="navbar__cta">Order Now</Link>
            <button
              className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <nav className="mobile-menu__nav">
          <NavLink to="/" className="mobile-menu__link">Home</NavLink>
          <NavLink to="/products" className="mobile-menu__link">Products</NavLink>
          <NavLink to="/contact" className="mobile-menu__link">Contact</NavLink>
          <Link to="/contact" className="mobile-menu__cta">Order Now →</Link>
        </nav>
      </div>
      {menuOpen && <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  )
}
