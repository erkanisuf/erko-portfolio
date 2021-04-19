import React from "react";
import { GrNode } from "react-icons/gr";
import { SiDotNet, SiJest, SiMongodb, SiPostgresql } from "react-icons/si";
import AboutMeCSS from "./AboutMe.module.css";
const MobileSkills = () => {
  return (
    <div className={AboutMeCSS.mobileSkills}>
      {/* BACKEND */}
      <h3>Backend</h3>
      <div>
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
      {/* DATABSE */}
      <h3>Database</h3>
      <div>
        <div>
          <SiPostgresql /> <p>Postgresql</p>
        </div>
        <div>
          <SiMongodb /> <p>Mongo</p>
        </div>
      </div>

      {/* TESTS */}
      <h3>Tests</h3>
      <div>
        <div>
          <SiJest /> <p>Jest</p>
        </div>
      </div>
    </div>
  );
};

export default MobileSkills;
