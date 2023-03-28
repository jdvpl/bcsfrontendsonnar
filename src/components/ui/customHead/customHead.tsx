import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { basePath } from '../../../../next.config';
import { parseHeadProperties } from '../../../utils/dynamicHeads';

const CustomHead = () => {
  const router = useRouter();
  const actualPath = router?.asPath || '/';
  return (
    <Head>
      <meta data-testid="charset" charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
        data-testid="viewport"
      />
      <meta
        name="description"
        content={
          '¿Desea comprar vivienda? Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas ni papeleos extensos.' ||
          parseHeadProperties(actualPath)?.description
        }
        data-testid="description"
      />
      <link rel="canonical" href="https://digital.bancocajasocial.com/cuentamiga" />
      <title>{parseHeadProperties(actualPath)?.title} - BCS Crédito Hipotecario</title>
      <meta
        name="keywords"
        content="Crédito hipotecario, Crédito hipotecario BCS, Crédito hipotecario Banco Caja Social, Crédito hipotecario Colombia"
      />
      <meta property="og:title" content="BCS Crédito Hipotecario" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://digital.bancocajasocial.com/vivienda/" />
      <meta property="og:image" content={`${basePath}/favicon.ico`} />
      <meta property="og:image:secure_url" content={`${basePath}/favicon.ico`} />
      <meta property="og:image:alt" content="BCS Crédito Hipotecario" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:description"
        content="¿Desea comprar vivienda? Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas ni papeleos extensos."
      />
      <meta property="og:site_name" content="BCS Crédito Hipotecario" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_CO" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bancocajasocial" />
      <meta name="twitter:creator" content="@bancocajasocial" />
      <meta name="twitter:title" content="BCS Crédito Hipotecario" />
      <meta
        name="twitter:description"
        content="¿Desea comprar vivienda? Aquí le ayudaremos a lograr sus sueños, sin hacer largas filas ni papeleos extensos."
      />
      <meta name="twitter:image" content={`${basePath}/favicon.ico`} />
      <meta name="twitter:image:alt" content="BCS Crédito Hipotecario" />
    </Head>
  );
};

export default CustomHead;
