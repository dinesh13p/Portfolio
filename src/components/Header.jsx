import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
]

export default function Header({ activeTab, setActiveTab }) {
  const [open, setOpen] = useState(false)

  const handleNavClick = (tabId) => {
    setActiveTab(tabId)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-30 backdrop-blur bg-black/60 border-b border-gray-800">
      <div className="container flex items-center justify-between py-6">
        <button 
          onClick={() => setActiveTab('home')} 
          className="text-2xl font-extrabold text-brand hover:text-brand-dark transition"
        >
          dinesh2004.com.np
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button 
              key={n.id} 
              onClick={() => handleNavClick(n.id)}
              className={`hover:text-brand transition text-lg ${activeTab === n.id ? 'text-brand font-semibold' : ''}`}
            >
              {n.label}
            </button>
          ))}
        </nav>

        <button 
          className="md:hidden p-3" 
          onClick={() => setOpen((s) => !s)} 
          aria-label="Toggle menu"
        >
          {open ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-site-mid/90 backdrop-blur-sm border-t border-gray-800">
          <div className="container py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <button 
                key={n.id} 
                onClick={() => handleNavClick(n.id)}
                className={`text-left block py-3 hover:text-brand transition text-lg ${activeTab === n.id ? 'text-brand font-semibold' : ''}`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}