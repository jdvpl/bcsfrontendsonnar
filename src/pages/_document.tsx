import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import CustomHead from '../components/ui/customHead/customHead';

function Document() {
  return (
    <Html lang="es">
      <Head>
        <CustomHead />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
