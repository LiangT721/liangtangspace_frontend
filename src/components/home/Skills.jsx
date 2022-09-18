import React from "react";

import { EnterFromRight } from "../shared/components/enterAnimation";

const Skills = () => {
  return (
    <div id="skills"  className="home__skills mb-hg">
      <h3 className="heading-3 home__skills__heading">My Skills</h3>
      <EnterFromRight>
        <div className="home__skills__list">
          <div className="home__skills__icon">
            <i className="devicon-html5-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-css3-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-javascript-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-react-original"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-vuejs-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-nodejs-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-python-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-bootstrap-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-tailwindcss-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-flask-original-wordmark"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-redux-original"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-express-original"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-nextjs-plain-wordmark"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-mysql-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-mongodb-plain-wordmark"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-sass-original"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-wordpress-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-figma-plain"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-github-original"></i>
          </div>
          <div className="home__skills__icon">
            <i className="devicon-bash-plain"></i>
          </div>
        </div>
      </EnterFromRight>
    </div>
  );
};

export default Skills;
