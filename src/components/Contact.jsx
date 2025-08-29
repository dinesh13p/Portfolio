import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'   // ✅ import EmailJS

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })  // 👈 added subject
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.subject || !form.message) {  // 👈 added subject validation
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('')
    setSent(false)

    // ✅ Send with EmailJS
    emailjs.send(
      'service_hq74kgj',       // your Service ID
      'template_na33j7q',      // your Template ID
      {
        name: form.name,       // matches {{name}} in template
        email: form.email,     // matches {{email}} in template
        subject: form.subject, // matches {{subject}} in template
        message: form.message, // matches {{message}} in template
      },
      '-YagopFk-nVTSOyiZ'      // your Public Key
    )
    .then(() => {
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })  // 👈 reset subject too
    })
    .catch(() => {
      setError('Could not send message. Please try again later.')
    })
    .finally(() => setLoading(false))
  }

  return (
    <div className="container flex items-center justify-center min-h-full" style={{ 
      paddingTop: 'clamp(16px, 4vh, 32px)', 
      paddingBottom: 'clamp(16px, 4vh, 32px)' 
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl mx-auto text-center"
      >
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Contact me
        </motion.h2>
        <motion.p 
          className="mt-2 text-sm sm:text-base text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Want to work together? Send a message or reach out via email.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.input 
            required 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            placeholder="Your name" 
            className="p-3 sm:p-4 bg-site-mid rounded-xl border border-gray-600 focus:border-brand transition-all duration-300 focus:ring-2 focus:ring-brand/20 text-sm sm:text-base" 
            disabled={loading}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileFocus={{ scale: 1.02, y: -2 }}
          />
          <motion.input 
            required 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={handleChange} 
            placeholder="Your email" 
            className="p-3 sm:p-4 bg-site-mid rounded-xl border border-gray-600 focus:border-brand transition-all duration-300 focus:ring-2 focus:ring-brand/20 text-sm sm:text-base" 
            disabled={loading}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileFocus={{ scale: 1.02, y: -2 }}
          />
          <motion.input 
            required 
            name="subject" 
            value={form.subject} 
            onChange={handleChange} 
            placeholder="Subject" 
            className="p-3 sm:p-4 bg-site-mid rounded-xl border border-gray-600 focus:border-brand transition-all duration-300 focus:ring-2 focus:ring-brand/20 text-sm sm:text-base col-span-1 sm:col-span-2" 
            disabled={loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileFocus={{ scale: 1.02, y: -2 }}
          />
          <motion.textarea 
            required 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            placeholder="Message" 
            className="p-3 sm:p-4 bg-site-mid rounded-xl col-span-1 sm:col-span-2 border border-gray-600 focus:border-brand transition-all duration-300 focus:ring-2 focus:ring-brand/20 text-sm sm:text-base" 
            rows={4}
            disabled={loading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileFocus={{ scale: 1.01, y: -2 }}
          />

          <motion.div 
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button 
              type="submit"
              className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl btn-primary text-white font-semibold text-sm sm:text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              disabled={loading}
              whileHover={{ 
                scale: loading ? 1 : 1.05, 
                y: loading ? 0 : -3 
              }}
              whileTap={{ scale: loading ? 1 : 0.95 }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
            {sent && (
              <motion.div 
                className="mt-3 text-green-400 font-medium text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Message sent! I'll reply soon.
              </motion.div>
            )}
            {error && (
              <motion.div 
                className="mt-3 text-red-400 font-medium text-sm sm:text-base"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {error}
              </motion.div>
            )}
          </motion.div>
        </motion.form>

        <motion.div 
          className="mt-6 sm:mt-8 text-gray-300 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <p className="text-sm sm:text-base">
            Email 1: <a className="text-brand hover:underline transition-all duration-300" href="mailto:dineshp4297501@gmail.com">dineshp4297501@gmail.com</a>
          </p>
          <p className="text-sm sm:text-base">
            Email 2: <a className="text-brand hover:underline transition-all duration-300" href="mailto:dineshacc02@gmail.com">dineshacc02@gmail.com</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}