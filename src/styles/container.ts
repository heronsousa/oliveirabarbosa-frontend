import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    margin: 0 auto;

    /* @media (min-width: 1600px) {
        max-width: 1456px
    }

    @media (min-width: 1320px) and (max-width: 1600px) {
        max-width: 1248px
    } */

    @media (min-width: 1200px) {
        max-width: 1140px
    }

    @media (min-width: 992px) and (max-width: 1200px) {
        max-width: 960px
    }

    @media (min-width: 768px) and (max-width: 992px) {
        max-width: 720px
    }

    @media (min-width: 576px) and (max-width: 768px) {
        max-width: 540px
    }

    @media (max-width: 576px) {
        max-width: 100%
    }
`;
