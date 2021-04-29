import GeneralBanner from "../../components/sections/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";

export default function Areas() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Início', slug: '/' },
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
        { title: 'Civil', slug: 'civil' }
    ]

    return (
        <>
            <GeneralBanner title="Direito Civil"></GeneralBanner>
            <Breadcrumb routes={routes}></Breadcrumb>
        </>
    );
}
