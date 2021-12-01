import { lighten } from "polished";
import styled, { css } from "styled-components";

export type HeaderProps = {
    isOnTopOfThePage: boolean;
}

export const HeaderBackground = styled.div`
    display: block;
    position: fixed;
    width: 100%;
    margin-bottom: 100px;
    z-index: 10;
    border-bottom: 1px solid var(--background-default);

    @media(max-width: 992px) {
        display: none;
    }
`;

export const TopHeader = styled.div<HeaderProps>`
    background: var(--brand-secondary);
    padding: 8px 0;
    border-bottom: 10px solid var(--brand-tertiary);
    opacity: 1;
    visibility: visible;
    height: 2.75rem;
    transition: all 0.2s ease;

    ${(props) =>
        !props.isOnTopOfThePage &&
        css`
            height: 0;
            border-width: 0;
            opacity: 0;
            visibility: hidden;
            padding: 0;
        `};

    > div {
        display: flex;
        align-items: center;

        span { margin-left: 8px; font-size: 0.75rem; }
    }
`;

export const BottomHeader = styled.div<HeaderProps>`
    background: var(--brand-secondary);
    padding: 10px 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
            cursor: pointer;
            width: 350px!important;
            height: 110px!important;
            transition: all 0.2s ease;

            ${(props) =>
                !props.isOnTopOfThePage &&
                css`
                    height: 50px!important;
                    width: 180px!important;
                `};
        }
    }
`;

export const Links = styled.ul`
    display: flex;
    align-items: center;

    > li {
        a {
            &:hover { color: ${lighten(0.2, '#5E502E')}; }
        }

        &:not(:last-child) { margin-right: 40px; }
    }
`;

export const HeaderSpace = styled.div`
    display: block;
    height: 141px;

    @media(max-width: 992px) {
        display: none;
    }
`;
