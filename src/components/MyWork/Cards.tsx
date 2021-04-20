import React from "react";
import MyWorkCSS from "./MyWork.module.css";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import useWindowSize from "../SVG/useWindowSize";
interface ICards {
  backgroundColor: string;
  backgroundImage: string;
  title: string;
  image: string;
  oddOrEven: number;
  description: string;
}
const Cards: React.FC<ICards> = ({
  backgroundColor,
  backgroundImage,
  title,
  image,
  oddOrEven,
  description,
}) => {
  const [width] = useWindowSize();
  console.log(width);
  const orderStyleRight = {
    order: width > 1024 ? 2 : 0,
    marginRight: width > 1024 ? "-5%" : "0%",
    justifyContent: width > 1024 ? "flex-end" : "center",
  };
  const orderStyleLeft = {
    order: 0,
    marginLeft: width > 1024 ? "-8%" : "0%",
    justifyContent: width > 1024 ? "" : "center",
  };

  return (
    <div
      className={MyWorkCSS.cardContainer}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div style={{ order: 1 }} className={MyWorkCSS.cardText}>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div
          className={MyWorkCSS.stackUsed}
          style={{ alignSelf: oddOrEven % 2 === 0 ? "flex-end" : "flex-start" }}
        >
          <div>React</div>
          <div>Node</div>
          <div>.NET</div>
        </div>
        <div
          className={MyWorkCSS.links}
          style={{ alignSelf: oddOrEven % 2 === 0 ? "flex-end" : "flex-start" }}
        >
          <AiFillGithub />
          <AiOutlineLink />
        </div>
      </div>

      <motion.div
        whileHover={
          width > 1024
            ? { x: oddOrEven % 2 === 0 ? 200 : -200, scale: 1.2 }
            : {}
        }
        style={oddOrEven % 2 === 0 ? orderStyleLeft : orderStyleRight}
      >
        <Tilt
          style={oddOrEven % 2 === 0 ? orderStyleLeft : orderStyleRight}
          trackOnWindow={false}
          transitionSpeed={5000}
          tiltReverse={true}
          perspective={2000}
          className={MyWorkCSS.parralax}
        >
          <div
            style={oddOrEven % 2 === 0 ? orderStyleLeft : orderStyleRight}
            className={MyWorkCSS.cardImageWrapper}
          >
            <img src={image} alt={title} />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default Cards;
