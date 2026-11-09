import { Link } from 'react-router-dom'
import { ProfileImage } from '../components/ProfileImage.jsx'
import {
  headshotPath,
  homeIntroduction,
  missionStatement,
  personalInfo,
} from '../data/profile.js'

/**
 * Home page: welcome message, professional title, short introduction,
 * photo, mission statement and links to two other pages.
 */
export function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__layout">
          <div className="hero__text">
            <h1 className="hero__greeting">Hi, I&rsquo;m {personalInfo.firstName}</h1>
            <p className="hero__full-name">{personalInfo.fullName}</p>
            <p className="hero__title">{personalInfo.professionalTitle}</p>
            <p className="hero__intro">{homeIntroduction}</p>

            <div className="hero__actions">
              <Link className="button button--primary" to="/about">
                About Me
              </Link>
              <Link className="button button--secondary" to="/projects">
                View Projects
              </Link>
            </div>
          </div>

          <div className="hero__photo">
            <ProfileImage
              src={headshotPath}
              alt={`Professional photo of ${personalInfo.fullName}`}
            />
          </div>
        </div>
      </section>

      <section className="section section--mission">
        <div className="container">
          <h2 className="mission__heading">Mission Statement</h2>
          <p className="mission__text">{missionStatement}</p>
        </div>
      </section>
    </>
  )
}
