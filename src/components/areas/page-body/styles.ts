import styled from "styled-components";

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
