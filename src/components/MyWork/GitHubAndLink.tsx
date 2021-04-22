import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const GitHubAndLink = () => {
  return (
    <div>
      <AiFillGithub data-tip data-for="githubcode" />
      <AiOutlineLink data-tip data-for="livepreview" />
    </div>
  );
};

export default GitHubAndLink;
