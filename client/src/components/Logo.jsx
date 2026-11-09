import { personalInfo } from '../data/profile.js'

/**
 * Custom logo for the portfolio: a simple circle holding the "TM" monogram.
 * Drawn as text inside a shape so it stays sharp at any size.
 */
export function Logo({ size = 36 }) {
  return (
    <span className="logo">
      <span
        className="logo__mark"
        style={{ width: size, height: size, fontSize: size * 0.38 }}
        aria-hidden="true"
      >
        {personalInfo.monogram}
      </span>
      <span className="logo__text">{personalInfo.fullName}</span>
    </span>
  )
}
