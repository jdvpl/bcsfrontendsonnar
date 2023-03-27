import React from 'react'
import Button from "../Button"
import Typography from "../Typography";
import HeaderForm from '../Headers/HeaderForm';
interface CardProps {
  urlsvg: string;
  altsvg?: string;
  title: React.ReactNode;
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
  text,
  textbtn,
  ImgClass,
  btnactivate,
  btnaction
}) => {
  return (
    <div>
      <HeaderForm />
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
        <Typography variant='h3' componentHTML='h3' typeFont='Bold' className='text-center mt-[52px] text-primario-900  '>
          {title}
        </Typography>
        <Typography variant='bodyM2' componentHTML='p' typeFont='Regular' className='text-center mt-3 text-primario-900 '>{text}</Typography>
        <div className="flex justify-center mt-8 mb-[20px]">
          {btnactivate ?
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
            : null
          }
        </div>
      </div>

    </div>
  )
};

export default ErrorLayout;
