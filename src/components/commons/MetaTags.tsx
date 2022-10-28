import Script from 'next/script';
import React from 'react';
import { basePath } from '../../../next.config';

const MetaTags: React.FC = () => {
  return (
    <>
      <Script
        id="manager"
        strategy="afterInteractive"
        src="https://www.googleoptimize.com/optimize.js?id=OPT-MDVM227"
        dangerouslySetInnerHTML={{
          __html: `<style>.async-hide { opacity: 0 !important} </style>
          (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'OPT-MDVM227':true});`,
        }}
      />
      <link rel="icon" href={`${basePath}/favicon.ico`} />
      <link rel="canonical" href="https://digital.bancocajasocial.com/cuentamiga" />
      <meta
        name="google-site-verification"
        content="eowiz6mww78gDUtl5brGQv_SSbWOebBgGjCTnrlvRzg"
      />
      <meta
        name="google-site-verification"
        content="JXfzoUr1Gme2ACqjciOtnaj-noYSDOKhnhozf9NiKoc"
      />
      <meta
        name="facebook-domain-verification"
        content="1xom6mwxkyzcvf5owhrt3agot3p73l"
      />
      <meta content="text/html; charset=UTF-8" />
      <meta content="application/pdf" />
      <meta
        name="description"
        content="Una cuenta de ahorros 100% en línea, sin cuota de manejo, realice transferencias y retiros gratis. Ábrala ya"
      />
      <meta
        name="keywords"
        content="Cuentamiga, Cuenta de Ahorros, Banco Caja Social, cuenta de ahorros digital, abra una cuenta de ahorros digital, cuenta de ahorros rápida, cuenta de ahorros en minutos"
      />
      <meta property="og:title" content="BCS Cuentamiga Digital" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://digital.bancocajasocial.com/cuentamiga" />
      <meta property="og:image" content={`${basePath}/favicon.ico`} />
      <meta property="og:image:secure_url" content={`${basePath}/favicon.ico`} />
      <meta property="og:image:alt" content="BCS Cuentamiga Digital" />
      <meta property="og:image:type" content="image/png" />
      <meta
        property="og:description"
        content="Una cuenta de ahorros 100% en línea, sin cuota de manejo, realiza transferencias y retiros gratis. Ábrala ya"
      />
      <meta property="og:site_name" content="BCS Cuentamiga Digital" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="es_CO" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@bancocajasocial" />
      <meta name="twitter:creator" content="@bancocajasocial" />
      <meta name="twitter:title" content="BCS Cuentamiga Digital" />
      <meta
        name="twitter:description"
        content="Una cuenta de ahorros 100% en línea, sin cuota de manejo, realiza transferencias y retiros gratis. Ábrala ya"
      />
      <meta name="twitter:image" content={`${basePath}/favicon.ico`} />
      <meta name="twitter:image:alt" content="BCS Cuentamiga Digital" />
    </>
  );
};

export default MetaTags;
