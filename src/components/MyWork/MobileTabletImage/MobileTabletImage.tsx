import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import { openNewTab } from "../../Header/SocialLinks";
import MobileTabletImageCSS from "./MobileTabletImage.module.css";

interface IMobileTabletImage {
  oddOrEven: number;
  image: string;
  title: string;
  livepreview: string;
}
const MobileTabletImage: React.FC<IMobileTabletImage> = ({
  image,
  title,
  livepreview,
}) => {
  return (
    <div className={MobileTabletImageCSS.container}>
      <motion.div
        whileHover={{ scale: 1.2 }}
        animate={{ x: 0 }}
        initial={{ x: 200 }}
      >
        <Tilt
          trackOnWindow={false}
          transitionSpeed={5000}
          tiltReverse={true}
          perspective={2000}
          className={MobileTabletImageCSS.parralax}
        >
          <div
            className={MobileTabletImageCSS.cardImageWrapper}
            onClick={() => openNewTab(livepreview)}
          >
            <img src={image} alt={title} />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default MobileTabletImage;
