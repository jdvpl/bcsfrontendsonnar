import { routes } from "../../routes";
import { onSubmitResponse } from "../../utils/functions";

const data = {
  document_type: 'CC',
  document_number: '018422010'
}
it('redirects to the correct route with error code VQ-02', async () => {
  // Arrange
  const router = { push: jest.fn() };
  const response = { error: true, response: { internal_code: 'VQ-02' } };
  const sendQuestions = jest.fn(() => Promise.resolve(response));

  // Act
  await onSubmitResponse(data, data, router, jest.fn(), jest.fn());

  // Assert
});