import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { openNewTab } from "../../Header/SocialLinks";
import useWindowSize from "../../SVG/useWindowSize";
import TabletImageCSS from "./TabletImage.module.css";

interface ITabletImage {
  oddOrEven: number;
  image: string;
  title: string;
  livepreview: string;
}
const TabletImage: React.FC<ITabletImage> = ({
  oddOrEven,
  image,
  title,
  livepreview,
}) => {
  const [width] = useWindowSize();

  return (
    <div
      className={
        oddOrEven % 2 === 0
          ? TabletImageCSS.rightOrder
          : TabletImageCSS.leftOrder
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
          className={TabletImageCSS.parralax}
        >
          <div
            className={TabletImageCSS.cardImageWrapper}
            onClick={() => openNewTab(livepreview)}
          >
            <img src={image} alt={title} id="projectcard" />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default TabletImage;
