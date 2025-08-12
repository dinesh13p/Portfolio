import React, { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-30 transition-colors ${scrolled ? 'backdrop-blur bg-black/60' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-2xl font-extrabold text-brand">dinesh2004.com.np</a>

        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-brand transition">{n.label}</a>
          ))}
          {/* <a className="ml-4 inline-block px-4 py-2 rounded-full bg-brand text-white font-medium" href="#contact">Contact</a> */}
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* mobile menu */}
      {/* {open && (
        <div className="md:hidden bg-site-mid/90 backdrop-blur-sm">
          <div className="container py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-2">{n.label}</a>
            ))}
            <a href="#contact" className="mt-2 inline-block px-4 py-2 rounded-full bg-brand text-white">Contact</a>
          </div>
        </div>
      )} */}
    </header>
  )
}