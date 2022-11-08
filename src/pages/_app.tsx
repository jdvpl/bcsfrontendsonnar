import { AppProps } from 'next/app';
import '../styles/globals.css';
import {AplicationProvider} from '../context/AplicationContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (<AplicationProvider key="app">
    <Component {...pageProps} />;
  </AplicationProvider>
  )
}

export default MyApp;
