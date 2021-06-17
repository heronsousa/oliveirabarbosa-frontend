import styled, { css } from "styled-components";

interface SidebarProps {
    isSidebarOpen: boolean;
}

export const HeaderBackground = styled.div`
    display: block;
    position: fixed;
    width: 100%;
    margin-bottom: 100px;
    z-index: 10;
    border-bottom: 1px solid var(--background-default);

    @media(min-width: 992px) {
        display: none;
    }
`;

export const TopHeader = styled.div`
    background: var(--brand-secondary);
   height: 15px;
    border-bottom: 5px solid var(--brand-tertiary);

    > div {
        display: flex;
        align-items: center;
    }
`;

export const BottomHeader = styled.div`
    background: var(--brand-secondary);
    padding: 10px 0;

    > div {
        display: flex;
        align-items: center;

        > div { margin-right: 20px!important; }
        img { cursor: pointer; }
    }
`;

export const Sidebar = styled.div<SidebarProps>`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2000;
    transition: all 0.3s;

    ${(props) =>
        props.isSidebarOpen &&
        css`
            left: 0;
        `};
`;

export const SidebarContent = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    background: #fff;
    padding: 20px 30px 0;

    > div {
        display: flex!important;
        justify-content: flex-end!important;
    }

    img { cursor: pointer; }
    hr { color: var(--line) }
`;

export const SidebarHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SidebarItem = styled.h4`
    display: flex;
    align-items: center;
    height: 40px;
    color: var(--text-secondary);
    font-weight: 300;
    margin-top: 15px;
    cursor: pointer;
`;

export const SidebarSubItem = styled.span`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 0.875rem;
    font-weight: 300;
    color: var(--text-secondary);
    cursor: pointer;
`;

export const HeaderSpace = styled.div`
    display: block;
    height: 91px;

    @media(min-width: 992px) {
        display: none;
    }
`;
