import React, { useEffect, useState } from 'react';

interface HowItemProps {
  children: JSX.Element;
  id: string;
}

interface Props {
  compont?: HowItemProps;
  showModal: boolean;
}

const scrollBodyHidden = () => {
  if (typeof window === 'object') {
    document.body.classList.add('body-scroll-hidden');
  }
};

export const scrollBody = () => {
  if (typeof window === 'object') {
    document.body.classList.remove('body-scroll-hidden');
  }
};

const ModalInactivity = ({ compont, showModal }: Props) => {
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
    <div
      id="modal-container"
      data-testid="modal-container"
      className={`fixed inset-0 z-[100] ${show}`}
    >
      <div className="modal-background">
        <div className="modal flex overflow-x-hidden fixed inset-0 z-[100] outline-none  justify-center items-center focus:outline-none ">
          <div className="relative w-full max-w-[288px] sm:max-w-[343px] md:max-w-[528px]">
            {/* content */}
            <div className="rounded-xl shadow-lg relative flex flex-col w-[288px] sm:w-[343px] md:w-[528px]  bg-white outline-none focus:outline-none">
              {/* body */}
              <div className="mx-[16px] mt-[60px] mb-[48px] h-full">
                {compont?.children}
              </div>
              {/* footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInactivity;
