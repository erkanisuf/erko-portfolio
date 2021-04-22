import { motion } from "framer-motion";
import React from "react";
import Tilt from "react-parallax-tilt";
import MobileTabletImageCSS from "./MobileTabletImage.module.css";

interface IMobileTabletImage {
  oddOrEven: number;
  image: string;
  title: string;
}
const MobileTabletImage: React.FC<IMobileTabletImage> = ({
  oddOrEven,
  image,
  title,
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
          <div className={MobileTabletImageCSS.cardImageWrapper}>
            <img src={image} alt={title} />
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default MobileTabletImage;
