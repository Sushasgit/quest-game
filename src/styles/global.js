import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after,::before  {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'MontserratLight', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
}

.wrapper {

}
`;

export default GlobalStyle;
