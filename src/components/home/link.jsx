import React, { useEffect, useState } from "react";
import { useLoadOffSet } from "../shared/hooks/offSet";
import { EnterFromBottom } from "../shared/components/enterAnimation";

import Sprites from "../../imgs/SVG/sprites.svg";

const Link = () => {
  const offset = useLoadOffSet();
  const [leaveTop, setLeaveTop] = useState(false);
  useEffect(() => {
    switch (true) {
      case offset <= 700:
        setLeaveTop(false);
        break;
      case offset > 700:
        setLeaveTop(true);
        break;
      default:
        break;
    }
  }, [offset]);

  return (
    <div className="link">
      <div className="link__media">
        <a href="https://www.linkedin.com/in/liang-tang-192702a4/" className="link__media__btn">
          <svg className="btn__icon">
            <use xlinkHref={`${Sprites}#icon-linkedin`}></use>
          </svg>
        </a>
        <a href="https://github.com/LiangT721" className="link__media__btn">
          <svg className="btn__icon">
            <use xlinkHref={`${Sprites}#icon-github`}></use>
          </svg>
        </a>
        <div className="link__media__line"></div>
      </div>
      <div className="link__email">
        <a href="mailto:liangtang0721@gmail.com" className="email">
          liangtang0721@gmail.com
        </a>
      </div>
      {leaveTop && (
        <div className="link__toTop">
          <EnterFromBottom>
            <a href="#top">
              <svg className="btn__icon link__toTop__btn">
                <use xlinkHref={`${Sprites}#icon-chevron-circle-up`}></use>
              </svg>
            </a>
          </EnterFromBottom>
        </div>
      )}
    </div>
  );
};

export default Link;
