import Home from './pages/Home'
import ProjectPages from './pages/ProjectsPage'
import CredentialsPage from './pages/CredentialsPage'
import ScrollToTop from './utils/ScrollToTop'
import './App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPages />} />
        <Route path="/credentials" element={<CredentialsPage />} />
      </Routes>
    </>
  )
}

export default App