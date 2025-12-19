import '../styles/heading.css'
import '../styles/index.css'

function Heading({h1, su}) {
  return (
    <>
      <h1 className="heading">{h1}</h1>
      <h2 className="subheading subtext">{su}</h2>
    </>
  )
}

export default Heading