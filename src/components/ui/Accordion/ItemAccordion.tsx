import React from 'react'
import { childrenProps } from '../../../interfaces';

interface Props {
  id: string;
  active: boolean;
  title: string;
  setSelected?: (item: string | null) => void;
}

const ItemAccordion: React.FC<Props & childrenProps> = ({
  id,
  setSelected,
  active,
  title,
  children,
}) => (
  <div
    data-testid="accordion"
    className={`w-full bg-white  shadow-small-300   ${active ? 'border-[1px] border-complementario-70 rounded-md  ' : ' rounded-t-md '
      } `}
    itemScope
    itemProp="mainEntity"
    itemType="https://schema.org/Question"
  >
    <div
      id={`question-${id}`}
      onClick={() => setSelected?.(id)}
      onKeyDown={() => setSelected?.(id)}
      onFocus={() => setSelected?.(id)}
      role="button"
      tabIndex={0}
      className={`flex justify-between items-center cursor-pointer px-[20px] text-azul_gris-100 ${active
        ? 'bg-gris-80  rounded-t-md border-b-complementario-70 border-b-[1px]'
        : 'bg-white border-[1px] border-complementario-70  rounded-t-md'
        }`}
    >
      <h2
        id={`title-question-${id}`}
        className={` font-semibold text-base leading-[18px] text-[16px] ${active ? 'py-[21px]' : 'py-4'
          }  head-accordiom-color text-complementario-100`}
        itemProp="name"
      >
        {title}
      </h2>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-[24px] ml-[20px] ${active ? 'transform rotate-180' : ''}`}
          aria-label="ver respuesta"
        >
          <rect width="24" height="24" fill="transparent" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.2975 5.74402C23.4386 5.55668 23.7196 5.55668 23.8595 5.74402C24.0468 5.88515 24.0468 6.1187 23.8595 6.30605L12.2868 18.3009C12.1931 18.3471 12.0994 18.3946 12.0058 18.3946C11.9121 18.3946 11.7722 18.3471 11.7248 18.3009L0.105848 6.30605C-0.0352826 6.1187 -0.0352826 5.88515 0.105848 5.74402C0.293189 5.55668 0.526742 5.55668 0.714083 5.74402L12.0058 17.4566L23.2975 5.74402Z"
            fill="#0072C8"
          />
        </svg>
      </div>
    </div>
    <div
      className={
        active ? 'max-h-fit ' : 'max-h-0 overflow-hidden transition-all duration-300 '
      }
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
      aria-labelledby={`description-question-${id}`}
      role="group"
    >
      <div
        id={`description-question-${id}`}
        className="px-[16px] py-4  text-base leading-5 font-light text-complementario-100"
        itemProp="text"
        role="paragraph"
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  </div >
);

export default ItemAccordion