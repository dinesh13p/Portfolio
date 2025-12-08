import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React 18 optimization: Remove StrictMode in production to avoid double renders
// Keep it in development for catching bugs, but production builds won't double-render
const isDevelopment = import.meta.env.DEV

const root = createRoot(document.getElementById('root'))

if (isDevelopment) {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} else {
  root.render(<App />)
}