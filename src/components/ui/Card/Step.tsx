import React, { FC } from 'react'
import Icons from '../icons'
import Typography from '../Typography'

export interface stepProps {
  titleNumber: string;
  description: string;

}
const Step: FC<stepProps> = ({ titleNumber, description }) => {
  return (
    <div className='flex mt-6 gap-10 '>
      <Typography variant="h4" className=" text-primario-300 text-center mt-5 text-[22px]">
        {titleNumber}
      </Typography>
      <div className='bg-gris-90 border-b border-b-primario-100 lg:w-[424px] md:w-[264px]   pb-[20px] pt-[21px] pl-4 sm:w-[305px] w-[250px]'>
        <Typography
          variant="bodyS3"
          className="text-primario-900  md:text-[14px] lg:text-[16px] font-monserratLight text-left"
        >
          {description}
        </Typography>
      </div>
    </div>
  )
}

export default Step