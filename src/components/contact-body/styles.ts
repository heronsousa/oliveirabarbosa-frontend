import styled from "styled-components";
import { Form } from '@unform/web';
import { lighten } from 'polished';

export const ContactContainer = styled.div`
    padding: 100px 0;
    background: var(--brand-tertiary);

    > div {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;

        h1 {
            font-weight: 300;
        }

        button {
            background: var(--brand-secondary);

            &:hover { background: ${lighten(0.05, '#262626')}; }
        }

        @media(max-width: 992px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    align-items: center;

    iframe { width: calc(100% - 500px); }

    @media(max-width: 768px) {
        display: block;

        div:first-child { margin-bottom: 8px }

        > div, iframe { width: 100%; }
    }
`;

export const Info = styled.div`
    grid-column: 1;

    h2 {
        font-size: 1.5rem;
        font-weight: 300;

        &:not(:first-child) { margin: 20px 0 0; }
    }

    span { font-size: 1.25rem; font-weight: 200 }

    @media(max-width: 992px) {
        grid-row: 2/3;
        text-align: center;
    }
`;

export const PageHeader = styled.div`
    margin: 40px 0 60px;

    h1 {
        font-size: 2rem;
        color: var(--brand-tertiary);
        font-weight: 400;
        margin-bottom: 5px;
    }

    p {
        font-size: 1.125rem;
        color: var(--text-secondary);
        font-weight: 300;
    }
`;

export const Socials = styled.div`
    display: flex;
    margin-top: 30px;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        padding: 10px;
        background: var(--brand-secondary);
        border-radius: 10px;
        cursor: pointer;

        &:not(:last-child) { margin-right: 10px; }

        &:hover { background: ${lighten(0.05, '#262626')}; }

        a { width: 25px; height: 25px; }
    }

    @media(max-width: 992px) {
        justify-content: center;
    }
`;

export const Localization = styled.div`
    padding: 100px 0;

    h1 {
        font-size: 25px;
        color: var(--brand-tertiary);
        margin-bottom: 40px;
    }

    div {
        align-items: flex-end;

        @media(max-width: 992px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    iframe { width: 100%; margin-right: 30px; }

    h2, p { font-size: 18px; }

    h2 {
        color: var(--brand-tertiary);
        font-weight: 400;
        margin-top: 30px;
    }
    p { color: var(--text-secondary); font-weight: 300; }
`;
