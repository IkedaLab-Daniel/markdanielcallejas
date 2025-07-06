import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import TechStack from './components/TechStack'
import Credentials from './components/Credentials'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({
       once: false,
       duration: 500, 
      easing: 'ease-out',
    })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Credentials />
    </>
  )
}

export default App