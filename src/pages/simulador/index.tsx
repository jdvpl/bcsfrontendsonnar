import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import FormQuota from '../../components/ui/Form/FormQuota';
import Typography from '../../components/ui/Tipography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { iFormDataSimulation } from '../../interfaces/formSimulation';
import { SesionStorageKeys } from '../../session';
import { sendSimulationData } from '../../services/index';
import { routes } from '../../routes';
import HouseSimulator from '../../components/ui/Form/houseSimulator/HouseSimulator';

function Simulator() {
  const [dataFormQuota, setdataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    {}
  );
  const [, setdataFormResponse] = useSessionStorage(
    SesionStorageKeys.dataFormSimulationResponse.key,
    {}
  );

  const router = useRouter();
  const [simulatioTypeOption, setsimulatioTypeOption] = useState<'house' | 'salary'>(
    'house'
  );
  const onSubmit = async (formData: iFormDataSimulation) => {
    const body: iFormDataSimulation = {
      simulationType: simulatioTypeOption,
      typeHouse: formData.typeHouse,
      termFinance: formData.termFinance,
      insuranceCheck: formData.insuranceCheck,
      dateOfBirth: formData.dateOfBirth,
      monthlySalary: +formData.monthlySalary,
      amountQuota: formData.amountQuota,
      percentageQuota: formData.percentageQuota,
      houseValue: 0,
      percentageFinance: 0,
      financeValue: 0,
    };
 
    setdataFormQuota(body);
    const response = await sendSimulationData(body);
    if (!response.error) {
      setdataFormResponse(response.response.data);
      router.push(routes.simuladorResumen);
    }
  };
  return (
    <div>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="mt-4 w-[180px] md:w-[303px]">
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
            className="text-center lg:mt-[52px] pmx-3 text-primario-900"
          >
            A través de nuestro simulador podrá realizar los cálculos necesarios para
            conocer los valores aproximados relacionados con el crédito de vivienda.
          </Typography>
        </div>
        <div className="flex gap-1 my-8 w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <button
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
