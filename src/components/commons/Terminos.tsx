import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NoSSRWrapper from '../../hooks/noSSR';

/* eslint-disable */
pdfjs.GlobalWorkerOptions.workerSrc = '/cuentamiga/docs/pdf-worker.js';

const Terminos = () => {
  const [file] = useState('/cuentamiga/docs/pruebaPdf.pdf');
  const [numPages, setNumPages] = useState(null || 0);
  const onDocumentLoadSuccess = ({ numPages: nextNumPages }: any) => {
    setNumPages(nextNumPages);
  };

  return (
    <div datatest-id="pdf">
      <NoSSRWrapper>
        <Document renderMode="svg" file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {/* eslint-disable-next-line */}
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              data-testid="pdf"
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </NoSSRWrapper>
    </div>
  );
};

export default Terminos;
/* eslint-disable */
