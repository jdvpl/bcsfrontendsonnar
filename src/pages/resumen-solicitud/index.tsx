import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import Typography from '../../components/ui/Typography';
import ReviewApplication from '../../components/ui/application/ReviewApplication';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Button from '../../components/ui/Button/index';
import { convertToColombianPesos } from '../../utils/index';
import { urlAndUtms } from '../../utils/RouterUtmsUrl';
import { SesionStorageKeys } from '../../session';
import Stepper from '../../components/ui/Stepper';
import { routes } from '../../routes';

function ResumenApplication() {
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');

  const router = useRouter();

  return (
    <div>
      <div className="container flex lg:mt-[0] xs:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4  hidden lg:block">
          <LogoBcs />
        </div>
        <div className="mt-4 w-[180px] lg:w-[303px] mb-[24px] mr-[16px]">
          <LogoForm />
        </div>
      </div>
      <div className="lg:w-[825px] mx-auto md:w-[528px] mb-[64px] xs:mb-[40px] xs:w-[288px] sm:w-[343px]">
        <Stepper
          steps={4}
          actualStep={4}
          percentage={100}
          className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
          title="Datos personales"
        />
      </div>
      <div className=" xs:w-[290px] sm:w-[343px]  lg:w-[684px] md:w-[584px] m-auto">
        <Typography variant="h2" className="mt-8 mb-[52px] text-center">
          Revise los datos de su solicitud
        </Typography>
        <div>
          <Typography
            variant="bodyS3"
            className="text-center xs:w-[290px] sm:w-[343px] md:w-[656px] lg:mt-[52px] pmx-3 text-primario-900 pb-7"
          >
            Resumen de la solicitud:
          </Typography>
        </div>

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
            onClick={() => router.push(routes.approvalDataPage)}
            name="solicitarCredito"
            data-testid="btn-next"
            tabIndex={0}
            id="btn-next"
          >
            Enviar solicitud
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
