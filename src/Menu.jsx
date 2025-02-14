import './menu.css'
import './index.css'
import './fonts.css'

export default function Menu() {
  return (
    <>
    <div className="menu">
      <div className="menubutton">
        <a href="#home">Home</a>
      </div>
      <div className="menubutton">
        <a href="#about">About</a>
      </div>
      <div className="menubutton">
        <a href="#projects">Projects</a>
      </div>
      <div className="menubutton">
        <a href="#contact">Contacts</a>
      </div>
    </div>
    </>
  )
}