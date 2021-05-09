import GeneralBanner from "../../components/shared/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";
import { Container } from "../../styles/container";
import PageBody from "../../components/areas/page-body";
import { PageBodyInterface } from "../../interfaces/pageBody.interface";

export default function Civil() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
        { title: 'Civil', slug: 'civil' }
    ]

    const props: PageBodyInterface = {
        title: 'Direito Civil',
        description: 'O Direito Civil é o ramo do direito privado que trata das normas que regulam os direitos e obrigações das pessoas físicas e jurídicas nas suas relações patrimoniais, familiares e obrigacionais. <br><br> O Direito Civil, quando encarado sob uma perspectiva geral e considerando os códigos de cada país, contém alguns princípios básicos comuns, ou seja, tendências ou pilares frequentemente presentes nos ordenamentos jurídicos. São eles o princípio da Eticidade, o da Sociabilidade e o da Operacionalidade.',
        topics: [
            'Maria da Penha',
            'Crime contra Patrimônio',
            'Processos judiciais',
            'Crime contra honra',
            'Violência infantil',
            'Injúria',
            'Violência sexual',
            'Habeas Corpus',
            'Revisão de Processo',
            'Furto e roubo',
            'Estelionato',
            'Intimação'
        ]
    }

    return (
        <>
            <GeneralBanner title="Direito Civil"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
                <PageBody props={props}></PageBody>
            </Container>
        </>
    );
}
