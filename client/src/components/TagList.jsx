/** Renders a list of technology or skill names as simple bordered labels. */
export function TagList({ items, label }) {
  if (!items || items.length === 0) return null

  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => (
        <li className="tag" key={item}>
          {item}
        </li>
      ))}
    </ul>
  )
}
