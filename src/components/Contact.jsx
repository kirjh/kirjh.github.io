import '../styles/contact.css'
import '../styles/index.css'

import emailLogo from '../assets/email.svg'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'

import {useState, useEffect} from 'react'


function ContactCard({src, alt, href, text}) {
  return (
    <>
      <div className="contact-card">
        <a href={href} target="_blank">
          <img src={src} alt={alt} className="svg-icon"/>
          <span>{text}</span>
        </a>
      </div>
    </>
  )
}

function Contact() {
  const [year, setYear] = useState(0)
  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);
  return (
    <>
      <div id="contact" className="container">
        <div className="header">
          <h1>Contact me</h1>
          <p className="subtext">Let's get down to business.</p>
        </div>
        <div className="contact-body">
          <div className="contact-card-container">
            <ContactCard src={emailLogo} href="https://github.com" text="Email" alt="Send an email to me."/>
            <ContactCard src={githubLogo} href="https://github.com" text="Github" alt="Link to Github website."/>
            <ContactCard src={linkedinLogo} href="https://linkedin.com" text="Linkedin" alt="Link to Linkedin website."/>
          </div>
          <p className="subtext">Click any link above to get started.</p>
        </div>
        <div className="footer">
          ©{year} Powered by dreams.
        </div>
      </div>
    </>
  )
}

export default Contact