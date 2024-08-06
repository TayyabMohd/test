import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <ImageContainer>
        <Image src="/images/my-photo.jpg" alt="My Photo" />
      </ImageContainer>
      <Content>
        <h2>About Me</h2>
        <p>
          Hi there! I’m Mohd Tayyab, a passionate Full Stack Developer with a
          keen interest in building innovative and user-centric web
          applications. With a background in Computer Science and a
          specialization in the MERN stack, I have experience in creating
          scalable and efficient solutions that solve real-world problems.
        </p>
        <p>My expertise lies in:</p>
        <ul>
          <li>
            <strong>Frontend Development:</strong> Crafting beautiful and
            responsive user interfaces using React.js, styled-components, and
            modern frontend technologies.
          </li>
          <li>
            <strong>Backend Development:</strong> Designing and implementing
            robust server-side logic with Node.js, Express.js, and MongoDB for
            efficient data management and API development.
          </li>
          <li>
            <strong>Machine Learning:</strong> Applying machine learning
            algorithms to develop intelligent applications that provide
            predictive insights and automate processes.
          </li>
        </ul>
        <p>
          Currently, I am pursuing my Computer Science degree at Vellore
          Institute of Technology, AP. I’m always eager to learn and stay
          updated with the latest trends in technology.
        </p>
        <p>
          Feel free to reach out to me if you’re interested in discussing tech,
          collaborating on projects, or just want to say hello.
        </p>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: stretch;
  padding: 40px;
  margin: 0; /* Remove any margins */
  background: #f4f4f4;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 70%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
`;

const Content = styled.div`
  flex: 2;
  max-width: 800px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }
`;

export default About;
