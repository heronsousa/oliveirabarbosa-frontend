import styled from "styled-components";

export const ClientsBackground = styled.div`
    padding: 70px 0;
    background: var(--brand-secondary) url('/rights.svg') no-repeat top right;
    background-size: 70%;
`;

export const OurQuote = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    p, span { text-align: center; }

    p {
        font-size: 1.5rem;
        font-weight: 300;
        margin: 20px;
    }

    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 200;

        &::before{
            width: 15px;
            height: 1px;
            margin-right: 10px;
            content: '';
            background: var(--background-default);
        }
    }
`;

export const ClientsQuotes = styled.div`
    margin-top: 55px;

    h1, > p { text-align: center; }

    > p {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 12px 0 70px;
        font-weight: 200;

        &::after{
            content: '';
            width: 80px;
            background: var(--background-default);
            height: 4px;
            margin-top: 35px;
            border-radius: 2px;
        }
    }

    .carousel {
        overflow: hidden;

        > div:first-child {
            max-width: 345px;
            height: auto;

            ul {
                display: flex;
                height: auto;

                li {
                    padding-bottom: 0!important;
                    height: auto!important;
                    padding-right: 15px;

                    > div { height: 100% }
                }
            }
        }

        > div:last-child {
            display: flex;
            justify-content: center;
            margin-top: 100px;

            button {
                width: 30px;
                height: 5px;
                border-radius: 2.5px;
                margin-right: 10px;
                background: var(--disable);

                &.carousel__dot--selected { background: white; }
            }
        }
    }
`;

export const Quote = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 330px;
    height: 100%;
    padding: 20px;
    border-radius: 20px;
    background: var(--background-default);

    p, span { display: block; color: var(--text-secondary); }

    p { margin: 10px 0 20px; font-weight: 300; }

    span {
        font-weight: 500;
        &:last-child { font-weight: 200; margin-top: 5px; }
    }
`;
