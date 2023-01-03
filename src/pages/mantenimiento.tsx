import React from 'react';
import type { NextPage } from 'next';
import { basePath } from '../../next.config';

import { ErrorLayout } from "../components/ui/error/errorScreen"

const Mantenimiento: NextPage = () => (
    <ErrorLayout altsvg='warning' title="Nos encontramos en mantenimiento" text={<p>Lo sentimos, estamos trabajando <br/> para brindarle un mejor servicio.</p>} urlsvg={`${basePath}/images/newError.svg`} textbtn="Banco Caja Social" ImgClass='mt-20 lg:h-[300px] md:w-[340px] md:h-[300px] sm:w-[245px] sm:h-[200px] xs:h-[200px] xs:w-[245px] m-auto pt-[15px]'/>
  );

export default Mantenimiento;
