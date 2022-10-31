import Image from 'next/image';
import { basePath } from '../../../../../next.config';
import { TextArea } from '../../inputs/TextArea';

export const CardOption = ({ option, actualOption, onChangeActualOption, key }: any) => {
  return (
    <div key={key} className="w-full" onClick={() => onChangeActualOption(option)}>
      <input type="radio" className="hidden" value={option?.value} />
      <label
        className={`text-left flex flex-col min-h-[52px] px-[10px] py-[8px] mb-3 bg-white 
          cursor-pointer w-full rounded-md 
          border border-complementario-80 focus:shadow-none focus:border-primario-600
        focus:text-primario-600 hover:border-complementario-40 text-black  
           shadow-small-300 font-normal ${
             option?.id === actualOption?.id &&
             'text-primario-600 border-primario-600 shadow-primario-300/50 shadow-md'
           }`}
      >
        <span className="hidden" />
        <div className="w-full flex items-center gap-3">
          <Image
            src={`/images/score/item${option?.id}.png`}
            alt="img-card"
            width={36}
            height={36}
            quality={100}
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
  );
};
