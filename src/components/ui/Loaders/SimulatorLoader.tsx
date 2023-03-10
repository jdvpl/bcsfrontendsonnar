import React from 'react';
import Lottie from 'react-lottie-player';
import checkAnimation from '../../../lib/loader.json';

const SimulatorLoader = () => {
  return (
    <div className="bg-white fixed top-0 left-0 w-screen h-screen z-10 flex flex-col items-center justify-center">
      <Lottie
        loop
        animationData={checkAnimation}
        className="mx-auto w-[320px] h-[320px]"
        play
        speed={0.8}
      />
      <div className='relative -top-[60px]'>
        <p className="font-montserratRegular text-center font-[20px] leading-[22px] text-complementario-100 mb-4">
          Un momento
        </p>
        <h2 className="font-poppinsSemiBold font-[24px] leading-[28px] text-center">Estamos validando <br className="md:hidden" /> su información</h2>
      </div>
    </div>
  );
};

export default SimulatorLoader;
