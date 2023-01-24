import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import FormQuota from '../../components/ui/Form/FormQuota';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { iFormDataSimulation } from '../../interfaces/formSimulation';
import { SesionStorageKeys } from '../../session';
import { sendSimulationData } from '../../services/index';
import { routes } from '../../routes';
import HouseSimulator from '../../components/ui/Form/houseSimulator/HouseSimulator';
import useSimulator from './useSimulator';

function Simulator() {
  const { simulatioTypeOption, setsimulatioTypeOption, onSubmit } = useSimulator();
  return (
    <div data-testid="simuladorTestC">
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
      </div>
      <div className="lg:w-[684px] md:w-[584px] w-[343px] m-auto">
        <Typography variant="h2" className="mt-8 text-center">
          Simulador del crédito
        </Typography>
        <div>
          <Typography
            variant="bodyS3"
            className="text-center mt-[40px] md:mt-[54px] lg:mt-[52px] pmx-3 text-primario-900"
          >
            A través de nuestro simulador podrá realizar los cálculos necesarios para
            conocer los valores aproximados relacionados con el crédito de vivienda con
            amortización en pesos.
          </Typography>
        </div>
        <div className="flex gap-1 my-8 w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <button
            data-testid="houseTestBtn"
            type="button"
            className={
              simulatioTypeOption === 'house'
                ? ` font-semibold button-shadow text-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                : ` font-semibold button-shadow text-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('house')}
          >
            Valor de vivienda
          </button>
          <button
            data-testid="salaryTestBtn"
            type="button"
            className={
              simulatioTypeOption === 'salary'
                ? ` font-semibold button-shadow text-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                : ` font-semibold button-shadow text-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('salary')}
          >
            Cuanto me prestan
          </button>
        </div>
        {simulatioTypeOption === 'salary' && (
          <FormQuota onSubmit={(formData: iFormDataSimulation) => onSubmit(formData)} />
        )}
        {simulatioTypeOption === 'house' && <HouseSimulator />}
      </div>
    </div>
  );
}

export default Simulator;
