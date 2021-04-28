import { GlobalStyle } from '../styles/global';
import Header from "../components/shared/header";
import Footer from '../components/shared/footer/index';

function MyApp({ Component, pageProps }: any) {
	return (
        <>
            <GlobalStyle />
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </>
	);
}

export default MyApp;
