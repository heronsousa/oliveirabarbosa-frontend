import styled from 'styled-components';

export const BreadcrumbContainer = styled.div`
    margin-top: 50px;
`;

export const BreadcrumbLink = styled.a`
    font-size: 0.8125rem;
    font-weight: 500;
    color: var(--text-secondary);
    cursor: pointer;

    &:not(:last-child)::after {
        content: '/';
        margin: 0 5px;
        color: var(--text-secondary);
    }

    &:last-child {
        color: var(--brand-tertiary);
    }

    &:hover {
        color: var(--brand-primary);
    }
`;
