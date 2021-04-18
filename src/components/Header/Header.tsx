import React from "react";
import HeaderSVG from "../SVG/HeaderSVG";
import HeaderCSS from "./Header.module.css";
import { AiFillFilePdf, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
const Header = () => {
  return (
    <div className={HeaderCSS.mainContainer}>
      <div className={HeaderCSS.leftWrapper}>
        <header>
          <div>Logo</div>
          <nav>
            <ul>
              <li>My work</li>
              <li>My skills</li>
              <li>Contact me</li>
            </ul>
          </nav>
        </header>
        <div className={HeaderCSS.lightWrapper}>
          <div>
            <h1>Erkan Isuf</h1>
            <h2>Front end developer</h2>
            <button>LET`S TALK!</button>
          </div>
        </div>
      </div>
      <div className={HeaderCSS.rightWrapper}>
        <div>
          <div>
            <span>
              <AiFillGithub fontSize="18px" />
            </span>
            <span>
              {" "}
              <AiFillLinkedin fontSize="18px" />
            </span>
            <span>
              {" "}
              <SiGmail fontSize="18px" />
            </span>
            <span>
              {" "}
              <AiFillFilePdf fontSize="18px" />
            </span>
          </div>
        </div>
        <HeaderSVG />
      </div>
    </div>
  );
};

export default Header;
