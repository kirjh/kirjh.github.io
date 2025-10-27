import { useState } from 'react'
import Splash from './Splash.jsx'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Splash />
        <Navbar />
        <About />
        <Projects />
        <Contact />
        <div className="test"></div>
      </div>
    </>
  )
}

export default Home
