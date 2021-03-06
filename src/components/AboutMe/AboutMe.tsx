import React from "react";
import AboutMeCSS from "./AboutMe.module.css";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiDotNet,
  SiPostgresql,
  SiMongodb,
  SiJest,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { GrNode } from "react-icons/gr";
import MobileSkills from "./MobileSkills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myprofile from "../../staticImages/myprofile.jpg";

import Title from "../Title/Title";
const AboutMe = () => {
  const { ref, inView } = useInView({ initialInView: true, delay: 500 }); // checks if social media bar is in view or not

  //About me text of <p> Animation
  const pAnime = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  return (
    <div id="aboutme" ref={ref} className={AboutMeCSS.containerAboutMe}>
      <div className={AboutMeCSS.upperpanel}>
        <Title smalltext="About" bigtext="Me" alignItems="flex-start" />
        <div>
          <motion.div
            whileHover={{ backgroundColor: "#6e00ff" }}
            transition={{ duration: 1 }}
            className={AboutMeCSS.imgDiv}
          >
            <motion.img
              whileHover={{ y: -15, x: 15, scale: 1.3 }}
              transition={{ duration: 0.5 }}
              src={myprofile}
              alt="erkanisuf"
            />
          </motion.div>

          <motion.p
            id="textaboutme"
            whileHover={{ scale: 1.09 }}
            initial={pAnime.inactive}
            variants={pAnime}
            animate={inView ? "active" : "inactive"}
            transition={{ duration: 0.5 }}
          >
            <img src={myprofile} className={AboutMeCSS.mobileImg} alt="erkanisuf" />I am
            Erko and I am a passionate front-end developer. I love to use new
            technologies to build amazing products and solve different issues
            with the help of tech. I enjoy mostly the front end, however I also
            got experience with back-end technologies. Would love to hear from
            you job opportunities or collab projects.
          </motion.p>
        </div>
      </div>

      <div id="myskills" className={AboutMeCSS.bottompanel}>
        <Title smalltext="Technical" bigtext="Skills" alignItems="flex-start" />

        <h3>Frontend</h3>
        <div className={AboutMeCSS.frontEnd}>
          <div>
            <FaReact /> <p>React</p>
          </div>
          <div>
            <SiTypescript /> <p>Typescript</p>
          </div>
          <div>
            <AiFillHtml5 />
            <p> HTML</p>
          </div>
          <div>
            <ImCss3 />
            <p> CSS</p>
          </div>
        </div>
        <MobileSkills />
        <div className={AboutMeCSS.skills}>
          <div>
            <h3>Backend</h3>
            <div>
              <GrNode /> <p>NodeJS</p>
            </div>
            <div>
              <SiDotNet
                style={{
                  backgroundColor: "#665f82",
                  color: "white",
                  padding: "0px 5px",
                }}
              />{" "}
              <p>.NetCore</p>
            </div>
          </div>
          <div>
            <h3>Database</h3>
            <div>
              <SiPostgresql /> <p>Postgresql</p>
            </div>
            <div>
              <SiMongodb /> <p>Mongo</p>
            </div>
          </div>
          <div>
            <h3>Tests</h3>
            <div>
              <SiJest /> <p>Jest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
