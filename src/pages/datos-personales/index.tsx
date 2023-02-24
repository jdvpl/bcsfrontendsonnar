import React, { useEffect, useState } from 'react';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import { HowItemProps } from '../../components/ui/Form';
import Modal from '../../components/ui/Modal';
import Advisory from '../../components/commons/Advisory';
import Stepper from '../../components/ui/Stepper';
import PersonalDataBasic from '../../components/ui/Form/PersonalDataBasic';
import HeaderForm from '../../components/ui/Headers/HeaderForm'

function PersonalData() {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [componentModal,] = useState<HowItemProps>({
    children: <Advisory setShowModal={setShowModal} />,
    title: <span>¿Recibió <span className="md:inline sm:inline xs:block">acompañamiento</span> <span className="block" />para acceder a esta plataforma?</span>,
    id: '',
  });
  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const [dataPersonalInfo] = useSessionStorage(
    SesionStorageKeys.basicDataUser.key,
    {}
  );
  const closeModal = async () => {
    const datainfo = { advisoryType: null, otherAdvisoryType: null };
    await setDataUser({ ...dataUser, ...datainfo })
    setShowModal(false)
  }
  const keyModal = 'advisoryType' in dataUser;
  return (
    <div data-testid="PersonalDataTest" >
      {showModal && !keyModal && (
        <Modal
          showModal={showModal}
          onClose={() => closeModal()}
          compont={componentModal}
          advisory
          heightModal='lg:h-[50%]'
        />
      )}
      <HeaderForm />

      <div className="lg:w-[684px] md:w-[528px] sm:w-[343px] w-[288px] m-auto mt-9">
        <Stepper
          steps={4}
          actualStep={1}
          percentage={50}
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px] text-left"
          title="Datos personales"
        />
        <Typography variant="h2" className="mt-8 text-center">
          {dataPersonalInfo.firstName || 'Hola'}, {dataPersonalInfo.isClient ? 'confirme sus datos personales' : 'ingrese sus datos personales'}
        </Typography>
        <div className="flex gap-1 my-8 lg:w-[684px] md:w-[528px] sm:w-[343px] w-[288px] mx-auto">
          <PersonalDataBasic userInfo={dataPersonalInfo} />
        </div>

      </div>
    </div>
  );
}

export default PersonalData;
