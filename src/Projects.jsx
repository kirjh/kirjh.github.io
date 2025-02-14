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
              <div className="slide" id="galatimer">
                <Project project={galatimer}/>
                <a href="#fasc" className="right">&gt;</a>
              </div>
              <div className="slide" id="fasc">
                <Project project={fasc}/>
                <a href="#galatimer" className="left">&lt;</a>
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
                  {Object.keys(project.image).map((img) => {
                    if (project.image[img].id == 0) {
                      if (Object.keys(project.image).length > 1) {
                        return (
                          <div className="slide" key={project.image[img].id} id={`${project.name}${project.image[img].id}`}>
                            <img src={project.image[img].src} alt={project.image[img].alt} />
                            <a href={`#${project.name}${project.image[img].id + 1}`} className="sright">&gt;</a>
                          </div>
                        )
                      } else {
                        return (
                          <div className="slide" key={project.image[img].id} id={`${project.name}${project.image[img].id}`}>
                            <img src={project.image[img].src} alt={project.image[img].alt} />
                          </div>
                        )
                      }
                    } else if (project.image[img].id == Object.keys(project.image).length - 1) {
                      return (
                        <div className="slide" key={project.image[img].id} id={`${project.name}${project.image[img].id}`}>
                          <img src={project.image[img].src} alt={project.image[img].alt} />
                          <a href={`#${project.name}${project.image[img].id - 1}`} className="sleft">&lt;</a>
                        </div>
                      )
                    } else {
                      return (
                        <div className="slide" key={project.image[img].id} id={`${project.name}${project.image[img].id}`}>
                          <img src={project.image[img].src} alt={project.image[img].alt} />
                          <a href={`#${project.name}${project.image[img].id + 1}`} className="sright">&gt;</a>
                          <a href={`#${project.name}${project.image[img].id - 1}`} className="sleft">&lt;</a>
                        </div>
                      )
                    }
                  })}
                </div>
            </div>
          </div>
        </div>
        
          
      </div>
    </>
  )
}