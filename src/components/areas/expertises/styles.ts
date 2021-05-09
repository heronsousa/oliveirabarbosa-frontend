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

export const Areas = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 100px;
`;

export const Area = styled.button`
    max-width: 48%;
    padding: 40px 60px;
    text-align: left;

    img { height: 85px }

    h2 {
        color: var(--text-secondary);
        font-size: 1.75rem;
        font-weight: 400;
        margin: 10px 0 5px;
    }

    p {
        color: var(--text-secondary);
        font-size: 1.25rem;
        font-weight: 300;
    }

    &:hover {
        background: var(--brand-primary);
        border-radius: 20px;

        h2, p { color: var(--text-primary); }
    }
`;