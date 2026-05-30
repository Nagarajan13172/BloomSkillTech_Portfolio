import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_ITEMS } from './nav-data'
import { useScrolled } from '../hooks/useScrolled'

export function Nav() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()

  // Contact page swaps the nav CTA to point at the form anchor.
  const onContact = location.pathname === '/contact'

  return (
    <header className={`nav-shell${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav">
        <Link className="brand" to="/" aria-label="Bloomskill Tech home">
          <img src="/bst-logo.png" alt="" />
          <span>
            Bloomskill Tech
            <small>est. 2022 · india</small>
          </span>
        </Link>

        <div className="nlinks">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => (isActive ? 'on' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-right">
          <Link className="btn" to={onContact ? '#start' : '/contact'}>
            {onContact ? 'Start a project' : 'Get in touch'} ↗
          </Link>
          <button
            className={`menu-btn${open ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => (isActive ? 'on' : undefined)}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" style={{ color: 'var(--magenta)' }} onClick={() => setOpen(false)}>
          Get in touch ↗
        </Link>
      </div>
    </header>
  )
}
