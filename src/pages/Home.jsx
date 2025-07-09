import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Credentials from '../components/Credentials'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home