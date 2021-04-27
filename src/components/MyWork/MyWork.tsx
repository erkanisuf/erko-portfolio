import React from "react";

import { myProjects } from "../../MyProjects";
import { openNewTab } from "../Header/SocialLinks";
import Title from "../Title/Title";
import Cards from "./Cards";
import MyWorkCSS from "./MyWork.module.css";
const MyWork = () => {
  const items = myProjects; // my custom object of my projects , this way not needed to use CMS

  return (
    <div className={MyWorkCSS.mainContainer} id="mywork">
      <Title smalltext="My" bigtext="Work" alignItems="flex-start" />

      <div className={MyWorkCSS.container}>
        {items.map((el, index) => {
          return <Cards {...el} oddOrEven={index} key={index} />;
        })}
      </div>
      <h4 onClick={() => openNewTab("https://github.com/erkanisuf/")}>
        More can be found in my github
      </h4>
    </div>
  );
};

export default MyWork;
