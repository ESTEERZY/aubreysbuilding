import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    // If state contains scrollToContact, smooth scroll to the contact form block
    if (location.state?.scrollToContact) {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
    }
  }, [location])

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
