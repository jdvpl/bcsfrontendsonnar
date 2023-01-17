// import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import LogoBcs from "../../svg/LogoBcs"
import Icons from "../icons";
import LogoForm from "../../svg/LogoForm"
import Button from "../Button"
import Typography from "../Typography";
import { routes } from '../../../routes';


interface CardProps {
  urlsvg: string;
  altsvg?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  textbtn: string;
  ImgClass: string;
  btnactivate?:boolean;
  btnaction?:any;
}

export const ErrorLayout: React.FC<CardProps> = ({
  urlsvg,
  altsvg,
  title,
  text,
  textbtn,
  ImgClass,
  btnactivate,
  btnaction
}) => {
  const router = useRouter();
  return (
    <div>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="xs:block sm:block lg:hidden mt-4 cursor-pointer" onClick={() => router.back()} data-testid="getbackRouteTest">
          <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
      </div>
      <div className="m-auto lg:w-[528px]">
        <div className={ImgClass}>
          <img
            data-testid='ImageError'
            role="imageError"
            src={urlsvg}
            alt={altsvg}
            title={altsvg}
          />
        </div>
        <Typography variant='h3' className='text-center mt-[52px] text-primario-900 font-[24px]'>
          {title}
        </Typography>
        <Typography variant='bodyM4' className='text-center mt-3 text-primario-900 font-[18px]'>{text}</Typography>
        <div className="flex justify-center mt-8 mb-[20px]">
          { btnactivate ?
          <Button
          isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
          type="submit"
          name="Inicio"
          data-testid="btnOnboarding"
          onClick={btnaction}
          id="btn-next"
        >
          {textbtn}
        </Button>
        :null
        }
          
        </div>
      </div>

    </div>
  )
};

export default ErrorLayout;
