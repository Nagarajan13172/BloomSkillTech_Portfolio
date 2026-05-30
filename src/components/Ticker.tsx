const ITEMS = [
  'FULL-STACK ENGINEERING',
  'CLOUD INFRASTRUCTURE',
  'CYBERSECURITY',
  'DEVOPS & AUTOMATION',
  'VIRTUAL LABS',
]

/** Dark scrolling capability marquee with gradient sparkle separators. */
export function Ticker() {
  // Duplicated once so the -50% keyframe loops seamlessly.
  const sequence = [...ITEMS, ...ITEMS]

  return (
    <div className="tick">
      <div className="tickrow">
        {sequence.map((label, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span>{label}</span>
            <span className="s">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
