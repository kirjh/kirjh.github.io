import { useState } from 'react'
import Splash from './Splash.jsx'
import Navbar from './Navbar.jsx'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Splash />
        <Navbar />
        <div className="test"></div>
      </div>
    </>
  )
}

export default Home
