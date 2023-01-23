import React from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
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
import useSummaryApplication from '../../hooks/useReviewApplication';
import HeaderForm from '../../components/ui/Headers/HeaderForm';

function ResumenApplication() {
  const router = useRouter();
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');
  const { isLoading, onSubmit } = useSummaryApplication(router);

  return (
    <div>
      {isLoading ? <ApplicationLoader /> : null}
      <HeaderForm />
      <div className="lg:w-[825px] mx-auto md:w-[528px] mb-[64px] xs:mb-[40px] xs:w-[288px] sm:w-[343px] mt-9">
        <Stepper
          steps={4}
          actualStep={4}
          percentage={100}
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
          title="Resumen de la solicitud"
        />
      </div>
      <div className=" xs:w-[290px] sm:w-[343px]  lg:w-[684px] md:w-[584px] m-auto">
        <Typography variant="h2" className="mt-8 mb-[40px] text-center">
          Conozca la oferta que hemos
          <br />
          diseñado para usted
        </Typography>
        <Alert message="La tasa de su crédito será la que se encuentre vigente en el momento del desembolso." />
        <ReviewApplication
          financedValue={`${convertToColombianPesos(
            Math.floor(valuesMortgage.financeValue)
          )}`}
          termFinance={`${valuesMortgage.termFinance} años`}
          rate="1,6% NV - 23% EA"
          lifeInsurance="$44.000"
          fireInsurance="$44.000"
          insuranceCheck={valuesMortgage?.insuranceCheck}
        />

        <div className="flex flex-col items-center gap-y-5">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] mt-[24px] shadow-none"
            onClick={onSubmit}
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
