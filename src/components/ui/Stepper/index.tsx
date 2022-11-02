import React from 'react';
import NoSSRWrapper from '../../../hooks/noSSR';

interface Props {
  step?: string;
  title?: string;
  percentaje?: string;
  incomplete?: string;
}
const Stepper: React.FC<Props> = ({ step, title, percentaje, incomplete }) => {
  return (
    <NoSSRWrapper>
      <p
        className="text-xs font-normal ln-16 text-primario-900 mb-[8px]"
        data-testid="titleStep"
      >
        {title}
      </p>
      <div className="flex items-center justify-center">
        <div
          className={`${
            step === '1' ||
            step === '2' ||
            step === '3' ||
            incomplete === '2' ||
            incomplete === '3'
              ? 'bg-primario-20'
              : 'bg-complementario-80'
          } w-full mr-[4px]  rounded-l-[6px] `}
          style={{
            height: '4px',
            maxWidth: '225px',
            borderTopLeftRadius: '2px',
            borderBottomLeftRadius: '2px',
          }}
        >
          {incomplete === '1' ? (
            <div
              className="bg-primario-20 h-100"
              style={{
                width: percentaje,
                borderTopLeftRadius: '2px',
                borderBottomLeftRadius: '2px',
              }}
            />
          ) : (
            ''
          )}
        </div>
        <div
          className={`${
            step === '2' || step === '3' || incomplete === '3'
              ? 'bg-primario-20'
              : 'bg-complementario-80'
          } w-full mr-[4px]`}
          style={{ height: '4px', maxWidth: '225px' }}
        >
          {incomplete === '2' ? (
            <div className="bg-primario-20 h-100" style={{ width: percentaje }} />
          ) : (
            ''
          )}
        </div>
        <div
          className={`${
            step === '3' ? 'bg-primario-20' : 'bg-complementario-80'
          } w-full mr-[4px]`}
          style={{
            height: '4px',
            maxWidth: '225px',
            borderTopRightRadius: '2px',
            borderBottomRightRadius: '2px',
          }}
        >
          {incomplete === '3' ? (
            <div className="bg-primario-20 h-100" style={{ width: percentaje }} />
          ) : (
            ''
          )}
        </div>
      </div>
      <p
        tabIndex={0}
        role="paragraph"
        className="text-complementario-100 text-xs ln-16 mt-[8px]"
        data-testid="stepNumber"
      >
        Paso {step || incomplete} de 3
      </p>
    </NoSSRWrapper>
  );
};
export default Stepper;
