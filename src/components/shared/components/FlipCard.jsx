import React from "react";
import "./flipCard.scss";

const FlipCardFront = (props) => {
  return <div className={` ${props.className} share__flip-card__front`} style={props.style} >{props.children}</div>;
};
const FlipCardBack = (props) => {
  return <div className={`${props.className} share__flip-card__back`} style={props.style} >{props.children}</div>;
};

const FlipCard = (props) => {
  return (
    <div className={`share__flip-card ${props.className}`} style={props.style} >{props.children}</div>
  );
};
export { FlipCard, FlipCardFront, FlipCardBack };

