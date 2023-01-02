import React, { useEffect, useRef, useState } from 'react';
import Close from '../../../svg/Close';
import Typography from '../../../ui/Typography';
import useConsultancyTutorial from './useConsultancyTutorial';

function ConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef }: any) {
  const { isOpen, renderBody, actualTutorialStep, onHandleModal } =
    useConsultancyTutorial({ nextTutorialStepRef, prevTutorialStepRef });
  return (
    <>
      {isOpen ? (
        <div
          data-testid="tutorial-container"
          className="w-full bg-black/90 absolute top-0 z-[90] pb-[400px] min-h-[200vh]"
        >
          {/* Header */}
          <div
            className={`w-full xl:mt-[62px] md:mt-[68px] xs:mt-[36px] mt-[36px] xl:pl-[118px] xl:pr-[142px] md:pl-[106px] md:pr-[107px] xs:pl-[17px] xs:pr-[16px] flex items-center justify-between h-[60px] md:mb-[282px] xl:[217px] ${
              actualTutorialStep === 0 || actualTutorialStep === 5
                ? 'xs:mb-[205px] sm:mb-[217px]'
                : 'xs:mb-[86px] sm:mb-[86px]'
            }`}
          >
            <Typography
              variant="h2"
              className="text-white xs:text-[14px] sm:text-[18px] xl:text-[28px]"
            >
              Instructivo guía interactiva
            </Typography>
            <button
              data-testid="button-close-tutorial-container"
              onClick={onHandleModal}
              className="border-[1px] border-white flex items-center justify-center md:w-[40px] md:h-[40px] xl:w-[60px] xl:h-[60px] xs:w-[24px] xs:h-[24px] rounded-full"
            >
              <Close height="50%" width="50%" />
            </button>
          </div>
          {/* Body */}
          {renderBody()}
        </div>
      ) : null}
    </>
  );
}

export default ConsultancyTutorial;
