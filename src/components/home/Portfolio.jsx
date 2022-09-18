import React,{ useEffect, useState } from "react";
import {
  EnterFromLeft,
  EnterFromRight,
  EnterFromCenter
} from "../shared/components/enterAnimation";
import Sprites from "../../imgs/SVG/sprites.svg";

const Portfolio = (props) => {
  const [ isMobile, setIsMobile] = useState(false) 

  useEffect(()=>{
    let width = window.innerWidth;
    width < 600 && setIsMobile(true);
  },[])


  const itemlist = props.list.map((item, index) => {
    if (isMobile) {
      return (
        <EnterFromCenter className="home__portfolio__item" key={item._id}>
        <div className="home__portfolio-left-img">
          <figure className="home__portfolio__img">
            <img src={item.image} alt="" />
          </figure>
        </div>
        <div className="home__portfolio-left-text">
          <div className="home__portfolio__text home__portfolio__text-left">
            <h6 className="home__portfolio__sub-title home__portfolio__sub-title-left">
              project
            </h6>
            <h5 className="home__portfolio__title home__portfolio__title-left">
              {item.name}
            </h5>
            <p className="home__portfolio__description home__portfolio__description-left">
              {item.description}
            </p>
            <p className="home__portfolio__sub-description home__portfolio__sub-description-left">
              {item.language}
            </p>
            <div className="home__portfolio__btns">
              {item.github && (
                <a
                  href={item.github}
                  className="btn__link home__portfolio__btn"
                >
                  <svg className="btn__icon">
                    <use xlinkHref={`${Sprites}#icon-github`} />
                  </svg>
                </a>
              )}
              <a href={item.url} className="btn__link home__portfolio__btn">
                <svg className="btn__icon">
                  <use xlinkHref={`${Sprites}#icon-forward`} />
                </svg>
              </a>
            </div>
          </div>
        </div>
        </EnterFromCenter>
      )
    }
    switch (index % 2) {
      case 0:
        return (
          <div className="home__portfolio__item" key={item._id}>
            <EnterFromLeft className="home__portfolio-left-img">
              <figure className="home__portfolio__img">
                <img src={item.image} alt="" />
              </figure>
            </EnterFromLeft>
            <EnterFromRight className="home__portfolio-left-text">
              <div className="home__portfolio__text home__portfolio__text-left">
                <h6 className="home__portfolio__sub-title home__portfolio__sub-title-left">
                  project
                </h6>
                <h5 className="home__portfolio__title home__portfolio__title-left">
                  {item.name}
                </h5>
                <p className="home__portfolio__description home__portfolio__description-left">
                  {item.description}
                </p>
                <p className="home__portfolio__sub-description home__portfolio__sub-description-left">
                  {item.language}
                </p>
                <div className="home__portfolio__btns">
                  {item.github && (
                    <a
                      href={item.github}
                      className="btn__link home__portfolio__btn"
                    >
                      <svg className="btn__icon">
                        <use xlinkHref={`${Sprites}#icon-github`} />
                      </svg>
                    </a>
                  )}
                  <a href={item.url} className="btn__link home__portfolio__btn">
                    <svg className="btn__icon">
                      <use xlinkHref={`${Sprites}#icon-forward`} />
                    </svg>
                  </a>
                </div>
              </div>
            </EnterFromRight>
          </div>
        );
      case 1:
        return (
          <div className="home__portfolio__item" key={item._id}>
            <EnterFromRight className="home__portfolio-right-img">
              <figure className="home__portfolio__img home__portfolio__img-right">
                <img src={item.image} alt="" />
              </figure>
            </EnterFromRight>
            <EnterFromLeft className="home__portfolio-right-text">
              <div className="home__portfolio__text home__portfolio__text-right">
                <h6 className="home__portfolio__sub-title home__portfolio__sub-title-right">
                  project
                </h6>
                <h5 className="home__portfolio__title home__portfolio__title-right">
                  {item.name}
                </h5>
                <p className="home__portfolio__description home__portfolio__description-right">
                  {item.description}
                </p>
                <p className="home__portfolio__sub-description home__portfolio__sub-description-right">
                  {item.language}
                </p>
                <div className="home__portfolio__btns">
                  {item.github && (
                    <a
                      href={item.github}
                      className="btn__link home__portfolio__btn"
                    >
                      <svg className="btn__icon">
                        <use xlinkHref={`${Sprites}#icon-github`} />
                      </svg>
                    </a>
                  )}
                  <a href={item.url} className="btn__link home__portfolio__btn">
                    <svg className="btn__icon">
                      <use xlinkHref={`${Sprites}#icon-forward`} />
                    </svg>
                  </a>
                </div>
              </div>
            </EnterFromLeft>
          </div>
        );
      default:
        return null
    }
  });
  return (
    <div id="portfolio" className="home__portfolio mb-hg">
      <h3 className="heading-3 home__portfolio__heading">My portfolio</h3>
      <div className="home__portfolio__container">{itemlist}</div>
    </div>
  );
};

export default Portfolio;
