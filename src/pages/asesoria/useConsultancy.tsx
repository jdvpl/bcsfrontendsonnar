import { initialOptions } from '../../lib/consultancy';
import { routes } from '../../routes';
import Button from '../../components/ui/Button';
import React from 'react'
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

  const renderContent = () => {
    return (
      <div className="lg:w-[411px] text-[14px]">
        <span className="font-semibold text-primario-900 lg:text-[20px] text-[16px]">
          {itemActive}
        </span>
        {initialOptions[actualStep - 1]?.[activeIndex]?.content()}
      </div>
    );
  };

  const OptionList = () => {
    return (
      <>
        {initialOptions[actualStep - 1]?.map((option: any, index: number) => (
          <Button
            key={option?.label}
            onClick={() => openModal(option?.label, index)}
            variant="secondary"
            isLanding={`p-0 z-10 md:w-[253px] xs:w-[100%] font-semibold rounded-[8px] lg:h-48px ${itemActive === option?.label ? 'bg-primario-100' : ''
              }
                ${itemActive && !isMobile === option?.label ? 'translate-x-[16px]' : ''}
                `}
          >
            <div className="flex justify-center">
              <span
                className={`text-center ${itemActive === option?.label ? 'text-white' : 'text-primario-100'
                  } text-[18px] p-0`}
              >
                {option?.label}
              </span>
            </div>
          </Button>
        ))}
      </>
    );
  };

  return {
    nextStep,
    prevStep,
    openModal,
    onCloseModal,
    renderContent,
    OptionList,
  };
}
