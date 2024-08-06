import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Section id="skills">
      <h2>My Skills</h2>
      <SkillGrid>
        <Skill>
          <SkillImage src="/images/javascript.png" alt="JavaScript" />
        </Skill>
        <Skill>
          <SkillImage src="/images/react.png" alt="React" />
        </Skill>
        <Skill>
          <SkillImage src="/images/node.png" alt="Node.js" />
        </Skill>
        <Skill>
          <SkillImage src="/images/java.png" alt="Java" />
        </Skill>
        <Skill>
          <SkillImage src="/images/mongodb.png" alt="MongoDB" />
        </Skill>
        <Skill>
          <SkillImage src="/images/python.png" alt="Python" />
        </Skill>
        <Skill>
          <SkillImage src="/images/mysql.png" alt="MySQL" />
        </Skill>
        <Skill>
          <SkillImage src="/images/css.png" alt="CSS" />
        </Skill>
      </SkillGrid>
    </Section>
  );
};

const Section = styled.section`
  padding: 40px;
  margin: 0; /* Remove any margins */
  background: #fff;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 10px;
`;

export default Skills;
