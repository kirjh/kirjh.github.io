import './projects.css'
import './index.css'
import './fonts.css'

import galatimer from './galatimer.json'
import fasc from './fasc.json'

export default function Projects() {
  return (
    <>
      <div id="projects" className="pagecontainer">
        <div className="flexbox">
          <div className="slidecontainer">
            <div className="slides">
              <div className="slide">
                <Project project={galatimer}/>
              </div>
              <div className="slide">
                <Project project={galatimer}/>
              </div>
            </div>
          </div>
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
            <div className="slidecontainer">
              <div className="slides">
                  {Object.keys(project.image).map((img) =>
                    <div className="slide" key={project.image[img].id}>
                      <img src={project.image[img].src} alt={project.image[img].alt} />
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
        
          
      </div>
    </>
  )
}