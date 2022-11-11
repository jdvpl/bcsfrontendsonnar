import React from 'react'
import LogoBcs from '../../components/svg/LogoBcs'
import LogoForm from '../../components/svg/LogoForm'
import FormQuota, { FormData } from '../../components/ui/Form/FormQuota'
import Typography from '../../components/ui/Tipography'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { SesionStorageKeys } from '../../session'

const Simulator = () => {
  const dataRegQuota = {
    housing_type: '',
    monthly_salary: '',
    amount: ''
  };
  const [dataFormQuota, setdataFormQuota] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    dataRegQuota
  );
  const onSubmit = async (formData: FormData) => {
    console.log(formData);
  }
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
      <div className="lg:w-[684px] m-auto">
        <Typography variant="h2" className="mt-8 text-center">
          Simulador del crédito
        </Typography>
        <div>
          <Typography variant="bodyS3" className="text-center lg:mt-[52px] pmx-3 text-primario-900">
            A través de nuestro simulador podrá realizar los cálculos necesarios para conocer los valores aproximados relacionados con el crédito de vivienda.
          </Typography>
        </div>
        <FormQuota
          onSubmit={(formData: FormData) => onSubmit(formData)} defaultValues={{ ...dataFormQuota }} />
      </div>

    </div>
  )
}

export default Simulator