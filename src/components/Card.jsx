import '../styles/projects.css'
import '../styles/card.css'
import '../styles/index.css'

import Heading from './Heading.jsx'

import {useEffect, useRef} from 'react'

function Arrow() {
  return (
    <>
      <svg className="arrow"
        viewBox="0 0 1.2001499 1.2001499"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
          id="defs1" />
        <path
          style={{'fill':'none','stroke':'currentColor','strokeWidth':'0.264583','strokeLinecap':'round','strokeLinejoin':'round','strokeDasharray':'none'}}
          d="m 0.13235301,0.73432379 0.4677219,-0.4677219 0.46772199,0.4677219"
          id="path1" />
      </svg>
    </>
  )
}

function CarouselImage({id, src, alt}) {
  return (
    <li className="image" id={id}>
      <img src={src} alt={alt} />
    </li>
  )  
}
function ProjectLinks({site, repo}) {
  if (site && repo) {
    return (
      <div className="card-link-container">
        <a className="link left" href={site} target="_blank">Web Page</a>
        <span className="subtext" aria-hidden="true">|</span>
        <a className="link right" href={repo} target="_blank">Github Repo</a>
      </div>
    )
  } else if (repo) {
    return <a className="link" href={repo} target="_blank">Github Repo</a>
  } else if (site) {
    return <a className="link" href={site} target="_blank">Web Page</a>
  } else {
    return <span className="subtext"> Source Unavailable </span> 
  }
}

function ScrollMarker({index, id}) {
  return (
      <a 
        className={`scroll-marker ${id} ${index == 0 ? "active" : ""}`} 
        id={`${id}${index}marker`}
      />
    )
}

function Card({jsonData}) {
  const keys = Object.keys(jsonData.images);

  // Construct images for carousel
  const listItems = keys.map((index) => { 
    return (
      <CarouselImage 
        key={index} 
        id={`${jsonData.id}${index}`} 
        src={jsonData.images[index].src} 
        alt={jsonData.images[index].alt} 
      />
    )
  });
  // Construct scroll-markers
  const buttons = keys.map((index) => {
    return (
      <ScrollMarker key={index} index={index} id={jsonData.id} />
    )
  });
  // Construct tech stack
  const stack = jsonData.stack.map((item) => {
    return (
      <p key={item} className="stackItem">{item}</p>
    )
  });

  function LastImage() {
    const currentMarker = document.querySelector(`.scroll-marker.${jsonData.id}.active`);
    if (!currentMarker || !currentMarker.previousSibling) return;
    document.querySelector(`#${currentMarker.previousSibling.id.slice(0, -6)}`).scrollIntoView({block: 'nearest'});
  }
  function NextImage() {
    const  currentMarker = document.querySelector(`.scroll-marker.${jsonData.id}.active`)
    if (!currentMarker || !currentMarker.nextSibling) return;
    document.querySelector(`#${currentMarker.nextSibling.id.slice(0, -6)}`).scrollIntoView({block: 'nearest'});
  }
  
  useEffect(() => {
    // Add scrollIntoView to scroll-markers
    const images = document.querySelectorAll(`#${jsonData.id} li`)
    const buttons = document.querySelectorAll(`#${jsonData.id} .scroll-marker-container a`)

    for (let i = 0; i < images.length; i++) {
      buttons[i].onclick = () => {images[i].scrollIntoView({block: 'nearest'})}
    }
  }, []);

  return (
    <>
      <div className="card" id={jsonData.id}>
        <div className="gallery-container">
          <div className="carousel-container">
            <ul className="carousel"> 
              {listItems}
            </ul>
            <button className="scroll-button left" id={`${jsonData.id}lbutton`} onClick={LastImage} tabIndex="-1"><Arrow /></button>
            <button className="scroll-button right" id={`${jsonData.id}rbutton`} onClick={NextImage} tabIndex="-1"><Arrow /></button>
          </div>
          <div className="scroll-marker-container">
            {buttons}
          </div>
        </div>
        <Heading h1={jsonData.name} su={jsonData.subtext} />
        <ProjectLinks site={jsonData.site_url} repo={jsonData.repo_url}/>
        <p>{jsonData.description}</p>
        <div className="stack-container">
          <p className="stack">Tech stack:</p>
          <div>
            {stack}
          </div>
        </div>
      </div>
    </>
  )
}

export default Card