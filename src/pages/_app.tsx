import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import { AplicationProvider } from '../context/AplicationContext';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);
  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <AplicationProvider>
      <Component {...pageProps} />
    </AplicationProvider>
  );
};

export default MyApp;
