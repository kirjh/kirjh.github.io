import './header.css'

function Header({text, subtext}) {
  
  return (
    <>
      <div>
        <h1 className="header-sub">{subtext}</h1>
        <h1 className="header-main">{text}</h1>
      </div>
    </>
  )
}

export default Header