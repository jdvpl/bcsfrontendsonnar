import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../../public/animations/animation-load.json';

export function OTLoader() {
  return (
    <Lottie loop animationData={lottieJson} className="mx-auto w-[33px] h-[33px]" play />
  );
}
