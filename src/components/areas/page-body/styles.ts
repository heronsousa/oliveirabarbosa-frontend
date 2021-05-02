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
        color: var(--sub-title);
        font-weight: 300;
    }
`;

export const Topics = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 100px;

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
        white-space: nowrap;
    }
`;
