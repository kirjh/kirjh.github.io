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
  return site ? (
    <span className="card-link-container">
      <a className="link" href={site} target="_blank">Website</a>
      <span className="subtext" aria-hidden="true">|</span>
      <a className="link" href={repo} target="_blank">Github page</a>
    </span>
  ) : (
    <a className="link" href={repo} target="_blank">Github page</a>
  );
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
  const carouselSize = useRef(keys.length);
  const currentIndex = useRef(0);
  const carouselDigits = Math.floor(Math.log10(carouselSize.current)+1);

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
    if (currentIndex.current == 0) return;
    document.querySelector(`#${jsonData.id}${currentIndex.current-1}`).scrollIntoView({block: 'nearest'});
  }
  function NextImage() {
    if (currentIndex.current == carouselSize.current-1) return;
    document.querySelector(`#${jsonData.id}${currentIndex.current+1}`).scrollIntoView({block: 'nearest'});
  }
  
  useEffect(() => {
    // Add scrollIntoView to scroll-markers
    const images = document.querySelectorAll(`#${jsonData.id} li`)
    const buttons = document.querySelectorAll(`#${jsonData.id} .scroll-marker-container a`)

    for (let i = 0; i < images.length; i++) {
      buttons[i].onclick = () => {images[i].scrollIntoView({block: 'nearest'})}
    }

    // Add intersection observers for scroll animations and carousel
    // Reveal cards for the first time
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
          cardObserver.unobserve(entry.target);
        }
      });
    }, {threshold: [0]});
    // Update carousel to focused image
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.75) return;
        const id = entry.target.id.substring(0, entry.target.id.length-carouselDigits);
        const index = entry.target.id.substring(entry.target.id.length-carouselDigits, entry.target.id.length);
        document.querySelectorAll(`a.${id}.active`).forEach((e) => {
          e.classList.remove("active");
        });
        currentIndex.current = Number(index);
        // Update buttons to reflect active image
        const leftButton = document.querySelector(`#${id}lbutton`);
        const rightButton = document.querySelector(`#${id}rbutton`);
        if (index == 0) leftButton.classList.remove("active")
        else leftButton.classList.add("active");
        if (index == carouselSize.current-1) rightButton.classList.remove("active")
        else rightButton.classList.add("active");
        document.querySelector(`#${id}${index}marker`).classList.add("active");
      });
    }, {threshold: [0.75]});
    
    document.querySelectorAll(".card").forEach((card)=> {
      cardObserver.observe(card);
    });

    document.querySelectorAll(".card li").forEach((image)=> {
      imageObserver.observe(image);
    });

    return () => {
      cardObserver.disconnect();
      imageObserver.disconnect();
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