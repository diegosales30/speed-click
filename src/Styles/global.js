import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --primary: #da4d39;
  }

  body {
    
    color: var(--black);
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }
  h1,h2,h3,h4,h5, h5 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
  }

`;
