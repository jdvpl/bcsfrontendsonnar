import Head from 'next/head';
import Link from 'next/link';
import { routes } from '../routes';

export default function Home() {
  return (
    <div>
      <div className="lg:bg-[url('../public/images/backgroundLg.svg')] md:bg-[url('../public/images/backgroundMd.svg')] sm:bg-[url('../public/images/backgroundSm.svg')] absolute top-0 left-0 bg-repeat-round  w-full min-w-full bg-cover h-[320px] sm:h-[334px] md:h-[540px] lg:h-[506px] -z-30" />
      <Link href={routes.startProccess}>Inicio de soliciutd</Link>
      <br />
      <Link href={routes.ratings}>Calificacion de solicitud</Link>
      <br />
      <Link href={routes.otp}>Validacion otp</Link>
      <br />
      <Link href={routes.validacionIdentidad}>Validacion identidad</Link>
    </div>
  );
}
