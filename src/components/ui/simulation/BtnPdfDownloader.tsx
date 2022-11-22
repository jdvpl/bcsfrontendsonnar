import { PDFDownloadLink } from "@react-pdf/renderer";
import { basePath } from "../../../../next.config";
import PDFDocumentData from "../Pdf";

interface dataPdf {
  pdf: object
}
const BtnPdfDownloader = ({ pdf }: dataPdf) => {
  return (
    <PDFDownloadLink
      document={<PDFDocumentData infoData={pdf} />}
      fileName={'Plan_de_pagos_simulador.pdf'}
      className='flex'
    >
      <a className='pr-[8px] pt-[5px] pb-[5px]'>Descargar simulación</a>
      <img className="hover:cursor-pointer" src={`${basePath}/images/Frame.svg`} />
    </PDFDownloadLink>
  )
}

export default BtnPdfDownloader
