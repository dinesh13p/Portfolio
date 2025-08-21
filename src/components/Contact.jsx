import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('') // Clear error when user types
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields')
      return
    }
    
    setLoading(true)
    setError('')

    try {
      // Using mailto as fallback
      const mailtoLink = `mailto:dineshp4297501@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=From: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(form.email)}%0D%0A%0D%0A${encodeURIComponent(form.message)}`
      window.location.href = mailtoLink
      
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Could not send message. Please try emailing directly: dineshp4297501@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/dinesh.poudel.319452', name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: FaInstagram, url: 'https://www.instagram.com/_d_nesh_/', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaTwitter, url: 'https://x.com/Dinesh2061', name: 'X (Twitter)', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/dinesh-poudel-3a4b10331/', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: FaGithub, url: 'https://github.com/dinesh13p', name: 'GitHub', color: 'hover:text-gray-300' }
  ]

  return (
    <div className="container py-8 flex items-center justify-center min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-300">Want to work together? Send a message or reach out via email.</p>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            required 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your name" 
            className="p-3 bg-site-mid rounded border border-gray-600 focus:border-brand transition" 
            disabled={loading}
          />
          <input 
            required 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your email" 
            className="p-3 bg-site-mid rounded border border-gray-600 focus:border-brand transition" 
            disabled={loading}
          />
          <textarea 
            required 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Message" 
            className="p-3 bg-site-mid rounded col-span-1 sm:col-span-2 border border-gray-600 focus:border-brand transition" 
            rows={6}
            disabled={loading}
          />

          <div className="sm:col-span-2">
            <button 
              type="submit"
              className="px-5 py-3 rounded-full bg-brand text-white hover:bg-brand-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {sent && <div className="mt-2 text-green-400">Message sent! I'll reply soon.</div>}
            {error && <div className="mt-2 text-red-400">{error}</div>}
          </div>
        </form>

        <div className="mt-6 text-gray-300">
          <p>Email: <a className="text-brand hover:underline" href="mailto:dineshp4297501@gmail.com">dineshp4297501@gmail.com</a></p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                className="group relative flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.name}
                  className={`text-2xl text-gray-400 transition-all duration-500 ${social.color} transform hover:scale-110`}
                >
                  <social.icon />
                </a>
                <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap block">
                    {social.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}