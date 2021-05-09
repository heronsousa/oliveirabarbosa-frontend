import styled from "styled-components";

export const Expertises = styled.div`
    margin: 70px 0;
`;

export const Title = styled.h1`
    color: var(--brand-primary);
    text-align: center;
`;

export const Description = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        color: var(--text-secondary);
        text-align: center;
        max-width: 400px;
        margin: 15px 0;
    }

    &::after{
        content: '';
        width: 80px;
        background: var(--brand-primary);
        height: 4px;
        border-radius: 2px;
    }
`;

export const Areas = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 60px;
`;

export const Area = styled.div`
    max-width: 277px;
    padding: 40px 20px;
    cursor: pointer;

    img { height: 70px }

    h2 {
        color: var(--text-secondary);
        font-size: 1.125rem;
        font-weight: 500;
        margin: 10px 0 5px;
    }

    p {
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    &:hover {
        background: var(--brand-primary);
        border-radius: 20px;

        h2, p { color: var(--text-primary); }
    }
`;
