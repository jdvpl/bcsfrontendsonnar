import React, { useState } from 'react';
import Button from '../ui/Button';
import ModalInactivity from './ModalInactivity';

import { childrenProps } from '../../interfaces';

export const InactivityWrapper: React.FC<childrenProps> = ({ children }) => {
  const [timer, setTimer] = React.useState(0);
  const [showModal, setShowModal] = useState<boolean | undefined>(undefined);

  return (
    <>
      {showModal !== undefined && (
        <ModalInactivity
          showModal={showModal}
          compont={{
            id: 'modal-inactivity',
            children: (
              <section
                tabIndex={0}
                role="tabpanel"
                className="flex flex-col items-center"
              >
                <h3 tabIndex={0} role="paragraph">
                  Ha estado inactivo en los <br className="hidden md:block" />
                  últimos minutos
                </h3>
                <p
                  tabIndex={0}
                  role="paragraph"
                  className=" mt-6 mb-8  font-light text-lg leading-5"
                >
                  ¿Desea continuar con la <br />
                  apertura de cuenta?
                </p>
                <div className="mx-auto flex w-full justify-center">
                  <Button className="max-w-[253px]">Continuar</Button>
                </div>
                <button
                  type="button"
                  className=" font-semibold mt-[38px] md:mt-[44px] text-lg leading-5 text-primario-100"
                >
                  Salir
                </button>
                <div className="flex justify-center text-center items-center mt-[26px] w-full">
                  <div className="mr-[10px]">
                    <svg
                      width="20"
                      height="24"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Tiempo restante</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.003 4.13676C15.5112 4.13676 19.9356 8.55908 19.9356 14.0694C19.9356 19.5011 15.5112 24 10.003 24C4.49264 24 0.0703125 19.5011 0.0703125 14.0694C0.0703125 8.55908 4.49264 4.13676 10.003 4.13676ZM10.003 22.6824C14.7356 22.6824 18.616 18.802 18.616 14.0694C18.616 9.33475 14.7356 5.45642 10.003 5.45642C5.27038 5.45642 1.38998 9.33475 1.38998 14.0694C1.38998 18.802 5.27038 22.6824 10.003 22.6824ZM12.6402 14.6899C13.0291 14.6899 13.3394 15.0002 13.3394 15.387C13.3394 15.7759 13.0291 16.0096 12.6402 16.0096H7.98624V9.41335C7.98624 9.02449 8.29651 8.79282 8.6833 8.79282C9.07217 8.79282 9.30384 9.02449 9.30384 9.41335V14.6899H12.6402Z"
                        fill="#496374"
                      />
                      <path
                        d="M16.8523 4.13676L19.7775 7.06198L17.4746 9.36489L14.5494 6.43967L16.8523 4.13676Z"
                        fill="#496374"
                      />
                      <path
                        d="M14.5494 0H6.27564V2.06844H8.34408V5.45655H10.4125H12.481V2.06844H14.5494V0Z"
                        fill="#496374"
                      />
                    </svg>
                  </div>
                  <p
                    tabIndex={0}
                    role="paragraph"
                    title={`${timer} segundos`}
                    className="text-gray-200 font-semibold"
                  >
                    {timer} <span>segundos</span>
                  </p>
                </div>
              </section>
            ),
          }}
        />
      )}
      {children}
    </>
  );
};
