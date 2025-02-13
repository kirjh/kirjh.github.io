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
        <p>{project.name}</p>
      </div>
    </>
  )
}