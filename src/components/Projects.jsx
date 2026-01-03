import '../styles/projects.css'
import '../styles/index.css'

import Heading from './Heading.jsx'
import Card from './Card.jsx'

import {useEffect} from 'react'
import galaData from '../projects/galatimer.json' with {type: 'json'}
import coinData from '../projects/coinanalyzer.json' with {type: 'json'}
import rotypeData from '../projects/rotype.json' with {type: 'json'}
import bitmapData from '../projects/bitmapmanipulator.json' with {type: 'json'}

function Projects() {
  // Add intersection observers for scroll animations and carousel
  useEffect(()=> {
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
        const id = entry.target.id.substring(0, entry.target.id.length-1);
        const index = entry.target.id.substring(entry.target.id.length-1, entry.target.id.length);
        document.querySelectorAll(`a.${id}.active`).forEach((e) => {
          e.classList.remove("active");
        });
        // Update buttons to reflect active image
        const leftButton = document.querySelector(`#${id}lbutton`);
        const rightButton = document.querySelector(`#${id}rbutton`);
        const scrollMarker = document.querySelector(`#${id}${index}marker`);
        leftButton.disabled = !scrollMarker.previousSibling;
        rightButton.disabled = !scrollMarker.nextSibling;
        scrollMarker.classList.add("active");
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
          <Card jsonData={bitmapData}/>
          <Card jsonData={rotypeData}/>
        </div>
        <div className="project-footer">
          <p>Would you like to know more? <a className="link" href={"https://github.com/kirjh?tab=repositories"} target="_blank">My full Github repository is available here</a>.</p>
        </div>
      </div>
    </>
  )
}

export default Projects