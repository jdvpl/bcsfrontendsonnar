
import { convertToColombianPesos, downLoadPdf } from '../utils';
import { getPDF } from '../services';
import { iCreditData } from './../interfaces/iCreditData';

export default function useDownloadPdf(dataQuestions: any,
  dataTU: any, valuesMortgage: Partial<iCreditData>) {

  const getPdf = async () => {
    const response = await getPDF({
      proccessId: dataQuestions.processId,
      documentNumber: dataTU.document_number,
      documentType: dataTU.document_type,
      maxAmount: convertToColombianPesos(valuesMortgage.financeValue),
      amortizationType: valuesMortgage.amortizationType,
      termFinance: valuesMortgage.termFinance?.toString()
    })
    if (!response.error) {
      const pdf = response.response?.result?.doc;
      const name = response.response?.result?.name;
      downLoadPdf(pdf, name)
    }
  }
  return { getPdf }
}

