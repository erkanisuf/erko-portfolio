import { motion } from "framer-motion";
import React, { useState } from "react";
import BurgerMenuCSS from "./BurgerMenu.module.css";
const BurgerMenu = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  // burger menu
  const variantsBurger = {
    active: {
      rotateZ: 45,
      translateY: 5,
      translateX: 0,
    },
    inactive: { rotateZ: 0, translateY: 0, translateX: 5 },
  };
  const variantsBurge2 = {
    active: {
      rotateZ: -45,
    },
    inactive: { rotateZ: 0, translateY: 0 },
  };

  const variantsMobileMenu = {
    active: {
      opacity: 1,
      x: 0,
      scale: 5,
    },
    inactive: { opacity: 0, x: "100%", scale: 0 },
  };
  return (
    <>
      <div className={BurgerMenuCSS.burger} onClick={() => setToggle(!toggle)}>
        <motion.div
          animate={toggle ? "active" : "inactive"}
          variants={variantsBurger}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <motion.div
          variants={variantsBurge2}
          transition={{ duration: 0.5 }}
          animate={toggle ? "active" : "inactive"}
        ></motion.div>
      </div>
      <motion.div
        animate={toggle ? "active" : "inactive"}
        variants={variantsMobileMenu}
        className={BurgerMenuCSS.mobileMenu}
      ></motion.div>
    </>
  );
};

export default BurgerMenu;
