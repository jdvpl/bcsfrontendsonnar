import React from 'react';
import { ItemOne, ItemThree, ItemTwo } from '../icons/biometria/items';
import { childrenProps } from '../../interfaces';
import Typography from '../ui/Typography';

const CardImage: React.FC<childrenProps> = ({ children }) => (
  <div className="flex mr-6">{children}</div>
);

const Description: React.FC = () => (
  <div data-testid="descripcion-biometrica" className="">
    <Typography
      typeFont="Bold"
      variant="bodyM2"
      componentHTML="p"
      className=" text-primario-900 "
    >
      Tenga en cuenta estos consejos:&nbsp;
    </Typography>
    <div className="flex flex-col  mt-[26px] space-y-[24px] ">
      <div>
        <div className="flex">
          <CardImage>
            <ItemOne />
          </CardImage>
          <Typography
            variant="bodyM3"
            componentHTML="p"
            className=" text-primario-900  text-base leading-[18px] pr-6"
          >
            Tome la foto en un lugar con luz, preferiblemente luz natural evitando brillos
            y reflejos.
          </Typography>
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
            <line y1="0.75" x2="240" y2="0.75" stroke="#798C98" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex">
          <CardImage>
            <ItemTwo />
          </CardImage>
          <Typography
            variant="bodyM3"
            typeFont="Regular"
            componentHTML="p"
            className=" text-primario-900  text-base  pr-6"
          >
            Tome la foto con el celular en posición horizontal.
          </Typography>
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
            <line y1="0.75" x2="240" y2="0.75" stroke="#798C98" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex">
        <CardImage>
          <ItemThree />
        </CardImage>
        <Typography
          variant="bodyM3"
          componentHTML="p"
          className=" text-primario-900  text-base pr-6"
        >
          Asegúrese de que su cédula no tenga fallas o imperfecciones.
        </Typography>
      </div>
    </div>
  </div>
);

export default Description;
