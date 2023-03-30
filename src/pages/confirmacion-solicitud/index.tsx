import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { basePath } from '../../../next.config';
import Alert from '../../components/ui/Alert';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Headers/Header';
import Icons from '../../components/ui/icons';
import { RatingModal } from '../../components/ui/Modal/ratingModal';
import Card, { typeFontsProps } from '../../components/ui/simulation/Card';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { routes } from '../../routes';
import { SesionStorageKeys } from '../../session';
import { convertToColombianPesos, downLoadPdf, invokeEvent } from '../../utils';
import useProtectedRoutes from '../../hooks/useProtectedRoutes';
import ExitModal from '../../components/commons/ExitModal';
import Modal from '../../components/ui/Modal';
import { useBackDetector } from '../../hooks/useBackDetector';
import { InactivityWarper } from '../../components/ui/wrapers/InactivityWarper';

function ApplicationApproval({ modalExit = false }: any) {
  const { setCurrentRouting } = useProtectedRoutes();
  const [dataInfo] = useSessionStorage(SesionStorageKeys.basicDataUser.key, {});
  const [valuesMortgage] = useSessionStorage(SesionStorageKeys.mortgageValues.key, '');
  const router = useRouter();
  const [showModalExit, setshowModalExit] = useState(modalExit);
  const [componentModalExit] = useState({
    children: <ExitModal setshowModalExit={setshowModalExit} />,
    title: (
      <Typography variant="h3" componentHTML="h3" typeFont="Bold">
        Está a punto de abandonar su solicitud
      </Typography>
    ),
    id: '',
  });
  const [applicationResponse] = useSessionStorage(
    SesionStorageKeys?.applicationResponse.key,
    {}
  );
  const [pdfData] = useSessionStorage(SesionStorageKeys.pdfData.key, {});

  const downloadPDF = async () => {
    const pdf = pdfData?.doc;
    const name = pdfData?.name;
    downLoadPdf(pdf, name);
  };
  const closeModalExit = () => {
    setshowModalExit(false);
  };
  useBackDetector(() => {
    setshowModalExit(true);
  }, router.asPath);

  const typeFontsPropsNormal: typeFontsProps = {
    variantTypographyTitle: 'bodyM2',
    typeFontTypograhyTitle: 'Bold',
    typeTagTypograhyTitle: 'p',
    variantDescriptionTypography: 'h1',
    typeDescriptionTagTypograhy: 'h1',
    typeFontDescriptionTypograhy: 'Bold',
  };
  useEffect(() => {
    invokeEvent('load_confirm_application', 'load_page');
  });

  return (
    <div>
      <InactivityWarper>
        <Header />
      </InactivityWarper>
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
          typeFont="Bold"
          componentHTML="h1"
          className="text-center mt-[52px] text-primario-900"
        >
          ¡{dataInfo.firstName}, felicitaciones!
        </Typography>
        <Typography
          variant="h4"
          componentHTML="h4"
          typeFont="Bold"
          className="text-center mt-3 text-primario-900"
        >
          Su crédito hipotecario
          <span className="block">ha sido preaprobado</span>
        </Typography>
        <div className="mt-[44px]">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px] h-[88px] bg-[#C4D1DA] rounded-[8px] m-auto"
            title="Monto preaprobado"
            value={`${convertToColombianPesos(
              applicationResponse?.finalOffer?.offer?.financeValue
            )} pesos`}
            text="md:text-[32px] text-[25px] pl-[16px] pt-2 flex items-baseline "
            urlsvg=""
            classtitle="h-[18px] pt-[16px]  pl-0 "
            textsub="32"
            tooltiptext=""
            altsvg="Monto preaprobado"
            urlsvgendicon=""
            typeFontProps={typeFontsPropsNormal}
          />
        </div>
        <div className="mt-3">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px]  h-[76px]  bg-[#F3F4F6] pt-[12px] pl-[16px] rounded-[8px] mb-[12px]  m-auto"
            title="Plazo"
            urlsvgendicon=""
            value={`${applicationResponse?.finalOffer?.offer?.termFinance} años`}
            text="pl-[18px] "
            urlsvg={`${basePath}/images/Calendar.svg`}
            classtitle="h-[14px] "
            tooltiptext=""
            altsvg="Plazo"
            typeFontProps={{
              ...typeFontsPropsNormal,
              ...{ variantTypographyTitle: 'caption1', typeFontTypograhyTitle: 'Light' },
            }}
          />
        </div>
        {/* {valuesMortgage?.choseOffice ? ( */}
        <div className="mt-3">
          <Card
            className="xs:w-[290px] sm:w-[343px] md:w-[448px]  min-h-[76px]  bg-[#F3F4F6] pt-[12px] pb-[12px] pl-[16px] pr-[16px] rounded-[8px] mb-[12px] m-auto"
            title="Continuación proceso"
            urlsvgendicon=""
            value={`${valuesMortgage?.office?.address
              ?.toLowerCase()
              .replace(/\b\w/g, (l: string) =>
                l.toUpperCase()
              )} - ${valuesMortgage?.office?.city
              ?.toLowerCase()
              .replace(/\b\w/g, (l: string) => l.toUpperCase())} `}
            text=" pl-[18px] "
            urlsvg={`${basePath}/images/location.svg`}
            classtitle="h-[14px]"
            tooltiptext=""
            altsvg="Continuación proceso"
            typeFontProps={{
              ...typeFontsPropsNormal,
              ...{ variantTypographyTitle: 'caption1', typeFontTypograhyTitle: 'Light' },
            }}
          />
        </div>
        {/* ) : null} */}

        <div className="mt-8 flex justify-center">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[438px]"
            type="submit"
            name="openQuotaSimulation"
            className="mb-8"
            data-testid="btn-Confirmation"
            tabIndex={0}
            onClick={downloadPDF}
            id="btn-next"
          >
            <Typography variant="bodyM3" typeFont="Bold" componentHTML="span">
              <Icons icon="bcs-icon-49" title="Preaprobación" /> Carta de preaprobación
            </Typography>
          </Button>
        </div>
        <Typography
          variant="bodyM3"
          componentHTML="div"
          className="sm:w-[350px] w-[293px] md:w-[398px] lg:w-[448px] m-auto"
        >
          <Alert message="La carta de preaprobación de su crédito y los próximos pasos serán enviados su correo registrado." />
        </Typography>
        <div className="mt-8 md:w-[440px] sm:w-[343px] w-[293px] m-auto">
          <Typography
            variant="bodyM3"
            typeFont="Regular"
            componentHTML="p"
            className="text-center mt-3 text-primario-900 "
          >
            Conozca los próximos pasos para el desembolso de su crédito
          </Typography>
        </div>
        <Typography
          variant="bodyM3"
          componentHTML="div"
          typeFont="Light"
          className="listInitial md:w-[440px] sm:w-[343px] w-[293px] m-auto mt-8  text-primario-900"
        >
          <ul className="">
            <li className="mt-3 text-lg ">
              Descargue la carta. Tenga presente que su preaprobación está sujeta a las
              políticas del Banco.
            </li>
            <li className="mt-3 text-lg ">
              Entregue la carta para formalizar la compra o separación del inmueble al
              vendedor.
            </li>
            <li className="mt-3 text-lg ">
              Realice la legalización del inmueble. (Avalúo, estudio de títulos y
              escrituración).
            </li>
            <li className="mt-3 text-lg">
              Reciba su nueva vivienda y disfrute de este sueño cumplido.
            </li>
          </ul>
        </Typography>
        <div className="mt-8 flex justify-center">
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] mb-[12px] shadow-none border-0 m-auto "
            onClick={() => {
              invokeEvent('get_out_confirm_offer', 'action_funnel');
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
