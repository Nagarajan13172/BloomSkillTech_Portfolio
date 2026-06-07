import { useEffect, useRef, useState } from 'react'
import { Send, Sparkles, X } from 'lucide-react'

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

/** Canned opener — shown in the UI but never sent to the API (the model's
 *  first message must be a user turn). Kept as a stable reference so it can be
 *  filtered out of the request by identity. */
const GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi 👋 I'm BloomSkill Tech's assistant. We're a digital product studio that takes you from idea to a shipped product — one team, no handoffs. Ask me about how we work, what we've built, timelines and pricing, or how to start a project.",
}

const SUGGESTIONS = [
  'What does BloomSkill Tech do?',
  'How does the 4D framework work?',
  'How long does an MVP take?',
  'How do you price projects?',
  'What have you built?',
  'How do we get started?',
]

/**
 * Floating "Ask AI" assistant. A launcher in the bottom-right corner opens a
 * chat panel that answers visitor questions about BloomSkill Tech via the
 * server-side /api/chat endpoint (which streams from Gemini). Styled with the
 * same CSS variables as the rest of the site, so it follows the active theme.
 */
export function AskAI() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const rootRef = useRef<HTMLDivElement | null>(null)
  const fabRef = useRef<HTMLButtonElement | null>(null)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const wasOpen = useRef(false)

  // Close on Escape and on outside click (mirrors the theme customizer).
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
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

  // Focus the composer on open; restore focus to the launcher on close.
  useEffect(() => {
    if (open) inputRef.current?.focus()
    else if (wasOpen.current) fabRef.current?.focus()
    wasOpen.current = open
  }, [open])

  // Keep the newest message (or the typing indicator) in view.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, loading])

  async function send(text: string) {
    const content = text.trim()
    if (!content || loading) return
    setError(null)
    setInput('')

    const next: ChatMessage[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Drop the canned greeting; the API's first turn must be the user's.
        body: JSON.stringify({ messages: next.filter((m) => m !== GREETING) }),
      })

      // Config/validation failures come back as JSON with an error status; a
      // successful answer streams back as Server-Sent Events.
      const ctype = res.headers.get('content-type') || ''
      if (!res.ok || ctype.includes('application/json') || !res.body) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Request failed.')
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let started = false
      let streamError: string | null = null

      // Append each delta to a single assistant bubble as it arrives.
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const frames = buffer.split('\n\n') // SSE frames are blank-line separated
        buffer = frames.pop() ?? ''
        for (const frame of frames) {
          const dataLine = frame.split('\n').find((l) => l.startsWith('data:'))
          if (!dataLine) continue
          let evt: { delta?: string; done?: boolean; error?: string }
          try {
            evt = JSON.parse(dataLine.slice(5).trim())
          } catch {
            continue
          }
          if (evt.error) {
            streamError = evt.error
          } else if (evt.delta) {
            const delta = evt.delta
            if (!started) {
              started = true
              setMessages((m) => [...m, { role: 'assistant', content: delta }])
            } else {
              setMessages((m) => {
                const copy = m.slice()
                const last = copy[copy.length - 1]
                copy[copy.length - 1] = { ...last, content: last.content + delta }
                return copy
              })
            }
          }
        }
      }

      if (streamError) setError(streamError)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void send(input)
    }
  }

  // Grow the textarea with its content, up to the CSS max-height.
  function onInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInput(e.target.value)
    const el = e.target
    el.style.height = 'auto'
    el.style.height = `${el.scrollHeight}px`
  }

  return (
    <div className="ai-root" ref={rootRef}>
      {open && (
        <div className="ai-panel" role="dialog" aria-label="Ask AI — BloomSkill Tech assistant">
          <div className="ai-head">
            <span className="ai-head-title">
              <img className="ai-head-logo" src="/bst-logo.png" alt="" />
              <span className="ai-head-text">
                Ask AI
                <small>BloomSkill Tech</small>
              </span>
            </span>
            <button className="ai-x" aria-label="Close" onClick={() => setOpen(false)}>
              <X size={16} />
            </button>
          </div>

          <div className="ai-msgs" ref={scrollRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`ai-msg ai-msg--${m.role}`}>
                {m.content}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="ai-suggest">
                {SUGGESTIONS.map((s) => (
                  <button key={s} className="ai-chip" onClick={() => void send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Show the dots only until the first streamed token arrives. */}
            {loading && messages[messages.length - 1]?.role === 'user' && (
              <div className="ai-msg ai-msg--assistant ai-typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            )}

            {error && <div className="ai-error">{error}</div>}
          </div>

          <form
            className="ai-composer"
            onSubmit={(e) => {
              e.preventDefault()
              void send(input)
            }}
          >
            <textarea
              ref={inputRef}
              className="ai-input"
              rows={1}
              placeholder="Ask about BloomSkill Tech…"
              value={input}
              onChange={onInput}
              onKeyDown={onKeyDown}
              disabled={loading}
            />
            <button
              type="submit"
              className="ai-send"
              aria-label="Send message"
              disabled={loading || !input.trim()}
            >
              <Send size={16} />
            </button>
          </form>
          <p className="ai-disclaimer">AI can make mistakes — confirm important details with our team.</p>
        </div>
      )}

      <button
        className="ai-fab"
        aria-haspopup="dialog"
        aria-expanded={open}
        ref={fabRef}
        onClick={() => setOpen((v) => !v)}
      >
        <Sparkles size={18} />
        <span>Ask AI</span>
      </button>
    </div>
  )
}
