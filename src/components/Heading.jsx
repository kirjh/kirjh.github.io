import '../styles/heading.css'
import '../styles/index.css'

function Heading({h1, su}) {
  return (
    <>
      <h1 className="heading">{h1}</h1>
      <p className="subheading subtext">{su}</p>
    </>
  )
}

export default Heading