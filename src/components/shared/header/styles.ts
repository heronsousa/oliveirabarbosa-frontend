import { lighten } from "polished";
import styled from "styled-components";

export const HeaderBackground = styled.div`
    position: fixed;
    width: 100%;
    margin-bottom: 100px;
    z-index: 10;
    border-bottom: 1px solid var(--background-default);
`;

export const TopHeader = styled.div`
    background: var(--brand-secondary);
    padding: 8px 0;
    border-bottom: 10px solid var(--brand-tertiary);

    > div {
        display: flex;
        align-items: center;

        span { margin-left: 8px; font-size: 0.75rem; }
    }
`;

export const BottomHeader = styled.div`
    background: var(--brand-secondary);
    padding: 10px 0;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
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
    height: 141px;
`;
