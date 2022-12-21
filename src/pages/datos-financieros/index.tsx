import React from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import FinancialDataForm from '../../components/ui/Form/FinancialDataForm/FinancialDataForm'
import Stepper from '../../components/ui/Stepper'
import Typography from '../../components/ui/Typography'

const FinancialData = () => {
  return (
    <div data-testid="PersonalDataTest">
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
      </div>
      <div className="lg:w-[684px] md:w-[584px] w-[343px] m-auto">
        <Stepper
          steps={4}
          actualStep={2}
          percentage={100}
          className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[64px] xs:mb-[36px] md:mb-[53px]"
          title="Datos financieros"
        />
        <Typography variant="h2" className="mt-8 text-center">
          Ingrese sus datos laborales y financieros
        </Typography>
        <div className="flex gap-1 my-8 w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <FinancialDataForm />
        </div>

      </div>
    </div>
  )
}

export default FinancialData