import React from "react";
import ReactTooltip from "react-tooltip";
import HeaderCSS from "../Header/Header.module.css";

const SocialTooltip = () => {
  //This one is for the tooltip on hover for the social links bar
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
      <ReactTooltip
        id="myphone"
        place="left"
        type="info"
        backgroundColor="#221e41"
        aria-haspopup="true"
        className={HeaderCSS.popUpThemeGmail}
      >
        <p style={{ fontSize: "12px", paddingTop: "15px" }}>+358503040519</p>
      </ReactTooltip>
    </>
  );
};

export default SocialTooltip;
