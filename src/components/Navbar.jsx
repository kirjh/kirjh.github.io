import '../styles/navbar.css'
import {useEffect} from 'react';

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

  function closeMenu(e) {
    const items = document.querySelectorAll(".navbar button, #menu a")
    for (const item of items) {
      if (item == e.target) return;
    }
    document.querySelector("#menu").classList.remove("show");
    document.querySelector("button").innerHTML = "Menu";
  }

  useEffect(() => {
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', (e) => {closeMenu(e)});
    }
  }, []);

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