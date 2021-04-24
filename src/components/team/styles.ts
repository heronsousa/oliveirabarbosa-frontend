import styled from "styled-components";

export const TeamContainer = styled.div`
    padding: 100px 0;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;

    h1, > p { color: var(--brand-primary) }

    > p {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 12px 0 55px;
        font-weight: 200;

        &::after{
            content: '';
            width: 80px;
            background: var(--brand-primary);
            height: 4px;
            margin-top: 35px;
            border-radius: 2px;
        }
    }

    a { display: block; color: var(--brand-primary); margin-top: 55px; }

    @media(max-width: 992px) {
        max-width: 300px
    }
`;

export const Person = styled.div`
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
    background: var(--brand-primary);

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
