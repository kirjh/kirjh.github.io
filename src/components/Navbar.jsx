import '../styles/navbar.css'

function Navbar() {
  function goto(href) {
    document.querySelector(href).scrollIntoView();
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("button").innerHTML = "Menu";
  }

  function openMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("show");
    document.querySelector("button").innerHTML = menu.classList.contains("show") ? "Close" : "Menu";
  }
  
  return (
    <>
      <div className="navbar">
        <button onClick={()=> openMenu()}>Menu</button>
        <div id="menu">
          <a onClick={()=> goto("#home")}>Home</a>
          <a onClick={()=> goto("#about")}>About</a>
          <a onClick={()=> goto("#projects")}>Projects</a>
          <a onClick={()=> goto("#contact")}>Contact</a>
        </div>
      </div>
      <div className="navbar-spacer"></div>
    </>
  )
}

export default Navbar