import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="bg-site-mid">
          <div className="container py-16">
            <About />
          </div>
        </section>

        <div className="container py-16">
          <Projects />
        </div>

        <div className="container py-16">
          <Resume />
        </div>

        <div className="container py-16">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}