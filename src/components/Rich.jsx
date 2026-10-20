// Renders a string with **bold** segments as <strong>.
export default function Rich({ text, strongClass = 'font-bold text-ink' }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? (
      <strong key={i} className={strongClass}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}
