import '../styles/navbar.css'

function Navbar() {
  function goto(href) {
    document.querySelector(href).scrollIntoView();
  }
  
  return (
    <>
      <div className="navbar">
        <a onClick={()=> goto("#home")}>Home</a>
        <a onClick={()=> goto("#about")}>About</a>
        <a onClick={()=> goto("#projects")}>Projects</a>
        <a onClick={()=> goto("#contact")}>Contact</a>
      </div>
      <div className="navbar-spacer"></div>
    </>
  )
}

export default Navbar