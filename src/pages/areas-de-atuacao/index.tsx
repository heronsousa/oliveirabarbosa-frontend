import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";

import { Container } from './../../styles/container';
import GeneralBanner from "../../components/shared/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import Expertise from './../../components/areas/expertises/index';

export default function Areas() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
    ]

    return (
        <>
            <GeneralBanner title="Áreas de atuação"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
                <Expertise></Expertise>
            </Container>
        </>
    );
}
