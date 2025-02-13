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
            <div className="projectlink">
              <a href={project.url}>{project.name}</a>
            </div>
            <div className="projectdesc">
              <p>{project.description}</p>
            </div>
            <div className="projectstack">
              <h3>Tech Stack</h3>
              <p>{project.techstack}</p>
            </div>
          </div>
          <div className="section">
            <img src={project.image.src1} alt={project.alt.alt1} />
          </div>
        </div>
        
          
      </div>
    </>
  )
}