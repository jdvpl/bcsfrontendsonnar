import React from 'react'
import FinancialDataForm from '../../components/ui/Form/FinancialDataForm/FinancialDataForm'
import HeaderForm from '../../components/ui/Headers/HeaderForm'
import Stepper from '../../components/ui/Stepper'
import Typography from '../../components/ui/Typography'

function FinancialData() {
  return (
    <div data-testid="PersonalDataTest">
      <HeaderForm />
      <div className="lg:w-[684px] md:w-[584px] sm:w-[343px] w-[288px] m-auto mt-6">
        <Stepper
          steps={5}
          actualStep={3}
          percentage={100}
          classTitle='font-normal'
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[64px] xs:mb-[36px] md:mb-[53px] "
          title="Datos financieros"
        />
        <h2 className="mt-8 text-center font-poppinsSemiBold font-semibold md:text-[28px] text-[20px]">
          Ingrese sus datos laborales y financieros
        </h2>
        <div className="flex gap-1 my-8 w-[288px] sm:w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <FinancialDataForm />
        </div>
      </div>
    </div>
  )
}

export default FinancialData