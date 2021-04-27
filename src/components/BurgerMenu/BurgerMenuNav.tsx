import { motion } from "framer-motion";
import React from "react";
import {
  AiFillFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMobile,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { openNewTab } from "../Header/SocialLinks";

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
  //animation to show the nav for mobiles
  const variantsMobileMenu = {
    active: {
      opacity: 1,
      x: 0,
    },
    inactive: { opacity: 0, x: "100%" },
  };
  //closes the navigation for mobile
  const closeNav = (e: string) => {
    activeLink(e);
    setToggle(false);
    window.location.href = e;
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
              data-testid="mobilemywork"
              href="#mywork"
              className={active === "#mywork" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#mywork")}
            >
              {" "}
              My work
            </a>
          </li>
          <li>
            <a
              data-testid="mobilemyskills"
              href="#myskills"
              className={active === "#myskills" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#myskills")}
            >
              My skills
            </a>
          </li>
          <li>
            <a
              data-testid="mobileaboutme"
              href="#aboutme"
              className={active === "#aboutme" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#aboutme")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              data-testid="mobilecontactme"
              href="#contactme"
              className={active === "#contactme" ? BurgerMenuCSS.active : ""}
              onClick={() => closeNav("#contactme")}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <span onClick={() => openNewTab("https://github.com/erkanisuf")}>
          <AiFillGithub fontSize="7vw" />
        </span>
        <span
          onClick={() =>
            openNewTab("https://www.linkedin.com/in/erkan-isuf-a25b21202/")
          }
        >
          {" "}
          <AiFillLinkedin fontSize="7vw" />
        </span>
        <span onClick={() => openNewTab("mailto:erkanisuf@gmail.com")}>
          {" "}
          <SiGmail fontSize="7vw" />
        </span>
        <span onClick={() => openNewTab("resume.pdf")}>
          {" "}
          <AiFillFilePdf fontSize="7vw" />
        </span>
        <span data-tip onClick={() => openNewTab("tel:+358503040519")}>
          {" "}
          <AiOutlineMobile fontSize="7vw" />
        </span>
      </div>
    </motion.div>
  );
};

export default BurgerMenuNav;
