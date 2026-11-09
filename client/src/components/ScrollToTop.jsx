import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Sends the page back to the top when the visitor changes route. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
