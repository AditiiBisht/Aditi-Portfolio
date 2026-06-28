import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Greeting from "./containers/greeting/Greeting";
import Skills from "./containers/skills/Skills";
import Education from "./containers/education/Education";
import Certifications from "./containers/certifications/Certifications";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import Footer from "./components/Footer/Footer";
import ParticleCanvas from "./components/ParticleCanvas/ParticleCanvas";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ParticleCanvas />
        <Navbar />
        <Greeting />
        <Skills />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
