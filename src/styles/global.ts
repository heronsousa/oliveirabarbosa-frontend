import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --brand-primary: #B9A05C;
        --brand-secondary: #262626;
        --background-default: #f2f3f5;
        --white: #ffffff;
        --text-default: #fff;
        --text-secondary: #b2b9ff;
        --title: #2e384d;
        --red: #e83f5b;
        --red-light: #fff5f5;
        --green: #4cd62b;
        --green-light: #f7fff5;
        --purple: #5965e0;
        --purple-dark: #4953b8;
        --twitter: #2aa9e0;
        --line: #dcdde0;
        --side-icon: #c4c4c4;
    }

    @media (max-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }

    @media (max-width: 720px) {
        html {
            font-size: 87.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body,
    input,
    textarea,
    button {
        font: 400 1rem 'Inter', sans-serif;
    }

    body {
        background-color: var(--brand-secondary);
        color: var(--text-default);
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style-type: none;
    }
`;

