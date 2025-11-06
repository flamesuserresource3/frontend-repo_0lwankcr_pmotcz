import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhatWeDo, FeaturedProjects, ValuesAndTestimonials, ContactCTA } from './components/Sections'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Effects from './components/Effects'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Effects />
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <FeaturedProjects />
        <ValuesAndTestimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
