import React, { useRef } from "react";
import {useIsInViewport} from "../hooks/isInViewport";

import "./enterAnimation.scss";

const EnterFromLeft = (props) => {
  const ref = useRef(false);
  const appear = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`share__animation__entrance__left-start ${
        appear && "share__animation__entrance__end"
      } ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
const EnterFromRight = (props) => {
  const ref = useRef(false);
  const appear = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`share__animation__entrance__right-start ${appear && "share__animation__entrance__end"}  ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
const EnterFromBottom = (props) => {
  const ref = useRef(false);
  const appear = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`share__animation__entrance__bottom-start ${appear && "share__animation__entrance__end"}  ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};
const EnterFromCenter = (props) => {
  const ref = useRef(false);
  const appear = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`share__animation__entrance__center-start ${appear && "share__animation__entrance__end"}  ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export { EnterFromLeft, EnterFromRight, EnterFromBottom, EnterFromCenter };
