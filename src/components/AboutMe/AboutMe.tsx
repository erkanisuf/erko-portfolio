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
const AboutMe = () => {
  const { ref, inView } = useInView({ initialInView: true, delay: 500 }); // checks if social media bar is in view or not
  const variants = {
    active: {
      scale: 1,
      transition: { duration: 1 },
    },
    inactive: {
      scale: 0,
    },
  };
  const pAnime = {
    active: { opacity: 1 },
    inactive: { opacity: 0 },
  };
  return (
    <div ref={ref} className={AboutMeCSS.containerAboutMe}>
      <div className={AboutMeCSS.upperpanel}>
        <motion.div
          initial={variants.inactive}
          variants={variants}
          animate={inView ? "active" : "inactive"}
        >
          <h2>About</h2>
          <h2>ME</h2>
        </motion.div>
        <div>
          <motion.div whileHover={{ scale: 1.2 }} className={AboutMeCSS.imgDiv}>
            <img
              src="https://images0.westend61.de/0000929638pw/portrait-of-confident-young-businessman-DIGF04093.jpg"
              alt=""
            />
          </motion.div>
          <motion.p
            whileHover={{ scale: 1.2 }}
            initial={pAnime.inactive}
            variants={pAnime}
            animate={inView ? "active" : "inactive"}
            transition={{ duration: 1 }}
          >
            I am Erko and I am a passionate front-end developer. I love to use
            new technologies to build amazing products and solve different
            issues with the help of tech. I enjoy mostly the front end, however
            I also got experience with back-end technologies. Would love hear
            from you job opportunities, projects or a volunteer work. Lets
            create amazing products together!
          </motion.p>
        </div>
      </div>
      <div className={AboutMeCSS.bottompanel}>
        <motion.div
          initial={variants.inactive}
          variants={variants}
          animate={inView ? "active" : "inactive"}
          className={AboutMeCSS.skillsText}
        >
          <h2>Technical</h2>
          <h2>SKILLS</h2>
        </motion.div>
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
