import { headersBack } from "../../services/HeaderBack";

test('headersBack should return the expected object', () => {
  expect(headersBack).toEqual({
    headers: {
      'x-mock-match-request-body': 'true',
      'app-name': 'PDIGITAL',
      'Content-Type': 'application/json',
    },
  });
});