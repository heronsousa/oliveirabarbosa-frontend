import GeneralBanner from "../../components/shared/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";
import { Container } from "../../styles/container";
import PageBody from "../../components/areas/page-body";
import { PageBodyInterface } from "../../interfaces/pageBody.interface";

export default function Areas() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
        { title: 'Civil', slug: 'civil' }
    ]

    const props: PageBodyInterface = {
        title: 'Direito Trabalhista',
        description: 'Direito do trabalho é o ramo jurídico que estuda as relações de trabalho. Esse direito é composto de conjuntos de normas, princípios e outras fontes jurídicas que regem as relações de trabalho, regulamentando a condição jurídica dos trabalhadores. Surge como autêntica expressão do humanismo jurídico e instrumento de renovação social. Constitui atitude de intervenção jurídica em busca de um melhor relacionamento entre o homem que trabalha e aqueles para os quais o trabalho se destina. Visa também a estabelecer uma plataforma de direitos básicos.',
        topics: [
            'Demissão por justa causa',
            'Insalubridade',
            'Corte de benefícios',
            'Abuso de autoridade',
            'Hora Extra',
            'Dívida Trabalhista',
            'Rescisão indireta',
            'Injúria',
            'Importunação sexual',
            'Coação',
            'Atraso de salário',
            'Revisão de Processo'
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
