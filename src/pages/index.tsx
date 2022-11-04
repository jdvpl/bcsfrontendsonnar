import LogoBcsWhite from '../components/svg/LogoBcsWhite';
import Typography from '../components/ui/Tipography';
import { deviceType } from 'react-device-detect';
import { useSessionStorage } from '../hooks/useSessionStorage';
import { SesionStorageKeys } from '../session';
import { useEffect } from 'react';
import LogoViviendaWhite from '../components/svg/LogoViviendaWhite';
import SelectiveCard from '../components/ui/Card/SelectiveCard';
import { routes } from '../routes';
import LogoBcs from '../components/svg/LogoBcs';

export default function Home() {
  const [device, setDevice] = useSessionStorage(SesionStorageKeys.device.key, '');
  useEffect(() => {
    return () => {
      setDevice(deviceType);
    };
  }, []);

  return (
    <div>
      <div className="lg:bg-[url('../public/images/backgroundLg.svg')] xl:bg-[url('../public/images/backgroundLg.svg')] xxl:bg-[url('../public/images/backgroundLg.svg')] md:bg-[url('../public/images/backgroundMd.svg')] sm:bg-[url('../public/images/backgroundSm.svg')] xs:bg-[url('../public/images/backgroundSm.svg')] bg-no-repeat  -z-30 bg-cover xs:bg-bottom sm:bg-bottom md:bg-bottom lg:bg-top xl:bg-bottom xs:h-[540px] sm:h-[580px] md:h-[650px] lg:h-[715px] xl:h-[715px] xxl:bg-top xxl:h-[910px]">
        <div
          className=" container flex justify-start items-baseline xs:pt-3 xs:pl-2 sm:pt-3 ms:pl-2 md:pl-6 md:pt-6 lg:pt-5 lg:pl-10 xl:pt-5 xxl:pl-0 xxl:ml-20"
          itemScope
          itemProp="logo"
        >
          {device==="browser" ? <LogoBcs/>: <LogoBcsWhite />
          }
        </div>
        <div className="xs:pt-3 sm:pt-3 md:flex md:justify-end md:mr-[7rem] lg:flex lg:justify-center lg:mt-[6rem] lg:pl-[20rem] xxl:mt-[9rem] md:mt-[4rem]">
          <div className="md:flex md:flex-col">
            <Typography
              variant="bodyM1"
              className="text-white font-normal xs:text-[24px] sm:text-[24px] leading-[30px] font-heading xs:ml-7 sm:ml-7 xs:mb-1 sm:mb-1"
            >
              Bienvenido a
            </Typography>
            <figure itemProp="logo" className="xs:ml-7 sm:ml-7 w-[280px]">
              <LogoViviendaWhite />
            </figure>
          </div>
        </div>
        {/* title */}

        <div className="xs:flex sm:flex xs:justify-end sm:justify-end xs:pr-2 sm:pr-6 xs:pt-2 md:pr-[4.5rem] md:mt-5 xs:mt-5 sm:pt-5 lg:flex lg:justify-center lg:pl-[26rem]">

        <div className="flex flex-col">
        <Typography
            variant="h4"
            className="text-white xs:w-[170px] sm:w-[170px] md:w-[265px] lg:w-[394px] font-semibold text-[20px] leading-6"
          >
            ¿Desea comprar vivienda, pero no sabe cómo iniciar?
          </Typography>
          <Typography
            variant="bodyM4"
            className="text-white xs:w-[170px] sm:w-[170px] md:w-[320px] lg:w-[394px]  font-light text-[18px] leading-5 mt-3"
          >
            El buen vecino le ayudará a lograr sus sueños, sin hacer las largas filas, ni
            papeleos extensos.
          </Typography>
          </div>
        </div>
        <div className="container mx-auto mt-10 md:w-[90%] lg:w-[70%] xxl:w-[60%] md:grid md:grid-cols-3 md:mt-[5rem] gap-4 lg:mt-[5rem]" >
          <SelectiveCard
            icon="bcs-hand-money"
            size="text-[2.5rem]"
            color="text-primario-300"
            label={`Iniciar asesoría ${device!=="mobile" ? 'interactiva' :''}`}
            description="Aquí encontrará todo lo que debe saber para comprar una vivienda."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4"
          />
          <SelectiveCard
            icon="bcs-hand-money"
            size="text-[2.5rem]"
            color="text-primario-300"
            label="Simule su crédito"
            description="Con nuestro simulador podrá calcular el valor del crédito y sus cuotas."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4"
          />
          <SelectiveCard
            icon="bcs-document"
            size="text-[2.5rem]"
            color="text-primario-300"
            label="Solicite su crédito"
            description="AObtenga la aprobación de su crédito en línea y compre la vivienda que desea."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4"
          />
        </div>
      </div>
      <pre className="mt-60">{device}</pre>
    </div>
  );
}
