import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    min-height: 100%;
    color: ${(props) => props.theme.palette.black};
    font-family: ${(props) => props.theme.fonts.primary};
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    text-decoration: none;
  }

  button {
    border: 0;
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyle;
