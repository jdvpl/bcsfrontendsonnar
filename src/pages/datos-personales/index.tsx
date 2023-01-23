import React, { useEffect, useState } from 'react';
import Typography from '../../components/ui/Typography';
import { useSessionStorage } from '../../hooks/useSessionStorage';
import { SesionStorageKeys } from '../../session';
import { HowItemProps } from '../../components/ui/Form';
import Modal from '../../components/ui/Modal';
import Advisory from '../../components/commons/Advisory';
import Stepper from '../../components/ui/Stepper';
import { getBasicData } from '../../services';
import { iDataUser } from '../../interfaces/dataUserBasic';
import PersonalDataBasic from '../../components/ui/Form/PersonalDataBasic';
import HeaderForm from '../../components/ui/Headers/HeaderForm'

function PersonalData() {
  const [showModal, setShowModal] = useState<boolean>(true);
  const [componentModal, setComponentModal] = useState<HowItemProps>({
    children: <Advisory setShowModal={setShowModal} />,
    title: <span>¿Recibió <span className="md:inline sm:inline xs:block">acompañamiento</span> <span className="block" />para acceder a esta plataforma?</span>,
    id: '',
  });

  const [dataUser, setDataUser] = useSessionStorage(
    SesionStorageKeys.dataUser.key,
    {}
  );
  const [, setDataPersonalInfo] = useSessionStorage(
    SesionStorageKeys.personalInfoDataBack.key,
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
      govIssueIdentType: dataUser.document_type,
      identSerialNum: dataUser.document_number
    })
    if (!response.error) {
      setuserInfo(response.response.data);
      setDataPersonalInfo(response.response.data);
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
      <HeaderForm />

      <div className="lg:w-[684px] md:w-[528px] w-[343px] m-auto mt-9">
        <Stepper
          steps={4}
          actualStep={1}
          percentage={50}
          className="lg:w-[684px] md:w-[528px] xs:w-full mx-auto lg:mb-[59px] xs:mb-[36px] md:mb-[53px] text-left"
          title="Datos personales"
        />
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
