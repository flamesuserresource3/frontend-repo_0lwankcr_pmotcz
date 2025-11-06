import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { WhatWeDo, FeaturedProjects, ValuesAndTestimonials, ContactCTA } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]">
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
