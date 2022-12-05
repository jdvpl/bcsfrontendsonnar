import Image from 'next/image';
import LogoBcs from '../../../components/svg/LogoBcs'
import Icons from '../../../components/ui/icons';
import LogoForm from '../../../components/svg/LogoForm'
import Button from '../../../components/ui/Button'
import Typography from '../../../components/ui/Typography';
import { useRouter } from 'next/router';
import { routes } from '../../../routes';



interface CardProps {
  urlsvg: string;
  altsvg?: string;
  title: React.ReactNode;
  text: React.ReactNode;
  textbtn:string;
  width:string;
  heigth:string
}

export const ErrorLayout: React.FC<CardProps> = ({
  urlsvg,
  altsvg,
  title,
  text,
  textbtn,
  width,
  heigth
}) => {
  const router = useRouter();
  return (
    <div>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-between">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="xs:block sm:block lg:hidden mt-4 cursor-pointer" onClick={() => router.back()}>
          <Icons icon='bcs-arrow-one-left' size="text-[1.2rem]" />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
        </div>
        <div className="m-auto lg:w-[528px]">
          <div className="mt-20 flex justify-center">
            <Image
              unoptimized
              src={urlsvg}
              alt={altsvg}
              title={altsvg}
              width={width}
              height={heigth}
            />
          </div>
          <Typography variant='h3' className='text-center mt-[52px] text-primario-900 font-[24px]'>
            {title}
          </Typography>
          <Typography variant='bodyM4' className='text-center mt-3 text-primario-900 font-[18px]'>{text}</Typography>
          <div className="flex justify-center mt-8 mb-[20px]">
            <Button
              isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[375px] "
              type="submit"
              name="abrirCuenta"
              data-testid="btnOnboarding"
              onClick={() => router.push(routes.startProccess)}
              id="btn-next"
            >
              {textbtn}
            </Button>
          </div>
        </div>
      
    </div>
  )
};

export default ErrorLayout;
