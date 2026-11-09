import { TagList } from './TagList.jsx'

/** One project card: image, title, technologies, description, role, outcome. */
export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img
        className="project-card__image"
        src={project.image}
        alt={project.imageAlt}
        width="480"
        height="300"
        loading="lazy"
      />

      <div className="project-card__body">
        <h2 className="project-card__title">{project.title}</h2>

        <p className="project-card__label">Technology</p>
        <TagList
          items={project.technologies}
          label={`${project.title} technologies`}
        />

        <p className="project-card__description">{project.description}</p>

        <h3 className="project-card__label">My role</h3>
        <p className="project-card__text">{project.role}</p>

        <h3 className="project-card__label">Outcome</h3>
        <p className="project-card__text">{project.outcome}</p>
      </div>
    </article>
  )
}
