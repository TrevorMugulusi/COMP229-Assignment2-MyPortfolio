import { PageHeader } from '../components/PageHeader.jsx'
import { ProfileImage } from '../components/ProfileImage.jsx'
import { TagList } from '../components/TagList.jsx'
import { experienceList } from '../data/experience.js'
import { educationDetails } from '../data/education.js'
import {
  aboutParagraph,
  careerObjective,
  headshotPath,
  personalInfo,
  resumePath,
  technicalSkills,
} from '../data/profile.js'

/**
 * About Me page: photo, short paragraph, current education, career objective,
 * technical skills and previous experience, plus a link to the resume PDF.
 */
export function About() {
  return (
    <>
      <PageHeader
        title="About Me"
        description={`${personalInfo.fullName} — ${personalInfo.professionalTitle}`}
      />

      <section className="section">
        <div className="container about-layout">
          <div className="about-layout__photo">
            <ProfileImage
              src={headshotPath}
              alt={`Professional photo of ${personalInfo.fullName}`}
            />

            {/*
              The link opens the resume in the browser's PDF viewer instead of
              downloading it straight away, so the visitor can read it first and
              then choose to save it using the viewer's own download button.
              target="_blank" keeps this portfolio page open behind the viewer.
            */}
            <a
              className="button button--secondary button--block"
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume (PDF)
            </a>
          </div>

          <div className="about-layout__content">
            <h2 className="content-heading">About {personalInfo.firstName}</h2>
            <p className="text">{aboutParagraph}</p>

            <h2 className="content-heading">Current Education</h2>
            <p className="text">
              {educationDetails.program} ({educationDetails.credential}) at{' '}
              {educationDetails.institution}, {educationDetails.location}. Expected
              completion {educationDetails.expectedCompletion}. GPA: {educationDetails.gpa}.
            </p>

            <h2 className="content-heading">Career Objective</h2>
            <p className="text">{careerObjective}</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="content-heading">Technical Skills</h2>
          <TagList items={technicalSkills} label="Technical skills" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="content-heading">Previous Experience</h2>

          <ul className="experience-list">
            {experienceList.map((job) => (
              <li className="experience-list__item" key={job.id}>
                <h3 className="experience-list__role">{job.role}</h3>
                <p className="experience-list__meta">
                  {job.organization} &middot; {job.location} &middot;{' '}
                  {job.startDate} &ndash; {job.endDate}
                  {job.employmentType ? ` (${job.employmentType})` : ''}
                </p>
                <p className="text">{job.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
