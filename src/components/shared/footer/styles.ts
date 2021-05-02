import styled from "styled-components";
import { lighten } from 'polished';

export const FooterBackground = styled.div`
    padding: 50px 0;
    background: var(--brand-secondary);

    > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        > div:first-child { max-width: 330px!important; height: 100px; grid-column: 1/5; }

        @media(max-width: 992px) {
            grid-template-columns: 1fr 1fr;

            div:nth-child(2), div:nth-child(3) { grid-column: 1/2 }
            div:nth-child(4), div:nth-child(5) { grid-column: 2/3; }
            div:nth-child(4) { grid-row: 2 }
        }

        @media(max-width: 420px) {
            grid-template-columns: 1fr;

            div:nth-child(n+1) { grid-column: 1 }
        }
    }
`;


export const FooterColumn = styled.div`
    h2 { font-size: 1rem; margin: 30px 0 15px}

    span, li {
        display: block;
        font-size: 0.875rem;

        &:not(:last-child) { margin-bottom: 10px; }
    }

    a:hover { color: ${lighten(0.2, '#5E502E')}; }
`;

export const FooterSocials = styled.ul`
    display: flex;
    margin-top: 30px;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 10px;
        background: var(--brand-primary);
        border-radius: 10px;
        cursor: pointer;

        &:not(:last-child) { margin-right: 10px; }

        a { width: 25px; height: 25px; }
    }
`;

export const FooterCredits = styled.div`
    background: var(--brand-tertiary);
    font-size: 0.875rem;
    padding: 25px 0;

    span:first-child { margin-right: 40px; }

    a { margin-left: 3px; }

    @media(max-width: 992px) {
        span { display: block; &:last-child { margin-top: 10px; } }
    }
`;
