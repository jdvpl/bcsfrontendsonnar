import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import DocumentPage from '../../../components/biometria/prueba_document';
import { AplicationContext } from '../../../context/AplicationContext';
import { urlAndUtms } from '../../../utils/RouterUtmsUrl/index';

const FotoCedula: React.FC = () => {
  const { fotosCedula } = useContext(AplicationContext);
  const router = useRouter();
  const [alto, setAlto] = useState(100);

  useEffect(() => {
    setAlto(window.innerHeight);

    if (fotosCedula.trasera && fotosCedula.delantera) {
      urlAndUtms(router, '/validacion-biometrica/revision-imagenes');
    }
  }, [fotosCedula]);

  return (
    <div className="d-flex w-100" style={{ height: alto }}>
      <DocumentPage />
    </div>
  );
};
export default FotoCedula;
