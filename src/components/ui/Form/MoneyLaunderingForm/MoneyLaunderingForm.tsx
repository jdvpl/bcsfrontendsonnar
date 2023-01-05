import React from 'react';
import Button from '../../Button';
import { ToolTipInfo } from '../../Tooltip';
import { InfoIco } from '../../Tooltip/info';
import Typography from '../../Typography';
import useMoneyLaundering from '../../../../hooks/useMoneyLaundering';

const MoneyLaunderingOptions = [
  {
    name: 'incomeSource',
    label:
      '¿El origen de sus recursos es legal y los obtiene de sus actividades económicas u ocupación?',
    toolTip: '',
  },
  {
    name: 'isPep',
    label: '¿Es una persona políticamente expuesta?',
    toolTip:
      'Políticamente expuesto es aquella persona que tiene o tuvo una función pública relevante.',
  },
  {
    name: 'legalRepresentation',
    label:
      '¿Es funcionario o familiar de un administrador o representante legal en el Banco Caja Social?',
    toolTip: '',
  },
];
export function MoneyLaunderingForm() {
  const { moneyLaundering, changeMoneyLaundering, onSubmit } = useMoneyLaundering();
  return (
    <div>
      <div>
        {MoneyLaunderingOptions?.map((option) => (
          <div className="cardShadow min-h-[96px] w-full mb-3 rounded-md px-6 py-3">
            <Typography
              variant="bodyS3"
              className="text-complementario-100 font-light mb-[12px] md:max-w-full max-w-[95%]"
            >
              {option?.label}
              {option?.toolTip !== '' ? (
                <ToolTipInfo
                  id="tax"
                  info=""
                  infohtml={<p className="text-white">{option?.toolTip}</p>}
                  icon={
                    <div
                      id="-group"
                      className="relative -bottom-[3px] w-5 h-4"
                    >
                      <InfoIco />
                    </div>
                  }
                />
              ) : null}
            </Typography>
            <div className="flex">
              <div
                className="flex cursor-pointer"
                onClick={() => changeMoneyLaundering(option?.name, true)}
              >
                <span className="font-semibold text-gris-100">Si</span>
                <div className="ml-[15px] w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                  {moneyLaundering[option?.name] ? (
                    <div className="w-[10px] h-[10px] bg-primario-400 rounded-full option-selected" />
                  ) : null}
                </div>
              </div>
              <div
                className="flex ml-[85px] cursor-pointer"
                onClick={() => changeMoneyLaundering(option?.name, false)}
              >
                <span className="font-semibold text-gris-100">No</span>
                <div className="ml-[15px] w-[25px] h-[25px] border border-complementario-100 flex justify-center items-center rounded-full">
                  {!moneyLaundering[option?.name] ? (
                    <div className="w-[10px] h-[10px] bg-primario-400 rounded-full" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button isLanding="w-full mt-[20px]" onClick={onSubmit} data-testid="btnSarlaftAc">
        Continuar
      </Button>
    </div>
  );
}
