import React from "react";

import { myProjects } from "../../MyProjects";
import Title from "../Title/Title";
import Cards from "./Cards";
import MyWorkCSS from "./MyWork.module.css";
const MyWork = () => {
  const items = myProjects;

  return (
    <div className={MyWorkCSS.mainContainer} id="mywork">
      <Title smalltext="My" bigtext="Work" alignItems="flex-start" />

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
