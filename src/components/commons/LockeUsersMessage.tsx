import React from 'react'

const LockeUsersMessage = ({ lockedUser }) => {
  return lockedUser ? <div className='mt-2'>
    <a href="https://www.bancocajasocial.com/portalserver/bcs-public/olvido-su-contrasena" target="_blank" className='hover:underline text-primario-200 text-[14px] font-normal leading-[18px] font-montserratMedium'>¿Olvido su contraseña?</a>
    <ul className='mt-9 text-[14px] font-monserratLight ast'>
      <li className='mt-[33px]'>
        Si usted tiene o ha tenido productos con el Banco Caja Social, ya cuenta con una contraseña <span className="pl-[21px]">para acceder el canal digital</span>
      </li>
      <li className='mt-3'>
        No ingresar claves de tarjetas
      </li>
    </ul>
  </div>
    : null
}

export default LockeUsersMessage
