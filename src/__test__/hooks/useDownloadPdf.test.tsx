import useDownloadPdf from '../../hooks/useDownloadPdf';
import { downLoadPdf } from '../../utils';
import { getPDF } from '../../services';
import { iCreditData } from '../../interfaces/iCreditData';


const valuesMortgage: Partial<iCreditData> = {
  financeValue: '140000000',
  amortizationType: 'Pesos',
  termFinance: '10'
}

jest.mock('../../utils', () => ({
  downLoadPdf: jest.fn()
}));

jest.mock('../../services', () => ({
  getPDF: jest.fn()
}));

describe('useDownloadPdf function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call getPDF with correct parameters', async () => {
    const dataQuestions = { processId: '123' };
    const dataTU = { document_number: '456', document_type: 'pdf' };
    (getPDF as jest.Mock).mockResolvedValueOnce({ error: false });

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU, valuesMortgage);
    await getPdf();

    expect(getPDF).toHaveBeenCalledWith({
      proccessId: dataQuestions.processId,
      documentNumber: dataTU.document_number,
      documentType: dataTU.document_type,
      amortizationType: valuesMortgage.amortizationType,
      maxAmount: valuesMortgage.financeValue,
      termFinance: valuesMortgage.termFinance
    });
  });

  it('should call downLoadPdf with correct parameters if response does not have error', async () => {
    const dataQuestions = { processId: '123' };
    const dataTU = { document_number: '456', document_type: 'pdf' };
    const name = "carta";
    (getPDF as jest.Mock).mockResolvedValueOnce({
      error: false,
      response: {
        result: {
          doc: 'simulated-pdf-data',
          name: name
        }
      }
    });

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU, valuesMortgage);
    await getPdf();

    expect(downLoadPdf).toHaveBeenCalledWith('simulated-pdf-data', name);
  });

  it('should not call downLoadPdf if response has error', async () => {
    const dataQuestions = { processId: '123' };
    const dataTU = { document_number: '456', document_type: 'pdf' };
    (getPDF as jest.Mock).mockResolvedValueOnce({ error: true });

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU, valuesMortgage);
    await getPdf();

    expect(downLoadPdf).not.toHaveBeenCalled();
  });
});