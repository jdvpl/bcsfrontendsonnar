import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';
import { useReviewApplication } from '../../components/ui/application/useReviewApplication';

describe('ConsultancyTutorial', () => {
  test('isOpen state change to False when call onHandleModal to first time ', async () => {
    const insuranceCheck = true;
    const { result } = renderHook(() => useReviewApplication(insuranceCheck));
    act(() => {
      result.current.handleInsurance();
    });
    expect(result.current.insurance).toBe(false);
  });

});
