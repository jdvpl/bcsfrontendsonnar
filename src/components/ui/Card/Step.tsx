import React, { FC } from 'react';
import Typography from '../Typography';

export interface stepProps {
  titleNumber: string;
  description: string;
}
const Step: FC<stepProps> = ({ titleNumber, description }) => {
  return (
    <li className="flex mt-6 gap-[20px] ">
      <Typography
        variant="h2"
        typeFont="Bold"
        componentHTML='h2'
        className=" text-primario-300 text-center mt-5 text-[22px]"
      >
        {titleNumber}
      </Typography>
      <div className="bg-gris-90 border-b border-b-primario-100 lg:w-[424px] md:w-[264px]   pb-[20px] pt-[21px] pl-4 sm:w-[305px] w-[250px] smd:w-[330px]">
        <Typography
          variant="bodyM3"
          typeFont='Light'
          componentHTML='p'
          className="text-complementario-100 text-left"
        >
          {description}
        </Typography>
      </div>
    </li>
  );
};

export default Step;
