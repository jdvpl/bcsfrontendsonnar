import React from 'react';
import Lottie from 'react-lottie-player';
import lottieJson from '../../lib/loader.json';
import Typography from '../ui/Typography';

interface AnimationData {
  show?: string;
  loaded?: boolean;
  valid?: boolean;
}

function AnimationComponent({ show, loaded, valid }: AnimationData) {
  return (
    <div className={`fixed inset-0 z-[100]  bg-white ${show}`}>
      <div className="flex flex-col h-screen content-center inset-0 z-40 ">
        {loaded ? (
          valid && (
            <div className="my-auto">
              <svg
                className="mx-auto"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Validación de identidad exitosa</title>
                <circle cx="30" cy="30" r="29" fill="white" stroke="#16C776" />
                <path
                  d="M39.8703 17.129L44.2254 21.4276C44.2835 21.5422 44.34 21.6567 44.34 21.8278C44.34 21.9424 44.2835 22.0569 44.2254 22.1715L24.4556 41.8849C24.3976 41.9995 24.2265 41.9995 24.1119 41.9995C23.9974 41.9995 23.8828 41.9995 23.7682 41.8849L15.1711 33.2312C15.0565 33.1747 15 33.0021 15 32.8875C15 32.7729 15.0565 32.6584 15.1711 32.5438L19.4697 28.2467C19.6423 28.0176 19.986 28.0176 20.1571 28.2467L24.1119 32.2001L39.1829 17.129C39.354 16.9564 39.6977 16.9564 39.8703 17.129V17.129Z"
                  fill="#16C776"
                />
              </svg>
              <p
                className="mx-auto sm:mx-[64px] my-[49px] font-normal text-[18px] leading-[20px] text-primario-900 text-center"
                data-testid="success-message"
              >
                Validación de identidad exitosa
              </p>
            </div>
          )
        ) : (
          <div className="bg-white fixed top-0 left-0 w-screen h-screen z-30 flex flex-col items-center justify-center">
            <Lottie
              loop
              animationData={lottieJson}
              className="mx-auto w-[320px] h-[320px]"
              play
              speed={0.8}
            />
            <div className="relative -top-[60px]">
              <Typography
                variant="bodyM1"
                componentHTML="p"
                className="text-center text-complementario-100 mb-4"
              >
                Un momento
              </Typography>
              <Typography
                variant="h3"
                componentHTML="h3"
                typeFont="Bold"
                className="text-center"
              >
                Estamos validando su información
              </Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AnimationComponent;
