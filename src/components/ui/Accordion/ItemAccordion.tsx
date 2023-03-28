import React from 'react';
import { childrenProps } from '../../../interfaces';
import Icons from '../icons';
import Typography from '../Typography';

interface Props {
  id: string;
  active: boolean;
  title: string;
  setSelected: (item: string) => void;
}

const ItemAccordion: React.FC<Props & childrenProps> = ({
  id,
  setSelected,
  active,
  title,
  children,
}) => {
  const handleSelected = () => {
    const actualItem = active ? '' : id;
    setSelected(actualItem);
  };
  return (
    <div
      data-testid="accordion"
      className={`w-full bg-white shadow-small-300 ${
        active ? 'border-[1px] border-complementario-70 rounded-md' : 'rounded-t-md'
      } `}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <div
        id={`question-${id}`}
        onClick={handleSelected}
        onKeyDownCapture={(e) => {
          if (e.key === 'Enter') {
            handleSelected();
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={active}
        className={`flex justify-between items-center cursor-pointer px-[20px] text-azul_gris-100 ${active
          ? 'bg-gris-80 rounded-t-md border-b-complementario-70 border-b-[1px]'
          : 'bg-white border-[1px] border-complementario-70 rounded-t-md'
          }`}
      >
        <Typography
          variant="bodyM3"
          typeFont="Bold"
          componentHTML='h2'
          id={`title-question-${id}`}
          className={`font-monserratLight text-base leading-[18px] text-[16px] ${
            active ? 'py-[16px]' : 'py-4'
          }  head-accordiom-color text-complementario-100`}
          itemProp="name"
        >
          {title}
        </Typography>
        <div>
          {active ? (
            <Icons icon="bcs-icon-48" color="text-[#0072C8]" title="Cerrar" />
          ) : (
            <Icons icon="bcs-icon-50" color="text-[#0072C8]" title="Abrir" />
          )}
        </div>
      </div>
      <div
        className={
          active ? 'max-h-fit' : 'max-h-0 overflow-hidden transition-all duration-300'
        }
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        aria-labelledby={`description-question-${id}`}
        role="group"
      >
        <div
          id={`description-question-${id}`}
          className="px-[16px] py-4 text-complementario-100 lg:w-[892px]"
          itemProp="text"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ItemAccordion;
