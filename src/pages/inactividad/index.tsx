import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { NavTitle } from '../../components/commons/NavTitle';
import LogoBcs from '../../components/svg/LogoBcs';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Tipography';
import { routes } from '../../routes';

// width: 230.97px;
// height: 200px;

export default function InactivityScreen() {
  const router = useRouter();
  return (
    <div>
      <div className="pt-[40px] md:pt-[24px] px-[16px] md:px-[32px] ">
        <LogoBcs />
      </div>
      <div className="flex flex-col items-center w-[343px] pt-[60px] pb-[36px] mx-auto md:w-[528px] md:px-[10px]">
        <img
          src="/images/Inactivity.svg"
          className="w-[230.97px] h-[200px] mb-[62px] md:w-[346.45px] md:h-[300px]"
          alt="inactivity image"
        />

        <Typography
          variant="h3"
          className="text-center w-[343px] px-5 mb-[114.01px] md:mb-[42px]"
        >
          El proceso se ha cerrado por inactividad
        </Typography>

        <Button isLanding="w-[343px]" onClick={() => router?.push(routes?.home)}>
          Regresar al inicio
        </Button>
      </div>
    </div>
  );
}
