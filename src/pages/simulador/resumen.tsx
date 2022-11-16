import React, { useState, useEffect } from 'react';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import Typography from '../../components/ui/Tipography';
import ReviewHouse from '../../components/ui/simulation/reviewHouse';
import ReviewSalary from '../../components/ui/simulation/reviewSalary';
import { basePath } from '../../../next.config';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Button from '../../components/ui/Button/index';
import { convertToColombianPesos } from '../../utils/index';

const resumen = () => {
  const [simulationTypeOption, setsimulatioTypeOption] = useState<any>('');
  const [simulationType, setSimulationType] = useSessionStorage('simulationValues', '');
  const [valuesSimulation, setValuesSimulation] = useSessionStorage(
    'simulationResponse',
    ''
  );

  useEffect(() => {
    setsimulatioTypeOption(simulationType.simulationType.toString());
    console.log(valuesSimulation, simulationType);
  }, []);
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
            Los valores presentados en el simulador son únicamente informativos y no
            constituyen ningún tipo de asesoria, ni obligan al Banco en su calidad de
            emisor.
          </Typography>
        </div>
        <div className="flex gap-3 my-5">
          <button
            type="button"
            disabled={simulationTypeOption === 'salary'}
            className={
              simulationTypeOption === 'house'
                ? `w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none`
                : `w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('house')}
          >
            Valor de vivienda
          </button>
          <button
            type="button"
            disabled={simulationTypeOption === 'house'}
            className={
              simulationTypeOption === 'salary'
                ? `w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none`
                : `w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('salary')}
          >
            Cuanto me prestan
          </button>
        </div>
        {simulationTypeOption === 'house' ? (
          <ReviewHouse
            monthlyCoute={`${convertToColombianPesos(valuesSimulation.monthlyCoute)}`}
            financedValue={`${convertToColombianPesos(valuesSimulation.financedValue)}`}
            numberPeriods={valuesSimulation.numberPeriods}
            rate={valuesSimulation.rate}
            lifeInsurance={`${convertToColombianPesos(valuesSimulation.lifeInsurance)}`}
            fireInsurance={`${convertToColombianPesos(valuesSimulation.lifeInsurance)}`}
          />
        ) : (
          <ReviewSalary
            financedValue={`${convertToColombianPesos(valuesSimulation.financedValue)}`}
            monthlyFee={`${convertToColombianPesos(valuesSimulation.monthlyFee)}`}
            numberPeriods={valuesSimulation.numberPeriods}
            rate={valuesSimulation.rate}
            lifeInsurance={`${convertToColombianPesos(valuesSimulation.lifeInsurance)}`}
            fireInsurance={`${convertToColombianPesos(valuesSimulation.lifeInsurance)}`}
          />
        )}

        <div className="flex flex-col items-center">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px]"
            type="submit"
            name="solicitarCredito"
            data-testid="btn-openAccount1"
            tabIndex={0}
            id="btn-next"
          >
            Solicitar crédito
          </Button>
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px]"
            type="submit"
            name="solicitarCredito"
            data-testid="btn-openAccount1"
            tabIndex={0}
            id="btn-next"
            variant="secondary"
          >
            Volver a simular
          </Button>
        </div>
      </div>
    </div>
  );
};

export default resumen;
