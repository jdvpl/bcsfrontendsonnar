import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { basePath } from '../../../../next.config';
import PDFDocumentData from '../Pdf';
import { invokeEvent } from '../../../utils/index';

interface dataPdf {
  pdf: object;
}
function BtnPdfDownloader({ pdf }: dataPdf) {
  return (
    <PDFDownloadLink
      onClick={() => invokeEvent('download_simulator_result', 'action_funnel')}
      document={<PDFDocumentData infoData={pdf} />}
      fileName="Plan_de_pagos_simulador.pdf"
      className="flex items-center my-3"
    >
      <a className="pr-[8px] pt-[5px] pb-[5px] text-primario-900 text-[16px] font-montserratRegular font-medium ">
        Descargar simulación
      </a>
      <img
        className="hover:cursor-pointer"
        src={`${basePath}/images/Frame.svg`}
        alt="Descargar simulación"
        title="Descargar simulación"
      />
    </PDFDownloadLink>
  );
}

export default BtnPdfDownloader;
