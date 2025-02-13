import './contact.css'
import './index.css'
import './about.css'

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
            <div className="sectiondivider">
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