import GeneralBanner from "../../components/shared/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";
import { Container } from "../../styles/container";
import PageBody from "../../components/areas/page-body";
import { PageBodyInterface } from "../../interfaces/pageBody.interface";

export default function Labor() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
        { title: 'Civil', slug: 'civil' }
    ]

    const props: PageBodyInterface = {
        title: 'Direito Previdenciário',
        description: 'O direito previdenciário é um ramo do direito público surgido da conquista dos direitos sociais no fim do século XIX e início do século XX. Seu objetivo é o estudo e a regulamentação do instituto seguridade social. <br><br> A Previdência Social pode ser definida como um seguro social, que garante ao trabalhador e aos seus dependentes, amparo quando ocorre a perda, permanente ou temporária, de sua capacidade laborativa, em decorrência de riscos sociais (doença, acidente, gravidez, prisão, morte e velhice). Obedecido sempre o teto do Regime Geral de Previdência Social – (RGPS).',
        topics: [
            'Aposentadoria por idade',
            'Tempo de Contribuição',
            'Pensão por morte',
            'Aposentadoria Urbana',
            'Auxílio Doença',
            'Prestação Continuada',
            'Aposentadoria Rural',
            'Auxílio Acidente',
            'Vínculo Trabalhista',
            'Aposentadoria Especial',
            'Auxílio Reclusão',
            'Revisão de auxílio'
        ]
    }

    return (
        <>
            <GeneralBanner title="Direito Previdenciário"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
                <PageBody props={props}></PageBody>
            </Container>
        </>
    );
}
