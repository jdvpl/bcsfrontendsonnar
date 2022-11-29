import { createContext, useState } from 'react';


export const AplicationContext = createContext();

export const AplicationProvider = (props) => {
  const [fotosCedula, setFotosCedula] = useState({
    delantera: '',
    trasera: '',
  });
  const [selfies, setSelfies] = useState({
    normal: '',
    sonriendo: '',
  });
  const [fotoEditada, setFotoEditado] = useState('');
  const [selfieEditada, setSelfieEditada] = useState('');
  // const [atrasAnimacion, setAtrasAnimacion] = useState(false);
  // const [ratingAnswer, setRating] = useState('');
  const [progress, setProgress] = useState('');

  const setFotoDelantera = (foto) => {
    setFotosCedula({ ...fotosCedula, delantera: foto });
  };
  const changeRating = (valor) => {
    setRating(valor);
  };
  const changeProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const changeAnimation = (accion) => {
    if (accion == 'back') {
      setAtrasAnimacion(true);
    } else {
      setAtrasAnimacion(false);
    }
  };
  const setFotoTrasera = (foto) => {
    setFotosCedula({ ...fotosCedula, trasera: foto });
  };
  const setEligirFoto = (foto) => {
    setFotoEditado(foto);
  };
  const setSelfieNormal = (foto) => {
    setSelfies({ ...selfies, normal: foto });
  };
  const setSelfieSonriendo = (foto) => {
    setSelfies({ ...selfies, sonriendo: foto });
  };
  return (
    <AplicationContext.Provider
      value={{
        fotosCedula,
        setFotoDelantera,
        setFotoTrasera,
        fotoEditada,
        setEligirFoto,
        setSelfieNormal,
        setSelfieSonriendo,
        selfieEditada,
        setSelfieEditada,
        selfies,
        // atrasAnimacion,
        changeAnimation,
        // ratingAnswer,
        changeRating,
        progress,
        changeProgress,
      }}
    >
      {props.children}
    </AplicationContext.Provider>
  );
}
export default AplicationProvider;
