import React from 'react';
import { initialOptions } from '../../components/custom/consultancy/consultancy';
import { routes } from '../../routes';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

export default function useConsultancy({
  actualStep,
  setActualStep,
  router,
  setActiveIndex,
  activeIndex,
  setItemActive,
  isMobile,
  itemActive,
}: any) {
  const nextStep = () => {
    if (actualStep < 4) {
      setActualStep(actualStep + 1);
    } else {
      router.push(routes.home);
    }
  };

  const prevStep = () => {
    if (actualStep > 1) {
      setActualStep(actualStep - 1);
    } else {
      router.push(routes.home);
    }
  };

  const openModal = (label: string, index: number) => {
    setActiveIndex(index);
    setItemActive(label);
  };

  const onCloseModal = () => {
    setActiveIndex(0);
    setItemActive('');
  };

  const renderContent = () => (
    <div className="lg:w-[411px] text-[14px]">
      <Typography variant='bodyM1' componentHTML='span' typeFont='Bold' className=" text-primario-900 lg:text-[20px] text-[16px]">
        {itemActive}
      </Typography>
      {initialOptions[actualStep - 1]?.[activeIndex]?.content()}
    </div>
  );

  function OptionList() {
    return (
      <>
        {initialOptions[actualStep - 1]?.map((option: any, index: number) => (
          <Button
            key={option?.label}
            onClick={() => openModal(option?.label, index)}
            variant="secondary"
            border="0.5"
            isLanding={`p-0 z-10 md:w-[253px] xs:w-[100%]  rounded-[8px] lg:h-48px ${itemActive === option?.label ? 'bg-primario-100' : ''
              }
                ${itemActive === option?.label && isMobile === false
                ? 'translate-x-[16px]'
                : ''
              }`}
          >
            <div className="flex justify-center">
              <Typography variant='bodyM3' typeFont='Bold' componentHTML='span'
                className={`text-center ${itemActive === option?.label ? 'text-white' : 'text-primario-100'
                  }  p-0`}
              >
                {option?.label}
              </Typography>
            </div>
          </Button>
        ))}
      </>
    );
  }

  return {
    nextStep,
    prevStep,
    openModal,
    onCloseModal,
    renderContent,
    OptionList,
  };
}
