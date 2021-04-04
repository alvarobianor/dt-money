import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  :root {
    --background: rgba(240,242,245,1.0);

    --red: rgba(229,46,77,1.0);

    --blue: rgba(84,41,204,1.0);
    --blue-light: rgba(105,51,255,1.0);

    --text-title: rgba(54,63,95,1.0);
    --text-body: rgba(150,156,179,1.0);

    --shape: rgba(255,255,255,1.0);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 92.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }

  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
