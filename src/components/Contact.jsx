import { useState } from 'react'
import { config, contact } from '../data/portfolio'
import Aurora from './Aurora'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import SplitWords from './SplitWords'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(config.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${config.email}`
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <Aurora dark />
      <div className="wrap relative py-20 md:py-28">
        <SectionHeader index="06" label="Contact" dark />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="display !text-white text-[clamp(40px,6vw,76px)] leading-[1.02]">
              <SplitWords text={contact.title} />
              <SplitWords text={contact.emphasis} delay={0.3} wordClassName="text-gradient-light pr-[.08em] italic" />
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-white/70">{contact.copy}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/[.06] shadow-[0_30px_80px_-30px_rgba(18,183,106,.35)] backdrop-blur-md">
              <div className="p-6">
                <div className="label !text-white/50">Email</div>
                <a href={`mailto:${config.email}`} className="mt-2 block break-all font-serif text-[clamp(20px,2.2vw,26px)] text-white hover:text-accent-light">
                  {config.email}
                </a>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={`mailto:${config.email}`} className="btn bg-white text-navy hover:bg-accent-light">
                    Send an email <span aria-hidden="true">→</span>
                  </a>
                  <button type="button" onClick={copyEmail} className="btn border border-white/25 text-white hover:border-white" aria-live="polite">
                    {copied ? 'Copied' : 'Copy address'}
                  </button>
                </div>
              </div>
              {config.linkedin && (
                <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between border-t border-white/15 px-6 py-4 text-sm text-white/80 transition hover:text-white">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <footer className="relative border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {config.name}
          </span>
          <a href="#top" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </section>
  )
}
