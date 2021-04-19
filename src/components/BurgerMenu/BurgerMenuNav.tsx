import { motion } from "framer-motion";
import React from "react";
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import BurgerMenuCSS from "./BurgerMenu.module.css";
interface IBurgerMenuNav {
  toggle: boolean;
  active: string;
  activeLink: any;
  setToggle: any;
}
const BurgerMenuNav: React.FC<IBurgerMenuNav> = ({
  toggle,
  active,
  activeLink,
  setToggle,
}) => {
  const variantsMobileMenu = {
    active: {
      opacity: 1,
      x: 0,
    },
    inactive: { opacity: 0, x: "100%" },
  };
  const closeNav = (e: string) => {
    activeLink(e);
    setToggle(false);
  };
  return (
    <motion.div
      animate={toggle ? "active" : "inactive"}
      variants={variantsMobileMenu}
      className={BurgerMenuCSS.mobileMenu}
    >
      <nav className={BurgerMenuCSS.mobileNav}>
        <ul>
          <li>
            <a
              href="#a"
              className={active === "#a" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#a")}
            >
              {" "}
              My work
            </a>
          </li>
          <li>
            <a
              href="#s"
              className={active === "#s" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#s")}
            >
              My skills
            </a>
          </li>
          <li>
            <a
              href="#d"
              className={active === "#d" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#d")}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <span>
          <AiFillGithub fontSize="7vw" />
        </span>
        <span>
          {" "}
          <AiFillLinkedin fontSize="7vw" />
        </span>
        <span>
          {" "}
          <SiGmail fontSize="7vw" />
        </span>
        <span>
          {" "}
          <AiFillFilePdf fontSize="7vw" />
        </span>
      </div>
    </motion.div>
  );
};

export default BurgerMenuNav;
