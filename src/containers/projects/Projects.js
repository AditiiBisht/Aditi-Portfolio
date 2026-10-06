import React, { useEffect, useRef } from "react";
import { bigProjects } from "../../portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function ProjectCard({ project, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      className="project-card card fade-up"
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-top">
        <span className="project-emoji">{project.emoji}</span>
        <div className="project-link-icons">
          {project.footerLink.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="project-icon-link"
              aria-label={link.name}
            >
              {link.name.toLowerCase().includes("github") ? (
                <FaGithub />
              ) : (
                <FaExternalLinkAlt />
              )}
            </a>
          ))}
        </div>
      </div>

      <h3 className="project-title">{project.projectName}</h3>
      <p className="project-desc">{project.projectDesc}</p>

      <div className="project-tags">
        {project.tags.map((t) => (
          <span key={t} className="tag-chip">{t}</span>
        ))}
      </div>

      <div className="project-footer">
        {project.footerLink.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="project-footer-link"
          >
            {link.name} →
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && e.target.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        <div className="section-header fade-up" ref={headerRef}>
          <span className="section-tag">// featured_work</span>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle">
            A selection of projects that reflect my skills in full-stack development and AI
          </p>
        </div>

        <div className="projects-grid">
          {bigProjects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 80} />
          ))}
        </div>

        <div className="projects-footer fade-up">
          <a
            href="https://github.com/AditiiBisht"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaGithub /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
