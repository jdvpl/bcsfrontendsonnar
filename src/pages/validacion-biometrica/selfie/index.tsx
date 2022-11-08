import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import PhotoLiveSelfiePage from '../../../components/biometria/prueba_selfie';
import { AplicationContext } from '../../../context/AplicationContext';
import { urlAndUtms } from '../../../utils/RouterUtmsUrl';

const FotoSelfie: React.FC = () => {
  const { selfies } = useContext(AplicationContext);
  const router = useRouter();

  const [alto, setAlto] = useState(100);
  useEffect(() => {
    setAlto(window.innerHeight);

    if (selfies.normal && selfies.sonriendo) {
      urlAndUtms(router, '/validacion-biometrica/revision-imagenes/revision-selfie');
    }
  }, [selfies]);
  return (
    <div className="d-flex w-100 h-100" style={{ height: alto }}>
      <PhotoLiveSelfiePage />
    </div>
  );
};
export default FotoSelfie;
