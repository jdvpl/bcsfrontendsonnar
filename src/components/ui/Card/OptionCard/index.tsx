import React from 'react'
import { basePath } from '../../../../../next.config';
import { RatingsOptions } from '../../../../lib/rating';
import { TextArea } from '../../inputs/TextArea';

export interface CardOptions {
  option: RatingsOptions;
  actualOption: RatingsOptions;
  onChangeActualOption: (option: RatingsOptions) => void;
}

export function CardOption({
  option,
  actualOption,
  onChangeActualOption,
}: CardOptions) {
  return <div onClick={() => onChangeActualOption(option)} className="w-full">
    <input type="radio" className="hidden" value={option?.value} tabIndex={0} role="btnCardOptionTest" />
    <label
      className={`text-left flex flex-col min-h-[52px] pl-[20px] py-[8px] mb-3 bg-white 
          cursor-pointer w-full rounded-md 
          border border-complementario-80 focus:shadow-none focus:border-primario-600
        focus:text-primario-600 hover:border-complementario-40 text-black  
           shadow-small-300 font-normal ${option?.id === actualOption?.id &&
        'border-[1px] text-primario-600 border-primario-400 active'
        }`}
    >
      <span className="hidden" />
      <pre />
      <div className="w-full flex text-[16px] items-center gap-3">
        <img
          src={`${basePath}/images/score/item${option?.id}.png`}
          alt="img-card"
          width={36}
          height={36}
        />
        {option?.value}
      </div>
      {actualOption?.id === '5' && option.id === '5' && (
        <div>
          <p className="font-semibold text-[16px] ln-18 text-left mt-[23px]">
            Por favor escriba su comentario
          </p>
          <TextArea maxLength={60} description="Máximo 60 carácteres permitidos" />
        </div>
      )}
    </label>
  </div>
}
