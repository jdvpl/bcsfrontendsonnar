import React, { useEffect } from 'react';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import FormQuota from '../../components/ui/Form/FormQuota';
import Typography from '../../components/ui/Typography';
import HouseSimulator from '../../components/ui/Form/houseSimulator/HouseSimulator';
import useSimulator from './useSimulator';
import TagManager from 'react-gtm-module';

function Simulator() {
  const { simulatioTypeOption, setsimulatioTypeOption, onSubmit, isLoading } = useSimulator();
  useEffect(() => {
    TagManager.dataLayer({
      dataLayer: {
        event: 'load_simulation',
        category: 'load_page',
        action: 'load_simulation',
        label: 'load_simulation',
      },
    });

  }, []
  );
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
      <div className="lg:w-[760px] md:w-[584px] w-[343px] m-auto">
        <h2 className="mt-8 text-center font-poppinsSemiBold font-semibold md:text-[28px] text-[20px]">
          Simulador del crédito
        </h2>
        <div>
          <p className="text-center mt-2 pmx-3 text-primario-900 font-montserratRegular font-normal">
            A través de nuestro simulador podrá realizar los cálculos necesarios para
            conocer los valores aproximados relacionados con el crédito de vivienda con
            amortización en pesos.
          </p>
        </div>
        <div className="flex gap-1 md:mb-6  mt-8 lg:mt-[52px] w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <button
            data-testid="houseTestBtn"
            type="button"
            className={
              simulatioTypeOption === 'house'
                ? `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                : `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
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
                ? ` font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                : ` font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('salary')}
          >
            Cuanto me prestan
          </button>
        </div>
        {simulatioTypeOption === 'salary' && (
          <FormQuota isLoading={isLoading} onSubmit={onSubmit} />
        )}
        {simulatioTypeOption === 'house' && <HouseSimulator />}
      </div>
    </div>
  );
}

export default Simulator;
