import '../styles/contact.css'
import '../styles/index.css'

import emailLogo from '../assets/email.svg'
import githubLogo from '../assets/github.svg'
import linkedinLogo from '../assets/linkedin.svg'
import Heading from './Heading.jsx'

import {useState, useEffect} from 'react'
import Base64 from './Base64.js'

const iv = Base64.toBinary("RatL_gHxi_JvWlof5noS-Q==");
const key = await window.crypto.subtle.importKey(
  "raw", 
  Base64.toBinary(import.meta.env.VITE_EMAIL_KEY),
  { name: "AES-GCM" },
  false,
  ["encrypt", "decrypt"]
);
/* Generate key 
const genKey = async () => {
    let key = await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );
  key = await window.crypto.subtle.exportKey('raw', key);
  key = Base64.toBase64(new Uint8Array(key));
  return key;
}
*/
const encrypt = async (text) => {
  const data = new TextEncoder().encode(text);
  const code = await window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, data);
  return Base64.toBase64(new Uint8Array(code));
}
const decrypt = async (text) => {
  const data = Base64.toBinary(text);
  const code = await window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);
  return new TextDecoder().decode(code);
}

const setLink = async () => {
  const anchor = document.querySelector("#Email");
  const href = anchor.href.slice(7)
  anchor.href = `mailto:${await decrypt(href)}`;
}
function ContactCard({src, alt, href, text}) {
  return (
    <>
      <div className="contact-card">
        <a className="link" href={href} id={text} target="_blank">
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
    
    setLink();
  }, []);
  return (
    <>
      <div id="contact" className="container">
        <div className="header">
          <Heading h1 = "Contact me" su="Let's get down to business." />
        </div>
        <div className="contact-body">
          <div className="contact-card-container">
            <ContactCard src={emailLogo} href="mailto:nf_LAFtSqGANh4g33p63usL4uTcgKuLUqAk5qF3A64SYXLNq" text="Email" alt=""/>
            <ContactCard src={githubLogo} href="https://github.com" text="Github" alt=""/>
            <ContactCard src={linkedinLogo} href="https://linkedin.com" text="Linkedin" alt=""/>
          </div>
          <p className="subtext">Click any link above to get started.</p>
        </div>
        <div className="footer">
          <p style={{margin: 0}}>©{year} Powered by dreams.</p>
        </div>
      </div>
    </>
  )
}

export default Contact