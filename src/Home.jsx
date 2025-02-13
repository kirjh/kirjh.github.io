import './home.css'
import './index.css'
import './fonts.css'
import profileImage from './assets/profile_picture.png'

export default function Home() {
  return (
    <>
      <div id="home" className="pagecontainer">
        <div className="flexbox"> 
          <div className="image centered container">
            <img id="pfp" src={profileImage} alt="Painting of a person wearing a rabbit mask" />
          </div>
          <div className="titlepage centered container">
            <div className="title">
              <h1>kirjh.github.io</h1>
            </div>
            <div className="pagelinks">
              <span>
                <a href="#about">About</a>
              </span>
              <span>
                <a href="#projects">Projects</a>
              </span>
              <span>
                <a href="#contact">Contact</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}