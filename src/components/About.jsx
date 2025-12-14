import '../styles/about.css'
import '../styles/index.css'
import Heading from './Heading.jsx'

function About() {
  return (
    <>
      <div id="about" className="flex-container">
        <div id="about-1">
          <Heading h1="About me" su="Hello there."/>
          <p>I am currently pursuing a <span className="highlight">Bachelor's in Computing Science</span> at Simon Fraser University.</p>
          <p>
            Computers and computer programming have captured my fascination since I was introduced to Scratch in grade school. 
            I have continuously improved my skills since and I often use my knowledge to assist and teach my peers. 
            I currently work as a part-time <span className="highlight">Scratch</span> and <span className="highlight">Python</span> tutor in addition to my studies.
          </p>
          <p>I enjoy art and graphic design in my free time and had a blast designing this UI. This page is <span className="highlight">fully responsive</span> and also supports <span id="theme-text"></span>. Give it a try!</p>
        </div>
        <div id="about-2">
          <Heading h1="What I do" su="I dabble here and there."/>
          <p><span className="highlight">C/C++: </span>I have moderate experience with handling pointers and can <i>mostly</i> avoid segfaults.</p>
          <p><span className="highlight">Javascript/React: </span>Used often in making simple web apps. This website was made with custom React components and no other external libraries.</p>
          <p><span className="highlight">Java: </span>Experimented some with Java in high school, when I made a simple minesweeper game.</p>
          <p><span className="highlight">Python: </span>My most recent projects have utilized Python in the realm of machine learning and multimedia processing.</p>
        </div>
      </div>
    </>
  )
}

export default About