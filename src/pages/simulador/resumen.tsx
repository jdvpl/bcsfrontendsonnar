import React, { useState } from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import Typography from '../../components/ui/Tipography'

const resumen = () => {
  const [simulatioTypeOption, setsimulatioTypeOption] = useState<"house" | "salary">("house")
  return (
    <div>
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className='mt-4'>
          <LogoForm />
        </div>
      </div>
      <div className="lg:w-[684px] md:w-[584px] w-[343px] m-auto">
        <Typography variant="h2" className="mt-8 text-center">
          Simulador del crédito
        </Typography>
        <div>
          <Typography variant="bodyS3" className="text-center lg:mt-[52px] pmx-3 text-primario-900">
            A través de nuestro simulador podrá realizar los cálculos necesarios para conocer los valores aproximados relacionados con el crédito de vivienda.
          </Typography>
        </div>
        <div className="flex gap-3 my-5">
          <button type="button" disabled={simulatioTypeOption === 'salary' ? true: false} className={simulatioTypeOption === 'house' ? `w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none` : `w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`} onClick={() => setsimulatioTypeOption('house')}>Valor de vivienda</button>
          <button type="button" disabled={simulatioTypeOption === 'house' ? true: false} className={simulatioTypeOption === 'salary' ? `w-full max-w-[23.438rem] rounded h-[3rem] transition-all duration-500 text-white bg-primario-100 hover:bg-primario-400 focus:bg-primario-400 focus:text-primario-60 focus:shadow-none shadow-none` : `w-full max-w-[23.438rem] rounded h-[3rem] text-complementario-70 bg-gris-90 shadow-none`} onClick={() => setsimulatioTypeOption('salary')}>Cuota que puedo pagar</button>
        </div>
        
      </div>

    </div>
  )
}

export default resumen