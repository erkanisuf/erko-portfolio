import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { openNewTab } from "../../Header/SocialLinks";
import useWindowSize from "../../SVG/useWindowSize";
import DesktopImageCSS from "./DesktopImage.module.css";

interface IDesktopImage {
  oddOrEven: number;
  image: string;
  title: string;
  livepreview: string;
}
const DesktopImage: React.FC<IDesktopImage> = ({
  oddOrEven,
  image,
  title,
  livepreview,
}) => {
  const [width] = useWindowSize(); // checks viewport

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
          <div
            data-testid="desktopImageLink"
            className={DesktopImageCSS.cardImageWrapper}
            onClick={() => openNewTab(livepreview)}
          >
            <img src={image} alt={title} id="projectcard" />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default DesktopImage;
