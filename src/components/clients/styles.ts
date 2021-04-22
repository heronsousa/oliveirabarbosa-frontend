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
        margin: 20px 0 70px;
        font-weight: 200;

        &::after{
            content: '';
            width: 80px;
            background: var(--background-default);
            height: 4px;
            margin-top: 30px;
            border-radius: 2px;
        }
    }

    .carousel {
        overflow: hidden;

        > div:first-child {
            max-width: 415px;
            height: 200px;

            ul {
                display: flex;
                height: 200px;

                li {
                    padding-bottom: 0!important;
                    height: 200px!important;
                    padding-right: 15px;
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
                background: var(--disable-slider);

                &.carousel__dot--selected { background: white; }
            }
        }
    }
`;

export const Quote = styled.div`
    background: var(--background-default);
    border-radius: 20px;
    padding: 20px;
    width: 400px;

    p, span { display: block; color: var(--text-secondary); }

    p { margin: 10px 0; font-weight: 300; }

    span {
        font-weight: 500;
        &:last-child { font-weight: 200; margin-top: 5px; }
    }
`;
