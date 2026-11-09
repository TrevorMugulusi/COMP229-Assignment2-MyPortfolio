import { PageHeader } from '../components/PageHeader.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projectList } from '../data/projects.js'

/**
 * Projects page. The assignment requires at least three projects with an image,
 * information, a short description of the role and an outcome; all four
 * projects from the resume are included.
 */
export function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="Course projects completed as part of my program at Centennial College."
      />

      <section className="section">
        <div className="container">
          <div className="project-grid">
            {projectList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
