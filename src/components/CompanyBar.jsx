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
                data-cta={`Company bar: ${job.company}`}
                className={`group flex items-center gap-2.5 rounded-full py-1 pl-1 pr-3.5 transition-colors duration-300 ${current === i ? 'bg-ink/[.06] text-ink' : 'text-muted hover:text-ink'}`}
              >
                <span className={`relative h-6 w-6 shrink-0 transition duration-300 ${current === i ? '' : 'opacity-75 group-hover:opacity-100'}`}>
                  <img src={job.logo} alt="" className="h-full w-full rounded-md object-cover ring-1 ring-ink/10" />
                  {i === 0 && (
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-paper bg-pop-green" title="Current role" />
                  )}
                </span>
                <span className="text-[11px] font-medium uppercase leading-none tracking-[.14em]">{job.company}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
