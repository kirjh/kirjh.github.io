import './about.css'
import './index.css'
import './fonts.css'

export default function About() {
  return (
    <>
      <div id="about" className="pagecontainer">
        <div className="flexbox"> 
          <div className="aboutpage container">
            <div className="sectiondivider">
              <div className="section">
                <div className="header">
                  <h1>About</h1>
                  <h2>Toby Lin</h2>
                </div>
                <div>
                  <p>
                    <span className="boldtext">Hello!</span> I'm currently studying Computer Science at <a href="https://www.sfu.ca/fas/computing.html">Simon Fraser University</a>.
                  </p>       
                </div>
              </div>
              <div className="section">
                <div className="header">
                  <h1>What</h1>
                  <h2>I do</h2>
                </div>
                <div>
                  <h3>Graphic Design</h3>
                  <p>
                    I enjoy playing with shapes and colours, and am always looking to make clean designs. Good design brings projects, and people together.
                  </p>
                  <br />
                  <h3>Software Development</h3>
                  <p>
                    Programming is a tool that can be used to solve real-world problems. I seek to apply my skills at making day-to-day tasks more efficient.
                  </p>
                  <br />
                  <h3>Tutoring</h3>
                  <p>
                    From helping classmates to teaching classes, I believe that the most valuable thing a person can do is to pass on knowledge through guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}