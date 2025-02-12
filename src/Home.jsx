import './home.css'
import profileImage from './assets/profile_picture.png'

export default function Home() {
  return (
    <>
      <div id="home" className="pagecontainer">
        <div className="flexbox"> 
          <div className="image container">
            <img src={profileImage} alt="Painting of a person wearing a rabbit mask" />
          </div>
          <div className="page container">
            <div className="title">
              <p>kirjh.github.io</p>
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