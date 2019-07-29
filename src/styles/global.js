import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,::after,::before  {
    box-sizing: border-box;
}

@font-face {
    font-family: 'MontserratBold';
    src: url('/fonts/MontserratBold.woff2') format('woff2'),
         url('/fonts/MontserratBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'MontserratLight';
    src: url('/fonts/MontserratLight.woff2') format('woff2'),
         url('/fonts/MontserratLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "FiraSans-Light";
    src: url("/fonts/FiraSans-Light.woff") format("woff"),
         url("/fonts/FiraSans-Light.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: "FiraSans-Bold";
    src: url("/fonts/FiraSans-Bold.woff") format("woff"),
         url("/fonts/FiraSans-Bold.woff2") format("woff2"); 
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body {
    font-family: 'MontserratLight', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
    background-color: ${props => props.theme.dark.colorShadow};
}
`;

export default GlobalStyle;
