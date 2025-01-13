import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  h1, h2 {
    color: #333;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    margin-bottom: 20px;
  }

  section {
    padding: 40px;
    text-align: center;
  }

  .header {
    padding: 40px;
    background-color: #222;
    color: white;
  }
`;

export default GlobalStyles;
