import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { AplicationProvider } from '../context/AplicationContext';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  const containerTagManager = process.env.TAGMANAGER
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
  return (
    <>
      <AplicationProvider>
        <Component {...pageProps} />
      </AplicationProvider>
    </>
  );
}

export default MyApp;
