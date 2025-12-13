import '../styles/projects.css'
import '../styles/index.css'

import Heading from './Heading.jsx'
import Card from './Card.jsx'

import {useEffect} from 'react'
import galaData from '../projects/galatimer.json' with {type: 'json'}
import coinData from '../projects/coinanalyzer.json' with {type: 'json'}
import rotypeData from '../projects/rotype.json' with {type: 'json'}
import templateData from '../projects/card-template.json' with {type: 'json'}

function Projects() {
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