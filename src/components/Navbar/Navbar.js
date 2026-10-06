import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { socialMediaLinks } from "../../portfolio";
import "./Navbar.css";

const navLinks = [
  { label: "About", to: "greeting" },
  { label: "Skills", to: "skills" },
  { label: "Education", to: "education" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <a href="/" className="nav-logo">AB.</a>

        {/* Desktop links */}
        <nav className="nav-links desktop">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-70}
              className="nav-link"
              activeClass="active"
              spy
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="btn-primary nav-cta"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav className="nav-drawer">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              offset={-70}
              className="drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
