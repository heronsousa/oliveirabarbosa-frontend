import styled from "styled-components";
import { Form } from '@unform/web';
import { lighten } from 'polished';

export const AboutContainer = styled.div`
    padding: 100px 0;
    background: var(--text-secondary);
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

export const Person = styled.div`
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
    background: var(--brand-tertiary);

    &:not(:last-child) { margin-bottom: 40px; }

    > div { width: 280px!important }

    img { border-radius: 10px 0 0 10px; }

    @media(max-width: 992px) {
        display: block;

        > div { width: 100%!important }

        img { border-radius: 10px 10px 0 0; }
    }
`

export const PersonDescription = styled.div`
    padding: 35px 30px;
    flex: 1;
    text-align: left;

    h2 { font-size: 1.25rem; font-weight: 300; }

    p { font-weight: 200; margin-top: 10px; }
`
