import React, { useState, useEffect } from "react";

import Header from "../components/home/Header";
import BackgroundShapes from "../components/home/BackgroundShapes";
import Greeting from "../components/home/Greeting";
import About from "../components/home/About";
import Skills from "../components/home/Skills";
import Portfolio from "../components/home/Portfolio";
import Projects from "../components/home/projects";
import Contact from "../components/home/contact";
import Link from "../components/home/link";
import Loading from "../components/home/Loading";

const Homepage = () => {
  const [projectList, setProjectList] = useState([]);
  const [porfolioList, setporfolioList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjectList = async () => {
      try {
        const responseData = await fetch(
          "https://liangtangspace.com/api/projects"
        );
        const res = await responseData.json();
        const projects = res.filter((el) => el.portfolio === false);
        const portfolios = res.filter((el) => el.portfolio === true);
        setProjectList(projects);
        setporfolioList(portfolios);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjectList();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <div className="home">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="home__page">
        <BackgroundShapes />
        <Header className="home__header" />
        <span id="top"></span>
          <div className="home__body">
            <Greeting />
            <About />
            <Skills />
            <Portfolio list={porfolioList} />
            <Projects list={projectList} />
            <Contact />
          </div>
          <Link />
        </div>
      )}
    </div>
  );
};

export default Homepage;
