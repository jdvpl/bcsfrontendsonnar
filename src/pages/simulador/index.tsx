import React, { useEffect } from 'react';
import FormQuota from '../../components/ui/Form/FormQuota';
import Typography from '../../components/ui/Typography';
import HouseSimulator from '../../components/ui/Form/houseSimulator/HouseSimulator';
import useSimulatorHouse from '../../hooks/useSimulatorHouse';
import { invokeEvent } from '../../utils';
import Header from '../../components/ui/Headers/Header';

export const cardTextStyles = 'text-[20px] pl-[23px] font-semibold font-poppinsSemiBold';
function Simulator() {
  const { simulatioTypeOption, setsimulatioTypeOption, onSubmit, isLoading } = useSimulatorHouse();
  useEffect(() => {
    invokeEvent('load_simulator', 'load_page');
  }, []);
  return (
    <div data-testid="simuladorTestC">
    <Header/>
      <div className="lg:w-[684px] md:w-[584px] sm:w-[343px] w-[290px] m-auto" role="tabpanel" tabIndex={0}>
        <Typography componentHTML='h3' typeFont='Bold' variant='h2' className="mt-8 text-center  md:text-[28px] text-[20px]">
          Simulador del crédito
        </Typography>
        <div>
          <Typography variant='bodyM3' componentHTML='p' className="text-center mt-2 pmx-3 text-primario-900 ">
          Realice los cálculos necesarios y conozca los valores aproximados 
            <span className='inline lg:block'> {" "}
            del crédito de vivienda con amortización en pesos.
            </span>
          </Typography>
        </div>
        <div className="flex gap-1 md:mb-6  mt-8 lg:mt-[52px] w-[290px] sm:w-[343px] md:w-[584px] lg:w-[684px] mx-auto  ">
          <button
            data-testid="houseTestBtn"
            type="button"
            className={
              simulatioTypeOption === 'house'
                ? `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                : `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
            }
            onClick={() => setsimulatioTypeOption('house')}
            title="Valor de vivienda"
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
            title="Cuanto me prestan"
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
