import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields')
      return
    }
    
    setLoading(true)
    setError('')

    try {
      const mailtoLink = `mailto:dineshp4297501@gmail.com,dineshacc02@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=From: ${encodeURIComponent(form.name)}%0D%0AEmail: ${encodeURIComponent(form.email)}%0D%0A%0D%0A${encodeURIComponent(form.message)}`
      window.location.href = mailtoLink
      
      setSent(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setError('Could not send message. Please try emailing directly: dineshp4297501@gmail.com or dineshacc02@gmail.com')
    } finally {
      setLoading(false)
    }
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
          Contact
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
            transition={{ duration: 0.6, delay: 0.6 }}
            whileFocus={{ scale: 1.01, y: -2 }}
          />

          <motion.div 
            className="sm:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
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
          transition={{ duration: 0.6, delay: 0.8 }}
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