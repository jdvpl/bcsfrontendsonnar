import { onSubmitStartProcess } from '../../../hooks/functions';
import { sendAuthorization } from '../../../services';
jest.mock('../../../services');

sendAuthorization
  ?.mockReturnValueOnce({
    error: true,
    response: {
      internal_code: 'VQ-01',
    },
  })
  .mockReturnValueOnce({
    error: false,
    response: {
      result: 'VQ',
    },
  })
  .mockReturnValueOnce({
    error: false,
    response: {
      result: null,
    },
  });

describe('', () => {
  test('onSubmitStartProcess', async () => {
    let formData = {
      document_number: 'string',
      document_type: 'string',
      policy_and_terms: true,
      commercial_terms: true,
    };
    let router: any;
    let setDataUser: any;

    router = {
      push: jest.fn(),
    };

    setDataUser = jest.fn();

    await onSubmitStartProcess(formData, setDataUser, router);
  });
  test('onSubmitStartProcess', async () => {
    let formData = {
      document_number: 'string',
      document_type: 'string',
      policy_and_terms: true,
      commercial_terms: true,
    };
    let router: any;
    let setDataUser: any;

    router = {
      push: jest.fn(),
    };

    setDataUser = jest.fn();

    await onSubmitStartProcess(formData, setDataUser, router);
  });
  test('onSubmitStartProcess', async () => {
    let formData = {
      document_number: 'string',
      document_type: 'string',
      policy_and_terms: true,
      commercial_terms: true,
    };
    let router: any;
    let setDataUser: any;

    router = {
      push: jest.fn(),
    };

    setDataUser = jest.fn();

    await onSubmitStartProcess(formData, setDataUser, router);
  });
});
