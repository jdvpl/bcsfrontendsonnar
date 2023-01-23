import React from 'react';
import LogoBcs from '../svg/LogoBcs';

const NavTitle: React.FC<{ noBack?: boolean; onClick?: () => void }> = ({
  noBack,
  onClick,
}) => (
  <div
    className={`lg:hidden md:mb-[26px] md:mt-[50px] flex w-full items-center md:max-w-[528px] mb-[16px] ${noBack ? 'justify-end' : ' justify-between '
      }`}
  >
    {!noBack && (
      <div
        data-testid="backButton"
        onClick={() => onClick?.()}
        aria-hidden="true"
        role="button"
        id="btn-back"
      >
        <svg
          width="26"
          height="24"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.275206 11.6488C0.174166 11.5482 0.0757809 11.4503 0.0757809 11.3497C-0.025259 11.1512 -0.025259 10.8547 0.0757809 10.6562C0.0757809 10.5556 0.174166 10.4577 0.275206 10.3571L10.4484 0.230194C10.6478 0.0316792 10.8472 0.0316772 11.0466 0.0316772C11.2487 0.0316772 11.4481 0.0316792 11.6476 0.230194C11.9454 0.526642 11.9454 1.12218 11.6476 1.42128L2.86769 10.1586L22.1012 10.1586C22.6011 10.1586 23 10.5556 23 10.9526C23 11.4503 22.6011 11.8473 22.1012 11.8473L2.86769 11.8473L11.6476 20.5846C11.9454 20.8837 11.9454 21.4792 11.6476 21.7757C11.3471 22.0748 10.7488 22.0748 10.4484 21.7757L0.275206 11.6488Z"
            fill="#496374"
          />
        </svg>
      </div>
    )}
    <div id="logo-title" data-testid="logo" className={`flex justify-start w-full ${!noBack ? 'ml-[15px]' : ''}`}>
      <LogoBcs />
    </div>
  </div>
);

export default NavTitle