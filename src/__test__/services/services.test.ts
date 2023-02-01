import { getQuestions, sendAuthorization } from "../../services";
import axios from 'axios';

jest.mock('axios');
describe('Servics', () => {
  it('should return the response on success', async () => {
    const response = { data: { result: 'success' } };
    (axios.post as jest.Mock).mockResolvedValue(response);
    const body = {
      commercial_terms: false,
      commercial_terms_label: "Autoriza que su información sea utilizada con fines comerciales",
      document_number: "1077870326",
      document_type: "CC",
      policy_and_terms: true,
      policy_and_terms_label: "Acepta tratamiento de datos personales y consulta en centrales de riesgo"
    }
    const result = await sendAuthorization(body);
    expect(result).toEqual({
      error: true,
      response: undefined,
    });
  });

  it('should return an error on failure', async () => {
    const error = new Error('Request failed');
    error.response = { data: { message: undefined } };
    (axios.post as jest.Mock).mockRejectedValue(error);

    const result = await sendAuthorization({});

    expect(result).toEqual({
      error: true,
      response: error.response.data.message,
    });
  });
  it('should return the response on success', async () => {
    const dataInfo = {};
    const response = { result: 'success', data: 'encrypted_data' };
    (axios.post as jest.Mock).mockResolvedValue({ data: response });

    const result = await getQuestions(dataInfo);

    expect(result).toEqual({
      error: true,
      response: undefined,
    });
  });
});
