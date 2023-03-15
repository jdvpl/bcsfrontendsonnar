import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import CustomHead from '../components/ui/customHead/customHead';

function Document() {
  return <Html lang="es">
    <Head>
      {/* <CustomHead/> */}
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <title>{title}</title> */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
}

export default Document;
