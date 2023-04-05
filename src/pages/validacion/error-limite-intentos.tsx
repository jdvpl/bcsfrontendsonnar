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
import useDeleteKeys from '../../hooks/useDeleteKeys';

const ErrorValidacionBlock: React.FC = () => {
  useDeleteKeys();
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
  const router = useRouter();
  return (
    <ErrorLayout title="Error número de intentos superados">
      <section itemScope itemType="https://schema.org/Action">
        <div className="flex justify-center w-[267px] h-[200px] mx-auto md:w-[320px] md:h-[300px] relative">
          <ImageLoader
            src={`${basePath}/images/error1.png`}
            layout="fill"
            alt="Imagen de que ha superado el límite de intentos"
            title="Imagen de que ha superado el límite de intentos"
          />
        </div>
        <HeadingError>Ha superado el número de intentos permitidos</HeadingError>
        <SubtitleError>Ingrese nuevamente en 24 horas.</SubtitleError>
        <ContainerButton>
          <Button id="btn-go-bank" onClick={() => router.push('/')}>
            Cerrar
          </Button>
        </ContainerButton>
      </section>
    </ErrorLayout>
  );
};

export default ErrorValidacionBlock;
