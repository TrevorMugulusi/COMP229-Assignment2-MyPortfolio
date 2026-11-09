import { useState } from 'react'

/**
 * Trevor's professional photo.
 *
 * The photo lives at `/public/images/trevor-mugulusi.png`. If the file is ever
 * moved or renamed, this component shows a clearly labelled placeholder instead
 * of a broken image icon.
 */
export function ProfileImage({ src, alt }) {
  const [photoIsMissing, setPhotoIsMissing] = useState(false)

  if (photoIsMissing) {
    return (
      <div className="headshot headshot--placeholder" role="img" aria-label={alt}>
        <p className="headshot__placeholder-title">Professional photo</p>
        <p className="headshot__placeholder-text">
          Place your photo at <code>/public/images/trevor-mugulusi.png</code> and it
          will appear here.
        </p>
      </div>
    )
  }

  return (
    <img
      className="headshot"
      src={src}
      alt={alt}
      width="400"
      height="480"
      onError={() => setPhotoIsMissing(true)}
    />
  )
}
