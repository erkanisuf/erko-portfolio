import React from "react";
import MyWorkCSS from "./MyWork.module.css";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
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
    order: width > 767 ? 2 : 0,
    marginRight: width > 767 ? "-5%" : "0%",
    justifyContent: width > 767 ? "flex-end" : "center",
  };
  const orderStyleLeft = {
    order: 0,
    marginLeft: width > 767 ? "-8%" : "0%",
    justifyContent: width > 767 ? "" : "center",
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
        <h1>{title}</h1>
        <h2>{description}</h2>
        <div>
          <AiFillGithub />
        </div>
      </div>
      <motion.div
        whileHover={
          width > 767 ? { x: oddOrEven % 2 === 0 ? 200 : -200, scale: 1.2 } : {}
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
