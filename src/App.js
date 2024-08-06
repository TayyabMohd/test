import React, { useState } from "react";
import styled from "styled-components";
import { Element, scroller } from "react-scroll";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";

const App = () => {
  const [visibleSection, setVisibleSection] = useState("home");

  const scrollToSection = (section) => {
    setVisibleSection(section);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Header onNavClick={scrollToSection} />
      <Main>
        <Element name="home">
          <Home />
        </Element>
        {visibleSection === "about" && (
          <Element name="about">
            <About />
          </Element>
        )}
        {visibleSection === "skills" && (
          <Element name="skills">
            <Skills />
          </Element>
        )}
        {visibleSection === "projects" && (
          <Element name="projects">
            <Projects />
          </Element>
        )}
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  padding-top: 60px; /* Adjust based on header height */
`;

export default App;
