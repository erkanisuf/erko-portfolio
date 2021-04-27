import React, { useEffect, useState } from "react";
import MyWorkCSS from "./MyWork.module.css";
import DesktopImage from "./DekstopImage/DesktopImage";
import MobileTabletImage from "./MobileTabletImage/MobileTabletImage";
import SelectDevice from "./SelectDevice/SelectDevice";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import TabletImage from "./TabletImage/TabletImage";
import { openNewTab } from "../Header/SocialLinks";
interface ICards {
  backgroundColor: string;
  backgroundImage: string;
  title: string;
  image: string;
  mobileImage: string;
  oddOrEven: number;
  description: string;
  stack: string[];
  tabletImage: string;
  github: string;
  livepreview: string;
}
const Cards: React.FC<ICards> = ({
  backgroundColor,
  backgroundImage,
  title,
  image,
  oddOrEven,
  description,
  stack,
  mobileImage,
  tabletImage,
  github,
  livepreview,
}) => {
  const [device, setDevice] = useState<string>("desktop");
  const { ref, inView } = useInView({ initialInView: true, delay: 0 }); // checks if social media bar is in view or not
  const startanimate = useAnimation();

  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      startanimate.start("active");
    } else {
      startanimate.stop();
    }
    return () => {};
  }, [inView, startanimate]);

  const typeOfImage = () => {
    switch (device) {
      case "desktop":
        return (
          <DesktopImage
            title={title}
            image={image}
            oddOrEven={oddOrEven}
            livepreview={livepreview}
          />
        );
      case "mobile":
        return (
          <MobileTabletImage
            title={title}
            image={mobileImage}
            oddOrEven={oddOrEven}
            livepreview={livepreview}
          />
        );
      case "tablet":
        return (
          <TabletImage
            title={title}
            image={tabletImage}
            oddOrEven={oddOrEven}
            livepreview={livepreview}
          />
        );
    }
  };
  return (
    <motion.div
      ref={ref}
      initial="inactive"
      variants={variants}
      animate={startanimate}
      transition={{ duration: 1 }}
      className={MyWorkCSS.cardContainer}
      style={{
        backgroundImage: backgroundImage,
        backgroundColor: backgroundColor,
      }}
    >
      <div className={MyWorkCSS.itemContainer}>
        <div className={MyWorkCSS.cardText}>
          <div>
            <h2 onClick={() => openNewTab(livepreview)}>{title}</h2>
            <h3>{description}</h3>
          </div>
          <div className={MyWorkCSS.description}></div>
          <div className={MyWorkCSS.stackUsed}>
            {stack.map((el, index) => {
              return <div key={index}>{el}</div>;
            })}
          </div>
        </div>
        <div
          className={
            oddOrEven % 2 === 0 ? MyWorkCSS.rightOrder : MyWorkCSS.leftOrder
          }
        >
          {/* Returns Mobile Image Desktop Or Tablet  */}
          {typeOfImage()}
        </div>
      </div>

      <SelectDevice
        livepreview={livepreview}
        github={github}
        oddOrEven={oddOrEven}
        setDevice={setDevice}
        device={device}
      />
    </motion.div>
  );
};

export default Cards;
