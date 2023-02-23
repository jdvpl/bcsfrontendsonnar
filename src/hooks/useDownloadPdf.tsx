
import { downLoadPdf } from '../utils';
import { getPDF } from '../services';
export default function useDownloadPdf(dataQuestions: any,
  dataTU: any) {

  const getPdf = async () => {
    const response = await getPDF({
      proccessId: dataQuestions.processId,
      documentNumber: dataTU.document_number,
      documentType: dataTU.document_type
    })
    if (!response.error) {
      const pdf = response.response?.result?.doc;
      downLoadPdf(pdf, dataTU)
    }
  }
  return { getPdf }
}

