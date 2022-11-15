import Head from 'next/head';
import React from 'react';
import { basePath } from '../../../next.config';
import styles from '../../styles/Home.module.css';
import { childrenProps } from '../../interfaces';


export const ErrorLayout: React.FC<childrenProps>= ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>BCS Cuentamiga Digital</title>
      <link rel="icon" href={`${basePath}/favicon.ico`} />
    </Head>
    <header
      className="pt-[40px] md:pt-[34px] lg:pt-[30px] pl-[16px] justify-center min-h-[39px] md:w-full"
      itemScope
      itemType="https://schema.org/Brand"
    >
      <div className="lg:w-[1160px] mx-auto" itemProp="logo">

      </div>
    </header>
    <main
      data-testid="main-errorLayout"
      tabIndex={0}
      role="tabpanel"
      className="flex flex-col  mb-[30px] px-[16px] sm:px-[16px] md:px-[30px]  max-w-full mt-[60px]  md:justify-center items-center self-start md:self-center text w-full lg:min-h-[100%] lg:h-full"
    >
      <div className="w-full max-w-[343px]  md:w-[343px] md:min-w-[343px] lg:w-full lg:max-w-full  flex flex-col justify-between h-full">
        {children}
      </div>
    </main>
  </div>
);
