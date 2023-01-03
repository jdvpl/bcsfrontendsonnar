import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Script from 'next/script';
import { AplicationProvider } from '../context/AplicationContext';
import Mantenimiento from './mantenimiento';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  const tagManagerArgs = {
    gtmId: "GTM-TZ6CJXV",
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
    <Script
        id="manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZ6CJXV');`,
        }}
      />
    <AplicationProvider>
    <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ6CJXV"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {maintenance === 'true' ? <Mantenimiento/> : <Component {...pageProps} />}
    </AplicationProvider>
    </>
  );
}

export default MyApp;
