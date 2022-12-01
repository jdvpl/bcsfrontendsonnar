import React, { useEffect, useState } from 'react';

interface HowItemProps {
  children: string | JSX.Element;
  title?: string;
  id: string;
}

type Props = {
  compont?: HowItemProps;
  showModal: boolean;
  onClose: () => void;
};

const scrollBodyHidden = () => {
  if (typeof window === 'object') {
    document.body.classList.add('body-scroll-hidden');
  }
};

const scrollBody = () => {
  if (typeof window === 'object') {
    document.body.classList.remove('body-scroll-hidden');
  }
};

function Modal({ compont, showModal = false, onClose }: Props) {
  const [show, setShow] = useState('');

  useEffect(() => {
    if (showModal === undefined) {
      scrollBody();
      return;
    }
    if (showModal) {
      setShow('two');
      scrollBodyHidden();
    } else {
      setShow('two out');
      scrollBody();
    }
  }, [showModal]);

  return (
    <section
      id="modal-container"
      className={`fixed inset-0 z-40 ${show}`}
      role="tabpanel"
      tabIndex={0}
    >
      <div className="modal-background">
        <div className="modal justify-center items-end lg:items-center md:items-center flex overflow-x-hidden fixed inset-0 z-10 outline-none focus:outline-none">
          <div className="relative lg:h-[90%] md:h-[63%] h-[83%]   w-full mx-auto max-w-3xl lg:max-w-[684px]">
            {/* content */}
            <div className="border-0 sm:rounded-b-none md:rounded-lg rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
              {/* header */}
              <div className="rounded-t p-0 m-0">
                <div
                  className="md:mt-[36px] md:mr-[36px] mt-[15px] mr-[15px] float-right"
                  role="button"
                  aria-hidden="true"
                  onClick={() => onClose()}
                  onKeyDown={() => onClose()}
                  id={`${compont?.id}-x`}
                  data-testid="btn-close"
                  title="Cerrar"
                  tabIndex={0}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 2.01429L17.9857 0L10 7.98571L2.01429 0L0 2.01429L7.98571 10L0 17.9857L2.01429 20L10 12.0143L17.9857 20L20 17.9857L12.0143 10L20 2.01429Z"
                      fill="#00253D"
                    />
                  </svg>
                </div>
                {compont && (
                  <h3
                    className="text-center font-bold md:mt-[60px] md:pt-0 lg:pt-[68px] pt-[40px] text-primario-900 text-[22px] px-[16px] sm:px-[55px] lg:text-[28px] lg:leading-[30px] leading-none"
                    id={`${compont?.id}-title`}
                  >
                    {compont?.title}
                  </h3>
                )}
              </div>
              {/* body */}
              <div className="text-[16px] md:text-[18px] text-left leading-5 md:mx-[30px] md:mt-[36px] md:mb-[100px] m-[16px] sm:m-[25px] text-[#4A4E60] overflow-y-auto h-full">
                {compont?.children}
              </div>
              {/* footer */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modal;
