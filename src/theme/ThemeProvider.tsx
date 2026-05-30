import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  DEFAULT_THEME,
  STORAGE_KEY,
  type FontKey,
  type Mode,
  type Palette,
  type Radius,
  type ThemeState,
} from './theme-config'

interface ThemeContextValue extends ThemeState {
  setMode: (mode: Mode) => void
  setPalette: (palette: Palette) => void
  setFont: (font: FontKey) => void
  setRadius: (radius: Radius) => void
  toggleMode: () => void
  reset: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readInitial(): ThemeState {
  if (typeof window === 'undefined') return DEFAULT_THEME
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) return { ...DEFAULT_THEME, ...(JSON.parse(raw) as Partial<ThemeState>) }
  } catch {
    /* ignore malformed storage */
  }
  return DEFAULT_THEME
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ThemeState>(readInitial)

  // Reflect theme onto <html> data-attributes and persist. An inline script in
  // index.html applies the same attributes before paint, so there's no flash.
  useEffect(() => {
    const el = document.documentElement
    el.dataset.mode = state.mode
    el.dataset.palette = state.palette
    el.dataset.font = state.font
    el.dataset.radius = state.radius
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage may be unavailable (private mode) — non-fatal */
    }
  }, [state])

  const value: ThemeContextValue = {
    ...state,
    setMode: (mode) => setState((s) => ({ ...s, mode })),
    setPalette: (palette) => setState((s) => ({ ...s, palette })),
    setFont: (font) => setState((s) => ({ ...s, font })),
    setRadius: (radius) => setState((s) => ({ ...s, radius })),
    toggleMode: () => setState((s) => ({ ...s, mode: s.mode === 'light' ? 'dark' : 'light' })),
    reset: () => setState(DEFAULT_THEME),
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within <ThemeProvider>')
  return ctx
}
