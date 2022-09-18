import React from "react";
import Logo from "../shared/Logo";

const Loading = () => {
  return (
    <div className="home__loading">
      <div className="home__loading__container">
        <Logo />
        <span className="home__loading__container-bottom"></span>
        <span className="home__loading__container-right"></span>
        <span className="home__loading__container-top"></span>
        <span className="home__loading__container-left"></span>
      </div>
    </div>
  );
};

export default Loading;
