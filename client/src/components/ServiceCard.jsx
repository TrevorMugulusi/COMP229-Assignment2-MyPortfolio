import { renderServiceIcon } from '../assets/icons/registry.jsx'
import { TagList } from './TagList.jsx'

/** One service card: small icon, title, description and technologies. */
export function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <span className="service-card__icon" aria-hidden="true">
        {renderServiceIcon(service.icon, { width: 24, height: 24 })}
      </span>

      <h2 className="service-card__title">{service.title}</h2>
      <p className="service-card__description">{service.description}</p>

      <TagList
        items={service.technologies}
        label={`${service.title} technologies`}
      />
    </article>
  )
}
