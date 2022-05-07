import type {AppProps} from 'next/app';

import GlobalStyles from '../components/GlobalStyles';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
