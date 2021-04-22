import React from "react";
import ReactTooltip from "react-tooltip";
import HeaderCSS from "../Header/Header.module.css";

const SocialTooltip = () => {
  return (
    <>
      {/* Social Links */}
      <ReactTooltip
        id="gmail"
        place="left"
        type="info"
        backgroundColor="#221e41"
        aria-haspopup="true"
        className={HeaderCSS.popUpThemeGmail}
      >
        <p>erkanisuf @ gmail.com</p>
      </ReactTooltip>
      <ReactTooltip
        id="resume"
        place="left"
        type="info"
        backgroundColor="#221e41"
        aria-haspopup="true"
        className={HeaderCSS.popUpThemeGmail}
      >
        <p>Click to download my CV</p>
      </ReactTooltip>
      <ReactTooltip
        id="github"
        place="left"
        type="info"
        backgroundColor="#221e41"
        aria-haspopup="true"
        className={HeaderCSS.popUpThemeGmail}
      >
        <p> GitHub profile</p>
      </ReactTooltip>
      <ReactTooltip
        id="linkedin"
        place="left"
        type="info"
        backgroundColor="#221e41"
        aria-haspopup="true"
        className={HeaderCSS.popUpThemeGmail}
      >
        <p>Linkedin profile</p>
      </ReactTooltip>
    </>
  );
};

export default SocialTooltip;