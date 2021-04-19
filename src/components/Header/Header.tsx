import React, { useEffect, useState } from "react";
import HeaderSVG from "../SVG/HeaderSVG";
import HeaderCSS from "./Header.module.css";
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import MobileHeaderSVG from "../SVG/MobileHeaderSVG";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import Tilt from "react-parallax-tilt";
const Header = () => {
  const controls = useAnimation(); //framer motion
  const { ref, inView, entry } = useInView({ initialInView: true, delay: 500 }); // checks if social media bar is in view or not
  const [active, setActive] = useState<string>("");
  //variants for the social media bar
  const variants = {
    active: { y: 500, x: 200 },
    inactive: {
      y: 0,
      x: 0,
    },
  };
  useEffect(() => {
    if (!inView && entry !== undefined) {
      controls.start("active");
    } else {
      controls.start("inactive");
    }
  }, [inView, entry, controls]);

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
        <header>
          <div>Logo</div>
          <nav>
            <ul>
              <li>
                <a
                  href="#a"
                  className={active === "#a" ? HeaderCSS.active : ""}
                  onClick={() => activeLink("#a")}
                >
                  {" "}
                  My work
                </a>
              </li>
              <li>
                <a
                  href="#s"
                  className={active === "#s" ? HeaderCSS.active : ""}
                  onClick={() => activeLink("#s")}
                >
                  My skills
                </a>
              </li>
              <li>
                <a
                  href="#d"
                  className={active === "#d" ? HeaderCSS.active : ""}
                  onClick={() => activeLink("#d")}
                >
                  Contact me
                </a>
              </li>
            </ul>
          </nav>
        </header>
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
        <div>
          {/* Social Media links */}
          <motion.div
            className={!inView ? HeaderCSS.notinView : ""}
            variants={variants}
            animate={controls}
            transition={{
              delay: 0,
              y: { type: "spring", stiffness: 50 },
              x: { type: "spring", stiffness: 50 },
            }}
          >
            <span>
              <AiFillGithub fontSize="18px" />
            </span>
            <span>
              {" "}
              <AiFillLinkedin fontSize="18px" />
            </span>
            <span>
              {" "}
              <SiGmail fontSize="18px" />
            </span>
            <span>
              {" "}
              <AiFillFilePdf fontSize="18px" />
            </span>
          </motion.div>
        </div>
        {/* SVG that is for desktop*/}
        <HeaderSVG />
      </div>
      {/* Back to Fornt page arrow */}
      <motion.div
        whileHover={{ scale: 1.3 }}
        animate={!inView ? variantsUpArrow.active : variantsUpArrow.inactive}
        className={HeaderCSS.showArrowUp}
      >
        <MdKeyboardArrowUp color="white" />
      </motion.div>
    </div>
  );
};

export default Header;
