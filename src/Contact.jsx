import './contact.css'
import './index.css'
import './about.css'
import linkedinIcon from './assets/linkedinicon.png'
import blueskyIcon from './assets/blueskyicon.png'
import emailIcon from './assets/emailicon.png'
import githubIcon from './assets/githubicon.png'

export default function Contact() {
  return (
    <>
      <div id="contact" className="pagecontainer">
        <div className="flexbox"> 
          <div className="contactpage container">
            <div className="padder">
              <div className="header">
                <h1>Let's</h1>
                <h2>Get down to business</h2>
              </div>
            </div>
            <div className="contactdivider">
              <ContactBox />
              <ContactBox />
              <ContactBox />
              <ContactBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactBox() {
  return (
    <>
      <div className="contactbox">
        <h3>
          Title
        </h3>
        <p>
          Link here
        </p>

      </div>
    </>
  )
}