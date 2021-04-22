import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import useWindowSize from "../../SVG/useWindowSize";
import DesktopImageCSS from "./DesktopImage.module.css";

interface IDesktopImage {
  oddOrEven: number;
  image: string;
  title: string;
}
const DesktopImage: React.FC<IDesktopImage> = ({ oddOrEven, image, title }) => {
  const [width] = useWindowSize();

  return (
    <div
      className={
        oddOrEven % 2 === 0
          ? DesktopImageCSS.rightOrder
          : DesktopImageCSS.leftOrder
      }
    >
      <motion.div
        whileHover={
          width > 1024
            ? { x: oddOrEven % 2 === 0 ? -100 : 100, scale: 1.2 }
            : {}
        }
      >
        <Tilt
          trackOnWindow={false}
          transitionSpeed={5000}
          tiltReverse={true}
          perspective={2000}
          className={DesktopImageCSS.parralax}
        >
          <div className={DesktopImageCSS.cardImageWrapper}>
            <img src={image} alt={title} />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default DesktopImage;
