import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { openNewTab } from "../Header/SocialLinks";

interface IGitHubAndLink {
  github: string;
  livepreview: string;
}
const GitHubAndLink: React.FC<IGitHubAndLink> = ({ github, livepreview }) => {
  return (
    <div>
      <AiFillGithub
        data-tip
        data-for="githubcode"
        onClick={() => openNewTab(github)}
      />
      <AiOutlineLink
        data-tip
        data-for="livepreview"
        onClick={() => openNewTab(livepreview)}
      />
    </div>
  );
};

export default GitHubAndLink;
