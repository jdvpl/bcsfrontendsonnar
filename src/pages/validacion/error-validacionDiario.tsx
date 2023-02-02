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

const ErrorValidacionDiario: React.FC = () => {
  useDeleteKeys()
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
    <ErrorLayout>
      <section>
        <div className="flex justify-center w-[223px] h-[200px] mx-auto md:w-[320px] md:h-[300px] relative">
          <ImageLoader
            src={`${basePath}/images/error3.png`}
            layout="fill"
            alt="No pudimos validar tu identidad"
            title="No pudimos validar tu identidad"
          />
        </div>
        <HeadingError>
          No podemos validar su <br className="block md:hidden" />
          identidad <br className="hidden md:block " /> en este momento
        </HeadingError>
        <SubtitleError>Intente nuevamente en 24 horas</SubtitleError>
        <ContainerButton>
          <Button id="btn-go-bank" onClick={() => router.push('/')}>
            Regresar al inicio
          </Button>
        </ContainerButton>
      </section>
    </ErrorLayout>
  );
};

export default ErrorValidacionDiario;
