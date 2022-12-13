import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LogoBcs from '../../components/svg/LogoBcs';
import LogoForm from '../../components/svg/LogoForm';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { iFormDataSimulation } from '../../interfaces/formSimulation';
import { SesionStorageKeys } from '../../session';
import { routes } from '../../routes';
import { HowItemProps } from '../../components/ui/Form';
import Modal from '../../components/ui/Modal';
import Advisory from '../../components/commons/Advisory';
import Stepper from '../../components/ui/Stepper';
import { getBasicData } from '../../services';
import { iDataUser } from '../../interfaces/dataUserBasic';
import PersonalDataBasic from '../../components/ui/Form/PersonalDataBasic';


const PersonalData = () => {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [componentModal, setComponentModal] = useState<HowItemProps>({
    children: <Advisory setShowModal={setShowModal} />,
    title: <span>¿Recibió <span className="md:inline sm:inline xs:block">acompañamiento</span> <span className="block">
    </span>para acceder a esta plataforma?</span>,
    id: '',
  });

  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const [userInfo, setuserInfo] = useState<iDataUser>({
    birthDt: '',
    addr1: '',
    cellPhone: '',
    city: '',
    emailAddr: '',
    firstName: '',
    isClient: false
  })

  useEffect(() => {
    getBasicDataUser()
  }, [])

  const getBasicDataUser = async () => {
    const response = await getBasicData({
      GovIssueIdentType: dataUser.document_type,
      IdentSerialNum: dataUser.document_number
    })
    if (!response.error) {
      setuserInfo(response.response.data)
    }
  }


  const closeModal = () => {
    const datainfo = { advisoryType: null, otherAdvisoryType: null };
    setDataUser({ ...dataUser, ...datainfo })
    setShowModal(false)
  }
  return (
    <div data-testid="PersonalDataTest">
      {showModal && (
        <Modal
          showModal={showModal}
          onClose={() => closeModal()}
          compont={componentModal}
          advisory
          heightModal='lg:h-[50%]'
        />
      )}
      <div className="container flex lg:mt-[0] sm:w-[343px] md:w-[528px] lg:w-[1100px] pt-5 lg:justify-between justify-end">
        <div className="mt-4 hidden lg:block">
          <LogoBcs />
        </div>
        <div className="mt-4 w-[180px] md:w-[180px] lg:w-[280px]">
          <LogoForm />
        </div>
      </div>
      <Stepper
        steps={4}
        actualStep={1}
        percentage={50}
        className="lg:w-[684px] md:w-[456px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px]"
        title="Datos personales"
      />
      <div className="lg:w-[684px] md:w-[584px] w-[343px] m-auto">
        <Typography variant="h2" className="mt-8 text-center">
          {userInfo.firstName || 'Hola'}, {userInfo.isClient ? 'confirme sus datos personales' : 'ingrese sus datos personales'}
        </Typography>
        <div className="flex gap-1 my-8 w-[343px] md:w-[517px] xl:w-[656px] mx-auto">
          <PersonalDataBasic userInfo={userInfo} />
        </div>

      </div>
    </div>
  );
}

export default PersonalData;
