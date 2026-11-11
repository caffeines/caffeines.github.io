import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a href="#home" className="logo" aria-label="Sadat Sayem home">
        Sadat Sayem
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close −' : 'Menu +'}
      </button>
      <ul id="navigation" className={`nav-links ${open ? 'is-open' : ''}`}>
        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
