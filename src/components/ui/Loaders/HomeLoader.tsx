import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import applicationLoader from '../../../assets/lottie/applicationLoader.json';

export const ApplicationLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {showLoader && (
        <div className="fixed w-screen h-screen z-50 flex justify-center items-center bg-white">
          <Lottie
            animationData={applicationLoader}
            loop
            className="mx-auto xl:w-[378px] xl:mb-8 md:w-[376.91px] md:mb-[26px] sm:w-[321.92px] sm:mb-[17px] mb-6 w-[287.56px]"
            play
          />
        </div>
      )}
    </>
  );
};
