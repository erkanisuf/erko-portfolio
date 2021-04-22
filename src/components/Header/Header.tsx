import React, { useState } from "react";
import HeaderSVG from "../SVG/HeaderSVG";
import HeaderCSS from "./Header.module.css";

import { MdKeyboardArrowUp } from "react-icons/md";

import MobileHeaderSVG from "../SVG/MobileHeaderSVG";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import ReactTooltip from "react-tooltip";
// import Tilt from "react-parallax-tilt";
const Header = () => {
  const { ref, inView, entry } = useInView({ initialInView: true, delay: 500 }); // checks if social media bar is in view or not
  const [active, setActive] = useState<string>("");

  // For the h1 div animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 1.2,
        staggerChildren: 1.5, // makes it pop 1 by 1
      },
    },
  };
  //child items
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const activeLink = (e: string) => {
    setActive(e);
  };

  //Variants for the back to up btn
  const variantsUpArrow = {
    active: { opacity: 1 },
    inactive: {
      opacity: 0,
    },
  };
  return (
    <div className={HeaderCSS.mainContainer}>
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ x: { type: "spring", stiffness: 50 } }}
        className={HeaderCSS.leftWrapper}
      >
        {/* Burger Menu component */}
        <BurgerMenu active={active} activeLink={activeLink} />

        {/* Header of Left panel, visible only desktop */}
        <Navigation active={active} activeLink={activeLink} />
        {/* Texts in the left panel */}
        <motion.div
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={HeaderCSS.lightWrapper}
        >
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.h1 variants={item}>Erkan Isuf</motion.h1>
            <motion.h2 variants={item}>Front end developer</motion.h2>

            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              transition={{ duration: 0.1 }}
              variants={item}
            >
              LET`S TALK!
            </motion.button>
          </motion.div>
          <div className={HeaderCSS.mobilHeaderSVG}>
            {/* This SVG is visible only for mobile*/}
            <MobileHeaderSVG />
          </div>
        </motion.div>
      </motion.div>
      {/* Right Panel */}
      <div className={HeaderCSS.rightWrapper}>
        {/* Empty Div that triggers on useView  ,this whole panel is invisible in mobile */}
        <div ref={ref} className={HeaderCSS.triggerSocialAnime} />
        <SocialLinks inView={inView} entry={entry} />
        <HeaderSVG />
      </div>
      {/* Back to Fornt page arrow */}
      <motion.div
        onClick={() => {
          window.location.href = "#";
          activeLink("");
        }}
        whileHover={{ scale: 1.3 }}
        animate={!inView ? variantsUpArrow.active : variantsUpArrow.inactive}
        className={HeaderCSS.showArrowUp}
      >
        <MdKeyboardArrowUp color="white" data-tip data-for="backtotop" />
      </motion.div>
      {!inView && (
        <ReactTooltip
          id="backtotop"
          place="left"
          type="info"
          backgroundColor="rgb(255, 100, 203)"
          aria-haspopup="true"
          className={HeaderCSS.backtoTopPop}
        >
          <p>Back to Top</p>
        </ReactTooltip>
      )}
    </div>
  );
};

export default Header;
