import React, { useEffect, useRef } from "react";
import { educationInfo } from "../../portfolio";
import "./Education.css";

export default function Education() {
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
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic foundation in Computer Science
          </p>
        </div>

        <div className="edu-timeline fade-up" ref={ref}>
          {educationInfo.map((edu, i) => (
            <div className="edu-card card" key={i}>
              <div className="edu-top">
                <div className="edu-icon">🎓</div>
                <div className="edu-meta">
                  <h3 className="edu-school">{edu.schoolName}</h3>
                  <span className="edu-sub">{edu.subHeader}</span>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              </div>
              <p className="edu-desc">{edu.desc}</p>
              {edu.descBullets && (
                <ul className="edu-bullets">
                  {edu.descBullets.map((b, j) => (
                    <li key={j} className="tag-chip">{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Currently learning strip */}
        <div className="learning-strip fade-up">
          <span className="learning-label">▶ currently learning</span>
          <div className="learning-pills">
            {["Advanced React", "Backend Architecture", "DSA", "Cloud Technologies"].map((item) => (
              <span key={item} className="tag-chip">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
