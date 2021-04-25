import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import {
  AiFillFilePdf,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMobile,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import SocialTooltip from "../Tooltip/SocialTooltip";
import HeaderCSS from "./Header.module.css";

interface ISocialLinks {
  inView: boolean;
  entry: any;
}
const SocialLinks: React.FC<ISocialLinks> = ({ inView, entry }) => {
  const controls = useAnimation(); //framer motion
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

  return (
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
        <span
          data-tip
          data-for="github"
          onClick={() => window.open("https://github.com/erkanisuf", "_blank")}
        >
          <AiFillGithub fontSize="18px" />
        </span>
        <span
          data-tip
          data-for="linkedin"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/erkan-isuf-a25b21202/",
              "_blank"
            )
          }
        >
          {" "}
          <AiFillLinkedin fontSize="18px" />
        </span>

        <span
          data-tip
          data-for="gmail"
          onClick={() => (window.location.href = "mailto:erkanisuf@gmail.com")}
        >
          <SiGmail fontSize="18px" />
        </span>

        <span
          data-tip
          data-for="resume"
          onClick={() => window.open("resume.pdf", "_blank")}
        >
          {" "}
          <AiFillFilePdf fontSize="18px" />
        </span>
        <span
          data-tip
          data-for="myphone"
          onClick={() => (window.location.href = "tel:+358503040519")}
        >
          {" "}
          <AiOutlineMobile fontSize="18px" />
        </span>
      </motion.div>
      <SocialTooltip />
    </div>
  );
};

export default SocialLinks;
