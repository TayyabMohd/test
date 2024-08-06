import React from "react";
import styled from "styled-components";

const Header = ({ onNavClick }) => {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem onClick={() => onNavClick("home")}>Home</NavItem>
        <NavItem onClick={() => onNavClick("about")}>About</NavItem>
        <NavItem onClick={() => onNavClick("skills")}>Skills</NavItem>
        <NavItem onClick={() => onNavClick("projects")}>Projects</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background: #333;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavItem = styled.div`
  margin: 0 15px;
  cursor: pointer;

  &:hover {
    color: #f4f4f4;
  }
`;

export default Header;
