import './contact.css'
import './index.css'
import './fonts.css'
import linkedinIcon from './assets/linkedinicon.svg'
import blueskyIcon from './assets/blueskyicon.svg'
import emailIcon from './assets/emailicon.svg'
import githubIcon from './assets/githubicon.svg'

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
              <ContactBox title="Email" link="mailto:foo@bar.com" src={emailIcon}/>
              <ContactBox title="GitHub" link="https://github.com/kirjh" src={githubIcon}/>
              <ContactBox title="LinkedIn" link="https://ca.linkedin.com/" src={linkedinIcon}/>
              <ContactBox title="BlueSky" link="https://bsky.app/" src={blueskyIcon}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactBox({ title, link, src}) {
  return (
    <>
      <div className="contactbox big">
        <a href={link}>{title}</a>
        <object data={src} height='50%'></object>
      </div>
    </>
  )
}