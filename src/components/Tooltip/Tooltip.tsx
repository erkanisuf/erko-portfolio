import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = () => {
  return (
    <>
      {/*GitHubAndLink */}
      <ReactTooltip
        id="livepreview"
        place="top"
        type="info"
        backgroundColor="#fdfdfd"
        textColor="#221e41"
        aria-haspopup="true"
      >
        <p>Live preview</p>
      </ReactTooltip>
      <ReactTooltip
        id="githubcode"
        place="top"
        type="info"
        backgroundColor="#fdfdfd"
        textColor="#221e41"
        aria-haspopup="true"
      >
        <p>Project info and code</p>
      </ReactTooltip>
      {/* SelectDevice */}
      <ReactTooltip
        id="desktop"
        place="bottom"
        type="info"
        backgroundColor="#fdfdfd"
        textColor="#221e41"
        aria-haspopup="true"
      >
        <p>View on desktop</p>
      </ReactTooltip>
      <ReactTooltip
        id="mobile"
        place="bottom"
        type="info"
        backgroundColor="#fdfdfd"
        textColor="#221e41"
        aria-haspopup="true"
      >
        <p>View on Mobile</p>
      </ReactTooltip>
      <ReactTooltip
        id="tablet"
        place="bottom"
        type="info"
        backgroundColor="#fdfdfd"
        textColor="#221e41"
        aria-haspopup="true"
      >
        <p>View on Tablet</p>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
