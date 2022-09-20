import React from "react";

const About = () => {
  return (
    <div id="about"  className="home__about">
      <h3 className="heading-3 home__about-heading">About me</h3>
      <div className="home__about__text-container">
        <p className="home__about__text-1">I'm Liang Tang, a Web Developer with a great passion for programming and designing. I am experienced in developing web including full front-end design. I hope my knowledge of programming and design would bring you the most value. 
        </p>
        <p>
        I spend my free time cooking, photographing, making videos, and playing video games whenever When I not making content or writing code. Please <a className="home__about__a" href="#contact"> <u>contact</u> </a> me if you are interested in chatting with me!</p>
      </div>
      <figure className="home__about__img-container">
        <div className="home__about__img" />
      </figure>
    
    </div>
  )
}

export default About;