const { createGlobalStyle } = require("styled-components");

const GlobalStyle = createGlobalStyle`
* {
  margin: 0rem;
  padding: 0rem;
  box-sizing: border-box;
  scroll-behavior: smooth;
  outline: none;
}
html,
body {
  height: 100%;
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}
:focus {
  outline: 0.3rem solid #007bff;
}
`;

export default GlobalStyle;
