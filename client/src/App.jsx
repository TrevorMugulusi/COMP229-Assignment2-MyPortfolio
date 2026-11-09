import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'

import { Navbar } from './components/Navbar.jsx'
import { Footer } from './components/Footer.jsx'
import { ScrollToTop } from './components/ScrollToTop.jsx'

import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Projects } from './pages/Projects.jsx'
import { Education } from './pages/Education.jsx'
import { Services } from './pages/Services.jsx'
import { Contact } from './pages/Contact.jsx'

/** A different browser tab title for each of the six pages. */
const pageTitles = {
  '/': 'Trevor Mugulusi | Software Engineering Portfolio',
  '/about': 'About Me | Trevor Mugulusi',
  '/projects': 'Projects | Trevor Mugulusi',
  '/education': 'Education | Trevor Mugulusi',
  '/services': 'Services | Trevor Mugulusi',
  '/contact': 'Contact Me | Trevor Mugulusi',
}

/** Small fallback so an unknown address does not show a blank page. */
function PageNotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="content-heading">Page not found</h1>
        <p className="text">The page you are looking for does not exist.</p>
        <Link className="button button--primary" to="/">
          Go to Home
        </Link>
      </div>
    </section>
  )
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'Page Not Found | Trevor Mugulusi'
  }, [pathname])

  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
