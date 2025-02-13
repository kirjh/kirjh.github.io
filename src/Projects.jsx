import './projects.css'
import './index.css'

import galatimer from './galatimer.json'

export default function Projects() {
  return (
    <>
      <div id="projects" className="pagecontainer">
        <div className="flexbox"> 
          <Project project={galatimer}/>
        </div>
      </div>
    </>
  );
}

function Project({ project }) {
  return (
    <>
      <div className="projectspage container">
        <div className="sectiondivider">
          <div className="section">
            <div className="header">
              <h1>{project.h1}</h1>
              <h2>{project.h2}</h2>
            </div>
            <p>{project.name}</p>
          </div>
          <div className="section">
            <p>test</p>
          </div>
        </div>
        
          
      </div>
    </>
  )
}