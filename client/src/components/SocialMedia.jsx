/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaGithubAlt } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/DivineDemon" target="_blank">
        <FaGithubAlt />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/Mushood.Hanif" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/mushood_7/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
