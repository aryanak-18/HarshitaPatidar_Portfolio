import { config, contact } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'
import SplitWords from './SplitWords'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy text-white dark:bg-paper">
      <div className="wrap relative py-20 md:py-28">
        <SectionHeader index="06" label="Contact" dark />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <Reveal className="lg:col-span-7">
            <h2 className="display !text-white text-[clamp(40px,6vw,76px)] leading-[1.02]">
              <SplitWords text={contact.title} />
              <SplitWords text={contact.emphasis} delay={0.3} wordClassName="pr-[.08em] italic" />
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-white/70">{contact.copy}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="glass rounded-2xl !border-white/15 !bg-white/[.06]">
              <div className="p-6">
                <div className="label !text-white/50">Email</div>
                <a href={`mailto:${config.email}`} data-cta="Contact: Email address" className="mt-2 block break-all font-serif text-[clamp(20px,2.2vw,26px)] text-white hover:text-accent-light">
                  {config.email}
                </a>
                <div className="mt-5 flex flex-wrap gap-3">
                  {/* Gmail compose in a new tab: mailto does nothing for visitors without a desktop mail app */}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(config.email)}&su=${encodeURIComponent('Hello Harshita')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="Contact: Send an email"
                    className="btn bg-white text-navy hover:bg-accent-light"
                  >
                    Send an email <span aria-hidden="true">→</span>
                  </a>
                  <a href={config.linkedin} target="_blank" rel="noopener noreferrer" data-cta="Contact: LinkedIn" className="btn border border-white/25 text-white hover:border-white">
                    Connect on LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
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
