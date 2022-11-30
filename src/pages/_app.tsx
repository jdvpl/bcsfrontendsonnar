import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Script from 'next/script';
import { AplicationProvider } from '../context/AplicationContext';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

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
      <Component {...pageProps} />
    </AplicationProvider>
    </>
  );
}

export default MyApp;
