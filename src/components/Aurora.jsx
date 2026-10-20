// Slow-drifting blurred colour fields behind a section.
export default function Aurora({ dark = false }) {
  const strength = dark ? 'opacity-[.32]' : 'opacity-[.2] dark:opacity-[.14]'

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute -left-[8%] -top-[25%] h-[540px] w-[540px] animate-blob rounded-full bg-pop-green blur-[110px] will-change-transform ${strength}`} />
      <div className={`absolute -right-[6%] top-[5%] h-[480px] w-[480px] animate-blob rounded-full bg-pop-teal blur-[110px] will-change-transform [animation-delay:-7s] ${strength}`} />
      <div className={`absolute -bottom-[30%] left-[38%] h-[440px] w-[440px] animate-blob rounded-full blur-[120px] will-change-transform [animation-delay:-14s] ${dark ? 'bg-pop-violet opacity-[.28]' : 'bg-pop-amber opacity-[.14]'}`} />
    </div>
  )
}
