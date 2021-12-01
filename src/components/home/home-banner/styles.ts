import styled from "styled-components";

export const BannerBackground = styled.div`
    padding: 100px 0 70px;
    background-image: url('/background.webp'), linear-gradient(180deg, #171616 0%, #80808000 100%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 650px;
        text-align: center;

        h1 { font-size: 3rem; font-weight: 400; line-height: 1.2; }
        p {
            font-size: 1.25rem;
            font-weight: 300;
            margin: 20px 0 40px;

            strong { font-weight: bold; }
        }

        a {
            display: flex;
            align-items: center;
            padding: 15px 60px;
            border-radius: 30px;
            background: var(--brand-primary);
            color: var(--text-default);
            font-weight: 300;
            transition: background .2s ease-out;

            &:hover { background: var(--brand-tertiary); }

            > span { margin-right: 10px!important; }
        }
    }
`;
