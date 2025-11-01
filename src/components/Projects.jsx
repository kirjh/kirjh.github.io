import '../styles/projects.css'
import '../styles/index.css'

import {useEffect} from 'react'

function Card() {
  return (
    <>
      <div className="card">
        <div className="gallery-container">
          
        </div>
      </div>
    </>
  )
}

function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
        }
      });
    }, {threshold: [0]});
    
    document.querySelectorAll(".card").forEach((card)=> {
      observer.observe(card);
    })

    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <>
      <div id="projects" className="container">
        <div className="header">
          <h1>My projects</h1>
          <p className="subtext">A curated list of some things I've made.</p>
        </div>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Projects