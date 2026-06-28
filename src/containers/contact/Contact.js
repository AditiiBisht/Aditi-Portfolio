import React, { useRef, useEffect } from "react";
import { contactInfo, socialMediaLinks } from "../../portfolio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        <div className="contact-inner fade-up" ref={ref}>
          <span className="section-tag">// reach_out</span>
          <h2 className="section-title">{contactInfo.title}</h2>
          <p className="section-subtitle" style={{ maxWidth: "52ch" }}>
            {contactInfo.subtitle}
          </p>

          <a href={`mailto:${contactInfo.email_address}`} className="btn-primary contact-email-btn">
            <FaEnvelope /> Say Hello
          </a>

          <div className="contact-links">
            <a href={socialMediaLinks.github} target="_blank" rel="noreferrer" className="contact-card">
              <FaGithub className="cc-icon" />
              <div>
                <div className="cc-label">GitHub</div>
                <div className="cc-value">@AditiiBisht</div>
              </div>
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer" className="contact-card">
              <FaLinkedin className="cc-icon" />
              <div>
                <div className="cc-label">LinkedIn</div>
                <div className="cc-value">aditi-bisht</div>
              </div>
            </a>
            <a href={`mailto:${contactInfo.email_address}`} className="contact-card">
              <FaEnvelope className="cc-icon" />
              <div>
                <div className="cc-label">Email</div>
                <div className="cc-value">{contactInfo.email_address}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
