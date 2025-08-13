import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('') // Clear error when user types
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Replace YOUR_FORM_ID with actual Formspree form ID or use mailto fallback
    try {
      // For now, using mailto as fallback since Formspree ID is not provided
      const mailtoLink = `mailto:dineshp4297501@gmail.com?subject=Contact from ${form.name}&body=From: ${form.name}%0D%0AEmail: ${form.email}%0D%0A%0D%0A${form.message}`
      window.location.href = mailtoLink
      
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Could not send message. Please try emailing directly: dineshp4297501@gmail.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-300">Want to work together? Send a message or reach out via email.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
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
            className="px-5 py-3 rounded-full bg-brand text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {sent && <span className="ml-4 text-green-400">Message sent! I'll reply soon.</span>}
          {error && <span className="ml-4 text-red-400">{error}</span>}
        </div>
      </form>

      <div className="mt-6 text-gray-300">
        <p>Email: <a className="text-brand hover:underline" href="mailto:dineshp4297501@gmail.com">dineshp4297501@gmail.com</a></p>
        <p className="mt-2">Location: Butwal, Nepal</p>
      </div>
    </section>
  )
}