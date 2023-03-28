import React from 'react';
import Button from '../Button';
import Typography from '../Typography';
import HeaderForm from '../Headers/HeaderForm';
import Head from 'next/head';
interface CardProps {
  urlsvg: string;
  altsvg?: string;
  title: React.ReactNode;
  titlePage: string;
  text: React.ReactNode;
  textbtn: string;
  ImgClass: string;
  btnactivate?: boolean;
  btnaction?: any;
}

export const ErrorLayout: React.FC<CardProps> = ({
  urlsvg,
  altsvg,
  title,
  titlePage,
  text,
  textbtn,
  ImgClass,
  btnactivate,
  btnaction,
}) => {
  return (
    <div>
      <Head>
        <title>{titlePage} - BCS Crédito Hipotecario</title>
      </Head>
      <HeaderForm />
      <div className="m-auto lg:w-[528px]">
        <div className={ImgClass}>
          <img data-testid="ImageError" src={urlsvg} alt={altsvg} title={altsvg} />
        </div>
        <div role="tabpanel" tabIndex={0}>
          <Typography
            variant="h3"
            typeFont="Bold"
            className="text-center mt-[52px] text-primario-900 font-[24px] font-poppinsSemiBold text-[24px]"
          >
            {title}
          </Typography>
          <Typography
            variant="bodyM2"
            typeFont="Regular"
            className="text-center mt-3 text-primario-900 font-[18px] font-montserratRegular"
          >
            {text}
          </Typography>
        </div>
        <div className="flex justify-center mt-8 mb-[20px]">
          {btnactivate ? (
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
              type="submit"
              name="Inicio"
              data-testid="btnOnboarding"
              onClick={btnaction}
              id="btn-next"
              className="font-montserratMedium text-[16px]"
            >
              {textbtn}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
