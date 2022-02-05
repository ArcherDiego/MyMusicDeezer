import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}

body {
    margin: 0px;
    background: linear-gradient(180deg, #33322E 20%, #333 100%) no-repeat;
    color: ${({theme}) => theme.colors.font.primary};
    font-family: ${({theme}) => theme.fontFamily.primary};
}

h1, h2, h3, h4, p {
    margin: 0;
}

ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

img {
    display: block;
    max-width: 100%;
}

button, input {
    display: block;
    font-size: ${({theme}) => theme.fontSize.sm};
    font-family: ${({theme}) => theme.fontFamily.primary};
    color: ${({theme}) => theme.colors.background.primary};
}
`;

export default GlobalStyle
