import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Script from 'next/script';
import { AplicationProvider } from '../context/AplicationContext';
import Mantenimiento from './mantenimiento';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  const containerTagManager= process.env.TAGMANAGER
  const tagManagerArgs = {
    gtmId: containerTagManager || 'GTM-TZ6CJXV',
    dataLayer: {
      userId: "001",
      userProject: "first ID",
    },
  };
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  useEffect(() => {
  TagManager.initialize(tagManagerArgs);
  }, []);

  if (!initialRenderComplete) return <></>;

  const maintenance = process.env.MAINTENANCE || 'false';
  return (
    <>
    <AplicationProvider>
        {maintenance === 'true' ? <Mantenimiento/> : <Component {...pageProps} />}
    </AplicationProvider>
    </>
  );
}

export default MyApp;
