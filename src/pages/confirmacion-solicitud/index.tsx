import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { basePath } from '../../../next.config';
import Alert from '../../components/ui/Alert';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Headers/Header';
import Icons from '../../components/ui/icons';
import { RatingModal } from '../../components/ui/Modal/ratingModal';
import Card from '../../components/ui/simulation/Card';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { routes } from '../../routes';
import { SesionStorageKeys } from '../../session';
import { convertToColombianPesos } from '../../utils';
import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import useDownloadPdf from '../../hooks/useDownloadPdf';
import ExitModal from '../../components/commons/ExitModal';
import Modal from '../../components/ui/Modal';
import { useBackDetector } from '../../hooks/useBackDetector';


function ApplicationApproval({ modalExit = false }: any) {
  const { setCurrentRouting } = useProtectedRoutes();
  const [dataInfo] = useSessionStorage(SesionStorageKeys.basicDataUser.key, {});
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');
  const [dataQuestions] = useSessionStorage(SesionStorageKeys.DataQuestions.key, '');
  const [dataTU] = useSessionStorage(SesionStorageKeys.dataUser.key, '');
  const router = useRouter();
  const { getPdf } = useDownloadPdf(dataQuestions, dataTU, valuesMortgage);
  const [showModalExit, setshowModalExit] = useState(modalExit);
  const [componentModalExit,] = useState({
    children: <ExitModal setshowModalExit={setshowModalExit} />,
    title: <span className='md:text-[28px] font-poppinsSemiBold'>Está a punto de abandonar su solicitud</span>,
    id: '',
  });
  const closeModalExit = () => {
    setshowModalExit(false);
  };
  useBackDetector(() => {
    setshowModalExit(true)
  }, router.asPath);

  return (
    <div>
      <Header />
      <RatingModal />

      {showModalExit && (
        <Modal
          showModal={showModalExit}
          onClose={() => closeModalExit()}
          compont={componentModalExit}
          advisory
          heightModal="lg:h-[70%]"
        />
      )}
      <div className="m-auto lg:w-[528px]">
        <div className="mt-[60px] lg:w-[455px] lg:h-[300px] md:w-[455px] md:h-[300px] sm:w-[303px] sm:h-[200px] xs:h-[200px] xs:w-[303px] m-auto ">
          <img src={`${basePath}/images/approvalSvg.svg`} alt="" />
        </div>
        <Typography
          variant="h1"
          className="text-center mt-[52px] text-primario-900 text-[32px] font-semibold font-poppinsSemiBold"
        >
          ¡{dataInfo.firstName}, felicitaciones!
        </Typography>
        <Typography
          variant="h4"
          className="text-center mt-3 text-primario-900 text-[18px] font-semibold leading-[20px] font-poppinsSemiBold"
        >
          Su crédito hipotecario
          <span className="block">ha sido preaprobado</span>
        </Typography>
        <div className="mt-[44px]">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[88px]  bg-[#C4D1DA] font-semibold rounded-[8px] m-auto"
            title="Monto preaprobado"
            value={`${convertToColombianPesos(valuesMortgage?.financeValue)}`}
            text="md:text-[32px] text-[25px] pl-[16px] pt-2 flex items-baseline font-poppinsSemiBold"
            urlsvg=""
            classtitle="h-[18px] pt-[16px] text-[16px] pl-0 font-poppinsSemiBold"
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
            text="text-[20px] pl-[18px] font-semibold font-poppinsSemiBold"
            urlsvg={`${basePath}/images/Calendar.svg`}
            classtitle="h-[14px] text-[13px] font-montserratRegular"
            tooltiptext=""
          />
        </div>
        {valuesMortgage?.choseOffice ? (
          <div className="mt-3">
            <Card
              className="xs:w-[290px] sm:w-[343px] md:w-[448px]  min-h-[76px]  bg-[#F3F4F6] pt-[12px] pb-[12px] pl-[16px] pr-[16px] rounded-[8px] mb-[12px] font-light m-auto"
              title="Continuación proceso"
              urlsvgendicon=""
              value={`${valuesMortgage?.office?.address
                ?.toLowerCase()
                .replace(/\b\w/g, (l: string) =>
                  l.toUpperCase()
                )} - ${valuesMortgage?.office?.city
                  ?.toLowerCase()
                  .replace(/\b\w/g, (l: string) => l.toUpperCase())} `}
              text="text-[20px] pl-[18px] font-semibold font-poppinsSemiBold"
              urlsvg={`${basePath}/images/location.svg`}
              classtitle="h-[14px] text-[13px] font-montserratRegular"
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
            onClick={getPdf}
            id="btn-next"
          >
            <span className="font-medium font-monserratLight text-[18px]">
              <Icons icon="bcs-arrow-one-down" /> Carta de preaprobación
            </span>
          </Button>
        </div>
        <div className="sm:w-[350px] w-[293px] md:w-[398px] lg:w-[448px] m-auto font-montserratRegular">
          <Alert message="La carta de preaprobación de su crédito y los próximos pasos serán enviados su correo registrado." />
        </div>
        <div className="mt-8 md:w-[440px] sm:w-[343px] w-[293px] m-auto">
          <Typography
            variant="bodyM3"
            className="text-center mt-3 text-primario-900 text-[18px] font-semibold leading-[20px] font-montserratRegular"
          >
            Conozca los próximos pasos <br />
            para el desembolso de su crédito
          </Typography>
        </div>
        <div className="listInitial md:w-[440px] sm:w-[343px] w-[293px] m-auto mt-8 font-montserratRegular text-primario-900">
          <ul className="">
            <li className="mt-3 text-lg font-light">
              Descargue la carta de preaprobación.
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
            onClick={() => {
              setCurrentRouting(routes.approvalDataPage, false);
              router.push(routes.home);
            }}
            name="solicitarCredito"
            data-testid="btnGetOut"
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
