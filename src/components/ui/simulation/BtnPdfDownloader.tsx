import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { basePath } from '../../../../next.config';
import PDFDocumentData from '../Pdf';

interface dataPdf {
  pdf: object;
}
const BtnPdfDownloader = ({ pdf }: dataPdf) => {
  return (
    <PDFDownloadLink
      document={<PDFDocumentData infoData={pdf} />}
      fileName={'Plan_de_pagos_simulador.pdf'}
      className="flex items-center my-3"
    >
      <a className="pr-[8px] pt-[5px] pb-[5px] text-primario-900 font-bold underline text-[14px]">
        Descargar simulación
      </a>
      <img className="hover:cursor-pointer" src={`${basePath}/images/Frame.svg`} />
    </PDFDownloadLink>
  );
};

export default BtnPdfDownloader;
