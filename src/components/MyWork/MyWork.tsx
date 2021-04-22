import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import { myProjects } from "../../MyProjects";
import Cards from "./Cards";
import MyWorkCSS from "./MyWork.module.css";
const MyWork = () => {
  const items = myProjects;
  const { ref, inView } = useInView({ initialInView: true, delay: 500 }); // viewport to trigger animation
  const variants = {
    active: {
      scale: 1,
      transition: { duration: 1 },
    },
    inactive: {
      scale: 0,
    },
  };
  return (
    <div className={MyWorkCSS.mainContainer} id="mywork">
      <motion.div
        initial={variants.inactive}
        variants={variants}
        animate={inView ? "active" : "inactive"}
        ref={ref}
        className={MyWorkCSS.mainTitle}
      >
        <h2>My</h2>
        <h2>Work</h2>
      </motion.div>

      <div className={MyWorkCSS.container}>
        {items.map((el, index) => {
          return (
            <Cards
              tabletImage={el.tabletImage}
              mobileImage={el.mobileImage}
              stack={el.stack}
              description={el.description}
              oddOrEven={index}
              image={el.image}
              title={el.title}
              key={index}
              backgroundColor={el.backgroundColor}
              backgroundImage={el.backgroundImage}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
