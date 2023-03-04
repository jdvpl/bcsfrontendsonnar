import useDownloadPdf from '../../hooks/useDownloadPdf';
import { convertToColombianPesos, downLoadPdf } from '../../utils';
import { getPDF } from '../../services';
import { iCreditData } from '../../interfaces/iCreditData';

jest.mock('../../services');
jest.mock('../../utils');

describe('useDownloadPdf', () => {
  let dataQuestions: any;
  let dataTU: any;
  let valuesMortgage: Partial<iCreditData>;
  let applicationResponse: any;

  beforeEach(() => {
    dataQuestions = {
      processId: 'testProcessId',
    };
    dataTU = {
      document_number: 'testDocumentNumber',
      document_type: 'testDocumentType',
    };
    valuesMortgage = {
      financeValue: '1000000',
      amortizationType: 'testAmortizationType',
      termFinance: 'testTermFinance',
    };
    applicationResponse = {
      finalOffer: {
        isViable: true,
        offer: {
          financeValue: 57763534,
          monthlyInstallment: 1399999.99,
          rate: '1.32% MV - 17.05% EA',
          termFinance: "testTermFinance",
          lifeInsurance: '',
          fireInsurance: '',
        },
      },
    };
  });

  describe('getPdf', () => {
    it('should call getPDF and download the PDF if there is no error', async () => {
      const pdf = 'testPdfContent';
      const name = 'testPdfName';
      const response = {
        error: false,
        response: {
          result: {
            doc: pdf,
            name: name,
          },
        },
      };
      (getPDF as jest.Mock).mockResolvedValue(response);
      await useDownloadPdf(dataQuestions, dataTU, valuesMortgage,applicationResponse).getPdf();
      expect(getPDF).toHaveBeenCalledWith({
        proccessId: dataQuestions.processId,
        documentNumber: dataTU.document_number,
        documentType: dataTU.document_type,
        maxAmount: convertToColombianPesos(valuesMortgage.financeValue),
        amortizationType: valuesMortgage.amortizationType,
        termFinance: valuesMortgage.termFinance?.toString(),
      });
      expect(downLoadPdf).toHaveBeenCalledWith(pdf, name);
    });

    it('should not call downLoadPdf if there is an error', async () => {
      const response = {
        error: true,
        response: null,
      };
      (getPDF as jest.Mock).mockResolvedValue(response);
      await useDownloadPdf(dataQuestions, dataTU, valuesMortgage,applicationResponse).getPdf();
      expect(getPDF).toHaveBeenCalledWith({
        proccessId: dataQuestions.processId,
        documentNumber: dataTU.document_number,
        documentType: dataTU.document_type,
        maxAmount: convertToColombianPesos(valuesMortgage.financeValue),
        amortizationType: valuesMortgage.amortizationType,
        termFinance: valuesMortgage.termFinance?.toString(),
      });
      expect(downLoadPdf).toHaveBeenCalled();
    });
  });
});
