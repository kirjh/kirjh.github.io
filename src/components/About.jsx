import '../styles/about.css'
import '../styles/index.css'

function About() {
  return (
    <>
      <div id="about" className="flex-container">
        <div id="about-1">
          <h1>About me</h1>
          <p className="subtext">Welcome to my page.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ex viverra, lobortis massa id, commodo ante. Morbi ullamcorper lorem vitae orci eleifend commodo. Suspendisse vel justo egestas, elementum dui vel, luctus mauris. Nulla lobortis ornare ante, ac faucibus ipsum sodales ut. Donec semper, nisl congue pellentesque sollicitudin, lorem quam fringilla massa, vitae egestas lacus eros condimentum mi. Nunc ligula purus, ornare eget nibh nec, efficitur luctus est. Suspendisse vel nisl ornare, porta libero sit amet, volutpat sem. Nulla facilisi. In vel eros id dui placerat aliquet sed id tellus. Mauris lacinia lacus nec interdum interdum. Nunc sed auctor purus. Integer a nunc placerat, semper odio porttitor, ultrices justo. Maecenas turpis mauris, dapibus vitae augue in, pulvinar ullamcorper sapien.</p>
        </div>
        <div id="about-2">
          <h1>What I do</h1>
          <p className="subtext">Lots of little things.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </>
  )
}

export default About