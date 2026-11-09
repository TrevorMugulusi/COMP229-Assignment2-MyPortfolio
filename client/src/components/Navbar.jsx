import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../data/navigation.js'
import { Logo } from './Logo.jsx'
import { CloseIcon, MenuIcon } from '../assets/icons/index.jsx'

/**
 * Simple top navigation with the custom logo and the six required pages.
 * On small screens the links collapse behind a hamburger button.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close the mobile menu whenever the screen grows past the mobile breakpoint.
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 820) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__brand" to="/" onClick={closeMenu}>
          <Logo />
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          <span className="visually-hidden">
            {isMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav${isMenuOpen ? ' site-nav--open' : ''}`}
          aria-label="Main"
        >
          <ul className="site-nav__list">
            {navigationLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `site-nav__link${isActive ? ' is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
