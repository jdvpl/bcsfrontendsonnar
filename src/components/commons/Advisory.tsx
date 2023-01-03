import React, { useState } from 'react'
import { useSessionStorage } from '../../hooks/useSessionStorage'
import { SesionStorageKeys } from '../../session'
import Button from '../ui/Button'
import AdvisoryForm from './AdvisoryForm'

function Advisory({ setShowModal }: any) {
  const [showMessage, setshowMessage] = useState<boolean>(true)
  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const closeModal = () => {
    const datainfo = { advisoryType: null, otherAdvisoryType: null };
    setDataUser({ ...dataUser, ...datainfo })
    setShowModal(false)
  }
  return (
    <div className='m-auto flex-col '>
      {showMessage ? (
        <div className='mt-[48px] flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 '>
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[343px] mb-[12px] shadow-none"
            name="solicitarCredito"
            data-testid="btn-advisoryTest"
            tabIndex={0}
            onClick={() => setshowMessage(false)}
            id="btn-next"
          >
            Si, fuí asesorado
          </Button>
        </div>
      ) : (
        <AdvisoryForm setShowModal={setShowModal} />
      )
      }
      {
        showMessage ? (<div className='flex justify-center items-center lg:px-[20px]  md:mb-0 lg:mb-5 '>
          <Button
            isLanding="w-full xs:w-[288px] sm:w-[343px]  md:w-[343px] lg:w-[343px] mb-[40px] shadow-none"
            onClick={() => closeModal()}
            name="solicitarCredito"
            data-testid="btn-closeModal"
            tabIndex={0}
            id="btn-next"
            variant="secondary"
          >
            No, ingresé sin ayuda
          </Button>
        </div>)
          : null
      }


    </div >
  )
}

export default Advisory