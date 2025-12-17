import '../styles/Splash.css'
import '../styles/index.css'
import {useRef, useEffect} from 'react'

function Border() {
  return (
    <>
      <svg className="splash-border"
        viewBox="0 0 13.758332 6.8791665"
        version="1.1"
        id="splash-border-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
          id="defs1" />
        <g
          id="layer1"
          transform="translate(0.26458333,-6.6145832)">
          <path
            style={{'fill': 'currentColor', 'strokeWidth': 0.264583, 'strokeLinecap': 'round', 'strokeLineJoin': 'round'}}
            d="M 13.49375,13.49375 V 6.6145832 h -0.264584 c 0,3.6531328 -2.96145,6.6145828 -6.6145828,6.6145828 C 2.9614499,13.229166 1.1045695e-7,10.267717 0,6.6145832 H -0.26458333 V 13.49375 Z"
            id="path1" />
        </g>
      </svg>
    </>
  )
}

function Splash() {
  const ref = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      document.querySelector(".navbar").classList.toggle("pinned", !(entry.intersectionRatio > 0));
    }, {threshold: [0, 0.5, 1]});

    if (ref.current) {
      observer.observe(ref.current);
    }
    document.addEventListener("mousemove", mouseParallax);
    document.addEventListener("scroll", parallaxEffect);
    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", parallaxEffect);
    }
  }, []);

  function mouseParallax(event) {
    if (window.innerWidth <= 1080) return;
    mouseX.current = 2 * ((window.innerWidth / 2) - event.clientX) / window.innerWidth;
    mouseY.current = 2 * ((window.innerHeight / 2) - event.clientY) / window.innerHeight;
    parallaxEffect();
  }
  function parallaxEffect() {
    document.querySelectorAll(".splash").forEach((splash) => {
      if (window.innerWidth <= 1080) {
      mouseX.current = 0;
      mouseY.current = 0;
      }
      const multiplier = splash.getAttribute("value");
      splash.style.transform = `translate3d(${mouseX.current * 5 * multiplier}px, ${(mouseY.current * 5 * multiplier) + ((window.scrollY / 15) * (32 / multiplier))}px, 0)`;
    });
    document.querySelector(".splash-bg").style.transform = `translate3d(0, ${-(window.scrollY / 5) * 8}px, 0)`;
  }


  return (
    <>
      <div className="spacer" aria-hidden="true"></div>
      <div className="splash-container" id="home" ref={ref} aria-hidden="true">
        <div className="splash-flex-container">
          <div className="poi">
            <div className="splash" value="3"><img src="/moon.svg" alt=""/></div>
          </div>
          <div className="poi">
            <div className="splash" value="16"><img src="/cloud1.svg" alt=""/></div>
          </div>
          <div className="poi">
            <div className="splash" value="8"><img src="/cloud2.svg" alt=""/></div>
          </div>
          <div className="poi">
            <div className="splash" value="4"><img src="/cloud3.svg" alt=""/></div>
          </div>
          <div className="poi">
            <div className="splash-bg"></div>
          </div>
        </div>
        <Border />
      </div>
    </>
  )
}

// <img className="splash splashborder" src="/splash/border.svg"></img>
export default Splash