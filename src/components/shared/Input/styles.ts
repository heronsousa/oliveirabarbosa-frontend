import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: var(--background-default);
    border-radius: 10px;
    padding: 16px;
    width: 100%;

    border: 2px solid var(--background-default);
    color: var(--default);

    display: flex;
    align-items: center;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
        `};

    ${(props) =>
        props.isFocused &&
        css`
            color: var(--gold);
            border-color: var(--gold);
        `};

    ${(props) =>
        props.isFilled &&
        css`
            color: var(--brand-primary);
        `};

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: var(--text-secondary);

        &::placeholder {
            color: var(--default);
        }
    }
`;

export const Error = styled(Tooltip)`
    height: 20px;
    margin-left: 16px;

    svg {
        margin: 0;
    }

    span {
        background: #c53030;
        color: #fff;

        &::before {
            border-color: #c53030 transparent;
        }
    }
`;
