import { useState } from 'react'
import Splash from './Splash.jsx'
import Navbar from './Navbar.jsx'
import './Home.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="home">
        <Splash />
        <Navbar />
        <div className="test"></div>
      </div>
    </>
  )
}

export default Home
