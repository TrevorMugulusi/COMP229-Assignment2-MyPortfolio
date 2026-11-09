import { PageHeader } from '../components/PageHeader.jsx'
import { TagList } from '../components/TagList.jsx'
import { certifications, educationDetails, relevantCourses } from '../data/education.js'

/**
 * Education page: one card with the program details, the relevant course list,
 * and the certifications earned.
 */
export function Education() {
  const {
    institution,
    location,
    program,
    credential,
    expectedCompletion,
    gpa,
  } = educationDetails

  return (
    <>
      <PageHeader title="Education" description="My program of study and certifications." />

      <section className="section">
        <div className="container">
          <article className="card education-card">
            <h2 className="card__title">{institution}</h2>
            <p className="card__subtitle">
              {program}
              <br />
              {credential}
            </p>

            <dl className="detail-list">
              <div>
                <dt>Location</dt>
                <dd>{location}</dd>
              </div>
              <div>
                <dt>Expected Completion</dt>
                <dd>{expectedCompletion}</dd>
              </div>
              <div>
                <dt>GPA</dt>
                <dd>{gpa}</dd>
              </div>
            </dl>

            <h3 className="content-heading">Relevant Courses</h3>
            <TagList items={relevantCourses} label="Relevant courses" />
          </article>

          <h2 className="content-heading">Certifications</h2>

          <ul className="certification-list">
            {certifications.map((certification) => (
              <li className="certification-list__item" key={certification.name}>
                <span className="certification-list__name">{certification.name}</span>
                <span className="certification-list__date">{certification.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
