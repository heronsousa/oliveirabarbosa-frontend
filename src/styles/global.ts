import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --brand-primary: #8e7f4c;
        --brand-secondary: #262626;
        --background-default: #fff;
        --text-primary: #fff;
        --text-secondary: #212121;
        --disable-slider: #666;

        --title: #2e384d;
        --red: #e83f5b;
        --red-light: #fff5f5;
        --green: #4cd62b;
        --green-light: #f7fff5;
        --purple: #5965e0;
        --purple-dark: #4953b8;
        --twitter: #2aa9e0;
        --line: #dcdde0;
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
        font: 400 1rem 'Poppins', sans-serif;
    }

    body {
        background-color: var(--background-default);
        color: var(--text-primary);
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

