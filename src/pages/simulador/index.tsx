import React, { useState } from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import FormQuota from '../../components/ui/Form/FormQuota'
import Typography from '../../components/ui/Tipography'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { iFormDataSimulation } from '../../interfaces/formSimulation'
import { SesionStorageKeys } from '../../session'
import { sendSimulationData } from '../../services/index';
import { useRouter } from 'next/router';
import { routes } from '../../routes';
import HouseSimulator from '../../components/ui/Form/houseSimulator/HouseSimulator';

const Simulator = () => {
  const dataReg = {
    simulationType: 'salary',
    typeHouse: '',
    houseValue: '', //house
    percentageFinance: '', //house
    valueFinance: '', //house
    termFinance: '',
    insuranceCheck: '',
    dateOfBirth: '',
    monthlySalary: '',
    amountQuota: '',
    percentageQuota: '',
  };
  const [dataFormQuota, setdataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    dataReg
  );
  const [, setdataFormResponse] = useSessionStorage(
    SesionStorageKeys.dataFormSimulationResponse.key,
    dataReg
  );

  const router = useRouter();
  const [simulatioTypeOption, setsimulatioTypeOption] = useState<'house' | 'salary'>(
    'house'
  );
  const onSubmit = async (formData: iFormDataSimulation) => {
    const body = {
      ...formData,
      simulationType: simulatioTypeOption,
      houseValue: 0,
      percentageFinance: 0,
      valueFinance: 0,
    };
    console.log(body)
    setdataFormQuota(body);
    const response = await sendSimulationData(formData);
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
        <div className="mt-4">
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
                ? `text-[14px] w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none`
                : `text-[14px] w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('house')}
          >
            Valor de vivienda
          </button>
          <button
            type="button"
            className={
              simulatioTypeOption === 'salary'
                ? `text-[14px] w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none`
                : `text-[14px] w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('salary')}
          >
            Cuota que puedo pagar
          </button>
        </div>
        {simulatioTypeOption === 'salary' && (
          <FormQuota
            onSubmit={(formData: iFormDataSimulation) => onSubmit(formData)}
            defaultValues={{ ...dataFormQuota }}
          />
        )}
        {simulatioTypeOption === 'house' && <HouseSimulator />}
      </div>
    </div>
  );
};

export default Simulator;
