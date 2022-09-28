import { createGlobalStyle } from "styled-components";

const FontsStyle = createGlobalStyle`
    :root {

/* @font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-ExtraLight.woff2') format('woff2');
    font-weight: 200;
    font-style: normal;
} */

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

/* @font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-ExtraBold.woff2') format('woff2');
    font-weight: 800;
    font-style: normal;
} */

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Black.woff2') format('woff2');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-SemiBold.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

/* @font-face {
    font-family: 'Stratos SemiLight';
    src: url('/fonts/Stratos-SemiLight.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
} */
/* 
@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Thin.woff2') format('woff2');
    font-weight: 100;
    font-style: normal;
} */

@font-face {
    font-family: 'Stratos';
    src: url('/fonts/Stratos-Medium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
}
    }
`;

export default FontsStyle;
