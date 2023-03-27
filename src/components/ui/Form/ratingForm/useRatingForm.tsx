import React, { useState } from 'react';
import {
  PARSE_SCORE,
  RatingsOptions,
  RATING_OPTIONS,
  RATING_OPTIONS_BETTER,
} from '../../../../lib/rating';
import Qualify from '../../../custom/qualify';
import Button from '../../Button';
import { CardOption } from '../../Card/OptionCard';
import Typography from '../../Typography';

export default function useRatingForm() {
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
            <div className="w-full sm:w-[343px] md:w-[348px]">
              <Typography variant='h4' typeFont='Bold' componentHTML='h4' className=" text-center md:text-[28px] md:leading-[30px] ">
                ¡Gracias por calificar su experiencia!
              </Typography>
            </div>
            <div className="mt-[16px] w-full md:w-[343px]">
              <Qualify rate={rate} changeRate={changeRate} isEditable={false} />
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="w-[368px] lg:w-[400px] mt-[20px] mb-[16px]">
              <Typography variant='h4' componentHTML='h4' typeFont='Bold' className=" text-center md:text-[28px] md:leading-[30px]">
                ¿Cómo califica su experiencia solicitando su crédito de vivienda?
              </Typography>
            </div>
            <div className="w-full md:w-[343px] mb-[24px]">
              <Qualify rate={rate} changeRate={changeRate} />
              <div className="w-full flex flex-col min-h-[400px]">
                <Typography
                  variant='bodyM2'
                  componentHTML='p'
                  typeFont='Bold'
                  tabIndex={0}
                  role="paragraph"
                  className="mt-3 mb-[12px] text-lg leading-5 text-center"
                >
                  {PARSE_SCORE[rate]?.qualify}
                </Typography>
                <div className="w-full mb-[24px]">
                  <Typography variant='bodyM3' componentHTML='p' typeFont='Bold' tabIndex={0} role="paragraph" className="text-left">
                    {PARSE_SCORE[rate]?.subtitle}
                  </Typography>
                </div>
                <div className="w-full align-bottom">
                  {rate >= 0 && (
                    <>
                      {rate < 3 ? (
                        <>
                          {RATING_OPTIONS?.map(
                            (option: RatingsOptions): JSX.Element => (
                              <div key={option?.id}>
                                <CardOption
                                  option={option}
                                  actualOption={actualOption}
                                  onChangeActualOption={onChangeActualOption}
                                />
                              </div>
                            )
                          )}
                        </>
                      ) : (
                        <>
                          {RATING_OPTIONS_BETTER?.map(
                            (option: RatingsOptions): JSX.Element => (
                              <div key={option?.id}>
                                <CardOption
                                  option={option}
                                  actualOption={actualOption}
                                  onChangeActualOption={onChangeActualOption}
                                />
                              </div>
                            )
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              isLanding="w-full md:w-[343px]"
              disabled={rate < 0}
              onClick={(): void => setQualify(true)}
            >
              Enviar calificación
            </Button>
          </>
        );
    }
  };

  return {
    qualify,
    renderForm,
    changeRate,
    onChangeActualOption,
    actualOption,
    rate,
    setQualify,
  };
}
