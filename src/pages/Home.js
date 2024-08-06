import React from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <Container id="home">
      <Hero>
        <h1>Welcome to My Portfolio</h1>
        <p>This is my personal portfolio website</p>
      </Hero>
      <About />
      <Skills />
      <Projects />
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

const Hero = styled.div`
  padding: 40px;
  background: #f4f4f4;
  margin-bottom: 40px;
`;

export default Home;
