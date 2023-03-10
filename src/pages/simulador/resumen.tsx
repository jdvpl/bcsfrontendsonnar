import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import Typography from '../../components/ui/Typography';
import ReviewHouse from '../../components/ui/simulation/reviewHouse';
import ReviewSalary from '../../components/ui/simulation/reviewSalary';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import Button from '../../components/ui/Button/index';
import { convertToColombianPesos } from '../../utils/index';
import { urlAndUtms } from '../../utils/RouterUtmsUrl';
import { getDataPDF } from '../../services';
import { SesionStorageKeys } from '../../session';
import CheckLoader from '../../components/ui/Loaders/CheckLoader';
import { routes } from '../../routes';

const intialDataPdfInfo = {
  approximateFinancedValue: 0,
  term: 0,
  rate: '',
  quotes: [],
};
function Resumen() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [simulationTypeOption, setsimulatioTypeOption] = useState<any>('');
  const [simulationType] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    ''
  );
  const [insuranceCheck] = useSessionStorage(
    SesionStorageKeys.dataFormSimulation.key,
    ''
  );
  const [getDataPdfInfo, setgetDataPdfInfo] = useState(intialDataPdfInfo);
  const [valuesSimulation,] = useSessionStorage(
    SesionStorageKeys.dataFormSimulationResponse.key,
    ''
  );
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setsimulatioTypeOption(simulationType.simulationType.toString());
    getDataPDf();
  }, []);

  const getDataPDf = async () => {
    const response = await getDataPDF(insuranceCheck);
    if (!response.error) {
      setgetDataPdfInfo(response.response.data);
    }
  };
  return (
    <div>
      {isLoading ? (
        <CheckLoader />
      ) : (
        <>
          <div className="container flex lg:mt-[0] xs:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
            <div className="mt-4  hidden lg:block">
              <LogoBcs />
            </div>
            <div className="mt-4 w-[180px] lg:w-[303px] mb-[24px] mr-[16px]">
              <LogoForm />
            </div>
          </div>
          <div className=" xs:w-[290px] sm:w-[343px]  lg:w-[684px] md:w-[584px] m-auto">
            <h2 className="mt-8 text-center ont-poppinsSemiBold font-semibold md:text-[28px] text-[20px]">
              Simulador del crédito
            </h2>
            <div>
              <p className="text-center mt-2 pmx-3 text-primario-900 font-montserratRegular font-normal leading-[18px] text-[16px]">
                Los valores presentados en el simulador son aproximados y únicamente
                informativos, no constituyen ningún tipo de asesoría, ni obligan al Banco
                en su calidad de emisor.
              </p>
            </div>
            <div className="flex gap-1 mb-5 md:mt-[41px] mt-9">
              <button
                type="button"
                disabled={simulationTypeOption === 'salary'}
                className={
                  simulationTypeOption === 'house'
                    ? `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                    : `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-l-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
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
                    ? `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400  shadow-none`
                    : `font-montserratRegular font-medium button-shadow text-[12px] leading-[14px] w-full max-w-[23.438rem] rounded-r-lg h-[3rem] text-complementario-70 bg-gris-90 shadow-none`
                }
                onClick={() => setsimulatioTypeOption('salary')}
              >
                Cuanto me prestan
              </button>
            </div>
            {simulationTypeOption === 'house' && insuranceCheck.insuranceCheck ? (
              <ReviewHouse
                monthlyCouteInsurance={`${convertToColombianPesos(
                  Math.floor(
                    valuesSimulation.monthlyCoute +
                    valuesSimulation.lifeInsurance +
                    valuesSimulation.fireInsurance
                  )
                )}`}
                monthlyCoute={`${convertToColombianPesos(
                  Math.floor(valuesSimulation.monthlyCoute)
                )}`}
                financedValue={`${convertToColombianPesos(
                  Math.floor(valuesSimulation.financeValue)
                )}`}
                termFinance={`${valuesSimulation.termFinance} años`}
                rate={`${valuesSimulation?.rate?.toString()?.replace('.', ',')}% EA`}
                lifeInsurance={`${convertToColombianPesos(
                  valuesSimulation.lifeInsurance
                )}`}
                fireInsurance={`${convertToColombianPesos(
                  valuesSimulation.fireInsurance
                )}`}
                dataPdf={getDataPdfInfo}
              />
            ) : null}
            {simulationTypeOption === 'salary' && insuranceCheck.insuranceCheck ? (
              <ReviewSalary
                financedValue={`${convertToColombianPesos(
                  Math.floor(valuesSimulation.financeValue)
                )}`}
                amountQuota={`${convertToColombianPesos(
                  Math.floor(valuesSimulation.amountQuota)
                )}`}
                amountQuotatotal={`${convertToColombianPesos(
                  Math.floor(
                    valuesSimulation.amountQuota +
                    valuesSimulation.lifeInsurance +
                    valuesSimulation.fireInsurance
                  )
                )}`}
                termFinance={`${valuesSimulation.termFinance} años`}
                rate={`${valuesSimulation?.rate?.toString()?.replace('.', ',')}% EA`}
                lifeInsurance={`${convertToColombianPesos(
                  valuesSimulation.lifeInsurance
                )}`}
                fireInsurance={`${convertToColombianPesos(
                  valuesSimulation.fireInsurance
                )}`}
                dataPdf={getDataPdfInfo}
              />
            ) : null}

            <div className="flex flex-col items-center gap-y-5">
              <Button
                isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] shadow-none"
                onClick={() => urlAndUtms(router, routes.startProccess)}
                name="solicitarCredito"
                data-testid="btn-openAccount1"
                tabIndex={0}
                id="btn-next"
              >
                <span className="text-[16px] font-medium">Solicitar crédito</span>
              </Button>
              <Button
                isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] border-primario-100"
                onClick={() => urlAndUtms(router, routes.simulador)}
                name="solicitarCredito"
                data-testid="btn-openAccount1"
                tabIndex={0}
                id="btn-next"
                className="border-2 border-primario-100"
                variant="secondary"
              >
                <span className="text-[16px] font-medium">
                  Volver a simular
                </span>
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Resumen;
