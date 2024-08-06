import React from "react";
import styled from "styled-components";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../projectsData";

const Projects = () => {
  return (
    <Container id="projects">
      <h2>My Projects</h2>
      <ProjectsWrapper>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 40px;
  text-align: center;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 20px 0;

  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
  }

  -ms-overflow-style: none; /* Hide scrollbar for IE and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
`;

export default Projects;
