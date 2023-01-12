import { useRouter } from 'next/router';
import React from 'react';
import { basePath } from '../../../next.config';
import Alert from '../../components/ui/Alert';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Headers/Header';
import Icons from '../../components/ui/icons';
import Card from '../../components/ui/simulation/Card';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { routes } from '../../routes';
import { SesionStorageKeys } from '../../session';

function ApplicationApproval() {
  const [dataInfo] = useSessionStorage(SesionStorageKeys.personalInfoDataBack.key, {});
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');

  const router = useRouter();
  return (
    <div>
      <Header />
      <div className="m-auto lg:w-[528px]">
        <div className="mt-[60px] lg:w-[455px] lg:h-[300px] md:w-[455px] md:h-[300px] sm:w-[303px] sm:h-[200px] xs:h-[200px] xs:w-[303px] m-auto ">
          <img src={`${basePath}/images/approvalSvg.svg`} alt="" />
        </div>
        <Typography
          variant="h1"
          className="text-center mt-[52px] text-primario-900 text-[32px] font-semibold"
        >
          ¡{dataInfo.firstName}, felicitaciones!
        </Typography>
        <Typography
          variant="h4"
          className="text-center mt-3 text-primario-900 text-[18px] font-semibold leading-[20px]"
        >
          Su crédito hipotecario
          <span className="block">ha sido aprobado</span>
        </Typography>
        <div className="mt-[44px]">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA] font-semibold rounded-[8px] m-auto"
            title="Monto aprobado"
            value="$ 105.000"
            text="text-[32px] pl-[16px] pt-2 flex items-baseline"
            urlsvg=""
            classtitle="h-[18px] pt-[16px] text-[16px] pl-0"
            subvalue="pesos"
            textsub="30"
            tooltiptext=""
            urlsvgendicon=""
          />
        </div>
        <div className="mt-3">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]  bg-[#F3F4F6] pt-[12px] pl-[16px] rounded-[8px] mb-[12px] font-light m-auto"
            title="Plazo"
            urlsvgendicon=""
            value="15 años"
            text="text-[20px] pl-[18px] font-semibold"
            urlsvg={`${basePath}/images/Calendar.svg`}
            classtitle="h-[14px] text-[13px]"
            tooltiptext=""
          />
        </div>
        {valuesMortgage?.choseOffice ? (
          <div className="mt-3">
            <Card
              className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]  bg-[#F3F4F6] pt-[12px] pl-[16px] rounded-[8px] mb-[12px] font-light m-auto"
              title="Continuación proceso"
              urlsvgendicon=""
              value={valuesMortgage?.office?.nameOffice}
              text="text-[20px] pl-[18px] font-semibold"
              urlsvg={`${basePath}/images/location.svg`}
              classtitle="h-[14px] text-[13px]"
              tooltiptext=""
            />
          </div>
        ) : null}
        <div className="mt-8 flex justify-center">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[438px]"
            type="submit"
            name="openQuotaSimulation"
            className="mb-8"
            data-testid="btn-Confirmation"
            tabIndex={0}
            id="btn-next"
          >
            <span className="font-semibold text-[18px]">
              <Icons icon="bcs-arrow-one-down" /> Carta de aprobación
            </span>
          </Button>
        </div>
        {/* <div className="sm:w-[350px] w-[293px] md:w-[398px] lg:w-[448px] m-auto">
          <Alert message="La carta de aprobación de su crédito y los próximos pasos serán enviados su correo registrado." />
        </div> */}
        <div className="mt-8 md:w-[440px] sm:w-[343px] w-[293px] m-auto">
          <Typography
            variant="bodyM3"
            className="text-center mt-3 text-primario-900 text-[18px] font-semibold leading-[20px]"
          >
            Conozca los próximos pasos <br />
            para el desembolso de su crédito
          </Typography>
        </div>
        <div className="listInitial md:w-[440px] sm:w-[343px] w-[293px] m-auto mt-8">
          <ul className="">
            <li className="mt-3 text-lg font-light">
              Enviaremos la carta de aprobación a su correo.
            </li>
            <li className="mt-3 text-lg font-light">
              Uno de nuestros asesores lo contactará para acompañarlo en los próximos
              pasos.
            </li>
            <li className="mt-3 text-lg font-light">
              Reúna la documentación e inicie el proceso de legalización. Avalúo, estudio
              de títulos y escrituración.
            </li>
            <li className="mt-3 text-lg font-light">
              Reciba su vivienda y disfrute de este sueño cumplido.
            </li>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] shadow-none border-0 m-auto font-semibold"
            onClick={() => router.push(routes.ratings)}
            name="solicitarCredito"
            data-testid="btn-openAccount1"
            tabIndex={0}
            id="btn-next"
            variant="secondary"
          >
            Salir
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ApplicationApproval;
