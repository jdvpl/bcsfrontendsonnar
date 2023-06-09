import React from 'react';
import Typography from '../ui/Typography';

function CommercialAuthorization() {
  return <div data-testid="comercialAuth" className="m-0 md:mt-0 sm:mt-[29px] text-left">
    <Typography variant='bodyM3' componentHTML='ul' className="list-disc pl-[20px] md:pl-[40px] sm:text-[16px] md:text-[18px]">
      <li>
        <p>
          <span className="font-bold">
            Ofrecimiento de bienes, productos y servicios
          </span>
          , mediante campañas comerciales o convenios de marca compartida.
        </p>
      </li>
      <li className="mt-4">
        <p>
          <span className="font-bold">Hacer estudios</span> sobre sus gustos, hábitos e
          intereses.
        </p>
      </li>
      <li className="mt-4">
        <p>
          Que terceros le&nbsp;
          <span className="font-bold">
            ofrezcan bienes, productos o servicios financieros complementarios&nbsp;
          </span>
          a los adquiridos con el Banco.
        </p>
      </li>
    </Typography>
  </div>
}

export default CommercialAuthorization;
