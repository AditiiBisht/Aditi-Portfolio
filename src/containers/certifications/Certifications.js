import React from "react";
import "./Certifications.css";
import { achievementSection } from "../../portfolio";

function Certifications() {
  if (!achievementSection.display) return null;

  return (
    <section className="certifications-section" id="certifications">
      <h1>{achievementSection.title}</h1>
      <p>{achievementSection.subtitle}</p>

      <div className="certifications-grid">
        {achievementSection.achievementsCards.map((cert, index) => (
          <div className="cert-card" key={index}>
<img
  src={`${process.env.PUBLIC_URL}/img/${cert.image}`}
  alt={cert.imageAlt}
  className="cert-logo"
/>

            <h3>{cert.title}</h3>
            <p>{cert.subtitle}</p>

            <a
              href={cert.footerLink[0].url}
              target="_blank"
              rel="noreferrer"
            >
              View Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;