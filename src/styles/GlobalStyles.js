import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
  
  body {
    background: #fff;
    color: #333;
  }
`;

export default GlobalStyles;
