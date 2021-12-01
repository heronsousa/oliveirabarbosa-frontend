import styled from "styled-components";

export const BannerBackground = styled.div`
    padding: 100px 0;
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

        h1 {
            font-size: 3rem;
            font-weight: 300;
            line-height: 1.2;
        }
    }
`;
