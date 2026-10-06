import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { socialMediaLinks } from "../../portfolio";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">AB.</div>
        <p className="footer-copy">
          Designed & built with 💜 by <span>Aditi Bisht</span>
        </p>
        <div className="footer-icons">
          <a href={socialMediaLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
