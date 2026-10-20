import { credentials } from '../data/portfolio'
import Reveal from './Reveal'
import SectionHeader from './SectionHeader'

export default function Credentials() {
  const { education, leadership, recognition } = credentials

  return (
    <section id="credentials" className="section">
      <div className="wrap">
        <SectionHeader index="05" label="Education" title="Education, leadership and recognition." />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <h3 className="label !text-ink">Education</h3>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-ink">
                      {['Qualification', 'Institution', 'Year', 'Result'].map((h) => (
                        <th key={h} scope="col" className={`label pb-3 font-medium ${h === 'Year' || h === 'Result' ? 'text-right' : ''}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {education.map((row) => (
                      <tr key={row.qualification} className="border-b border-line">
                        <td className="py-4 pr-4 font-medium text-ink">{row.qualification}</td>
                        <td className="py-4 pr-4">{row.institution}</td>
                        <td className="py-4 text-right font-mono text-xs tabular-nums">{row.year}</td>
                        <td className="whitespace-nowrap py-4 pl-4 text-right font-mono text-xs tabular-nums text-ink">{row.result}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h3 className="label !text-ink">Leadership</h3>
              <div className="relative mt-5 overflow-hidden glass rounded-2xl p-7">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <p className="font-serif text-[23px] leading-[1.2] text-ink">
                    {leadership.role}
                    <span className="text-muted">, {leadership.org}</span>
                  </p>
                  <span className="font-mono text-xs text-muted sm:whitespace-nowrap">{leadership.period}</span>
                </div>
                <p className="mt-4 text-[15px] leading-[1.75]">{leadership.copy}</p>
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
                  {leadership.stats.map(([value, label]) => (
                    <div key={label}>
                      <dt className="sr-only">{label}</dt>
                      <dd>
                        <span className="text-gradient font-serif text-[32px] leading-none tabular-nums">{value}</span>
                      </dd>
                      <dd className="mt-2 text-xs text-muted">{label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="min-w-0 lg:col-span-5">
            <h3 className="label !text-ink">Recognition</h3>
            <ul className="mt-5 border-t border-ink">
              {recognition.map((r) => (
                <li key={r.title + r.year} className="flex items-start justify-between gap-6 border-b border-line py-4 transition-transform duration-300 hover:translate-x-1.5">
                  <div>
                    <p className="text-[15px] font-medium leading-snug text-ink">{r.title}</p>
                    <p className="mt-1 text-sm text-muted">{r.detail}</p>
                  </div>
                  <span className="pt-0.5 font-mono text-xs tabular-nums text-muted">{r.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
