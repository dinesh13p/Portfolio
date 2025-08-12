import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  async function handleSubmit(e) {
    e.preventDefault()
    // Using Formspree (frontend-only). Replace FORM_ID with your form id or use your own backend.
    try {
      await fetch('https://formspree.io/f/{YOUR_FORM_ID}', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      alert('Could not send message — please try email: dineshp4297501@gmail.com')
    }
  }

  return (
    <section id="contact">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-300">Want to work together? Send a message or reach out via email.</p>

      <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <input required name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="p-3 bg-site-mid rounded" />
        <input required name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" className="p-3 bg-site-mid rounded" />
        <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Message" className="p-3 bg-site-mid rounded col-span-1 sm:col-span-2" rows={6} />

        <div className="sm:col-span-2">
          <button type="submit" className="px-5 py-3 rounded-full bg-brand text-white">Send Message</button>
          {sent && <span className="ml-4 text-green-400">Message sent! I'll reply soon.</span>}
        </div>
      </form>

      <div className="mt-6 text-gray-300">
        <p>Email: <a className="text-brand" href="mailto:dineshp4297501@gmail.com">dineshp4297501@gmail.com</a></p>
        <p className="mt-2">Location: Nepal</p>
      </div>
    </section>
  )
}