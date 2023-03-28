import React from 'react';
import NoSSRWrapper from '../../../hooks/noSSR';
import Typography from '../Typography';

interface stepsProps {
  steps: number;
  actualStep: number;
  percentage?: number;
  title?: string;
  className?: string;
  classTitle?: string;
}
function Stepper({
  steps,
  actualStep,
  percentage = 100,
  title = '',
  className = '',
  classTitle = '',
}: stepsProps) {
  const renderSteps = new Array(steps).fill(0);
  return (
    <NoSSRWrapper>
      <div className={className}>
        <Typography
          variant='caption2'
          componentHTML='span'
          typeFont='Bold'
          className={`text-primario-900  ${classTitle}`}
        >
          {title}
        </Typography>
        <div className="w-full flex gap-1 my-2">
          {renderSteps?.map((item, index) => (
            <div className="w-full bg-complementario-80" key={index}>
              <div className="w-full h-1">
                <div
                  style={{
                    width: `${actualStep === index + 1 ? percentage : '100'}%`,
                  }}
                  className={`bg-${actualStep >= index + 1 ? 'primario-20' : 'complementario-80'
                    } h-1`}
                />
              </div>
            </div>
          ))}
        </div>
        <Typography
          variant='caption2'
          typeFont='Regular'
          componentHTML='span'
          tabIndex={0}
          role="paragraph"
          className="text-complementario-100 text-xs ln-16 font-montserratRegular"
          data-testid="stepNumber"
        >
          Paso {actualStep} de {steps}
        </Typography>
      </div>
    </NoSSRWrapper>
  );
}

export default Stepper;
