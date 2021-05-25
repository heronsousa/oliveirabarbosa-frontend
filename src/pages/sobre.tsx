import AboutBody from "../components/about-body";
import Breadcrumb from "../components/shared/breadcrumb";
import GeneralBanner from "../components/shared/general-banner";
import { BreadcrumbInterface } from "../interfaces/breadcrumb.interface";
import { Container } from "../styles/container";

export default function About() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Sobre nós', slug: 'sobre' }
    ]

    return (
        <>
            <GeneralBanner title="Sobre"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
            </Container>
            <AboutBody></AboutBody>
        </>
    );
}
