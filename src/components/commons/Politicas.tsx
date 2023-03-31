import React from 'react';
import { basePath } from '../../../next.config';

function Politicas() {
  return (
    <div data-testid="terminos" className="relative overflow-hidden h-100vh ">
      <iframe
        className="w-full lg:h-[750px] md:h-[500px] h-[400px] pdf-iframe absolute -top-[60px]"
        src={`${basePath}/files/ATDP.pdf`}
      ></iframe>
    </div>
  );
}

export default Politicas;
