import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { openNewTab } from "../Header/SocialLinks";

import FooterCSS from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={FooterCSS.container} id="contactme">
      <div className={FooterCSS.buildTogether}>
        <h1>Interested in collaboration ?</h1>
        <h2> Leave me a message and lets grab a coffee!</h2>
      </div>
      <div className={FooterCSS.lightContainer}>
        <div className={FooterCSS.itemsContainer}>
          <div className={FooterCSS.contact}>
            <h3>Contact Me</h3>
            <span onClick={() => openNewTab("tel:+358503040519")}>
              <FaPhoneAlt />
              {"  "}
              +358 50 30 40 519
            </span>
            <span onClick={() => openNewTab("mailto:erkanisuf@gmail.com")}>
              <AiOutlineMail />
              {"  "}erkanisuf@gmail.com
            </span>
            <span>
              <FaHome />
              Helsinki, Finland
            </span>
            <span></span>
          </div>
          <div className={FooterCSS.disableonMobile}>
            <h3>Site map</h3>
            <nav className={FooterCSS.footernav}>
              <ul>
                <li>
                  <a data-testid="footermywork" href="#mywork">
                    {" "}
                    My work
                  </a>
                </li>
                <li>
                  <a data-testid="footermyskills" href="#myskills">
                    My skills
                  </a>
                </li>
                <li>
                  <a data-testid="footeraboutme" href="#aboutme">
                    About Me
                  </a>
                </li>
                <li>
                  <a data-testid="footercontactme" href="#contactme">
                    Contact me
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* / */}
        <div className={FooterCSS.copyright}>
          2021© Erkan Isuf. All rights reserved.
          <br />
          Created with React.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
