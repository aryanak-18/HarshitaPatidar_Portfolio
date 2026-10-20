import { useEffect, useRef } from 'react'
import { pauseScroll, resumeScroll } from '../lib/smoothScroll'
import Rich from './Rich'

const bodyText = 'text-[15px] leading-[1.8] text-body'

function Block({ block }) {
  if (block.ul) {
    return (
      <ul className="mt-3 space-y-2.5">
        {block.ul.map((li) => (
          <li key={li} className={`grid grid-cols-[18px_1fr] ${bodyText}`}>
            <span className="mt-[11px] h-1.5 w-1.5 bg-accent" aria-hidden="true" />
            <span>
              <Rich text={li} strongClass="font-semibold text-ink" />
            </span>
          </li>
        ))}
      </ul>
    )
  }
  return (
    <p className={`mt-3 ${bodyText}`}>
      <Rich text={block.p} strongClass="font-semibold text-ink" />
    </p>
  )
}

export default function CaseModal({ item, next, onNext, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (!item) return
    if (!dialog.open) dialog.showModal()
    dialog.scrollTop = 0
    document.body.style.overflow = 'hidden'
    pauseScroll()
    return () => {
      document.body.style.overflow = ''
      resumeScroll()
    }
  }, [item])

  const close = () => ref.current?.close()

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && close()}
      aria-labelledby="case-title"
      data-lenis-prevent
      className="drawer m-0 ml-auto h-dvh max-h-none w-full max-w-[680px] overflow-y-auto bg-paper p-0 text-body shadow-[-30px_0_80px_-20px_rgba(14,26,43,.35)] backdrop:bg-ink/50 backdrop:backdrop-blur-[2px]"
    >
      {item && (
        <div key={item.id} className="flex min-h-full flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-paper/95 px-6 py-4 backdrop-blur md:px-10">
            <span className="label">Case study · {item.org}</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close case study"
              className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <div className="flex-1 animate-fade-up px-6 py-10 md:px-10">
            <p className="text-xs font-medium uppercase tracking-[.08em] text-accent">{item.category}</p>
            <h2 id="case-title" className="display mt-3 text-[clamp(30px,4vw,42px)] leading-[1.1]">
              {item.title}
            </h2>

            <div className="mt-8 flex items-end gap-5 rounded-2xl border border-line bg-surface p-6">
              <span className="font-serif text-[52px] leading-none tracking-[-.02em] text-accent">{item.metric}</span>
              <span className="pb-1 text-sm text-body">{item.metricLabel}</span>
            </div>

            <dl className="mt-8 grid gap-5 border-y border-line py-6 sm:grid-cols-3">
              {[
                ['Role', item.meta.role],
                ['Collaboration', item.meta.team],
                ['Focus', item.meta.focus],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="label">{label}</dt>
                  <dd className="mt-1.5 text-sm text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            {item.sections.map(([heading, blocks]) => (
              <section key={heading} className="mt-10">
                <h3 className="text-lg font-semibold tracking-[-.01em]">{heading}</h3>
                {blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}

            {item.callout && (
              <aside className="mt-10 border-l-2 border-accent bg-accent-wash px-6 py-5">
                <div className="label !text-accent">Key insight</div>
                <p className="mt-2 font-serif text-[19px] leading-[1.5] text-ink">{item.callout}</p>
              </aside>
            )}
          </div>

          {next && (
            <button
              type="button"
              onClick={onNext}
              className="group flex items-center justify-between gap-6 border-t border-line px-6 py-6 text-left transition hover:bg-surface md:px-10"
            >
              <span>
                <span className="label block">Next case</span>
                <span className="mt-1.5 block font-serif text-xl text-ink">{next.title}</span>
              </span>
              <span aria-hidden="true" className="text-xl text-ink transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          )}
        </div>
      )}
    </dialog>
  )
}
