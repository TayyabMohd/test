import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Image src={project.image} alt={project.title} />
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        View Project
      </Link>
    </Card>
  );
};

const Card = styled.div`
  display: inline-block;
  width: 300px; /* Adjust as needed */
  margin-right: 20px; /* Space between cards */
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* Adjust as needed */
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 1.5em;
  margin: 10px;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 10px;
`;

const Link = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

export default ProjectCard;
