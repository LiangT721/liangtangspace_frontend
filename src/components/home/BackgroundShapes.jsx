import React, { useEffect, useState } from "react";
import { useLoadOffSet } from "../shared/hooks/offSet";

const BackgroundShapes = () => {
  const offset = useLoadOffSet();
  // const [offset, setOffset] = useState(0);
  const [style1, setStyle1] = useState("home__background__shape__1-1");
  const [style2, setStyle2] = useState("home__background__shape__2-1");

  useEffect(() => {
    switch (true) {
      case offset <= 600:
        // console.log("1")
        setStyle1("home__background__shape__1-1");
        setStyle2("home__background__shape__2-1");
        break;
      case offset > 600 && offset <= 1500:
        // console.log("2")
        setStyle1("home__background__shape__1-2");
        setStyle2("home__background__shape__2-2");
        break;
      case offset > 1500 && offset <= 2500:
        // console.log("2")
        setStyle1("home__background__shape__1-3");
        setStyle2("home__background__shape__2-3");
        break;
      case offset > 2500 && offset <= 3800:
        // console.log("2")
        setStyle1("home__background__shape__1-4");
        setStyle2("home__background__shape__2-4");
        break;
      case offset > 3800 && offset <= 4000:
        // console.log("2")
        setStyle1("home__background__shape__1-5");
        setStyle2("home__background__shape__2-5");
        break;
      case offset > 4000 :
      // console.log("2")
      setStyle1("home__background__shape__1-6");
      setStyle2("home__background__shape__2-6");
      break;
      default:
        break;
    }
  }, [offset]);

  // console.log(offset);
  // console.log(style1);

  return (
    <div className="home__background__shapes">
      <div className={style1}></div>
      <div className={style2}></div>
    </div>
  );
};

export default BackgroundShapes;
