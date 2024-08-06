import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Contact Me!</p>
      <ContactLinks>
        <ContactItem>
          <a
            href="https://www.linkedin.com/in/mohd-tayyab-765128250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem>
          <a
            href="https://github.com/TayyabMohd"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </ContactItem>
        <ContactItem>
          <a href="mailto:mohd12.tayyab@gmail.com">Email</a>
        </ContactItem>
        <ContactItem>
          <a href="tel:+919161302752">Phone</a>
        </ContactItem>
      </ContactLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ContactItem = styled.div`
  margin: 0 15px;

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
      color: #f4f4f4;
    }
  }
`;

export default Footer;
