import '../styles/projects.css'
import '../styles/index.css'

import {useEffect} from 'react'
import galaData from '../projects/galatimer.json'
import rotypeData from '../projects/rotype.json'

function Card({jsonData}) {
  // Construct images for carousel
  const keys = Object.keys(jsonData.images);
  const listItems = keys.map((img) => { 
    return (
      <li className="image" key={img}>
        <img src={jsonData.images[img].src} alt={jsonData.images[img].alt} />
      </li>
    )
  });
  // construct scroll-markers
  const buttons = keys.map((img) => {
    return (
      <a key={img} className="scroll-marker"></a>
    )
  });

  useEffect(() => {
    const images = document.querySelectorAll(`#${jsonData.id} li`)
    const buttons = document.querySelectorAll(`#${jsonData.id} .scroll-marker-container a`)

    for (let i = 0; i < images.length; i++) {
      buttons[i].onclick = () => {
        images[i].scrollIntoView({block: 'nearest'});
      }
    }
  }, [])

  return (
    <>
      <div className="card" id={jsonData.id}>
        <div className="gallery-container">
          <ul className="carousel"> 
            {listItems}
          </ul>
          <div className="scroll-marker-container">
            {buttons}
          </div>
        </div>
        <h1>{jsonData.name}</h1>
        <p className="subtext">{jsonData.subtext}</p>
        <a className="link" href={jsonData.url} target="_blank">{jsonData.url}</a>
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
          <Card jsonData={rotypeData}/>
        </div>
      </div>
    </>
  )
}

export default Projects