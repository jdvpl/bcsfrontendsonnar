import { useState } from 'react';
import { PARSE_SCORE, RatingsOptions, RATING_OPTIONS } from '../../../../lib/rating';
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
  const changeRate = (newRate: number): void => {
    setRate(newRate);
  };
  const onChangeActualOption = (newOption: RatingsOptions): void => {
    setActualOption(newOption);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[348px] lg:w-[500px]">
        <h4 className="font-semibold text-center md:text-[28px] md:leading-[30px] ">
          ¿Cómo califica su experiencia solicitando su credito?
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
                    {RATING_OPTIONS?.map((option) => (
                      <CardOption
                        key={option.id}
                        option={option}
                        actualOption={actualOption}
                        onChangeActualOption={onChangeActualOption}
                      />
                    ))}
                  </>
                ) : (
                  <div
                    className="text-left block items-center border-color-none bg-white ring-complementario-60 cursor-pointer w-full  font-normal rounded-md px-5 pt-[8px] 
                    pb-[12px] text-gris-100 mb-3 shadow-small-300 hover:outline-none
                     hover:border-primario-400 hover:ring-[2px] hover:ring-complementario-60"
                  >
                    <TextArea
                      maxLength={60}
                      description="Máximo 60 carácteres permitidos"
                      onChange={() => alert('cambio')}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Button disabled={rate < 0}>Continuar</Button>
    </div>
  );
};
