import { headersKYC } from "../../services/HeadersKYC";

test('headersBack should return the expected object', () => {
  expect(headersKYC).toEqual({
    headers: {
      'x-mock-match-request-body': 'true',
      'app-name': 'PDIGITAL',
      'Content-Type': 'application/json',
    },
  });
});