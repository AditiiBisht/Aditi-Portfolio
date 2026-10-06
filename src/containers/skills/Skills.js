import React, { useEffect, useRef } from "react";
import { skillsSection } from "../../portfolio";
import {
  FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiCplusplus, SiMongodb, SiFirebase, SiSqlite, SiExpress,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import "./Skills.css";

const ICON_MAP = {
  FaJava: FaJava,
  FaPython: FaPython,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  SiCplusplus: SiCplusplus,
  SiMongodb: SiMongodb,
  SiFirebase: SiFirebase,
  SiSqlite: SiSqlite,
  SiExpress: SiExpress,
  IoLogoJavascript: IoLogoJavascript,
};

function useFadeUp(ref) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
}

export default function Skills() {
  const headerRef = useRef(null);
  const pointsRef = useRef(null);
  const chipsRef  = useRef(null);
  useFadeUp(headerRef);
  useFadeUp(pointsRef);
  useFadeUp(chipsRef);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">// what_i_do</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">{skillsSection.subTitle}</p>
        </div>

        <div className="skills-layout">
          {/* What I do points */}
          <div className="skills-points fade-up" ref={pointsRef}>
            <h3 className="skills-sub-title">What I bring to the table</h3>
            <ul className="skills-list">
              {skillsSection.skills.map((s, i) => (
                <li key={i} className="skill-point">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Skill chips */}
          <div className="skills-chips fade-up" ref={chipsRef}>
            {skillsSection.softwareSkills.map((skill) => {
              const Icon = ICON_MAP[skill.icon];
              return (
                <div className="skill-chip" key={skill.skillName}>
                  <div className="skill-icon-wrap">
                    {Icon ? (
                      <Icon style={{ color: skill.color, fontSize: "1.9rem" }} />
                    ) : (
                      <span style={{ fontSize: "1.9rem" }}>💻</span>
                    )}
                  </div>
                  <span className="skill-chip-name">{skill.skillName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
