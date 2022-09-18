import React from "react";

const Greeting = () => {
  return (
    <div className="home__greeting">
      <h2 className="home__greeting__hello">hello,</h2>
      <h1 className="home__greeting__main-heading">I'm Liang Tang.</h1>
      <h3 className="home__greeting__sub-heading">I am a web-developer.</h3>
      <a href="#portfolio" className="link-btn__large">portfolio</a>
    </div>
  )
}

export default Greeting;