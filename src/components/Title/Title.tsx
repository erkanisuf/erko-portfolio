import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import TitleCSS from "./Title.module.css";
interface ITitle {
  smalltext: string;
  bigtext: string;
  alignItems: align;
}
type align = "flex-start" | "flex-end" | "center";
const Title: React.FC<ITitle> = ({ smalltext, bigtext, alignItems }) => {
  const { ref, inView } = useInView({ initialInView: true, delay: 0 }); // checks if social media bar is in view or not
  const startanimate = useAnimation(); // motions function

  //animation for the title
  const variants = {
    active: { opacity: 1, scale: 1 },
    inactive: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      startanimate.start("active");
    } else {
      startanimate.stop();
    }
    return () => {};
  }, [inView, startanimate]);
  return (
    <motion.div
      ref={ref}
      initial="inactive"
      variants={variants}
      animate={startanimate}
      transition={{ duration: 1 }}
      className={TitleCSS.containerTitle}
      style={{ alignItems: alignItems }}
    >
      <h2>{smalltext}</h2>
      <h2>{bigtext}</h2>
    </motion.div>
  );
};

export default Title;
