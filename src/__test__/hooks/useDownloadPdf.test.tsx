import useDownloadPdf from '../../hooks/useDownloadPdf';
import { downLoadPdf } from '../../utils';
import { getPDF } from '../../services';


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

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU);
    await getPdf();

    expect(getPDF).toHaveBeenCalledWith({
      proccessId: dataQuestions.processId,
      documentNumber: dataTU.document_number,
      documentType: dataTU.document_type
    });
  });

  it('should call downLoadPdf with correct parameters if response does not have error', async () => {
    const dataQuestions = { processId: '123' };
    const dataTU = { document_number: '456', document_type: 'pdf' };
    (getPDF as jest.Mock).mockResolvedValueOnce({
      error: false,
      response: {
        result: {
          doc: 'simulated-pdf-data'
        }
      }
    });

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU);
    await getPdf();

    expect(downLoadPdf).toHaveBeenCalledWith('simulated-pdf-data', dataTU);
  });

  it('should not call downLoadPdf if response has error', async () => {
    const dataQuestions = { processId: '123' };
    const dataTU = { document_number: '456', document_type: 'pdf' };
    (getPDF as jest.Mock).mockResolvedValueOnce({ error: true });

    const { getPdf } = useDownloadPdf(dataQuestions, dataTU);
    await getPdf();

    expect(downLoadPdf).not.toHaveBeenCalled();
  });
});