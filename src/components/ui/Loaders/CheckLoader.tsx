import React from 'react';
import Lottie from 'react-lottie-player';
import checkAnimation from '../../../lib/check.json';

const CheckLoader = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-screen h-screen z-10 flex flex-col items-center justify-center">
      <Lottie
        loop
        animationData={checkAnimation}
        className="mx-auto w-[260px] h-[260px]"
        play
        speed={0.8}
      />
      <h3 className="font-poppinsBold font-[24px] leading-[28px] text-center">
        Validación exitosa
      </h3>
    </div>
  );
};

export default CheckLoader;
