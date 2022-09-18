import React from "react";
import {
  FlipCard,
  FlipCardBack,
  FlipCardFront
} from "../shared/components/FlipCard";
import { EnterFromCenter } from "../shared/components/enterAnimation";
import Sprites from "../../imgs/SVG/sprites.svg";

const Projects = (props) => {
  const itemlist = props.list.map((item) => {
    return (
      <EnterFromCenter key={item._id}>
        <FlipCard className="home__projects__item">
          <FlipCardFront className="home__projects__item-side home__projects__item-side-front">
            <svg className="home__projects__icon">
              <use xlinkHref={`${Sprites}#icon-folder-open`} />
            </svg>
            <h2 className="home__projects__title">{item.name}</h2>
            <p className="home__projects__description">{item.description}</p>
          </FlipCardFront>
          <FlipCardBack className="home__projects__item-side home__projects__item-side-back">
            <figure className="home__projects__img">
              <img src={item.image} alt="" />
            </figure>
            <div className="home__projects__sub-description">
              {item.language}
            </div>
            <div className="home__projects__btns">
              {item.github && (
                <a href={item.github} className="home__projects__btn btn__link">
                  <svg className="btn__icon">
                    <use xlinkHref={`${Sprites}#icon-github`} />
                  </svg>
                </a>
              )}
              <a href={item.url} className="home__projects__btn btn__link">
                <svg className="btn__icon">
                  <use xlinkHref={`${Sprites}#icon-forward`} />
                </svg>
              </a>
            </div>
          </FlipCardBack>
        </FlipCard>
      </EnterFromCenter>
    );
  });
  return (
    <div className="home__projects mb-hg">
      <h3 className="heading-3 home__projects__heading">other projects</h3>
      <div className="home__projects__container mb-lg">{itemlist}</div>
    </div>
  );
};

export default Projects;
