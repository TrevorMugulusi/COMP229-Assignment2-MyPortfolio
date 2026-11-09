import { personalInfo } from '../data/profile.js'

// Read once when the file loads so the year stays the same on every render.
const currentYear = new Date().getFullYear()

/** Small footer showing only the copyright line. */
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copyright">
          &copy; {currentYear} {personalInfo.fullName}
        </p>
      </div>
    </footer>
  )
}
