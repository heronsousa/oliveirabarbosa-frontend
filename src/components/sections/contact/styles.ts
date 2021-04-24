import styled from "styled-components";
import { Form } from '@unform/web';

export const ContactContainer = styled.div`
    padding: 100px 0;
    background: var(--brand-secondary);

    > div { display: flex; align-items: center }
`;

export const Info = styled.div`
    h2 {
        font-size: 1.5rem;
        font-weight: 300;

        &:not(:first-child) { margin: 20px 0 0; }
    }

    span { font-size: 1.25rem; font-weight: 200 }
`;

export const ContactForm = styled(Form)`
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
`;
