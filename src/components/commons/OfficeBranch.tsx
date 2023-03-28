import React, { useState } from 'react'
import Button from '../ui/Button'
import Typography from '../ui/Typography'


function OfficeBranch({ setShowModal }: any) {

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <Typography variant='bodyM3' componentHTML='div' typeFont='Light' className='m-auto flex-col mt-8 mx-5'>

      <p>Bogotá (601) 307 7060</p>
      <p>Resto del país a la línea gratuita</p>
      <p>01 8000 910 038</p>
      <p>Desde celular #233</p>
      <Typography componentHTML='p' typeFont='Bold' variant='bodyM3' className='mt-4'>O diríjase a una sucursal </Typography>

      <div className="flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 mt-[50px] pb-[40px]">
        <Button
          isLanding="w-full xs:w-[288px] sm:w-[343px] md:w-[343px] lg:w-[375px]"
          type="submit"
          data-testid="advisoryFormtest"
          id="btn-next"
          onClick={closeModal}
        >
          Continuar
        </Button>
      </div>

    </Typography>
  )
}

export default OfficeBranch