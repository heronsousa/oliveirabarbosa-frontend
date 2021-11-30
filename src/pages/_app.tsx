import { GlobalStyle } from '../styles/global';
import Header from "../components/shared/header";
import Footer from '../components/shared/footer/index';
import HeaderMobile from './../components/shared/header-mobile/index';
import Head from 'next/head';

function MyApp({ Component, pageProps }: any) {
	return (
        <>
            <Head>
                <title>Oliveira Barbosa Advogados</title>
                <meta name="description" content="O Escritório Oliveira Barbosa E Advogados Associados presta serviços jurídicos em diversas áreas do Direito, tendo uma equipe devidamente especializada e apta a trabalhar desde questões mais simples, até casos complexos, que exigem o envolvimento de profissionais de diversas áreas de atuação. O Escritório busca o atendimento por excelência nas mais variadas especialidades, tendo ampla atuação nas áreas do Direito do Trabalho, Direito do Consumidor, Direito Civil e Direito Previdenciário. Nosso objetivo é apresentar uma solução eficaz para cada situação de forma personalizada, atendendo as necessidades do cliente e prestando nosso serviço de forma ética, técnica e profissional." />
            </Head>

            <GlobalStyle />
            <Header />
            <HeaderMobile />
            <Component {...pageProps} />
            <Footer />
        </>
	);
}

export default MyApp;
