import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Typography from '../../components/ui/Typography';
import ReviewApplication from '../../components/ui/application/ReviewApplication';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Button from '../../components/ui/Button/index';
import { convertToColombianPesos } from '../../utils/index';
import { SesionStorageKeys } from '../../session';
import Stepper from '../../components/ui/Stepper';
import { routes } from '../../routes';
import Alert from '../../components/ui/Alert/index';
import { ApplicationLoader } from '../../components/ui/Loaders/ApplicationLoader';
import HeaderForm from '../../components/ui/Headers/HeaderForm';
import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import useDownloadPdf from '../../hooks/useDownloadPdf';

function ResumenApplication() {
  const router = useRouter();
  const { setCurrentRouting } = useProtectedRoutes();
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');
  const [loading, setLoading] = useState<boolean>(false)

  const [applicationResponse] = useSessionStorage(
    SesionStorageKeys?.applicationResponse.key,
    {}
  );
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const [dataPersonalBasic,] = useSessionStorage(SesionStorageKeys.dataBasicData.key, {});

  const [basicDataUser,] = useSessionStorage(SesionStorageKeys.basicDataUser.key, {});
  const [, setPdfData] = useSessionStorage(SesionStorageKeys.pdfData.key, {});
  const { getPdf } = useDownloadPdf(
    dataQuestions,
    dataTU,
    valuesMortgage,
    applicationResponse,
    setCurrentRouting,
    router,
    dataPersonalBasic,
    setLoading,
    basicDataUser,
    setPdfData
  );
  return (
    <div>
      {loading ? <ApplicationLoader /> : null}
      <HeaderForm />

      <div className="lg:w-[825px] mx-auto md:w-[528px] mb-[64px] xs:mb-[40px] xs:w-[288px] sm:w-[343px] mt-9">
        <Stepper
          steps={5}
          actualStep={5}
          percentage={100}
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
          title="Resumen de la solicitud"
        />
      </div>
      <div className=" xs:w-[290px] sm:w-[343px]  lg:w-[684px] md:w-[584px] m-auto">
        <Typography
          typeFont='Bold'
          variant="h2"
          componentHTML='h2'
          className="mt-8 mb-[40px] text-center"
        >
          Conozca la oferta que hemos
          <br />
          diseñado para usted
        </Typography>
        <div className="xs:w-[290px] sm:w-[343px] md:w-[448px] mx-auto">
          <Alert message="La tasa de su crédito será la que se encuentre vigente en el momento del desembolso." colorMessage='text-primario-200' />
        </div>
        <ReviewApplication
          financedValue={`${convertToColombianPesos(
            Math.floor(applicationResponse?.finalOffer?.offer?.financeValue)
          )}`}
          termFinance={`${applicationResponse?.finalOffer?.offer?.termFinance} años`}
          rate={applicationResponse?.finalOffer?.offer?.rate}
          lifeInsurance={applicationResponse?.finalOffer?.offer?.lifeInsurance}
          fireInsurance={applicationResponse?.finalOffer?.offer?.fireInsurance}
          insuranceCheck={valuesMortgage?.insuranceCheck}
          monthlyInstallment={`${convertToColombianPesos(
            Math.floor(applicationResponse?.finalOffer?.offer?.monthlyInstallment)
          )}`}
        />

        <div className="flex flex-col items-center gap-y-5">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] mt-[24px] shadow-none font-monserratLight"
            onClick={getPdf}
            name="solicitarCredito"
            data-testid="btn-next"
            tabIndex={0}
            id="btn-next"
          >
            Acepto la oferta
          </Button>
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[15px] shadow-none"
            onClick={() => router.push(routes.home)}
            name="solicitarCredito"
            data-testid="btn-exit"
            tabIndex={0}
            id="btn-exit"
            variant="secondary"
          >
            Salir
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ResumenApplication;
