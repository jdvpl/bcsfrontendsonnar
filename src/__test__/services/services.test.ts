import { getQuestions, sendAuthorization } from "../../services";
import axios from 'axios';

jest.mock('axios');
describe('Servics', () => {
  it('should return the response on success', async () => {
    const response = { data: { result: 'success' } };
    (axios.post as jest.Mock).mockResolvedValue(response);

    const result = await sendAuthorization({});

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
