import { GlobalStyle } from '../styles/global';
import Header from "../components/shared/header";
import Footer from '../components/shared/footer/index';
import HeaderMobile from './../components/shared/header-mobile/index';

function MyApp({ Component, pageProps }: any) {
	return (
        <>
            <GlobalStyle />
            {/* <Header /> */}
            <HeaderMobile />
            <Component {...pageProps} />
            <Footer />
        </>
	);
}

export default MyApp;
