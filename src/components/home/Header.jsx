import React, { useEffect, useState } from "react";

import Logo from "../shared/Logo";
import { useLoadOffSet } from "../shared/hooks/offSet";

const Header = () => {
  const offset = useLoadOffSet();
  const [bgClass, setbgClass] = useState("");
  const [isCheck, setIsCheck] = useState(false);


  useEffect(() => {
    if (window.innerWidth <= 600) {
      setbgClass("home__header");
      return;
    } else {
      switch (true) {
        case offset < 100:
          setbgClass("home__header home__header__desktop__enter");
          break;
        case offset >= 100 && offset < 1200:
          setbgClass("home__header home__header__desktop__enter home__header__blur");
          break;
        case offset >= 1200:
          setbgClass("home__header home__header__desktop__enter home__header__hidden home__header__blur");
          break;
        default:
          break;
      }
    }
  }, [offset]);

  const resetChecked = () => setIsCheck(false);
  const setChecked = () => setIsCheck(!isCheck);

  return (
    <div className={bgClass}>
      <div className="home__header__logo--container">
        <Logo />
      </div>
      <input
        type="checkbox"
        className="home__header__checkbox__logo"
        id="nav-toggle"
        checked={isCheck}
      />
      <label
        htmlFor="nav-toggle"
        className="home__header__checkbox__icon"
        onClick={setChecked}
      >
        <Logo />
      </label>
      <div className="home__header__nav">
        <ul className="home__header__nav__list">
          <li className="home__header__nav__item">
            <a
              href="#about"
              className="home__header__nav__link"
              onClick={resetChecked}
            >
              about
            </a>
          </li>
          <li className="home__header__nav__item">
            <a
              href="#skills"
              className="home__header__nav__link"
              onClick={resetChecked}
            >
              skills
            </a>
          </li>
          <li className="home__header__nav__item">
            <a
              href="#portfolio"
              className="home__header__nav__link"
              onClick={resetChecked}
            >
              portfolio
            </a>
          </li>
          <li className="home__header__nav__item">
            <a
              href="#contact"
              className="home__header__nav__link"
              onClick={resetChecked}
            >
              contact
            </a>
          </li>
        </ul>
        <a
          href="https://liangtangspace.com/api/uploads/docs/LiangTangResume.docx"
          className="home__header__resume"
        >
          <div className="home__header__resume-text">resume</div>
          <span className="home__header__resume-bottom"></span>
          <span className="home__header__resume-right"></span>
          <span className="home__header__resume-top"></span>
          <span className="home__header__resume-left"></span>
        </a>
      </div>
    </div>
  );
};

export default Header;
