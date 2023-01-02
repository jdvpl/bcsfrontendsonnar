import React from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import FinancialDataForm from '../../components/ui/Form/FinancialDataForm/FinancialDataForm'
import Header from '../../components/ui/Headers/Header'
import HeaderForm from '../../components/ui/Headers/HeaderForm'
import Stepper from '../../components/ui/Stepper'
import Typography from '../../components/ui/Typography'

function FinancialData() {
  return (
    <div data-testid="PersonalDataTest">
      <HeaderForm />
      <div className="lg:w-[684px] md:w-[584px] sm:w-[343px] w-[288px] m-auto mt-6">
        <Stepper
          steps={4}
          actualStep={2}
          percentage={100}
          classTitle='font-normal'
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[64px] xs:mb-[36px] md:mb-[53px] "
          title="Datos financieros"
        />
        <Typography variant="h2" className="mt-8 text-center ">
          Ingrese sus datos laborales y financieros
        </Typography>
        <div className="flex gap-1 my-8 w-[288px] sm:w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <FinancialDataForm />
        </div>

      </div>
    </div>
  )
}

export default FinancialData