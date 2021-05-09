import GeneralBanner from "../../components/shared/general-banner";
import Breadcrumb from "../../components/shared/breadcrumb";
import { BreadcrumbInterface } from "../../interfaces/breadcrumb.interface";
import { Container } from "../../styles/container";
import PageBody from "../../components/areas/page-body";
import { PageBodyInterface } from "../../interfaces/pageBody.interface";

export default function Consumer() {
    const routes: BreadcrumbInterface[] = [
        { title: 'Áreas de atuação', slug: '/areas-de-atuacao' },
        { title: 'Consumidor', slug: 'consumidor' }
    ]

    const props: PageBodyInterface = {
        title: 'Direito do Consumidor',
        description: 'O Direito do Consumidor é o ramo do direito que lida com as relações jurídicas entre fornecedores de bens e serviços e seus consumidores. <br><br> Tem por objetivo assegurar que os consumidores obtenham acesso a informações quanto a origem e qualidade dos produtos e serviços; assegurar proteção contra fraudes no mercado de consumo; garantir transparência a segurança para os usuários dos bens e serviços e harmonizar as relações consumo por meio da intervenção jurisdicional. <br><br> O direito do consumidor também assegura que o consumidor possa recorrer ao judiciário para a prevenção e reparação de danos patrimoniais decorrentes na falha no fornecimento de bens e prestação de serviços para o consumidor final.',
        topics: [
            'Produto com defeito',
            'Cobrança indevida',
            'Troca de mercadoria',
            'Problema na entrega',
            'Quebra de contrato',
            'Produto extraviado',
            'Propaganda enganosa',
            'Indenização',
            'Programas de milhas',
            'Ligações abusivas',
            'Danos a segurança',
            'Nota Fiscal'
        ]
    }

    return (
        <>
            <GeneralBanner title="Direito do Consumidor"></GeneralBanner>
            <Container>
                <Breadcrumb routes={routes}></Breadcrumb>
                <PageBody props={props}></PageBody>
            </Container>
        </>
    );
}
