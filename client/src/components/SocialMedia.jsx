import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaGithubAlt />
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;
