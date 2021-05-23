import ContactBody from "../components/contact/body";
import Breadcrumb from "../components/shared/breadcrumb";
import GeneralBanner from "../components/shared/general-banner";
import { BreadcrumbInterface } from "../interfaces/breadcrumb.interface";
import { Container } from "../styles/container";

export default function Contact() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Contato', slug: 'contato' }
    ]

    return (
        <>
            <GeneralBanner title="Contato"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
            </Container>
            <ContactBody></ContactBody>
        </>
    );
}
