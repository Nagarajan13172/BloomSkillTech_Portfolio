import { useEffect, useRef, useState } from 'react'
import { Moon, Paintbrush, RotateCcw, Sun, Type, X } from 'lucide-react'
import { useTheme } from '../theme/ThemeProvider'
import { FONTS, PALETTES, RADII } from '../theme/theme-config'

/**
 * Floating appearance customizer: light/dark mode, accent palette, display font
 * and corner radius. Everything is driven through CSS variables, so changes
 * apply instantly across the whole site and persist via the ThemeProvider.
 */
export function ThemeCustomizer() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const fabRef = useRef<HTMLButtonElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)
  const wasOpen = useRef(false)
  const { mode, palette, font, radius, toggleMode, setPalette, setFont, setRadius, reset } =
    useTheme()

  // Close on Escape and on outside click.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    // defer so the opening click doesn't immediately close it
    const t = window.setTimeout(() => window.addEventListener('mousedown', onClick), 0)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.clearTimeout(t)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  // Move focus into the panel on open; restore it to the trigger on close.
  useEffect(() => {
    if (open) closeBtnRef.current?.focus()
    else if (wasOpen.current) fabRef.current?.focus()
    wasOpen.current = open
  }, [open])

  return (
    <div className="tc-root" ref={panelRef}>
      {open && (
        <div className="tc-panel" id="tc-panel" role="group" aria-label="Theme customizer">
          <div className="tc-head">
            <span className="tc-title mono">// customize</span>
            <button
              className="tc-x"
              aria-label="Close"
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
            >
              <X size={16} />
            </button>
          </div>

          {/* Appearance */}
          <div className="tc-group">
            <span className="tc-label">
              {mode === 'light' ? <Sun size={13} /> : <Moon size={13} />} Appearance
            </span>
            <div className="tc-seg" role="group" aria-label="Appearance">
              <button
                className={mode === 'light' ? 'on' : undefined}
                aria-pressed={mode === 'light'}
                onClick={() => mode !== 'light' && toggleMode()}
              >
                <Sun size={14} /> Light
              </button>
              <button
                className={mode === 'dark' ? 'on' : undefined}
                aria-pressed={mode === 'dark'}
                onClick={() => mode !== 'dark' && toggleMode()}
              >
                <Moon size={14} /> Dark
              </button>
            </div>
          </div>

          {/* Palette */}
          <div className="tc-group">
            <span className="tc-label">
              <Paintbrush size={13} /> Color palette
            </span>
            <div className="tc-palettes">
              {PALETTES.map((p) => (
                <button
                  key={p.key}
                  className={`tc-pal${palette === p.key ? ' on' : ''}`}
                  onClick={() => setPalette(p.key)}
                  aria-label={p.label}
                  aria-pressed={palette === p.key}
                  title={p.label}
                >
                  <span
                    className="tc-pal-grad"
                    style={{ backgroundImage: `linear-gradient(100deg, ${p.swatch.join(', ')})` }}
                  />
                  <span className="tc-pal-name">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font */}
          <div className="tc-group">
            <span className="tc-label">
              <Type size={13} /> Display font
            </span>
            <div className="tc-fonts">
              {FONTS.map((f) => (
                <button
                  key={f.key}
                  className={`tc-font${font === f.key ? ' on' : ''}`}
                  style={{ fontFamily: f.stack }}
                  aria-pressed={font === f.key}
                  onClick={() => setFont(f.key)}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Radius */}
          <div className="tc-group">
            <span className="tc-label">Corners</span>
            <div className="tc-seg" role="group" aria-label="Corner radius">
              {RADII.map((r) => (
                <button
                  key={r.key}
                  className={radius === r.key ? 'on' : undefined}
                  aria-pressed={radius === r.key}
                  onClick={() => setRadius(r.key)}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          <button className="tc-reset" onClick={reset}>
            <RotateCcw size={13} /> Reset to defaults
          </button>
        </div>
      )}

      <button
        className="tc-fab"
        aria-label="Customize theme"
        aria-haspopup="true"
        aria-controls="tc-panel"
        aria-expanded={open}
        ref={fabRef}
        onClick={() => setOpen((v) => !v)}
      >
        <Paintbrush size={18} />
      </button>
    </div>
  )
}
