import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section>
      <footer>
        <div className="contact-me">
          <a href="https://www.linkedin.com/in/christiandehek/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/WhatDehek18">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </a>
          <a href="https://github.com/cdehek/">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
