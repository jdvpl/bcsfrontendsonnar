import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { basePath } from '../../../next.config';
import ContainerButton from '../../components/ui/error/containerButton';
import HeadingError from '../../components/ui/error/heading';
import SubtitleError from '../../components/ui/error/subtitle';
import Button from '../../components/ui/Button/index';
import ImageLoader from '../../components/ui/Loaders/imageLoader';
import ErrorLayout from '../../components/layouts/errorLayout';
import { AplicationContext } from '../../context/AplicationContext';

const Error: React.FC = () => {
  const router = useRouter();
  const {
    setEligirFoto,
    setFotoDelantera,
    setFotoTrasera,
    setSelfieSonriendo,
    setSelfieNormal,
  } = useContext(AplicationContext);
  useEffect(() => {
    setEligirFoto('');
    setFotoDelantera('');
    setFotoTrasera('');
    setSelfieNormal('');
    setSelfieSonriendo('');
    sessionStorage.clear();
  }, []);
  return (
    <ErrorLayout>
      <section itemScope itemType="https://schema.org/Action">
        <div className="flex justify-center w-[239px] h-[200px] mx-auto md:w-[358px] md:h-[300px] relative">
          <ImageLoader
            src={`${basePath}/images/error1.png`}
            layout="fill"
            alt="ha ocurrido un error"
            title="ha ocurrido un error"
          />
        </div>
        <HeadingError>Ups, ha ocurrido un error</HeadingError>
        <SubtitleError>
          Por favor inténtelo nuevamente <br className="block md:hidden" /> más tarde.
        </SubtitleError>
        <ContainerButton>
          <Button id="btn-go-bank" onClick={() => router.push('/')}>
            Volver al inicio
          </Button>
        </ContainerButton>
      </section>
    </ErrorLayout>
  );
};

export default Error;
