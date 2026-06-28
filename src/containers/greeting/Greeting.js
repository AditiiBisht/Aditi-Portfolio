import React, { useEffect, useRef, useState } from "react";
import { greeting, socialMediaLinks } from "../../portfolio";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Greeting.css";

const TERMINAL_LINES = [
  { text: "// aditi.config.js", cls: "t-comment" },
  { text: "", cls: "" },
  { text: "const developer = {", cls: "t-bracket" },
  { text: '  name: "Aditi Bisht",', cls: "t-key t-str" },
  { text: '  role: "Full-Stack Developer",', cls: "t-key t-str" },
  { text: '  focus: "AI & Web Apps",', cls: "t-key t-str" },
  { text: "  stack: [", cls: "t-key" },
  { text: '    "React", "Node", "Python",', cls: "t-str" },
  { text: '    "MongoDB", "Firebase"', cls: "t-str" },
  { text: "  ],", cls: "t-bracket" },
  { text: "  openToWork: true", cls: "t-key t-num" },
  { text: "};", cls: "t-bracket" },
];

function Terminal() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    let i = 0;
    const tick = () => {
      if (i < TERMINAL_LINES.length) {
        const idx = i;
        setLines((prev) => [...prev, TERMINAL_LINES[idx]]);
        i++;
        setTimeout(tick, idx < 2 ? 200 : 110);
      }
    };
    const t = setTimeout(tick, 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="terminal-card">
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">aditi@portfolio ~</span>
      </div>
      <div className="terminal-body">
        {lines.map((l, i) => (
          <div key={i} className={`t-line ${l.cls}`}>
            {l.text || "\u00A0"}
          </div>
        ))}
        <span className="t-cursor" />
      </div>
    </div>
  );
}

export default function Greeting() {
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
    <section id="greeting" className="greeting-section">
      <div className="container">
        <div className="greeting-grid fade-up" ref={ref}>
          {/* Left */}
          <div className="greeting-left">
            <span className="hero-eyebrow">✦ Available for opportunities</span>
            <h1 className="hero-name">
              {greeting.title}
              <br />
              <span className="gradient-text">Full-Stack Developer</span>
            </h1>
            <p className="hero-sub">{greeting.subTitle}</p>

            <div className="hero-cta">
              {greeting.resumeLink && greeting.resumeLink !== "#" && (
                <a
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Download Resume
                </a>
              )}
              <a href={`mailto:${socialMediaLinks.gmail}`} className="btn-outline">
                Get In Touch
              </a>
            </div>

            <div className="social-row">
              <a href={socialMediaLinks.github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={socialMediaLinks.linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={`mailto:${socialMediaLinks.gmail}`} className="social-icon" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right — Terminal */}
          <div className="greeting-right">
            <Terminal />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <div className="scroll-dot" />
        </div>
      </div>
    </section>
  );
}
