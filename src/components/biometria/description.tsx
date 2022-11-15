import React from 'react';
import { ItemOne, ItemThree, ItemTwo } from '../icons/biometria/items';
import { childrenProps } from '../../interfaces';

const CardImage: React.FC <childrenProps>= ({ children }) => <div className="flex mr-6">{children}</div>;

export const Description: React.FC = () => (
  <div data-testid="descripcion-biometrica" className="">
    <p
      tabIndex={0}
      role="paragraph"
      className="font-semibold text-lg leading-5 text-primario-900 "
    >
      Tenga en cuenta estos consejos:&nbsp;
    </p>
    <div className="flex flex-col  mt-[26px] space-y-[24px] ">
      <div>
        <div className="flex">
          <CardImage>
            <ItemOne />
          </CardImage>
          <p
            tabIndex={0}
            role="paragraph"
            className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
          >
            Tome la foto en un lugar con luz, preferiblemente luz natural evitando brillos
            y reflejos.
          </p>
        </div>
        <div className="flex justify-end pr-4 mt-2">
          <svg
            className="flex-end "
            width="240"
            height="1"
            viewBox="0 0 240 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.75" x2="240" y2="0.75" stroke="#798C98" stroke-width="0.5" />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex">
          <CardImage>
            <ItemTwo />
          </CardImage>
          <p
            tabIndex={0}
            role="paragraph"
            className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
          >
            Tome la foto con el celular en posición horizontal.
          </p>
        </div>
        <div className="flex justify-end pr-4 mt-2">
          <svg
            className="flex-end "
            width="240"
            height="1"
            viewBox="0 0 240 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.75" x2="240" y2="0.75" stroke="#798C98" stroke-width="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex">
        <CardImage>
          <ItemThree />
        </CardImage>
        <p
          tabIndex={0}
          role="paragraph"
          className=" text-primario-900 font-normal text-base leading-[18px] pr-6"
        >
          Asegúrese de que su cédula no tenga fallas o imperfecciones.
        </p>
      </div>
    </div>
  </div>
);
