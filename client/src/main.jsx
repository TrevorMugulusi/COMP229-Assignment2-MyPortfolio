import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter gives the app client-side routes: /, /about, /projects,
        /education, /services and /contact. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
