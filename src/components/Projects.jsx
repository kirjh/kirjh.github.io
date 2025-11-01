import '../styles/projects.css'
import '../styles/index.css'

import {useEffect} from 'react'
import galaData from '../projects/galatimer.json'

function Card({jsonData}) {
  // Construct images for carousel
  const listItems = Object.keys(jsonData.images).map((img) => { 
    return (
      <li className="image" key={img}>
        <img src={jsonData.images[img].src} alt={jsonData.images[img].alt} />
      </li>
    )
  });

  return (
    <>
      <div className="card">
        <ul className="gallery-container"> 
          {listItems}
        </ul>
        <h1>{jsonData.name}</h1>
        <p className="subtext">{jsonData.subtext}</p>
        <a className="link" href={jsonData.url}>{jsonData.url}</a>
        <p style={{textAlign: "center"}}>{jsonData.description}</p>
        <p>Tech stack: <span className="subtext">{jsonData.stack}</span></p>
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
          <Card jsonData={galaData}/>
        </div>
      </div>
    </>
  )
}

export default Projects