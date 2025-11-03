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
  // construct scroll-markers
  const buttons = keys.map((img) => {
    return (
      <a key={img} className={`scroll-marker ${jsonData.id} ${img == 0 ? "active" : ""}`} id={`${jsonData.id}${img}marker`}></a>
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
        <a className="card-link link" href={jsonData.repo_url} target="_blank">{jsonData.repo_url}</a>
        <p>{jsonData.description}</p>
        <p className="stack">Tech stack: <span className="subtext">{jsonData.stack}</span></p>
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
        <div>
          <p>See more projects at my Github repository.</p>
        </div>
      </div>
    </>
  )
}

export default Projects