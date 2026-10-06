import React from "react";
import "./WorkExperience.css";
import { workExperiences } from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }

  return (
    <section className="work-experience" id="experience">
      <div className="work-experience-container">
        <div className="section-heading">
          <span>// EXPERIENCE</span>
          <h1>Work Experience</h1>
          <p>My professional experience and hands-on development work.</p>
        </div>

        {workExperiences.experience.map((experience, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-header">
              <div>
                <h2>{experience.role}</h2>
                <h3>{experience.company}</h3>
              </div>

              <span className="experience-date">
                {experience.date}
              </span>
            </div>

            {experience.desc && (
              <p className="experience-description">
                {experience.desc}
              </p>
            )}

            {experience.descBullets &&
              experience.descBullets.length > 0 && (
                <ul className="experience-bullets">
                  {experience.descBullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </div>
    </section>
  );
}