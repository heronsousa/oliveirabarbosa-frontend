import { GlobalStyle } from './../styles/global';

function MyApp({ Component, pageProps }: any) {
	return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
	);
}

export default MyApp;
