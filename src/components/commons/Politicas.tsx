import React from 'react';
import { basePath } from '../../../next.config';
import { pdfjs, Document, Page } from 'react-pdf';
import { FileLoader } from '../ui/Loaders/FileLoader';
pdfjs.GlobalWorkerOptions.workerSrc = "../../vivienda/files/pdf-worker.js";

function Politicas() {
  return (
    <div data-testid="terminos" className="w-full relative h-[65vh] overflow-x-hidden overflow-y-auto pdf-viwer">
      <Document renderMode="svg" file={`${basePath}/files/ATDP.pdf`} loading={<FileLoader />} >
        <Page pageNumber={1}  renderAnnotationLayer={false} renderTextLayer={false} />
        <Page pageNumber={2}  renderAnnotationLayer={false}  renderTextLayer={false} />
        <Page pageNumber={3}  renderAnnotationLayer={false}  renderTextLayer={false} />
      </Document>
    </div>
  );
}

export default Politicas;
