import { useEffect, useState } from 'react'
import { experience } from '../data/portfolio'
import { scrollToId } from '../lib/smoothScroll'

// Sticky row under the nav listing every company. Clicking one opens its Experience tab;
// the highlight follows whichever tab is open.
export default function CompanyBar() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const onChange = (e) => setCurrent(e.detail)
    window.addEventListener('experience-change', onChange)
    return () => window.removeEventListener('experience-change', onChange)
  }, [])

  const select = (i) => {
    window.dispatchEvent(new CustomEvent('select-experience', { detail: i }))
    scrollToId('experience')
  }

  return (
    <div className="border-t border-line/70">
      <div className="wrap flex h-11 items-center gap-5 overflow-x-auto [mask-image:linear-gradient(to_right,black_80%,transparent)] [scrollbar-width:none] md:[mask-image:none] [&::-webkit-scrollbar]:hidden">
        <span className="label hidden shrink-0 !text-[10px] sm:block">Experience at</span>
        <span aria-hidden="true" className="hidden h-4 w-px shrink-0 bg-line-strong sm:block" />
        <ul className="flex items-center gap-1">
          {experience.map((job, i) => (
            <li key={job.company} className="shrink-0">
              <button
                type="button"
                onClick={() => select(i)}
                className={`group flex items-center gap-2.5 rounded-full py-1 pl-1.5 pr-3.5 transition-colors duration-300 ${current === i ? 'bg-accent-wash text-ink' : 'text-muted hover:text-ink'}`}
              >
                <span
                  className={`relative grid h-6 min-w-6 place-items-center rounded-md bg-white px-1 shadow-[0_0_0_1px_rgb(var(--line))] transition duration-300 ${current === i ? '' : 'opacity-80 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
                >
                  <img src={job.logo} alt="" className="h-4 w-auto max-w-[44px] object-contain" />
                  {i === 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-2 w-2" title="Current role">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pop-green opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full border border-paper bg-pop-green" />
                    </span>
                  )}
                </span>
                <span className="font-serif text-[15px] leading-none">{job.company}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
