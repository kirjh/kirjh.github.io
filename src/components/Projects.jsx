import '../styles/projects.css'
import '../styles/index.css'

import Heading from './Heading.jsx'

import {useEffect} from 'react'
import galaData from '../projects/galatimer.json' with {type: 'json'}
import coinData from '../projects/coinanalyzer.json' with {type: 'json'}
import rotypeData from '../projects/rotype.json' with {type: 'json'}
import templateData from '../projects/card-template.json' with {type: 'json'}

function Card({jsonData}) {
  // Construct images for carousel
  const keys = Object.keys(jsonData.images);
  const listItems = keys.map((img) => { 
    return (
      <li key={img} className="image" id={`${jsonData.id}${img}`}>
        <img src={jsonData.images[img].src} alt={jsonData.images[img].alt} />
      </li>
    )
  });
  // Construct scroll-markers
  const buttons = keys.map((img) => {
    return (
      <a key={img} className={`scroll-marker ${jsonData.id} ${img == 0 ? "active" : ""}`} id={`${jsonData.id}${img}marker`}></a>
    )
  });
  // Construct links
  const links = jsonData.site_url ? (
    <span className="card-link-container">
      <a className="link" href={jsonData.site_url} target="_blank">Website</a>
      <span className="subtext" aria-hidden="true">|</span>
      <a className="link" href={jsonData.repo_url} target="_blank">Github page</a>
    </span>
  ) : (
    <a className="link" href={jsonData.repo_url} target="_blank">Github page</a>
  );
  // Construct tech stack
  const stack = jsonData.stack.map((item) => {
    return (
      <p key={item} className="stackItem">{item}</p>
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
        <Heading h1={jsonData.name} su={jsonData.subtext} />
        {links}
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

function Projects() {
  useEffect(() => {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
        }
      });
    }, {threshold: [0]});
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.75) return;
        const id = entry.target.id.substring(0, entry.target.id.length-1);
        document.querySelectorAll(`a.${id}.active`).forEach((e) => {
          e.classList.remove("active");
        });
        document.querySelector(`#${entry.target.id}marker`).classList.add("active");
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
      <div id="projects" className="container">
        <div className="header">
          <Heading h1="My projects" su="A curated list of things I've made." />
        </div>
        <div className="card-container">
          <Card jsonData={galaData}/>
          <Card jsonData={coinData}/>
          <Card jsonData={rotypeData}/>
          <Card jsonData={templateData}/>
        </div>
        <div className="project-footer">
          <p>Would you like to know more? My full Github repository is available <a className="link" href={"https://github.com/kirjh?tab=repositories"} target="_blank">here</a>.</p>
        </div>
      </div>
    </>
  )
}

export default Projects