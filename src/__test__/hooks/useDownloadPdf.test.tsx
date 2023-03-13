import useDownloadPdf from '../../hooks/useDownloadPdf';
import { convertToColombianPesos, downLoadPdf } from '../../utils';
import { getPDF } from '../../services';
import { iCreditData } from '../../interfaces/iCreditData';

jest.mock('../../services');
jest.mock('../../utils');

const setCurrentRouting = jest.fn()
const router = {
  push: jest.fn()
};
describe('useDownloadPdf', () => {
  let dataQuestions: any;
  let dataTU: any;
  let valuesMortgage: Partial<iCreditData>;
  let applicationResponse: any;
  let basicDataUser: any;
  let dataPersonalBasic: any;
  dataQuestions = {
    processId: 'testProcessId',
  };
  dataPersonalBasic = {
    gender: "F",
    email: "juanda554242@gmail.com",
  }
  basicDataUser = {
    isClient: true,
    fullName: "Juan Daniel Suarez"
  }
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
      await useDownloadPdf(dataQuestions, dataTU, valuesMortgage, applicationResponse, setCurrentRouting, router, dataPersonalBasic, jest.fn(), basicDataUser, jest.fn()).getPdf();
      expect(getPDF).toHaveBeenCalledWith({
        proccessId: dataQuestions.processId,
        document_number: dataTU.document_number,
        document_type: dataTU.document_type,
        maxAmount: convertToColombianPesos(valuesMortgage.financeValue),
        amortizationType: valuesMortgage.amortizationType,
        termFinance: valuesMortgage.termFinance?.toString(),
        email: dataPersonalBasic.email,
        fullName: basicDataUser.fullName,
        gender: dataPersonalBasic.gender
      });
    });

    it('should not call downLoadPdf if there is an error', async () => {
      const response = {
        error: true,
        response: null,
      };
      (getPDF as jest.Mock).mockResolvedValue(response);
      await useDownloadPdf(dataQuestions, dataTU, valuesMortgage, applicationResponse, setCurrentRouting, jest.fn(), {}, jest.fn(), basicDataUser, jest.fn()).getPdf();
      expect(getPDF).toHaveBeenCalledWith({
        proccessId: dataQuestions.processId,
        document_number: dataTU.document_number,
        document_type: dataTU.document_type,
        maxAmount: convertToColombianPesos(valuesMortgage.financeValue),
        amortizationType: valuesMortgage.amortizationType,
        termFinance: valuesMortgage.termFinance?.toString(),
        email: dataPersonalBasic.email,
        fullName: basicDataUser.fullName,
        gender: dataPersonalBasic.gender
      });
      expect(downLoadPdf).not.toHaveBeenCalled();
    });
  });
});
