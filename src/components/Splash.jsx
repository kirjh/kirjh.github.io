import '../styles/Splash.css'
import '../styles/index.css'
import {useRef, useEffect} from 'react'

function Border() {
  return (
    <>
      <svg className="splash splash-border"
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
            style={{fill: 'currentColor', 'strokeWidth': 0.264583, 'strokeLinecap': 'round', 'strokeLineJoin': 'round'}}
            d="M 13.49375,13.49375 V 6.6145832 h -0.264584 c 0,3.6531328 -2.96145,6.6145828 -6.6145828,6.6145828 C 2.9614499,13.229166 1.1045695e-7,10.267717 0,6.6145832 H -0.26458333 V 13.49375 Z"
            id="path1" />
        </g>
      </svg>
    </>
  )
}

function Splash() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      document.querySelector(".navbar").classList.toggle("pinned", !(entry.intersectionRatio > 0));
    }, {threshold: [0, 0.5, 1]});

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <>
      <div className="spacer"></div>
      <div className="splash-container" id="home" ref={ref}>
        <div className="splash splash-1"></div>
        <div className="splash splash-2"></div>
        <div className="splash splash-3"></div>
        <Border />
      </div>
    </>
  )
}

// <img className="splash splashborder" src="/splash/border.svg"></img>
export default Splash