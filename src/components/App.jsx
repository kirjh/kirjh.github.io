import { useState } from 'react'
import Splash from './Splash.jsx'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'
import '../styles/App.css'

function Home() {
  return (
    <>
      <Splash />
      <div style={{backgroundColor: "#FFDE59", borderRadius: "1.5em", padding: "1.5em", color: "#000"}}>This website is under construction</div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default Home
