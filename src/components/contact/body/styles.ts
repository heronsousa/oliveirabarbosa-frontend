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
    h1 { font-size: 25px; }
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
        background-color: var(--brand-secondary);
        transition: background-color .2s ease-out;

        &:hover { background: ${lighten(0.1, '#212121')}; }
    }

    @media(max-width: 992px) {
        grid-column: 1;
        grid-row: 1/2;
        margin-bottom: 70px;
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

export const Topics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    @media(max-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
    @media(max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Topic = styled.div`
    display: flex;
    align-items: center;
    width: auto;
    border: 1px solid var(--border);
    padding: 20px 30px;
    border-radius: 6px;

    h3 {
        width: auto;
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--text-secondary);
        margin-left: 10px;
    }
`;

export const ContactButton = styled.a`
    display: block;
    width: 250px;
    padding: 15px;
    margin: 70px 0 90px;
    border-radius: 30px;
    background: var(--brand-primary);
    color: var(--text-default);
    text-align: center;
    font-weight: 300;
    font-size: 1.20rem;
    transition: all .2s ease-out;

    &:hover { background: var(--brand-tertiary); }
`;

export const Center = styled.div`
    display: flex;
    justify-content: center;
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

    h2, p {
        font-size: 18px;
        color: var(--brand-tertiary);
    }

    h2 { font-weight: 400; margin-top: 30px; }
    p { font-weight: 300; }
`;
