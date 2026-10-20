// Endless horizontal band; the second copy fills the gap as the first scrolls out. Pauses on hover.
export default function Marquee({ items }) {
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      {[0, 1].map((copy) => (
        <div key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {items.map((item) => (
            <span key={item} className="flex items-center whitespace-nowrap font-serif text-lg text-muted md:text-xl">
              <span className="px-6 md:px-8">{item}</span>
              <span className="text-xs text-pop-green" aria-hidden="true">
                ✦
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
