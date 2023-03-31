import React from 'react';
import Typography from '../Typography';

export const FileLoader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-5">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primario-900"></div>
      <Typography variant="caption2" componentHTML="p" className="font-semibold">
        ... Cargando PDF
      </Typography>
    </div>
  );
};
