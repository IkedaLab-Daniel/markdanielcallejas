import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    AOS.init({ once: false })
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  )
}

export default App