import { FC, useState } from 'react'
import Icons from '../icons'

interface propAlert {
  message: string,
}
const Alert: FC<propAlert> = ({ message }) => {
  return (
    <div className="relative px-4 py-2 mb-5 text-xs font-normal rounded text-[#2F6EAE] bg-[#EBF8FE]" role="alert">
      <span className="absolute top-0 bottom-0 left-0 flex items-center px-3">
        <Icons icon='bcs-information' color={'text-[#2F6EAE]'} />
      </span>
      <span className="block ml-6 mr-6 font-light text-center md:text-left text-[#7594A8]"> {message}</span>
    </div>

  )
}

export default Alert
