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
import { Icons } from '../components/ui';
import { Questions } from '../components/ui/Accordion';

export default function Home() {
  const [device, setDevice] = useSessionStorage(SesionStorageKeys.device.key, '');
  useEffect(() => {
    return () => {
      setDevice(deviceType);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="lg:bg-[url('../public/images/backgroundLg.svg')] xl:bg-[url('../public/images/backgroundLg.svg')] xxl:bg-[url('../public/images/backgroundLg.svg')] md:bg-[url('../public/images/backgroundMd.svg')] sm:bg-[url('../public/images/backgroundSm.svg')] xs:bg-[url('../public/images/backgroundSm.svg')] bg-no-repeat  -z-30 bg-cover xs:bg-bottom sm:bg-bottom md:bg-bottom lg:bg-top xl:bg-bottom xs:h-[540px] sm:h-[580px] md:h-[650px] lg:h-[715px] xl:h-[715px] xxl:bg-top xxl:h-[910px]">
        <div
          className=" container flex justify-start items-baseline xs:pt-3 xs:pl-2 sm:pt-3 ms:pl-2 md:pl-6 md:pt-6 lg:pt-5 lg:pl-10 xl:pt-5 xxl:pl-0 xxl:ml-20"
          itemScope
          itemProp="logo"
        >
          {device === "browser" ? <LogoBcs /> : <LogoBcsWhite />
          }
        </div>
        <div className="xs:pt-3 sm:pt-3 md:flex md:justify-end md:mr-[7rem] lg:flex lg:justify-center lg:mt-[6rem] lg:pl-[20rem] xxl:mt-[9rem] md:mt-[4rem]">
          <div className="md:flex md:flex-col">
            <p
              className="text-white font-normal xs:text-[24px] sm:text-[24px] leading-[30px] font-heading xs:ml-7 sm:ml-7 xs:mb-1 sm:mb-1"
            >
              Bienvenido a
            </p>
            <figure itemProp="logo" className="xs:ml-7 sm:ml-7 w-[280px] m-0 p-0 ">
              <LogoViviendaWhite />
            </figure>
          </div>
        </div>
        {/* title */}

        <div className="xs:flex sm:flex xs:justify-end sm:justify-end xs:pr-2 sm:pr-6 xs:pt-2 md:pr-[4.5rem] md:mt-5 xs:mt-5 lg:mt-[6px] sm:pt-5 lg:flex lg:justify-center lg:pl-[26rem] ">

          <div className="flex flex-col">
            <h4
              className="text-white xs:w-[170px] sm:w-[170px] md:w-[265px] lg:w-[394px] font-semibold text-[20px] leading-6 "
            >
              ¿Desea comprar vivienda, pero no sabe cómo iniciar?
            </h4>
            <p
              className="text-white xs:w-[170px] sm:w-[170px] md:w-[320px] lg:w-[394px]  font-light text-[18px] leading-5 mt-3"
            >
              El buen vecino le ayudará a lograr sus sueños, sin hacer las largas filas, ni
              papeleos extensos.
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-10 md:w-[90%] lg:w-[70%] xxl:w-[60%] md:grid md:grid-cols-3 md:mt-[5rem] gap-4 lg:mt-[5rem] xxl:mt-[12rem]" >
          <SelectiveCard
            icon="bcs-hand-mobile"
            size="text-[2.5rem]"
            color="text-primario-300"
            label={`Iniciar asesoría ${device !== "mobile" ? 'interactiva' : ''}`}
            description="Aquí encontrará todo lo que debe saber para comprar una vivienda."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4"
            onclick={true}
          />
          <SelectiveCard
            icon="bcs-hand-simbol"
            size="text-[2.5rem]"
            color="text-primario-300"
            label="Simule su crédito"
            description="Con nuestro simulador podrá calcular el valor del crédito y sus cuotas."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4"
            onclick={true}
          />
          <SelectiveCard
            icon="bcs-document-one"
            size="text-[2.5rem]"
            color="text-primario-300"
            label="Solicite su crédito"
            description="Obtenga la aprobación de su crédito en línea y compre la vivienda que desea."
            pathTo={routes.startProccess}
            className="sm:mt-4 xs:mt-4" onclick={true} />
        </div>
      </div>
      <div className="xs:mt-[17rem] sm:mt-[15rem] md:mt-[87px] lg:mt-[42px] bg-gris-90 pb-10">
        <Typography variant="h2" className="text-center sm:my-[3rem] xs:my-[3rem] lg:mt-[42px] xlmt-[42px] md:pt-[80px] lg:pt-[80px] lg:mb-[64px]">
          Requisitos
        </Typography>
        <div className="md:grid md:grid-cols-9 gap-3 md:w-10/12 lg:w-4/5 container place-items-center lg:mb-[40px]">
          <SelectiveCard description='Tener entre 18 y 69 años.' onclick={false} hasTitle={false} icon='bcs-document-18' color='text-primario-300' size='text-[1.6rem]' className='col-span-4 sm:mb-3 xs:mb-3 md:mb-0' />
          <div className="md:h-[46px] bg-complementario-70 md:w-[2px] md:pb-4"></div>

          <SelectiveCard description='Pagar salud y pensión.' onclick={false} hasTitle={false} icon='bcs-hand-money' color='text-primario-300' size='text-[2rem]' className='col-span-4 sm:mb-3 xs:mb-3 md:mb-0' />

          <SelectiveCard description='Ser asalariado o pensionado.' onclick={false} hasTitle={false} icon='bcs-user-job' color='text-primario-300' size='text-[2rem]' className='col-span-4 sm:mb-3 xs:mb-3 md:mb-0' />
          <div className="md:h-[46px] bg-complementario-70 md:w-[2px] md:pb-4 md:align-middle align-middle"></div>
          <SelectiveCard description='Tener el celular a la mano.' onclick={false} hasTitle={false} icon='bcs-mobile-grade' color='text-primario-300' size='text-[2rem]' className='col-span-4 sm:mb-3 xs:mb-3 md:mb-0' />
        </div>
      </div>
      {/* steps  */}
      <div className="container bg-white relative">
        <Typography variant='h2' className='text-center lg:mt-[84px] lg:mb-[64px]'>
          En 4 pasos solicite su <span className="md:block">Crédito de Vivienda Digital</span>
        </Typography>
        <div className="grid sm:grid-cols-2 xs:grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="bg-gris-80 sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons icon="bcs-push" size='text-[2.5rem]' color="text-primario-300" />
            </div>
            <div className="flex justify-center ">
              {/* number */}
              <div className="flex justify-center mt-4 relative w-[88px] lg:mr-6">
                <Typography variant="h1" className='text-primario-300 flex'>
                  1
                </Typography>
                <span className="rounded-full border border-complementario-100 absolute top-[-4px] xs:right-[0.5rem] sm:right-[0.5rem] right-[7.2rem] w-[16px]h-[16px]"><Icons icon='bcs-check' color='text-secundario-20' iconclassNames='' /></span>
              </div>
              {/* number */}
            </div>
            <Typography variant="bodyS3" className="lg:mt-[16px] text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[85px] xs:w-[85px] lg:w-[155px]">
              Ingrese a <span className='xs:block sm:block'>“Solicitar Crédito”</span>
            </Typography>
          </div>
          {/* second card */}
          <div>
            <div className="bg-gris-80 sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons icon="bcs-women-check" size='text-[2.5rem]' color="text-primario-300" />
            </div>
            <div className="flex justify-center">
              {/* number */}
              <div className="flex justify-center mt-4 relative w-[88px] lg:mr-5">
                <Typography variant="h1" className='text-primario-300 flex'>
                  2
                </Typography>
                <span className="rounded-full border border-complementario-100 absolute top-[-4px] xs:right-[0.5rem] sm:right-[0.5rem] right-[7.2rem] w-[16px]h-[16px]"><Icons icon='bcs-check' color='text-secundario-20' iconclassNames='' /></span>
              </div>
              {/* number */}
            </div>
            <Typography variant="bodyS3" className="lg:mt-[16px] text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[92px] xs:w-[92px]">
              Valide <span className="xs:block sm:block">
                su identidad
              </span>
            </Typography>
          </div>
          <div>
            <div className="bg-gris-80 sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons icon="bcs-hand-mobile" size='text-[2.5rem]' color="text-primario-300" />
            </div>
            <div className="flex justify-center">
              {/* number */}
              <div className="flex justify-center mt-4 relative w-[88px] lg:mr-5">
                <Typography variant="h1" className='text-primario-300 flex'>
                  3
                </Typography>
                <span className="rounded-full border border-complementario-100 absolute top-[-4px] xs:right-[0.5rem] sm:right-[0.5rem] right-[7.2rem] w-[16px]h-[16px]"><Icons icon='bcs-check' color='text-secundario-20' iconclassNames='' /></span>
              </div>
              {/* number */}
            </div>
            <Typography variant="bodyS3" className="lg:mt-[16px] text-complementario-100 text-center flex justify-center m-auto flex-col sm:w-[92px] xs:w-[92px]">
              Diligencie <span className="block">el formulario</span>
            </Typography>
          </div>
          <div>
            <div className="bg-gris-80 sm:w-[88px] xs:w-[88px] sm:h-[96px] xs:h-[96px] m-auto flex justify-center rounded-md p-5">
              <Icons icon="bcs-mobile-check" size='text-[2.5rem]' color="text-primario-300" />
            </div>
            <div className="flex justify-center lg:mr-3">
              {/* number */}
              <div className="flex justify-center mt-4 relative w-[88px] lg:mr-4">
                <Typography variant="h1" className='text-primario-300 flex'>
                  4
                </Typography>
                <span className="rounded-full border border-complementario-100 absolute top-[-4px] xs:right-[0.5rem] sm:right-[0.5rem] right-[7.2rem] w-[16px]h-[16px]"><Icons icon='bcs-check' color='text-secundario-20' iconclassNames='' /></span>
              </div>
              {/* number */}
            </div>
            <Typography variant="bodyS3" className="lg:mt-[16px] text-complementario-100 text-center flex justify-center flex-col">
              Obtenga  <span className="block">
                la aprobación
              </span>
            </Typography>
          </div>
        </div>
      </div>
      {/* beneficios */}
      <div className=''>
        <Typography variant="h2" className='mt-[84px] text-center lg:mb-[105px]'>Beneficios</Typography>
        <div className="bg-gris-80 md:grid md:grid-cols-2 sm:grid sm:grid-col-1 xs:mt-[12rem] md:mt-[5rem] relative md:h-[412px] gap-10">
          <div className="relative xs:top-[-150px] md:top-[-25px] flex justify-center md:justify-end ">
            <img src="/images/beneficios.png" alt="img-card"
              className='w-[302px] h-[420px] md:h-[450px]'
            />
          </div>

          <div className="listInitial lg:w-[378px] relative block mx-5 top-[-140px] md:top-0 ">
            <ul>
              <li className="text-[20px] font-light leading-[22px] mt-[64px] text-complementario-100">Aprobación inmediata en línea</li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">Extensión del subsidio FRECH durante toda la vigencia del crédito</li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">Sin documentación física</li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">Para clientes y no clientes</li>
              <li className="text-[20px] font-light leading-[22px] mt-8 text-complementario-100">Abonos extraordinarios a capital para reducir el plazo o el valor de la cuota</li>
            </ul>
          </div>
        </div>
      </div>
      {/* questions */}
      <div className="mx-3 md:mx-[92px] lg:mt-[10px]">

        <Questions />
      </div>
    </div>
  );
}
