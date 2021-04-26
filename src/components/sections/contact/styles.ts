import styled from "styled-components";
import { Form } from '@unform/web';
import { darken } from 'polished';

export const ContactContainer = styled.div`
    padding: 100px 0;
    background: var(--brand-secondary);

    > div {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 1fr;

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

export const ContactForm = styled(Form)`
    grid-column: 2;
    h1, > p { text-align: center; }

    > p {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 12px 0 70px;
        font-weight: 200;

        &::after{
            content: '';
            width: 80px;
            background: var(--background-default);
            height: 4px;
            margin-top: 35px;
            border-radius: 2px;
        }
    }

    > div {
        margin-bottom: 8px;

        div:first-child { margin-right: 8px }
    }

    button {
        width: 100%;
        padding: 16px 0;
        margin-top: 25px;
        color: var(--text-default);
        border-radius: 10px;
        background: var(--brand-primary);
        transition: background .2s ease-out;

        &:hover { background: var(--brand-tertiary); }
    }

    @media(max-width: 992px) {
        grid-column: 1;
        grid-row: 1/2;
        margin-bottom: 70px;
    }
`;
