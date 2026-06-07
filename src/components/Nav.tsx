import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { NAV_ITEMS } from './nav-data'
import { useScrolled } from '../hooks/useScrolled'
import { useTheme } from '../theme/ThemeProvider'

export function Nav() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled()
  const location = useLocation()
  const { mode, toggleMode } = useTheme()

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
          <button
            className="mode-toggle"
            aria-label={mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            onClick={toggleMode}
          >
            {mode === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <Link className="btn" to={onContact ? '#start' : '/contact'}>
            {onContact ? 'Start a project' : 'Book a strategy call'} ↗
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
          Book a strategy call ↗
        </Link>
      </div>
    </header>
  )
}
