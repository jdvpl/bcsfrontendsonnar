import React from 'react';
import { basePath } from '../../../next.config';
import { pdfjs, Document, Page } from 'react-pdf';
import { FileLoader } from '../ui/Loaders/FileLoader';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Politicas() {
  return (
    <div data-testid="terminos" className="w-full  relative h-[70vh]">
      <Document file={`${basePath}/files/ATDP.pdf`} loading={<FileLoader />}>
        <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
        <Page pageNumber={2} renderAnnotationLayer={false} renderTextLayer={false} />
        <Page pageNumber={3} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document>
    </div>
  );
}

export default Politicas;
