import { useState } from 'react';
import {
  PARSE_SCORE,
  RatingsOptions,
  RATING_OPTIONS,
  RATING_OPTIONS_BETTER,
} from '../../../../lib/rating';
import { Qualify } from '../../../custom/qualify';
import Button from '../../Button';
import { CardOption } from '../../Card/OptionCard';
import { TextArea } from '../../inputs/TextArea';

export const RateForm = () => {
  const [rate, setRate] = useState<number>(-1);
  const [actualOption, setActualOption] = useState<RatingsOptions>({
    id: '',
    value: '',
  });

  const [qualify, setQualify] = useState<boolean>(false);

  const changeRate = (newRate: number): void => {
    setRate(newRate);
  };

  const onChangeActualOption = (newOption: RatingsOptions): void => {
    setActualOption(newOption);
  };

  const renderForm = () => {
    switch (qualify) {
      case true:
        return (
          <>
            <div className="w-full md:w-[348px]">
              <h4 className="font-semibold text-center md:text-[28px] md:leading-[30px] ">
                ¡Gracias por calificar su experiencia!
              </h4>
            </div>
            <div className="mt-[16px] w-full md:w-[343px]">
              <Qualify rate={rate} changeRate={changeRate} isEditable={false} />
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="w-[348px] lg:w-[400px]">
              <h4 className="font-semibold text-center md:text-[28px] md:leading-[30px] ">
                ¿Cómo califica su <br /> experiencia solicitando su crédito de vivienda?
              </h4>
            </div>
            <div className="mt-[16px] w-full md:w-[343px]">
              <Qualify rate={rate} changeRate={changeRate} />
              <div className="w-full flex flex-col min-h-[400px]">
                <br />
                <p
                  tabIndex={0}
                  role="paragraph"
                  className="mt-3 text-lg leading-5 text-center font-semibold"
                >
                  {PARSE_SCORE[rate]?.qualify}
                </p>
                <br />
                <div className="w-full mb-6">
                  <p tabIndex={0} role="paragraph" className="text-left font-semibold">
                    {PARSE_SCORE[rate]?.subtitle}
                  </p>
                </div>
                <div className="w-full mb-6 align-bottom">
                  {rate >= 0 && (
                    <>
                      {rate < 3 ? (
                        <>
                          {RATING_OPTIONS?.map((option, index) => (
                            <CardOption
                              key={index}
                              option={option}
                              actualOption={actualOption}
                              onChangeActualOption={onChangeActualOption}
                            />
                          ))}
                        </>
                      ) : (
                        <>
                          {RATING_OPTIONS_BETTER?.map((option, index) => (
                            <CardOption
                              key={index}
                              option={option}
                              actualOption={actualOption}
                              onChangeActualOption={onChangeActualOption}
                            />
                          ))}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button disabled={rate < 0} onClick={() => setQualify(true)}>
              Enviar calificación
            </Button>
          </>
        );
    }
  };

  return (
    <div
      className={`${
        qualify ? 'py-11' : ''
      }  w-full flex flex-col items-center justify-center`}
    >
      {renderForm()}
    </div>
  );
};
