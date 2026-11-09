/**
 * Simple page title shown at the top of each page. Keeps one `h1` per page
 * without repeating the same markup six times.
 */
export function PageHeader({ title, description }) {
  return (
    <div className="page-header">
      <div className="container">
        <h1 className="page-header__title">{title}</h1>
        {description && <p className="page-header__description">{description}</p>}
      </div>
    </div>
  )
}
