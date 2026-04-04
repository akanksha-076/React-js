import './App.css'
import Navbar from './assets/components/navbar.jsx'
import Hero from './assets/components/Hero.jsx'
import Features from './assets/components/Features.jsx'
import HowItWorks from './assets/components/HowItWorks.jsx'
import Testimonials from './assets/components/Testimonies.jsx'
import CTA from './assets/components/CTA.jsx'
import Footer from './assets/components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App