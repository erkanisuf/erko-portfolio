import React, { useEffect, useState } from "react";
import MyWorkCSS from "./MyWork.module.css";
import DesktopImage from "./DekstopImage/DesktopImage";
import MobileTabletImage from "./MobileTabletImage/MobileTabletImage";
import SelectDevice from "./SelectDevice/SelectDevice";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
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
}) => {
  const [device, setDevice] = useState<string>("desktop");
  const { ref, inView } = useInView({ initialInView: true, delay: 0 }); // checks if social media bar is in view or not
  const startanimate = useAnimation();

  const variants = {
    active: { opacity: 1, x: 0 },
    inactive: { opacity: 0, x: 200 },
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
          <DesktopImage title={title} image={image} oddOrEven={oddOrEven} />
        );
      case "mobile":
        return (
          <MobileTabletImage
            title={title}
            image={mobileImage}
            oddOrEven={oddOrEven}
          />
        );
      case "tablet":
        return (
          <MobileTabletImage
            title={title}
            image={tabletImage}
            oddOrEven={oddOrEven}
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
            <h1>{title}</h1>
            <h2>{description}</h2>
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
        oddOrEven={oddOrEven}
        setDevice={setDevice}
        device={device}
      />
    </motion.div>
  );
};

export default Cards;
