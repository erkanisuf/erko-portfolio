import React from "react";
import { myProjects } from "../../MyProjects";
import Cards from "./Cards";
import MyWorkCSS from "./MyWork.module.css";
const MyWork = () => {
  const items = myProjects;
  console.log(items);
  return (
    <div className={MyWorkCSS.mainContainer}>
      <div className={MyWorkCSS.container}>
        {items.map((el, index) => {
          return (
            <Cards
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
