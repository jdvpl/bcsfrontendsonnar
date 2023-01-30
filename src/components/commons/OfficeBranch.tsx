import React, { useState } from 'react'
import Button from '../ui/Button'


function OfficeBranch({ setShowModal }: any) {

  const closeModal = () => {
    setShowModal(false)
  }
  return (
    <div className='m-auto flex-col mt-10 font-monserratLight'>

      <p>Bogotá (601) 307 7060</p>
      <p>Resto del país a la línea gratuita</p>
      <p>01 8000 910 038</p>
      <p>Desde celular #233</p>
      <p className='font-montserratSemiBold mt-4'>Ó diríjase a una sucursal </p>

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

    </div >
  )
}

export default OfficeBranch